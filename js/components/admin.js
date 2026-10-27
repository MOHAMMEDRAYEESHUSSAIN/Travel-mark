/* ==========================================================================
   TRAVEL MARK — ADMIN DASHBOARD & CONTENT MODERATION QUEUE
   ========================================================================== */

import { appState } from '../state.js';

export function initAdminDashboard() {
  renderAdminMetrics();
  renderAdminTabs();
  renderModerationQueue();
  renderAdminDestinations();

  appState.subscribe((event) => {
    if (event === 'report_submitted' || event === 'reports_updated' || event === 'stories_updated') {
      renderAdminMetrics();
      renderModerationQueue();
      renderAdminDestinations();
    }
  });
}

function renderAdminMetrics() {
  const destVal = document.getElementById('adminMetricDestinations');
  const storiesVal = document.getElementById('adminMetricStories');
  const photosVal = document.getElementById('adminMetricPhotos');
  const reportsVal = document.getElementById('adminMetricReports');

  if (destVal) destVal.textContent = appState.destinations.length;
  if (storiesVal) storiesVal.textContent = appState.stories.length;
  if (photosVal) photosVal.textContent = appState.photos.length;
  if (reportsVal) reportsVal.textContent = appState.reports.filter(r => r.status === 'pending').length;
}

function renderAdminTabs() {
  const tabs = document.querySelectorAll('.admin-tab-btn');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const target = tab.getAttribute('data-target');

      document.querySelectorAll('.admin-tab-pane').forEach(p => p.classList.remove('active'));
      const pane = document.getElementById(`adminPane-${target}`);
      if (pane) pane.classList.add('active');
    });
  });
}

function renderModerationQueue() {
  const container = document.getElementById('adminModerationList');
  if (!container) return;

  const pending = appState.reports.filter(r => r.status === 'pending');

  if (pending.length === 0) {
    container.innerHTML = `
      <div style="padding: 32px; text-align: center; color: var(--text-muted);">
        <i data-lucide="check-check" style="width: 36px; height: 36px; color: var(--color-gold); margin-bottom: 8px;"></i>
        <div>All moderation queues are clear. No pending community reports.</div>
      </div>
    `;
    if (window.lucide) window.lucide.createIcons();
    return;
  }

  container.innerHTML = pending.map(rep => `
    <div style="background: rgba(255,255,255,0.03); border: 1px solid var(--border-medium); border-radius: var(--radius-md); padding: 16px; margin-bottom: 12px; display: flex; justify-content: space-between; align-items: center; gap: 16px;">
      <div>
        <div style="font-size: 0.75rem; color: var(--color-terracotta); font-weight: 700; text-transform: uppercase;">Flagged ${rep.type || 'Content'} (Report ID: ${rep.id})</div>
        <div style="font-size: 0.875rem; color: var(--text-primary); margin: 4px 0;">Reason: ${rep.reason || 'Flagged by community traveler'}</div>
        <div style="font-size: 0.75rem; color: var(--text-muted);">Reported on ${new Date(rep.date).toLocaleDateString()} by @${rep.reporter}</div>
      </div>
      <div style="display: flex; gap: 8px;">
        <button class="btn btn-secondary btn-sm" onclick="window.resolveReportAction('${rep.id}', 'dismissed')">
          Dismiss
        </button>
        <button class="btn btn-primary btn-sm" style="background: #E25555; color: #fff;" onclick="window.resolveReportAction('${rep.id}', 'approved')">
          Remove Content
        </button>
      </div>
    </div>
  `).join('');

  if (window.lucide) window.lucide.createIcons();
}

window.resolveReportAction = function(reportId, action) {
  appState.resolveReport(reportId, action);
  window.showToast(`Report ${action === 'approved' ? 'acted upon and content restricted' : 'dismissed'}.`);
};

function renderAdminDestinations() {
  const tableBody = document.getElementById('adminDestinationsTableBody');
  if (!tableBody) return;

  tableBody.innerHTML = appState.destinations.map(d => `
    <tr style="border-bottom: 1px solid var(--border-subtle);">
      <td style="padding: 12px 16px; display: flex; align-items: center; gap: 10px;">
        <img src="${d.coverImage}" style="width: 36px; height: 36px; border-radius: 6px; object-fit: cover;" alt="${d.name}" />
        <span style="font-weight: 600; color: var(--text-primary);">${d.name}</span>
      </td>
      <td style="padding: 12px 16px; color: var(--text-secondary); font-size: 0.8125rem;">${d.city}, ${d.state}</td>
      <td style="padding: 12px 16px; color: var(--color-gold); font-size: 0.8125rem;">${d.category}</td>
      <td style="padding: 12px 16px; font-weight: 700; color: var(--text-primary); font-size: 0.8125rem;">★ ${d.rating}</td>
      <td style="padding: 12px 16px;">
        <button class="btn btn-secondary btn-sm" onclick="window.openDestinationModal('${d.id}')" style="padding: 4px 10px; font-size: 0.75rem;">
          View
        </button>
      </td>
    </tr>
  `).join('');
}
