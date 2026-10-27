/* ==========================================================================
   TRAVEL MARK — DESTINATION SHOWCASE & CARD GENERATOR
   ========================================================================== */

import { appState } from '../state.js';

export function renderFeaturedDestinations(containerId = 'featuredDestinationsGrid', limit = 9) {
  const container = document.getElementById(containerId);
  if (container) {
    const destinations = appState.destinations.slice(0, limit);
    container.innerHTML = destinations.map(dest => createDestinationCardHTML(dest)).join('');
  }

  const catalogContainer = document.getElementById('allDestinationsCatalogGrid');
  if (catalogContainer) {
    catalogContainer.innerHTML = appState.destinations.map(dest => createDestinationCardHTML(dest)).join('');
  }

  if (window.lucide) window.lucide.createIcons();
}

export function createDestinationCardHTML(dest) {
  const isSaved = appState.isSaved(dest.id);
  const tagsHtml = (dest.tags || []).slice(0, 3).map(tag => `
    <span class="card-tag">${tag}</span>
  `).join('');

  return `
    <article class="destination-card" data-id="${dest.id}">
      <div class="card-media-wrapper" onclick="window.openDestinationModal('${dest.id}')">
        <img class="card-media-img" src="${dest.coverImage}" alt="${dest.name}, ${dest.state}" loading="lazy" />
        <div class="card-media-gradient"></div>
        <div class="card-floating-badges">
          <span class="card-category-badge">${dest.category}</span>
          <button class="card-wishlist-btn ${isSaved ? 'saved' : ''}" 
                  onclick="event.stopPropagation(); window.toggleWishlist('${dest.id}')"
                  aria-label="Save ${dest.name} to wishlist"
                  title="${isSaved ? 'Remove from saved' : 'Save to wishlist'}">
            <i data-lucide="heart" style="width: 16px; height: 16px; ${isSaved ? 'fill: currentColor;' : ''}"></i>
          </button>
        </div>
      </div>

      <div class="card-content">
        <div class="card-location-meta">
          <i data-lucide="map-pin" style="width: 13px; height: 13px;"></i>
          <span>${dest.city}, ${dest.state}</span>
        </div>
        <h3 class="card-title" onclick="window.openDestinationModal('${dest.id}')">${dest.name}</h3>
        <p class="card-snippet">${dest.overview}</p>

        <div class="card-tags-row">
          ${tagsHtml}
        </div>

        <div class="card-footer">
          <div class="card-metrics">
            <span class="card-metric-item rating">
              <i data-lucide="star" style="fill: var(--color-gold);"></i>
              ${dest.rating}
              <span style="color: var(--text-muted); font-size: 0.75rem; font-weight: normal;">(${dest.reviewsCount})</span>
            </span>
            <span class="card-metric-item">
              <i data-lucide="clock"></i>
              ${dest.duration}
            </span>
          </div>
          <button class="btn btn-secondary btn-sm" onclick="window.openDestinationModal('${dest.id}')" style="padding: 6px 12px; font-size: 0.75rem;">
            Explore
            <i data-lucide="arrow-right" style="width: 12px; height: 12px; margin-left: 4px;"></i>
          </button>
        </div>
      </div>
    </article>
  `;
}
