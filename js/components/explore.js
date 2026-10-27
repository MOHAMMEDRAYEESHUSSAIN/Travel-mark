/* ==========================================================================
   TRAVEL MARK — EXPLORE INDIA MULTI-CRITERIA FILTERS & SYNC MAP
   ========================================================================== */

import { appState } from '../state.js';
import { createDestinationCardHTML } from './destinations.js';

let mapInstance = null;
let mapMarkers = [];

export function initExplorePage() {
  initFilterControls();
  renderExploreResults();
  initExploreMap();
}

function initFilterControls() {
  const searchInput = document.getElementById('exploreSearchInput');
  const sortSelect = document.getElementById('exploreSortSelect');
  const filterTabs = document.querySelectorAll('.filter-tab-btn');
  const clearAllBtn = document.getElementById('clearAllFiltersBtn');
  const viewToggleBtns = document.querySelectorAll('.view-toggle-btn');

  searchInput?.addEventListener('input', () => {
    appState.exploreFilters.searchQuery = searchInput.value.trim().toLowerCase();
    renderExploreResults();
  });

  sortSelect?.addEventListener('change', () => {
    appState.exploreFilters.sortBy = sortSelect.value;
    renderExploreResults();
  });

  clearAllBtn?.addEventListener('click', () => {
    appState.exploreFilters = {
      searchQuery: '',
      experienceType: 'all',
      tradition: 'all',
      dietary: 'all',
      budget: 'all',
      state: 'all',
      sortBy: 'rating-desc'
    };
    if (searchInput) searchInput.value = '';
    if (sortSelect) sortSelect.value = 'rating-desc';
    updateActiveFilterUI();
    renderExploreResults();
  });

  // Category Tab Selection
  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      filterTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const filterType = tab.getAttribute('data-filter-type');
      showFilterOptionChips(filterType);
    });
  });

  // View toggle: Grid vs Map
  viewToggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      viewToggleBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const view = btn.getAttribute('data-view');
      const gridView = document.getElementById('exploreDestinationsGrid');
      const mapView = document.getElementById('exploreMapContainer');

      if (view === 'map') {
        if (gridView) gridView.style.display = 'none';
        if (mapView) {
          mapView.style.display = 'block';
          setTimeout(() => {
            if (mapInstance) mapInstance.invalidateSize();
          }, 200);
        }
      } else {
        if (gridView) gridView.style.display = 'grid';
        if (mapView) mapView.style.display = 'none';
      }
    });
  });

  // Default to Experience Types
  showFilterOptionChips('experience');
}

function showFilterOptionChips(filterType) {
  const container = document.getElementById('filterChipsContainer');
  if (!container) return;

  let options = [];
  if (filterType === 'experience') {
    options = [
      "All Experiences", "Historical monuments", "Forts and palaces", "Beaches and islands",
      "Mountains and hill stations", "Waterfalls and lakes", "Forests and wildlife sanctuaries",
      "National parks", "Hidden gems", "Romantic destinations", "Budget-friendly"
    ];
  } else if (filterType === 'religious') {
    options = [
      "All Traditions", "Hinduism", "Islam", "Christianity", "Buddhism", "Sikhism", "Jainism"
    ];
  } else if (filterType === 'food') {
    options = [
      "All Foods", "Famous regional dishes", "Street food", "Vegetarian", "Vegan options", "Halal", "Sweets & desserts"
    ];
  } else if (filterType === 'budget') {
    options = ["All Budgets", "Budget-friendly", "Mid-range", "Luxury"];
  } else if (filterType === 'region') {
    options = ["All Regions", "North India", "South India", "East India", "West India", "North-East India", "Himalayas"];
  }

  container.innerHTML = options.map(opt => {
    const isAll = opt.startsWith("All");
    const active = isAll 
      ? (appState.exploreFilters.experienceType === 'all' && filterType === 'experience')
      : (appState.exploreFilters.experienceType === opt || appState.exploreFilters.tradition === opt || appState.exploreFilters.budget === opt);

    return `
      <button class="filter-chip-option ${active ? 'active' : ''}" data-type="${filterType}" data-val="${isAll ? 'all' : opt}">
        ${opt}
      </button>
    `;
  }).join('');

  container.querySelectorAll('.filter-chip-option').forEach(chip => {
    chip.addEventListener('click', () => {
      const type = chip.getAttribute('data-type');
      const val = chip.getAttribute('data-val');

      if (type === 'experience') appState.exploreFilters.experienceType = val;
      if (type === 'religious') appState.exploreFilters.tradition = val;
      if (type === 'budget') appState.exploreFilters.budget = val;
      if (type === 'region') appState.exploreFilters.region = val;

      container.querySelectorAll('.filter-chip-option').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');

      updateActiveFilterUI();
      renderExploreResults();
    });
  });
}

function updateActiveFilterUI() {
  const activeChipsContainer = document.getElementById('activeFilterPills');
  if (!activeChipsContainer) return;

  const pills = [];
  const f = appState.exploreFilters;

  if (f.searchQuery) pills.push({ label: `Query: ${f.searchQuery}`, key: 'searchQuery' });
  if (f.experienceType && f.experienceType !== 'all') pills.push({ label: f.experienceType, key: 'experienceType' });
  if (f.tradition && f.tradition !== 'all') pills.push({ label: f.tradition, key: 'tradition' });
  if (f.budget && f.budget !== 'all') pills.push({ label: f.budget, key: 'budget' });
  if (f.region && f.region !== 'all') pills.push({ label: f.region, key: 'region' });

  activeChipsContainer.innerHTML = pills.map(p => `
    <span class="active-filter-pill">
      ${p.label}
      <button onclick="window.removeFilter('${p.key}')" aria-label="Remove filter">
        <i data-lucide="x" style="width: 12px; height: 12px;"></i>
      </button>
    </span>
  `).join('');

  if (window.lucide) window.lucide.createIcons();
}

window.removeFilter = function(key) {
  if (key === 'searchQuery') {
    appState.exploreFilters.searchQuery = '';
    const input = document.getElementById('exploreSearchInput');
    if (input) input.value = '';
  } else {
    appState.exploreFilters[key] = 'all';
  }
  updateActiveFilterUI();
  renderExploreResults();
};

export function renderExploreResults() {
  const grid = document.getElementById('exploreDestinationsGrid');
  const countEl = document.getElementById('resultsCountNumber');
  if (!grid) return;

  let filtered = [...appState.destinations];
  const f = appState.exploreFilters;

  // Search filter
  if (f.searchQuery) {
    const q = f.searchQuery.toLowerCase();
    filtered = filtered.filter(d =>
      d.name.toLowerCase().includes(q) ||
      d.city.toLowerCase().includes(q) ||
      d.state.toLowerCase().includes(q) ||
      d.overview.toLowerCase().includes(q) ||
      d.tags.some(t => t.toLowerCase().includes(q))
    );
  }

  // Experience Type filter
  if (f.experienceType && f.experienceType !== 'all') {
    filtered = filtered.filter(d => 
      d.category.toLowerCase().includes(f.experienceType.toLowerCase()) ||
      d.tags.some(t => t.toLowerCase().includes(f.experienceType.toLowerCase()))
    );
  }

  // Budget filter
  if (f.budget && f.budget !== 'all') {
    filtered = filtered.filter(d => d.budgetRange === f.budget);
  }

  // Region filter
  if (f.region && f.region !== 'all') {
    filtered = filtered.filter(d => d.region && d.region.includes(f.region));
  }

  // Sorting
  if (f.sortBy === 'rating-desc') {
    filtered.sort((a, b) => b.rating - a.rating);
  } else if (f.sortBy === 'reviews-desc') {
    filtered.sort((a, b) => b.reviewsCount - a.reviewsCount);
  } else if (f.sortBy === 'name-asc') {
    filtered.sort((a, b) => a.name.localeCompare(b.name));
  }

  if (countEl) countEl.textContent = filtered.length;

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; padding: 48px; text-align: center; background: var(--color-midnight-elevated); border-radius: var(--radius-lg); border: 1px dashed var(--border-medium);">
        <i data-lucide="search-x" style="width: 48px; height: 48px; color: var(--color-gold); margin-bottom: 12px;"></i>
        <h3 style="font-size: 1.25rem; color: var(--text-primary); margin-bottom: 6px;">No Destinations Found</h3>
        <p style="color: var(--text-secondary); max-width: 450px; margin: 0 auto 16px auto;">Try adjusting your search terms or clearing some active filters to see more results across India.</p>
        <button class="btn btn-primary" onclick="document.getElementById('clearAllFiltersBtn').click()">Clear All Filters</button>
      </div>
    `;
  } else {
    grid.innerHTML = filtered.map(d => createDestinationCardHTML(d)).join('');
  }

  if (window.lucide) window.lucide.createIcons();
  updateMapMarkers(filtered);
}

function initExploreMap() {
  const mapEl = document.getElementById('exploreLeafletMap');
  if (!mapEl || !window.L || mapInstance) return;

  // Initialize Leaflet Map centered on India [20.5937, 78.9629]
  mapInstance = L.map(mapEl, {
    center: [21.5, 78.9],
    zoom: 5,
    minZoom: 4,
    maxZoom: 14
  });

  // Dark/editorial styled map tiles
  L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://carto.com/">CARTO</a> | &copy; OpenStreetMap',
    subdomains: 'abcd',
    maxZoom: 19
  }).addTo(mapInstance);

  updateMapMarkers(appState.destinations);
}

function updateMapMarkers(destinations) {
  if (!mapInstance || !window.L) return;

  // Clear existing markers
  mapMarkers.forEach(m => mapInstance.removeLayer(m));
  mapMarkers = [];

  const customIcon = L.divIcon({
    className: 'custom-map-pin',
    html: `
      <div style="background: #171411; border: 2px solid #E8B85C; border-radius: 50%; width: 28px; height: 28px; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 12px rgba(0,0,0,0.6); color: #E8B85C;">
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
      </div>
    `,
    iconSize: [28, 28],
    iconAnchor: [14, 28]
  });

  destinations.forEach(d => {
    if (d.coordinates && d.coordinates.length === 2) {
      const marker = L.marker(d.coordinates, { icon: customIcon }).addTo(mapInstance);
      marker.bindPopup(`
        <div style="padding: 6px; font-family: 'Inter', sans-serif; min-width: 180px;">
          <img src="${d.coverImage}" style="width: 100%; height: 90px; object-fit: cover; border-radius: 6px; margin-bottom: 6px;" alt="${d.name}" />
          <div style="font-weight: 700; font-size: 0.875rem; color: #171411;">${d.name}</div>
          <div style="font-size: 0.75rem; color: #666; margin-bottom: 6px;">${d.city}, ${d.state}</div>
          <button onclick="window.openDestinationModal('${d.id}')" style="width: 100%; background: #171411; color: #E8B85C; border: none; padding: 6px; border-radius: 4px; font-size: 0.75rem; font-weight: 700; cursor: pointer;">
            View Experience Details
          </button>
        </div>
      `);
      mapMarkers.push(marker);
    }
  });
}
