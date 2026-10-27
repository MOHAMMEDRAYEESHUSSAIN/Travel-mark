/* ==========================================================================
   TRAVEL MARK — HEADER & NAVIGATION DRAWER COMPONENT
   ========================================================================== */

import { appState } from '../state.js';

export function initHeader() {
  const headerEl = document.querySelector('.site-header');
  const hamburgerBtn = document.getElementById('hamburgerToggle');
  const sideDrawer = document.getElementById('sideDrawer');
  const drawerBackdrop = document.getElementById('drawerBackdrop');
  const drawerCloseBtn = document.getElementById('drawerCloseBtn');

  // Sticky scroll shadow
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      headerEl?.classList.add('scrolled');
    } else {
      headerEl?.classList.remove('scrolled');
    }
  });

  // Drawer Open/Close
  function toggleDrawer(open) {
    const isOpen = open !== undefined ? open : !sideDrawer.classList.contains('open');
    sideDrawer?.classList.toggle('open', isOpen);
    drawerBackdrop?.classList.toggle('open', isOpen);
    hamburgerBtn?.classList.toggle('active', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }

  hamburgerBtn?.addEventListener('click', () => toggleDrawer());
  drawerCloseBtn?.addEventListener('click', () => toggleDrawer(false));
  drawerBackdrop?.addEventListener('click', () => toggleDrawer(false));

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && sideDrawer?.classList.contains('open')) {
      toggleDrawer(false);
    }
  });

  // Drawer Nav Item Click
  document.querySelectorAll('.drawer-nav-item, .nav-link').forEach(item => {
    item.addEventListener('click', (e) => {
      const page = item.getAttribute('data-page');
      if (page) {
        e.preventDefault();
        window.navigateToPage(page);
        toggleDrawer(false);
      }
    });
  });

  // Notifications Popover
  const notifBtn = document.getElementById('notifBtn');
  const notifPopover = document.getElementById('notifPopover');
  notifBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    const isVisible = notifPopover.style.display === 'block';
    closeAllPopovers();
    if (!isVisible) {
      notifPopover.style.display = 'block';
      appState.markAllNotificationsRead();
      renderNotifications();
    }
  });

  // Saved Wishlist Popover
  const wishlistBtn = document.getElementById('wishlistHeaderBtn');
  const wishlistPopover = document.getElementById('wishlistPopover');
  wishlistBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    const isVisible = wishlistPopover.style.display === 'block';
    closeAllPopovers();
    if (!isVisible) {
      wishlistPopover.style.display = 'block';
      renderWishlistPopover();
    }
  });

  // Close popovers on outer click
  document.addEventListener('click', () => {
    closeAllPopovers();
  });

  // Update header badges
  updateWishlistCount();
  updateNotifCount();
  updateUserUI();

  // Subscribe to state updates
  appState.subscribe((event) => {
    if (event === 'wishlist_change') updateWishlistCount();
    if (event === 'notifications_updated') updateNotifCount();
    if (event === 'auth_change' || event === 'profile_updated') updateUserUI();
  });
}

function closeAllPopovers() {
  const notifPopover = document.getElementById('notifPopover');
  const wishlistPopover = document.getElementById('wishlistPopover');
  if (notifPopover) notifPopover.style.display = 'none';
  if (wishlistPopover) wishlistPopover.style.display = 'none';
}

export function updateWishlistCount() {
  const badge = document.getElementById('wishlistCountBadge');
  const count = appState.wishlist.size;
  if (badge) {
    badge.textContent = count;
    badge.style.display = count > 0 ? 'flex' : 'none';
  }
}

export function updateNotifCount() {
  const badge = document.getElementById('notifCountBadge');
  const unread = appState.notifications.filter(n => !n.read).length;
  if (badge) {
    badge.textContent = unread;
    badge.style.display = unread > 0 ? 'flex' : 'none';
  }
}

export function updateUserUI() {
  const user = appState.currentUser;
  const avatarImgs = document.querySelectorAll('.header-user-avatar, .drawer-user-avatar');
  const nameShort = document.querySelector('.user-name-short');
  const drawerName = document.querySelector('.drawer-user-name');
  const drawerHandle = document.querySelector('.drawer-user-handle');

  avatarImgs.forEach(img => {
    if (img) img.src = user.avatar;
  });
  if (nameShort) nameShort.textContent = user.name.split(' ')[0];
  if (drawerName) drawerName.textContent = user.name;
  if (drawerHandle) drawerHandle.textContent = `@${user.username}`;
}

export function renderNotifications() {
  const listEl = document.getElementById('notifList');
  if (!listEl) return;
  if (appState.notifications.length === 0) {
    listEl.innerHTML = '<div style="padding: 24px; text-align: center; color: var(--text-muted); font-size: 0.85rem;">No new notifications</div>';
    return;
  }
  listEl.innerHTML = appState.notifications.map(n => `
    <div style="padding: 12px 16px; border-bottom: 1px solid var(--border-subtle); display: flex; gap: 12px; align-items: flex-start;">
      <div style="width: 32px; height: 32px; border-radius: 50%; background: rgba(232,184,92,0.15); border: 1px solid var(--border-gold); display: flex; align-items: center; justify-content: center; color: var(--color-gold); flex-shrink: 0;">
        <i data-lucide="${n.icon || 'bell'}" style="width: 14px; height: 14px;"></i>
      </div>
      <div>
        <div style="font-size: 0.8125rem; font-weight: 700; color: var(--text-primary); margin-bottom: 2px;">${n.title}</div>
        <div style="font-size: 0.75rem; color: var(--text-secondary); line-height: 1.4;">${n.message}</div>
        <div style="font-size: 0.6875rem; color: var(--color-olive-light); margin-top: 4px;">${n.time}</div>
      </div>
    </div>
  `).join('');
  if (window.lucide) window.lucide.createIcons();
}

export function renderWishlistPopover() {
  const listEl = document.getElementById('wishlistList');
  if (!listEl) return;
  const saved = appState.getSavedDestinations();
  if (saved.length === 0) {
    listEl.innerHTML = '<div style="padding: 24px; text-align: center; color: var(--text-muted); font-size: 0.85rem;">No saved destinations yet.<br>Click the heart icon on any destination card.</div>';
    return;
  }
  listEl.innerHTML = saved.map(d => `
    <div style="padding: 10px 16px; border-bottom: 1px solid var(--border-subtle); display: flex; align-items: center; justify-content: space-between; gap: 10px; cursor: pointer;" onclick="window.openDestinationModal('${d.id}')">
      <div style="display: flex; align-items: center; gap: 10px;">
        <img src="${d.coverImage}" style="width: 44px; height: 44px; border-radius: 6px; object-fit: cover;" alt="${d.name}" />
        <div>
          <div style="font-size: 0.8125rem; font-weight: 700; color: var(--text-primary);">${d.name}</div>
          <div style="font-size: 0.6875rem; color: var(--color-gold);">${d.state}</div>
        </div>
      </div>
      <button onclick="event.stopPropagation(); window.toggleWishlist('${d.id}')" style="color: #E25555; padding: 6px;" title="Remove">
        <i data-lucide="trash-2" style="width: 14px; height: 14px;"></i>
      </button>
    </div>
  `).join('');
  if (window.lucide) window.lucide.createIcons();
}
