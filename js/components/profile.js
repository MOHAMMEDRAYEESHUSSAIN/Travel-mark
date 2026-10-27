/* ==========================================================================
   TRAVEL MARK — TRAVELLER PROFILE & DASHBOARD
   ========================================================================== */

import { appState } from '../state.js';
import { createDestinationCardHTML } from './destinations.js';

export function initProfilePage() {
  renderProfileHeader();
  renderProfileTabs();
  initEditProfileModal();

  appState.subscribe((event) => {
    if (event === 'profile_updated' || event === 'wishlist_change' || event === 'stories_updated' || event === 'plans_updated') {
      renderProfileHeader();
      renderProfileTabs();
    }
  });
}

function renderProfileHeader() {
  const user = appState.currentUser;
  const nameEl = document.getElementById('profileDisplayName');
  const userHandleEl = document.getElementById('profileUsername');
  const bioEl = document.getElementById('profileBio');
  const avatarEl = document.getElementById('profileLargeAvatar');
  const regionEl = document.getElementById('profileRegion');

  if (nameEl) nameEl.textContent = user.name;
  if (userHandleEl) userHandleEl.textContent = `@${user.username}`;
  if (bioEl) bioEl.textContent = user.bio;
  if (avatarEl) avatarEl.src = user.avatar;
  if (regionEl) regionEl.textContent = user.region || "Explorer";

  // Stat Counters
  const storiesCount = appState.stories.filter(s => s.author.name === user.name).length;
  const savedCount = appState.wishlist.size;
  const plansCount = appState.plans.length;
  const photosCount = appState.photos.filter(p => p.author === user.name).length;

  const countStoriesEl = document.getElementById('profileStatStories');
  const countSavedEl = document.getElementById('profileStatSaved');
  const countPlansEl = document.getElementById('profileStatPlans');
  const countPhotosEl = document.getElementById('profileStatPhotos');

  if (countStoriesEl) countStoriesEl.textContent = storiesCount;
  if (countSavedEl) countSavedEl.textContent = savedCount;
  if (countPlansEl) countPlansEl.textContent = plansCount;
  if (countPhotosEl) countPhotosEl.textContent = photosCount;
}

function renderProfileTabs() {
  const tabs = document.querySelectorAll('.profile-tab-btn');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const target = tab.getAttribute('data-tab');

      document.querySelectorAll('.profile-pane').forEach(p => p.style.display = 'none');
      const pane = document.getElementById(`profilePane-${target}`);
      if (pane) pane.style.display = 'block';

      if (target === 'saved') renderProfileSaved();
      if (target === 'stories') renderProfileStories();
      if (target === 'plans') renderProfilePlans();
    });
  });

  // Default to saved destinations
  renderProfileSaved();
}

function renderProfileSaved() {
  const container = document.getElementById('profileSavedGrid');
  if (!container) return;
  const saved = appState.getSavedDestinations();

  if (saved.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; padding: 40px; text-align: center; color: var(--text-muted); background: var(--color-midnight-elevated); border-radius: var(--radius-lg); border: 1px dashed var(--border-medium);">
        You haven't saved any destinations yet. Click the heart icon while exploring to build your wishlist.
      </div>
    `;
    return;
  }

  container.innerHTML = saved.map(d => createDestinationCardHTML(d)).join('');
  if (window.lucide) window.lucide.createIcons();
}

function renderProfileStories() {
  const container = document.getElementById('profileStoriesGrid');
  if (!container) return;
  const user = appState.currentUser;
  const userStories = appState.stories.filter(s => s.author.name === user.name);

  if (userStories.length === 0) {
    container.innerHTML = `
      <div style="padding: 40px; text-align: center; color: var(--text-muted); background: var(--color-midnight-elevated); border-radius: var(--radius-lg); border: 1px dashed var(--border-medium);">
        You haven't shared any travel experiences yet.
        <div style="margin-top: 12px;">
          <button class="btn btn-primary btn-sm" onclick="window.openCreatePostModal()">Share Your First Story</button>
        </div>
      </div>
    `;
    return;
  }

  container.innerHTML = userStories.map(s => `
    <div style="background: var(--color-card-bg); border: 1px solid var(--border-medium); border-radius: var(--radius-lg); padding: 18px; margin-bottom: 16px;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
        <span style="font-size: 0.75rem; color: var(--color-gold); font-weight: 700;">${s.destination}</span>
        <button onclick="window.deleteUserStory('${s.id}')" style="color: #E25555; font-size: 0.75rem; cursor: pointer;">Delete</button>
      </div>
      <h4 style="font-size: 1.15rem; color: var(--text-primary); margin-bottom: 6px;">${s.title}</h4>
      <p style="font-size: 0.875rem; color: var(--text-secondary); line-height: 1.5;">${s.content.substring(0, 160)}...</p>
    </div>
  `).join('');
}

window.deleteUserStory = function(storyId) {
  if (confirm("Are you sure you want to remove this story?")) {
    appState.deleteStory(storyId);
    window.showToast("Story deleted.");
  }
};

function renderProfilePlans() {
  const container = document.getElementById('profilePlansGrid');
  if (!container) return;

  if (appState.plans.length === 0) {
    container.innerHTML = `
      <div style="padding: 40px; text-align: center; color: var(--text-muted); background: var(--color-midnight-elevated); border-radius: var(--radius-lg); border: 1px dashed var(--border-medium);">
        No saved travel itineraries yet. Use the Travel Planner to craft a personalized schedule.
      </div>
    `;
    return;
  }

  container.innerHTML = appState.plans.map(p => `
    <div style="background: var(--color-card-bg); border: 1px solid var(--border-medium); border-radius: var(--radius-lg); padding: 20px; margin-bottom: 16px;">
      <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 10px;">
        <div>
          <span style="font-size: 0.6875rem; color: var(--color-gold); font-weight: 700; text-transform: uppercase;">Saved ${p.createdAt}</span>
          <h4 style="font-size: 1.25rem; color: var(--text-primary); margin: 2px 0;">${p.title}</h4>
          <div style="font-size: 0.8125rem; color: var(--text-secondary);">${p.travellers} Travellers • ${p.budgetTier} • Total approx ₹${p.budgetBreakdown.total.toLocaleString('en-IN')}</div>
        </div>
        <button onclick="window.deleteUserPlan('${p.id}')" style="color: #E25555; padding: 6px; cursor: pointer;" title="Delete Plan">
          <i data-lucide="trash-2" style="width: 16px; height: 16px;"></i>
        </button>
      </div>
      <div style="font-size: 0.8125rem; color: var(--text-muted);">${p.days.length} Days Itinerary planned from ${p.startCity}</div>
    </div>
  `).join('');

  if (window.lucide) window.lucide.createIcons();
}

window.deleteUserPlan = function(planId) {
  if (confirm("Remove this saved itinerary?")) {
    appState.deletePlan(planId);
    window.showToast("Itinerary removed.");
  }
};

function initEditProfileModal() {
  const modal = document.getElementById('editProfileModal');
  const openBtn = document.getElementById('openEditProfileBtn');
  const closeBtn = document.getElementById('closeEditProfileBtn');
  const form = document.getElementById('editProfileForm');

  openBtn?.addEventListener('click', () => {
    const user = appState.currentUser;
    document.getElementById('editNameInput').value = user.name;
    document.getElementById('editUsernameInput').value = user.username;
    document.getElementById('editBioInput').value = user.bio;
    document.getElementById('editRegionInput').value = user.region || '';
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  });

  closeBtn?.addEventListener('click', () => {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  });

  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('editNameInput').value.trim();
    const username = document.getElementById('editUsernameInput').value.trim();
    const bio = document.getElementById('editBioInput').value.trim();
    const region = document.getElementById('editRegionInput').value.trim();

    appState.updateProfile({ name, username, bio, region });
    modal.classList.remove('open');
    document.body.style.overflow = '';
    window.showToast("Profile updated successfully!");
  });
}
