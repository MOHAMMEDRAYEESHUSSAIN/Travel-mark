/* ==========================================================================
   TRAVEL MARK — DISCOVER INDIA THROUGH REAL EXPERIENCES
   Master Application Entry Point & Client-Side Page Router
   ========================================================================== */

import { appState } from './state.js';
import { initHeader } from './components/header.js';
import { initHero } from './components/hero.js';
import { renderFeaturedDestinations } from './components/destinations.js';
import { initExplorePage, renderExploreResults } from './components/explore.js';
import { initDetailModal } from './components/detailModal.js';
import { initCommunityFeed } from './components/community.js';
import { initGallery } from './components/gallery.js';
import { initTravelPlanner } from './components/planner.js';
import { initSpecialPages } from './components/specialPages.js';
import { initProfilePage } from './components/profile.js';
import { initAdminDashboard } from './components/admin.js';
import { initAuthModal } from './components/authModal.js';
import { initGlobalModals } from './components/modals.js';

// Global Navigation Router
window.navigateToPage = function(pageId) {
  const allPages = document.querySelectorAll('.page-view');
  allPages.forEach(p => p.style.display = 'none');

  const targetPage = document.getElementById(`page-${pageId}`);
  if (targetPage) {
    targetPage.style.display = 'block';
  } else {
    // Fallback to home
    document.getElementById('page-home').style.display = 'block';
    pageId = 'home';
  }

  // Update active state in header and drawer links
  document.querySelectorAll('.nav-link, .drawer-nav-item').forEach(el => {
    const p = el.getAttribute('data-page');
    el.classList.toggle('active', p === pageId);
  });

  appState.activePage = pageId;

  // Trigger page-specific re-renders if necessary
  if (pageId === 'explore') {
    renderExploreResults();
  } else if (pageId === 'destinations') {
    renderFeaturedDestinations();
  }

  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Update URL hash without reload
  if (history.pushState) {
    history.pushState(null, null, `#${pageId}`);
  }

  if (window.lucide) window.lucide.createIcons();
};

// Bootstrap when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Subsystems
  initGlobalModals();
  initHeader();
  initHero();
  renderFeaturedDestinations();
  initExplorePage();
  initDetailModal();
  initCommunityFeed();
  initGallery();
  initTravelPlanner();
  initSpecialPages();
  initProfilePage();
  initAdminDashboard();
  initAuthModal();

  // 2. Initialize Lucide Icons
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // 3. Handle initial URL hash route
  const hash = window.location.hash.replace('#', '');
  if (hash && document.getElementById(`page-${hash}`)) {
    window.navigateToPage(hash);
  } else {
    window.navigateToPage('home');
  }

  // 4. Handle Browser Back/Forward buttons
  window.addEventListener('popstate', () => {
    const page = window.location.hash.replace('#', '') || 'home';
    window.navigateToPage(page);
  });

  console.log("Travel Mark initialized successfully. Discover India through real experiences.");
});
