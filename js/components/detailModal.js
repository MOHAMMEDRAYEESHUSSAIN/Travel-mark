/* ==========================================================================
   TRAVEL MARK — DESTINATION DETAIL COMPONENT (25 ESSENTIAL SECTIONS)
   ========================================================================== */

import { appState } from '../state.js';

export function initDetailModal() {
  const modal = document.getElementById('destinationDetailModal');
  const closeBtn = document.getElementById('closeDetailModalBtn');

  closeBtn?.addEventListener('click', () => {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  });

  modal?.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('open');
      document.body.style.overflow = '';
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal?.classList.contains('open')) {
      modal.classList.remove('open');
      document.body.style.overflow = '';
    }
  });

  window.openDestinationModal = function(destinationId) {
    const dest = appState.destinations.find(d => d.id === destinationId);
    if (!dest) return;
    renderDestinationDetails(dest);
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  };
}

function renderDestinationDetails(dest) {
  const contentEl = document.getElementById('detailModalContent');
  if (!contentEl) return;

  const isSaved = appState.isSaved(dest.id);

  // Attractions list
  const attractionsHtml = (dest.topAttractions || []).map(att => `
    <li style="display: flex; align-items: flex-start; gap: 8px; margin-bottom: 8px; color: var(--text-secondary); font-size: 0.875rem;">
      <i data-lucide="check-circle" style="width: 16px; height: 16px; color: var(--color-gold); flex-shrink: 0; margin-top: 2px;"></i>
      <span>${att}</span>
    </li>
  `).join('');

  // Local food items
  const foodsHtml = (dest.famousFood || []).map(f => `
    <div style="background: rgba(255,255,255,0.04); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 12px; margin-bottom: 8px;">
      <div style="display: flex; justify-content: space-between; align-items: baseline;">
        <span style="font-weight: 700; color: var(--text-primary); font-size: 0.9375rem;">${f.name}</span>
        <span style="font-size: 0.75rem; color: var(--color-gold); font-weight: 600;">@ ${f.place}</span>
      </div>
      <p style="font-size: 0.8125rem; color: var(--text-secondary); margin-top: 4px; line-height: 1.4;">${f.desc}</p>
    </div>
  `).join('');

  // Nearby Sacred
  const sacredHtml = (dest.nearbySacred || []).map(s => `
    <div style="background: rgba(232,184,92,0.06); border-left: 3px solid var(--color-gold); border-radius: 4px; padding: 10px 14px; margin-bottom: 8px;">
      <div style="font-weight: 700; color: var(--text-primary); font-size: 0.875rem;">${s.name} <span style="font-size: 0.75rem; color: var(--color-olive-light); font-weight: normal;">(${s.tradition} • ${s.dist})</span></div>
      <div style="font-size: 0.75rem; color: var(--text-secondary); margin-top: 2px;">${s.etiquette}</div>
    </div>
  `).join('');

  // Nearby Amusement
  const amusementHtml = (dest.nearbyAmusement || []).map(a => `
    <div style="background: rgba(255,255,255,0.04); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 10px 14px; margin-bottom: 8px;">
      <div style="font-weight: 700; color: var(--text-primary); font-size: 0.875rem;">${a.name} <span style="font-size: 0.75rem; color: var(--color-gold);">(${a.type} • ${a.dist})</span></div>
      <div style="font-size: 0.75rem; color: var(--text-secondary); margin-top: 2px;">${a.note}</div>
    </div>
  `).join('');

  // Suggested Itinerary
  const itineraryHtml = (dest.suggestedItinerary || []).map(item => `
    <div style="display: flex; gap: 12px; margin-bottom: 12px;">
      <div style="width: 60px; font-weight: 800; font-size: 0.75rem; color: var(--color-gold); text-transform: uppercase;">${item.day}</div>
      <div style="flex: 1; font-size: 0.875rem; color: var(--text-secondary); background: rgba(255,255,255,0.03); padding: 10px 14px; border-radius: var(--radius-md); border: 1px solid var(--border-subtle);">
        ${item.plan}
      </div>
    </div>
  `).join('');

  // Related Destinations
  const related = appState.destinations.filter(d => d.id !== dest.id && (d.region === dest.region || d.category === dest.category)).slice(0, 3);
  const relatedHtml = related.map(r => `
    <div style="background: var(--color-card-bg); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); overflow: hidden; cursor: pointer;" onclick="window.openDestinationModal('${r.id}')">
      <img src="${r.coverImage}" style="width: 100%; height: 110px; object-fit: cover;" alt="${r.name}" />
      <div style="padding: 10px;">
        <div style="font-size: 0.8125rem; font-weight: 700; color: var(--text-primary);">${r.name}</div>
        <div style="font-size: 0.6875rem; color: var(--color-gold);">${r.city}, ${r.state}</div>
      </div>
    </div>
  `).join('');

  contentEl.innerHTML = `
    <!-- 1. Hero Cover Banner -->
    <div class="detail-modal-hero">
      <img class="detail-modal-hero-img" src="${dest.coverImage}" alt="${dest.name}" />
      <div class="detail-modal-hero-gradient"></div>
      <div class="detail-modal-hero-content">
        <div style="display: flex; gap: 8px; margin-bottom: 8px; flex-wrap: wrap;">
          <span class="card-category-badge">${dest.category}</span>
          <span class="card-category-badge" style="background: rgba(232,184,92,0.2); border-color: var(--border-gold); color: var(--color-gold);">
            ${dest.state} • ${dest.region || 'India'}
          </span>
        </div>
        <h1 style="font-size: clamp(1.8rem, 3.5vw, 2.75rem); color: var(--text-primary); margin-bottom: 6px;">${dest.name}</h1>
        <div style="display: flex; align-items: center; gap: 16px; font-size: 0.875rem; color: #DDD;">
          <span style="display: flex; align-items: center; gap: 4px; color: var(--color-gold); font-weight: 700;">
            <i data-lucide="star" style="fill: var(--color-gold); width: 16px; height: 16px;"></i> ${dest.rating} (${dest.reviewsCount} verified reviews)
          </span>
          <span style="display: flex; align-items: center; gap: 4px;">
            <i data-lucide="clock" style="width: 14px; height: 14px;"></i> ${dest.duration}
          </span>
          <span style="display: flex; align-items: center; gap: 4px;">
            <i data-lucide="wallet" style="width: 14px; height: 14px;"></i> ${dest.approxBudget || dest.budgetRange}
          </span>
        </div>
      </div>
    </div>

    <!-- Quick Action Bar -->
    <div style="padding: 16px 32px; border-bottom: 1px solid var(--border-subtle); background: var(--color-midnight-elevated); display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 12px;">
      <div style="display: flex; gap: 10px; flex-wrap: wrap;">
        <button class="btn btn-primary btn-sm" onclick="window.addToTripPlanner('${dest.id}')">
          <i data-lucide="calendar-plus"></i> Add to Travel Plan
        </button>
        <button class="btn btn-secondary btn-sm ${isSaved ? 'btn-gold' : ''}" onclick="window.toggleWishlist('${dest.id}'); window.openDestinationModal('${dest.id}');">
          <i data-lucide="heart" style="${isSaved ? 'fill: currentColor;' : ''}"></i> ${isSaved ? 'Saved in Wishlist' : 'Save to Wishlist'}
        </button>
        <button class="btn btn-secondary btn-sm" onclick="window.openShareModal('${dest.name}')">
          <i data-lucide="share-2"></i> Share Destination
        </button>
      </div>
      <div style="display: flex; gap: 10px;">
        <button class="btn btn-secondary btn-sm" onclick="window.openPhotoUploadModal('${dest.id}')">
          <i data-lucide="upload"></i> Upload Photos
        </button>
        <button class="btn btn-secondary btn-sm" onclick="window.openReviewModal('${dest.id}')">
          <i data-lucide="edit-3"></i> Write Review
        </button>
      </div>
    </div>

    <!-- Modal Body Content -->
    <div style="padding: 32px; overflow-y: auto; display: flex; flex-direction: column; gap: 32px;">
      
      <!-- 3. Overview & 4. Why Visit -->
      <section>
        <h3 style="color: var(--color-gold); font-size: 1.15rem; margin-bottom: 8px;">Historical & Cultural Overview</h3>
        <p style="font-size: 0.9375rem; color: var(--text-secondary); line-height: 1.7; margin-bottom: 16px;">${dest.overview}</p>
        <div style="background: rgba(255,255,255,0.04); border-left: 3px solid var(--color-olive-light); padding: 12px 16px; border-radius: 4px;">
          <strong style="color: var(--text-primary); font-size: 0.875rem;">Why Travellers Visit:</strong>
          <span style="color: var(--text-secondary); font-size: 0.875rem; margin-left: 6px;">${dest.whyVisit}</span>
        </div>
      </section>

      <!-- Interactive "What should I visit here?" Interest Selector -->
      <section style="background: var(--color-midnight-elevated); border: 1px solid var(--border-gold); border-radius: var(--radius-lg); padding: 20px;">
        <h3 style="font-size: 1.05rem; color: var(--color-gold); margin-bottom: 8px; display: flex; align-items: center; gap: 8px;">
          <i data-lucide="compass" style="width: 18px; height: 18px;"></i> What Should I Visit Here?
        </h3>
        <p style="font-size: 0.8125rem; color: var(--text-secondary); margin-bottom: 12px;">Select what you are most interested in to filter attractions in and around ${dest.name}:</p>
        <div style="display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 16px;" id="detailInterestChips">
          <button class="filter-chip-option active" data-interest="all">All Sights</button>
          <button class="filter-chip-option" data-interest="food">Food & Eateries</button>
          <button class="filter-chip-option" data-interest="sacred">Temples & Sacred</button>
          <button class="filter-chip-option" data-interest="history">History & Forts</button>
          <button class="filter-chip-option" data-interest="amusement">Fun & Adventure</button>
        </div>
        <div id="detailInterestDynamicContent">
          <ul style="list-style: none;">${attractionsHtml}</ul>
        </div>
      </section>

      <!-- Practical Logistics 2x2 Grid -->
      <section style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px;">
        <div style="background: rgba(255,255,255,0.03); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 16px;">
          <h4 style="color: var(--color-gold); font-size: 0.875rem; text-transform: uppercase; margin-bottom: 6px; display: flex; align-items: center; gap: 6px;">
            <i data-lucide="ticket" style="width: 14px; height: 14px;"></i> Entry Tickets & Timings
          </h4>
          <p style="font-size: 0.8125rem; color: var(--text-secondary); margin-bottom: 4px;"><strong>Hours:</strong> ${dest.visitingHours}</p>
          <p style="font-size: 0.8125rem; color: var(--text-secondary);">${dest.entryTickets}</p>
        </div>

        <div style="background: rgba(255,255,255,0.03); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 16px;">
          <h4 style="color: var(--color-gold); font-size: 0.875rem; text-transform: uppercase; margin-bottom: 6px; display: flex; align-items: center; gap: 6px;">
            <i data-lucide="cloud-sun" style="width: 14px; height: 14px;"></i> Best Season & Weather
          </h4>
          <p style="font-size: 0.8125rem; color: var(--text-secondary); margin-bottom: 4px;"><strong>Best Season:</strong> ${dest.bestSeason}</p>
          <p style="font-size: 0.8125rem; color: var(--text-secondary);">${dest.weatherGuidance}</p>
        </div>

        <div style="background: rgba(255,255,255,0.03); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 16px;">
          <h4 style="color: var(--color-gold); font-size: 0.875rem; text-transform: uppercase; margin-bottom: 6px; display: flex; align-items: center; gap: 6px;">
            <i data-lucide="bus" style="width: 14px; height: 14px;"></i> Transport & Directions
          </h4>
          <p style="font-size: 0.8125rem; color: var(--text-secondary);">${dest.localTransport}</p>
        </div>

        <div style="background: rgba(255,255,255,0.03); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 16px;">
          <h4 style="color: var(--color-gold); font-size: 0.875rem; text-transform: uppercase; margin-bottom: 6px; display: flex; align-items: center; gap: 6px;">
            <i data-lucide="hotel" style="width: 14px; height: 14px;"></i> Accommodation Guidance
          </h4>
          <p style="font-size: 0.8125rem; color: var(--text-secondary);">${dest.accommodation}</p>
        </div>
      </section>

      <!-- 12. Famous Local Food & Cuisine -->
      <section>
        <h3 style="color: var(--color-gold); font-size: 1.15rem; margin-bottom: 12px; display: flex; align-items: center; gap: 8px;">
          <i data-lucide="utensils" style="width: 18px; height: 18px;"></i> Iconic Local Dishes & Eateries
        </h3>
        <div>${foodsHtml}</div>
      </section>

      <!-- 13. Sacred Places & 14. Amusement Parks -->
      <section style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px;">
        <div>
          <h4 style="color: var(--color-gold); font-size: 0.9375rem; margin-bottom: 10px; display: flex; align-items: center; gap: 6px;">
            <i data-lucide="sparkles" style="width: 16px; height: 16px;"></i> Nearby Sacred & Spiritual Sites
          </h4>
          <div>${sacredHtml || '<p style="font-size:0.8125rem; color: var(--text-muted);">See spiritual explorer for comprehensive circuits.</p>'}</div>
        </div>

        <div>
          <h4 style="color: var(--color-gold); font-size: 0.9375rem; margin-bottom: 10px; display: flex; align-items: center; gap: 6px;">
            <i data-lucide="smile" style="width: 16px; height: 16px;"></i> Nearby Adventure & Entertainment
          </h4>
          <div>${amusementHtml || '<p style="font-size:0.8125rem; color: var(--text-muted);">See adventure & amusements section for nearby parks.</p>'}</div>
        </div>
      </section>

      <!-- 15. Safety & Etiquette Advice -->
      <section style="background: rgba(232, 184, 92, 0.08); border: 1px solid var(--border-gold); border-radius: var(--radius-md); padding: 16px;">
        <h4 style="color: var(--color-gold); font-size: 0.875rem; text-transform: uppercase; margin-bottom: 6px; display: flex; align-items: center; gap: 6px;">
          <i data-lucide="shield-alert" style="width: 16px; height: 16px;"></i> Visitor Etiquette & Safety Advice
        </h4>
        <p style="font-size: 0.875rem; color: var(--text-primary); line-height: 1.6;">${dest.safetyEtiquette}</p>
      </section>

      <!-- 19. Suggested Itineraries -->
      <section>
        <h3 style="color: var(--color-gold); font-size: 1.15rem; margin-bottom: 12px; display: flex; align-items: center; gap: 8px;">
          <i data-lucide="calendar" style="width: 18px; height: 18px;"></i> Suggested Itinerary Breakdown
        </h3>
        <div>${itineraryHtml}</div>
      </section>

      <!-- 20. Related Destinations -->
      <section>
        <h3 style="color: var(--color-gold); font-size: 1.15rem; margin-bottom: 12px;">Similar Destinations You May Enjoy</h3>
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 14px;">
          ${relatedHtml}
        </div>
      </section>

    </div>
  `;

  if (window.lucide) window.lucide.createIcons();

  // Attach Interest Filter Chips Inside Detail Modal
  const interestChips = document.querySelectorAll('#detailInterestChips .filter-chip-option');
  const dynamicBox = document.getElementById('detailInterestDynamicContent');

  interestChips.forEach(chip => {
    chip.addEventListener('click', () => {
      interestChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');

      const interest = chip.getAttribute('data-interest');
      if (interest === 'food') {
        dynamicBox.innerHTML = `<div>${foodsHtml}</div>`;
      } else if (interest === 'sacred') {
        dynamicBox.innerHTML = `<div>${sacredHtml}</div>`;
      } else if (interest === 'history') {
        dynamicBox.innerHTML = `<ul style="list-style: none;">${attractionsHtml}</ul>`;
      } else if (interest === 'amusement') {
        dynamicBox.innerHTML = `<div>${amusementHtml}</div>`;
      } else {
        dynamicBox.innerHTML = `<ul style="list-style: none;">${attractionsHtml}</ul>`;
      }
      if (window.lucide) window.lucide.createIcons();
    });
  });
}
