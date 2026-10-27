/* ==========================================================================
   TRAVEL MARK — CINEMATIC HERO & 5 FEATURED HORIZONTAL CARDS
   ========================================================================== */

import { appState } from '../state.js';

export function initHero() {
  initHeroBackdropSlider();
  initHeroSearchAutocomplete();
  initFeaturedHorizontalCards();
}

function initHeroBackdropSlider() {
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.hero-dot');
  if (slides.length === 0) return;

  let currentSlide = 0;
  const slideInterval = 6500;

  function setSlide(index) {
    slides.forEach((s, i) => s.classList.toggle('active', i === index));
    dots.forEach((d, i) => d.classList.toggle('active', i === index));
    currentSlide = index;
  }

  dots.forEach((dot, idx) => {
    dot.addEventListener('click', () => setSlide(idx));
  });

  setInterval(() => {
    const next = (currentSlide + 1) % slides.length;
    setSlide(next);
  }, slideInterval);
}

function initHeroSearchAutocomplete() {
  const searchInput = document.getElementById('heroSearchInput');
  const searchClearBtn = document.getElementById('heroSearchClear');
  const searchForm = document.getElementById('heroSearchForm');
  const dropdown = document.getElementById('heroAutocompleteDropdown');

  if (!searchInput || !dropdown) return;

  searchInput.addEventListener('input', () => {
    const query = searchInput.value.trim().toLowerCase();
    searchClearBtn.style.display = query ? 'flex' : 'none';

    if (query.length < 2) {
      dropdown.classList.remove('open');
      dropdown.innerHTML = '';
      return;
    }

    // Search across destinations, foods, sacred sites, and amusements
    const matchedDestinations = appState.destinations.filter(d => 
      d.name.toLowerCase().includes(query) ||
      d.city.toLowerCase().includes(query) ||
      d.state.toLowerCase().includes(query) ||
      d.category.toLowerCase().includes(query) ||
      d.tags.some(t => t.toLowerCase().includes(query))
    ).slice(0, 4);

    const matchedFoods = appState.foods.filter(f =>
      f.name.toLowerCase().includes(query) ||
      f.city.toLowerCase().includes(query) ||
      f.state.toLowerCase().includes(query)
    ).slice(0, 3);

    const matchedSacred = appState.sacred.filter(s =>
      s.name.toLowerCase().includes(query) ||
      s.tradition.toLowerCase().includes(query) ||
      s.city.toLowerCase().includes(query)
    ).slice(0, 3);

    if (matchedDestinations.length === 0 && matchedFoods.length === 0 && matchedSacred.length === 0) {
      dropdown.innerHTML = `
        <div style="padding: 16px; text-align: center; color: var(--text-muted); font-size: 0.875rem;">
          No direct matches found for "${query}". Press Enter to search all criteria.
        </div>
      `;
      dropdown.classList.add('open');
      return;
    }

    let html = '';

    if (matchedDestinations.length > 0) {
      html += `<div class="autocomplete-group-title">Destinations & Landmarks</div>`;
      matchedDestinations.forEach(d => {
        html += `
          <div class="autocomplete-item" data-action="dest" data-id="${d.id}">
            <i data-lucide="map-pin" style="width: 14px; height: 14px; color: var(--color-gold); flex-shrink: 0;"></i>
            <span style="font-weight: 600; color: var(--text-primary); font-size: 0.875rem;">${d.name}</span>
            <span style="font-size: 0.75rem; color: var(--text-secondary); margin-left: 4px;">(${d.state})</span>
            <span class="autocomplete-badge">${d.category.split(' ')[0]}</span>
          </div>
        `;
      });
    }

    if (matchedFoods.length > 0) {
      html += `<div class="autocomplete-group-title">Authentic Food & Flavours</div>`;
      matchedFoods.forEach(f => {
        html += `
          <div class="autocomplete-item" data-action="food" data-name="${f.name}">
            <i data-lucide="utensils" style="width: 14px; height: 14px; color: #E8B85C; flex-shrink: 0;"></i>
            <span style="font-weight: 600; color: var(--text-primary); font-size: 0.875rem;">${f.name}</span>
            <span style="font-size: 0.75rem; color: var(--text-secondary); margin-left: 4px;">• ${f.city}</span>
            <span class="autocomplete-badge">Cuisine</span>
          </div>
        `;
      });
    }

    if (matchedSacred.length > 0) {
      html += `<div class="autocomplete-group-title">Sacred & Spiritual Places</div>`;
      matchedSacred.forEach(s => {
        html += `
          <div class="autocomplete-item" data-action="sacred" data-id="${s.id}">
            <i data-lucide="sparkles" style="width: 14px; height: 14px; color: #E8B85C; flex-shrink: 0;"></i>
            <span style="font-weight: 600; color: var(--text-primary); font-size: 0.875rem;">${s.name}</span>
            <span style="font-size: 0.75rem; color: var(--text-secondary); margin-left: 4px;">• ${s.tradition}</span>
            <span class="autocomplete-badge">Spiritual</span>
          </div>
        `;
      });
    }

    dropdown.innerHTML = html;
    dropdown.classList.add('open');
    if (window.lucide) window.lucide.createIcons();

    // Attach click events on suggestions
    dropdown.querySelectorAll('.autocomplete-item').forEach(item => {
      item.addEventListener('click', () => {
        const action = item.getAttribute('data-action');
        const id = item.getAttribute('data-id');
        const name = item.getAttribute('data-name');
        dropdown.classList.remove('open');

        if (action === 'dest') {
          window.openDestinationModal(id);
        } else if (action === 'food') {
          window.navigateToPage('foods');
        } else if (action === 'sacred') {
          window.navigateToPage('sacred');
        }
      });
    });
  });

  searchClearBtn.addEventListener('click', () => {
    searchInput.value = '';
    searchClearBtn.style.display = 'none';
    dropdown.classList.remove('open');
    dropdown.innerHTML = '';
    searchInput.focus();
  });

  searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const query = searchInput.value.trim();
    dropdown.classList.remove('open');
    if (query) {
      appState.exploreFilters.searchQuery = query;
      window.navigateToPage('explore');
    }
  });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.hero-search-wrapper')) {
      dropdown.classList.remove('open');
    }
  });
}

function initFeaturedHorizontalCards() {
  document.querySelectorAll('.featured-pill-card').forEach(card => {
    card.addEventListener('click', () => {
      const target = card.getAttribute('data-target');
      if (target === 'states') {
        appState.exploreFilters.searchQuery = '';
        appState.exploreFilters.experienceType = 'all';
        window.navigateToPage('explore');
      } else if (target === 'foods') {
        window.navigateToPage('foods');
      } else if (target === 'sacred') {
        window.navigateToPage('sacred');
      } else if (target === 'adventure') {
        window.navigateToPage('amusements');
      } else if (target === 'hidden-gems') {
        appState.exploreFilters.experienceType = 'Hidden gems';
        window.navigateToPage('explore');
      }
    });
  });
}
