/* ==========================================================================
   TRAVEL MARK — MODALS (SHARE, REPORT, REVIEW) & TOAST SYSTEM
   ========================================================================== */

import { appState } from '../state.js';

let activeReportTarget = { type: 'content', id: '' };

export function initGlobalModals() {
  initToastSystem();
  initShareModal();
  initReportModal();
  initReviewModal();

  window.toggleWishlist = function(destId) {
    const isSaved = appState.toggleWishlist(destId);
    window.showToast(isSaved ? "Saved to your Travel Mark Wishlist!" : "Removed from Wishlist.");
  };
}

/* ==========================================================================
   TOAST SYSTEM
   ========================================================================== */

function initToastSystem() {
  const toastContainer = document.createElement('div');
  toastContainer.id = 'toastContainer';
  toastContainer.style.cssText = `
    position: fixed;
    bottom: 24px;
    right: 24px;
    z-index: var(--z-toast);
    display: flex;
    flex-direction: column;
    gap: 10px;
    pointer-events: none;
  `;
  document.body.appendChild(toastContainer);

  window.showToast = function(message, type = 'info') {
    const toast = document.createElement('div');
    toast.style.cssText = `
      background: #1B1814;
      border: 1px solid var(--border-gold);
      color: var(--text-primary);
      padding: 12px 20px;
      border-radius: var(--radius-full);
      box-shadow: 0 10px 30px rgba(0,0,0,0.8);
      font-size: 0.875rem;
      font-weight: 600;
      display: flex;
      align-items: center;
      gap: 10px;
      pointer-events: auto;
      animation: toastIn 0.25s cubic-bezier(0.16, 1, 0.3, 1);
    `;

    toast.innerHTML = `
      <i data-lucide="${type === 'error' ? 'alert-circle' : 'check-circle'}" style="color: var(--color-gold); width: 16px; height: 16px;"></i>
      <span>${message}</span>
    `;

    toastContainer.appendChild(toast);
    if (window.lucide) window.lucide.createIcons();

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(8px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 3200);
  };
}

/* ==========================================================================
   SHARE MODAL
   ========================================================================== */

function initShareModal() {
  const modal = document.getElementById('shareModal');
  const closeBtn = document.getElementById('closeShareModalBtn');
  const copyBtn = document.getElementById('copyShareLinkBtn');
  const input = document.getElementById('shareLinkInput');

  window.openShareModal = function(title = 'Travel Mark Experience') {
    if (navigator.share) {
      navigator.share({
        title: `${title} — Travel Mark`,
        text: `Discover ${title} on Travel Mark — Real Indian Travel Experiences`,
        url: window.location.href
      }).catch(() => {});
    } else {
      if (input) input.value = window.location.href;
      modal.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
  };

  closeBtn?.addEventListener('click', () => {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  });

  copyBtn?.addEventListener('click', () => {
    if (input) {
      input.select();
      navigator.clipboard.writeText(input.value);
      window.showToast("Link copied to clipboard!");
      modal.classList.remove('open');
      document.body.style.overflow = '';
    }
  });

  modal?.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('open');
      document.body.style.overflow = '';
    }
  });
}

/* ==========================================================================
   REPORT MODAL
   ========================================================================== */

function initReportModal() {
  const modal = document.getElementById('reportModal');
  const closeBtn = document.getElementById('closeReportModalBtn');
  const form = document.getElementById('reportForm');

  window.openReportModal = function(type, id) {
    activeReportTarget = { type, id };
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  closeBtn?.addEventListener('click', () => {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  });

  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    const reason = document.getElementById('reportReasonSelect').value;
    const details = document.getElementById('reportDetailsTextarea').value.trim();

    appState.submitReport({
      targetType: activeReportTarget.type,
      targetId: activeReportTarget.id,
      reason,
      details
    });

    modal.classList.remove('open');
    document.body.style.overflow = '';
    window.showToast("Thank you for helping keep our community authentic and respectful. The moderation team has received your report.");
  });
}

/* ==========================================================================
   REVIEW MODAL
   ========================================================================== */

function initReviewModal() {
  const modal = document.getElementById('reviewModal');
  const closeBtn = document.getElementById('closeReviewModalBtn');
  const form = document.getElementById('reviewForm');
  const stars = document.querySelectorAll('#reviewStarsRating .star-btn');
  let selectedRating = 5;

  window.openReviewModal = function(destinationId) {
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
    const destSelect = document.getElementById('reviewDestSelect');
    if (destSelect && destinationId) destSelect.value = destinationId;
  };

  closeBtn?.addEventListener('click', () => {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  });

  stars.forEach((star, index) => {
    star.addEventListener('click', () => {
      selectedRating = index + 1;
      stars.forEach((s, i) => {
        s.style.color = (i < selectedRating) ? 'var(--color-gold)' : 'var(--text-muted)';
        s.querySelector('i').style.fill = (i < selectedRating) ? 'var(--color-gold)' : 'none';
      });
    });
  });

  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    const text = document.getElementById('reviewContentInput').value.trim();
    modal.classList.remove('open');
    document.body.style.overflow = '';
    window.showToast(`Review published with ${selectedRating} stars! Thank you for sharing your experience.`);
  });
}
