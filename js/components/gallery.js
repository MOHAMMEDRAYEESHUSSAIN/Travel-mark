/* ==========================================================================
   TRAVEL MARK — TRAVEL PHOTOGRAPHY GALLERY & FULLSCREEN LIGHTBOX
   ========================================================================== */

import { appState } from '../state.js';

let currentLightboxIndex = 0;
let filteredPhotos = [];

export function initGallery() {
  renderGalleryGrid();
  initGalleryFilterChips();
  initLightboxControls();
  initPhotoUploadModal();

  appState.subscribe((event) => {
    if (event === 'photos_updated') {
      renderGalleryGrid();
    }
  });
}

function initGalleryFilterChips() {
  const chips = document.querySelectorAll('.gallery-filter-chip');
  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      chips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      const category = chip.getAttribute('data-tag');
      renderGalleryGrid(category);
    });
  });
}

export function renderGalleryGrid(filterTag = 'all') {
  const grid = document.getElementById('galleryMasonryGrid');
  if (!grid) return;

  filteredPhotos = [...appState.photos];
  if (filterTag && filterTag !== 'all') {
    filteredPhotos = filteredPhotos.filter(p =>
      p.tags.some(t => t.toLowerCase() === filterTag.toLowerCase()) ||
      p.destination.toLowerCase().includes(filterTag.toLowerCase())
    );
  }

  if (filteredPhotos.length === 0) {
    grid.innerHTML = `
      <div style="column-span: all; padding: 48px; text-align: center; color: var(--text-muted);">
        No photos found for this category.
      </div>
    `;
    return;
  }

  grid.innerHTML = filteredPhotos.map((photo, index) => `
    <div class="gallery-photo-item" onclick="window.openLightbox(${index})">
      <img class="gallery-photo-img" src="${photo.thumb || photo.url}" alt="${photo.caption}" loading="lazy" />
      <div class="gallery-photo-overlay">
        <div class="gallery-photo-caption">${photo.caption}</div>
        <div class="gallery-photo-author">
          <i data-lucide="camera" style="width: 12px; height: 12px; display: inline-block;"></i>
          ${photo.author} • ${photo.destination}
        </div>
      </div>
    </div>
  `).join('');

  if (window.lucide) window.lucide.createIcons();
}

function initLightboxControls() {
  const lightbox = document.getElementById('galleryLightboxModal');
  const closeBtn = document.getElementById('closeLightboxBtn');
  const prevBtn = document.getElementById('lightboxPrevBtn');
  const nextBtn = document.getElementById('lightboxNextBtn');
  const likeBtn = document.getElementById('lightboxLikeBtn');

  window.openLightbox = function(index) {
    currentLightboxIndex = index;
    updateLightboxUI();
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  closeBtn?.addEventListener('click', () => {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
  });

  prevBtn?.addEventListener('click', () => {
    if (currentLightboxIndex > 0) {
      currentLightboxIndex--;
    } else {
      currentLightboxIndex = filteredPhotos.length - 1;
    }
    updateLightboxUI();
  });

  nextBtn?.addEventListener('click', () => {
    if (currentLightboxIndex < filteredPhotos.length - 1) {
      currentLightboxIndex++;
    } else {
      currentLightboxIndex = 0;
    }
    updateLightboxUI();
  });

  likeBtn?.addEventListener('click', () => {
    const photo = filteredPhotos[currentLightboxIndex];
    if (photo) {
      appState.toggleLikePhoto(photo.id);
      updateLightboxUI();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('open')) return;
    if (e.key === 'Escape') {
      lightbox.classList.remove('open');
      document.body.style.overflow = '';
    } else if (e.key === 'ArrowLeft') {
      prevBtn.click();
    } else if (e.key === 'ArrowRight') {
      nextBtn.click();
    }
  });
}

function updateLightboxUI() {
  const photo = filteredPhotos[currentLightboxIndex];
  if (!photo) return;

  const imgEl = document.getElementById('lightboxActiveImg');
  const captionEl = document.getElementById('lightboxCaptionText');
  const authorEl = document.getElementById('lightboxAuthorText');
  const metaEl = document.getElementById('lightboxMetaText');
  const likeCountEl = document.getElementById('lightboxLikesCount');
  const heartIcon = document.querySelector('#lightboxLikeBtn i');

  if (imgEl) imgEl.src = photo.url;
  if (captionEl) captionEl.textContent = photo.caption;
  if (authorEl) authorEl.textContent = `Captured by ${photo.author} at ${photo.destination}`;
  if (metaEl) metaEl.textContent = photo.camera || `${photo.destination}, ${photo.state}`;
  if (likeCountEl) likeCountEl.textContent = `${photo.likes} Likes`;
  if (heartIcon) {
    heartIcon.style.fill = photo.liked ? '#E25555' : 'none';
    heartIcon.style.color = photo.liked ? '#E25555' : '#FFFFFF';
  }
}

function initPhotoUploadModal() {
  const modal = document.getElementById('uploadPhotoModal');
  const closeBtn = document.getElementById('closeUploadPhotoBtn');
  const submitBtn = document.getElementById('submitUploadPhotoBtn');
  const fileInput = document.getElementById('uploadPhotoFileInput');
  const previewImg = document.getElementById('uploadPhotoPreviewImg');

  window.openPhotoUploadModal = function(destinationId = '') {
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
    const destSelect = document.getElementById('uploadPhotoDestSelect');
    if (destSelect && destinationId) {
      destSelect.value = destinationId;
    }
  };

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

  fileInput?.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (loadEvent) => {
        previewImg.src = loadEvent.target.result;
        previewImg.style.display = 'block';
      };
      reader.readAsDataURL(file);
    }
  });

  submitBtn?.addEventListener('click', () => {
    const caption = document.getElementById('uploadPhotoCaptionInput').value.trim();
    const destSelect = document.getElementById('uploadPhotoDestSelect');
    const destName = destSelect.options[destSelect.selectedIndex]?.text || "India";
    const destId = destSelect.value;
    const photoUrl = previewImg.src || "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=80";

    if (!caption) {
      alert("Please provide a caption for your photo.");
      return;
    }

    appState.addPhoto({
      url: photoUrl,
      thumb: photoUrl,
      caption,
      destination: destName,
      destinationId: destId,
      state: "India",
      camera: "Travel Mark Community Upload",
      tags: ["Community", "Exploration"]
    });

    modal.classList.remove('open');
    document.body.style.overflow = '';
    window.showToast("Your photograph has been shared to the gallery!");
  });
}
