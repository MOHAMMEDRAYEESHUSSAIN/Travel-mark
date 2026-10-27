/* ==========================================================================
   TRAVEL MARK — DEDICATED EXPLORER PAGES & SMART RECOMMENDATIONS ADVISOR
   Covers Sacred Sites, Food & Flavours, Amusements, Smart Advisor,
   About Us, Guidelines, Terms, and Privacy.
   ========================================================================== */

import { appState } from '../state.js';

export function initSpecialPages() {
  renderFoodsPage();
  renderSacredPage();
  renderAmusementsPage();
  initSmartAdvisor();
}

/* ==========================================================================
   FOOD & CUISINE HUB
   ========================================================================== */

export function renderFoodsPage() {
  const container = document.getElementById('foodsListGrid');
  if (!container) return;

  container.innerHTML = appState.foods.map(f => `
    <article class="destination-card">
      <div class="card-media-wrapper" style="height: 220px;">
        <img class="card-media-img" src="${f.image}" alt="${f.name}" loading="lazy" />
        <div class="card-media-gradient"></div>
        <div class="card-floating-badges">
          <span class="card-category-badge">${f.category}</span>
          <span class="card-category-badge" style="background: rgba(232,184,92,0.2); border-color: var(--border-gold); color: var(--color-gold);">${f.priceRange}</span>
        </div>
      </div>
      <div class="card-content">
        <div class="card-location-meta">
          <i data-lucide="map-pin" style="width: 13px; height: 13px;"></i>
          <span>${f.city}, ${f.state}</span>
        </div>
        <h3 class="card-title">${f.name}</h3>
        <p class="card-snippet">${f.description}</p>
        <div style="background: rgba(255,255,255,0.03); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 8px 12px; margin-bottom: 12px; font-size: 0.8125rem;">
          <strong style="color: var(--color-gold);">Iconic Place:</strong>
          <span style="color: var(--text-primary); margin-left: 4px;">${f.iconicPlace}</span>
        </div>
        <div class="card-footer">
          <div style="display: flex; gap: 6px; flex-wrap: wrap;">
            ${(f.dietary || []).map(d => `<span class="card-tag" style="color: var(--color-olive-light);">${d}</span>`).join('')}
          </div>
          <button class="btn btn-secondary btn-sm" onclick="window.exploreDestinationsForFood('${f.city}')">
            Explore ${f.city}
          </button>
        </div>
      </div>
    </article>
  `).join('');

  if (window.lucide) window.lucide.createIcons();
}

window.exploreDestinationsForFood = function(city) {
  appState.exploreFilters.searchQuery = city;
  window.navigateToPage('explore');
};

/* ==========================================================================
   RELIGIOUS & SPIRITUAL TOURISM HUB
   ========================================================================== */

export function renderSacredPage() {
  const container = document.getElementById('sacredListGrid');
  if (!container) return;

  container.innerHTML = appState.sacred.map(s => `
    <article class="destination-card">
      <div class="card-media-wrapper" style="height: 240px;">
        <img class="card-media-img" src="${s.image}" alt="${s.name}" loading="lazy" />
        <div class="card-media-gradient"></div>
        <div class="card-floating-badges">
          <span class="card-category-badge">${s.tradition}</span>
          <span class="card-category-badge" style="background: rgba(232,184,92,0.2); border-color: var(--border-gold); color: var(--color-gold);">${s.subCategory}</span>
        </div>
      </div>
      <div class="card-content">
        <div class="card-location-meta">
          <i data-lucide="map-pin" style="width: 13px; height: 13px;"></i>
          <span>${s.city}, ${s.state}</span>
        </div>
        <h3 class="card-title">${s.name}</h3>
        <p class="card-snippet">${s.description}</p>
        
        <div style="background: rgba(232,184,92,0.06); border-left: 3px solid var(--color-gold); padding: 8px 12px; margin-bottom: 12px; font-size: 0.75rem; border-radius: 4px;">
          <div style="color: var(--text-primary); font-weight: 700; margin-bottom: 2px;">Etiquette & Dress Code:</div>
          <div style="color: var(--text-secondary);">${s.dressCode} • ${s.etiquette}</div>
        </div>

        <div class="card-footer">
          <span style="font-size: 0.75rem; color: var(--text-muted);">${s.visitingHours.split('(')[0]}</span>
          <button class="btn btn-secondary btn-sm" onclick="window.exploreDestinationsForFood('${s.state}')">
            Explore Region
          </button>
        </div>
      </div>
    </article>
  `).join('');

  if (window.lucide) window.lucide.createIcons();
}

/* ==========================================================================
   AMUSEMENT & ADVENTURE PARKS HUB
   ========================================================================== */

export function renderAmusementsPage() {
  const container = document.getElementById('amusementsListGrid');
  if (!container) return;

  container.innerHTML = appState.amusements.map(a => `
    <article class="destination-card">
      <div class="card-media-wrapper" style="height: 220px;">
        <img class="card-media-img" src="${a.image}" alt="${a.name}" loading="lazy" />
        <div class="card-media-gradient"></div>
        <div class="card-floating-badges">
          <span class="card-category-badge">${a.category}</span>
          <span class="card-category-badge" style="background: rgba(232,184,92,0.2); border-color: var(--border-gold); color: var(--color-gold);">${a.priceRange}</span>
        </div>
      </div>
      <div class="card-content">
        <div class="card-location-meta">
          <i data-lucide="map-pin" style="width: 13px; height: 13px;"></i>
          <span>${a.city}, ${a.state}</span>
        </div>
        <h3 class="card-title">${a.name}</h3>
        <p class="card-snippet">${a.description}</p>

        <div style="margin-bottom: 12px; font-size: 0.8125rem;">
          <strong style="color: var(--color-gold);">Key Highlights:</strong>
          <div style="color: var(--text-secondary); margin-top: 2px;">${(a.topRides || []).join(' • ')}</div>
        </div>

        <div class="card-footer">
          <span style="display: flex; align-items: center; gap: 4px; color: var(--color-gold); font-weight: 700; font-size: 0.8125rem;">
            <i data-lucide="star" style="width: 14px; height: 14px; fill: var(--color-gold);"></i> ${a.rating} (${a.reviewsCount})
          </span>
          <button class="btn btn-secondary btn-sm" onclick="window.exploreDestinationsForFood('${a.city}')">
            Plan Visit
          </button>
        </div>
      </div>
    </article>
  `).join('');

  if (window.lucide) window.lucide.createIcons();
}

/* ==========================================================================
   SMART ADVISOR ("WHAT SHOULD I VISIT?")
   ========================================================================== */

function initSmartAdvisor() {
  const form = document.getElementById('smartAdvisorForm');
  const resultsContainer = document.getElementById('smartAdvisorResults');

  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    const interest = document.getElementById('advisorInterestSelect')?.value || 'history';
    const duration = document.getElementById('advisorDurationSelect')?.value || 'weekend';
    const companions = document.getElementById('advisorCompanionSelect')?.value || 'family';
    const style = document.getElementById('advisorStyleSelect')?.value || 'famous';

    // Rule-based recommendation engine with transparent justification
    const recommendations = [];

    if (interest === 'history') {
      recommendations.push({
        dest: appState.destinations.find(d => d.id === 'jaipur-rajasthan') || appState.destinations[0],
        reason: "You enjoy history: Explore Rajasthan's hill forts, UNESCO observatories, and royal palace complexes."
      });
      recommendations.push({
        dest: appState.destinations.find(d => d.id === 'taj-mahal-agra') || appState.destinations[1],
        reason: "Iconic Mughal architectural heritage and world-wonder pietra dura craftsmanship."
      });
    } else if (interest === 'nature') {
      recommendations.push({
        dest: appState.destinations.find(d => d.id === 'alleppey-kerala') || appState.destinations[2],
        reason: "Tranquil waterways, tea estates in Munnar, and peaceful backwater cruises."
      });
      recommendations.push({
        dest: appState.destinations.find(d => d.id === 'darjeeling-west-bengal') || appState.destinations[3],
        reason: "You love mountain air: Mount Kanchenjunga sunrise views and rolling Himalayan tea gardens."
      });
    } else if (interest === 'spiritual') {
      recommendations.push({
        dest: appState.destinations.find(d => d.id === 'varanasi-ghats') || appState.destinations[0],
        reason: "You requested a spiritual journey: Experience the oldest continuous city with ancient Ganga ghats."
      });
    } else {
      recommendations.push({
        dest: appState.destinations[0],
        reason: "Highly rated versatile destination suited for your chosen travel companions."
      });
    }

    if (resultsContainer) {
      resultsContainer.innerHTML = `
        <h3 style="font-size: 1.25rem; color: var(--color-gold); margin-bottom: 16px;">
          Recommended Just For You (${recommendations.length} Suggestions)
        </h3>
        <div class="advisor-recommendations-grid">
          ${recommendations.map(r => `
            <div class="advisor-result-card" onclick="window.openDestinationModal('${r.dest.id}')">
              <img src="${r.dest.coverImage}" style="width: 100%; height: 160px; object-fit: cover;" alt="${r.dest.name}" />
              <div style="padding: 16px;">
                <div class="advisor-justification-badge">${r.reason}</div>
                <h4 style="font-size: 1.1rem; color: var(--text-primary); margin: 6px 0;">${r.dest.name}</h4>
                <div style="font-size: 0.75rem; color: var(--color-gold);">${r.dest.city}, ${r.dest.state}</div>
                <button class="btn btn-secondary btn-sm" style="width: 100%; margin-top: 12px;">
                  View Itinerary & Tips
                </button>
              </div>
            </div>
          `).join('')}
        </div>
      `;
      resultsContainer.scrollIntoView({ behavior: 'smooth' });
    }
  });
}
