/* ==========================================================================
   TRAVEL MARK — COMMUNITY REAL EXPERIENCES & 8-STEP SUBMISSION FORM
   ========================================================================== */

import { appState } from '../state.js';

let currentStep = 1;
let uploadedPhotos = [];

export function initCommunityFeed() {
  renderStoriesFeed();
  initCommunitySortControls();
  initExperienceSubmissionWizard();

  appState.subscribe((event) => {
    if (event === 'stories_updated' || event === 'story_liked' || event === 'comment_added') {
      renderStoriesFeed();
    }
  });
}

function initCommunitySortControls() {
  const sortBtns = document.querySelectorAll('.feed-sort-btn');
  sortBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      sortBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const sort = btn.getAttribute('data-sort');
      renderStoriesFeed(sort);
    });
  });
}

export function renderStoriesFeed(sortBy = 'newest') {
  const feedContainer = document.getElementById('communityStoriesFeed');
  if (!feedContainer) return;

  let stories = [...appState.stories];
  if (sortBy === 'likes') {
    stories.sort((a, b) => b.likes - a.likes);
  } else if (sortBy === 'rating') {
    stories.sort((a, b) => b.rating - a.rating);
  }

  if (stories.length === 0) {
    feedContainer.innerHTML = `
      <div style="padding: 48px; text-align: center; background: var(--color-midnight-elevated); border-radius: var(--radius-xl); border: 1px dashed var(--border-medium);">
        <i data-lucide="compass" style="width: 48px; height: 48px; color: var(--color-gold); margin-bottom: 12px;"></i>
        <h3 style="color: var(--text-primary); margin-bottom: 6px;">No Stories Shared Yet</h3>
        <p style="color: var(--text-secondary); margin-bottom: 16px;">Be the first explorer to share your authentic travel journey with the Travel Mark community.</p>
        <button class="btn btn-primary" onclick="window.openCreatePostModal()">Share Your Experience</button>
      </div>
    `;
    if (window.lucide) window.lucide.createIcons();
    return;
  }

  feedContainer.innerHTML = stories.map(story => createStoryCardHTML(story)).join('');
  if (window.lucide) window.lucide.createIcons();
}

function createStoryCardHTML(story) {
  const photosHtml = (story.photos || []).map(p => `
    <img src="${p}" style="width: 100%; max-height: 380px; object-fit: cover; border-radius: var(--radius-md); margin-bottom: 10px;" alt="${story.title}" loading="lazy" />
  `).join('');

  const tagsHtml = (story.tags || []).map(t => `<span class="card-tag">#${t}</span>`).join('');

  const commentsHtml = (story.comments || []).map(c => `
    <div style="display: flex; gap: 10px; margin-bottom: 8px; font-size: 0.8125rem;">
      <img src="${c.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&q=80'}" style="width: 28px; height: 28px; border-radius: 50%; object-fit: cover; flex-shrink: 0;" alt="${c.author}" />
      <div style="background: rgba(255,255,255,0.04); border-radius: var(--radius-sm); padding: 8px 12px; flex: 1;">
        <span style="font-weight: 700; color: var(--text-primary);">${c.author}</span>
        <span style="font-size: 0.6875rem; color: var(--text-muted); margin-left: 6px;">${c.date}</span>
        <p style="color: var(--text-secondary); margin-top: 2px;">${c.text}</p>
      </div>
    </div>
  `).join('');

  const isLiked = story.liked;

  return `
    <article class="story-card" id="story-${story.id}">
      <!-- Author Row -->
      <div class="story-header">
        <div class="story-author-info">
          <img class="story-author-avatar" src="${story.author.avatar}" alt="${story.author.name}" />
          <div>
            <div class="story-author-name">${story.author.name}</div>
            <div style="font-size: 0.6875rem; color: var(--color-gold);">${story.author.badge} • ${story.author.region}</div>
          </div>
        </div>
        <div style="display: flex; align-items: center; gap: 8px;">
          <span style="font-size: 0.75rem; color: var(--text-muted);">${story.date}</span>
          <button onclick="window.openReportModal('story', '${story.id}')" style="color: var(--text-muted); padding: 4px;" title="Report inappropriate post">
            <i data-lucide="flag" style="width: 14px; height: 14px;"></i>
          </button>
        </div>
      </div>

      <!-- Destination Badge & Title -->
      <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px;">
        <span style="font-size: 0.6875rem; font-weight: 700; color: var(--color-gold); background: rgba(232,184,92,0.12); padding: 2px 8px; border-radius: var(--radius-full); border: 1px solid var(--border-gold);">
          ${story.destination} (${story.state})
        </span>
        <span style="font-size: 0.75rem; color: var(--text-muted);">Visited: ${story.date}</span>
        <span style="margin-left: auto; display: flex; align-items: center; gap: 4px; color: var(--color-gold); font-weight: 700; font-size: 0.8125rem;">
          <i data-lucide="star" style="width: 14px; height: 14px; fill: var(--color-gold);"></i> ${story.rating}
        </span>
      </div>

      <h3 style="font-size: 1.35rem; color: var(--text-primary); margin-bottom: 12px; line-height: 1.3;">${story.title}</h3>

      <!-- Photos -->
      <div style="margin-bottom: 14px;">
        ${photosHtml}
      </div>

      <!-- Story Narrative -->
      <p style="font-size: 0.9375rem; color: var(--text-secondary); line-height: 1.65; margin-bottom: 16px;">
        ${story.content}
      </p>

      <!-- Practical Travel Details Grid -->
      <div style="background: rgba(255,255,255,0.03); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 14px; margin-bottom: 16px; display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 12px; font-size: 0.8125rem;">
        <div>
          <span style="color: var(--color-gold); font-weight: 700;">Personal Spending:</span>
          <div style="color: var(--text-primary);">${story.spending || '₹3,500 - ₹5,000 approx'}</div>
        </div>
        <div>
          <span style="color: var(--color-gold); font-weight: 700;">Trip Duration:</span>
          <div style="color: var(--text-primary);">${story.tripDuration || 'Weekend trip'}</div>
        </div>
        ${story.foodRecommendations ? `
          <div style="grid-column: 1 / -1;">
            <span style="color: var(--color-gold); font-weight: 700;">Food Recommendations:</span>
            <div style="color: var(--text-secondary);">${story.foodRecommendations}</div>
          </div>
        ` : ''}
        ${story.hiddenGem ? `
          <div style="grid-column: 1 / -1;">
            <span style="color: var(--color-olive-light); font-weight: 700;">Hidden Gem:</span>
            <div style="color: var(--text-secondary);">${story.hiddenGem}</div>
          </div>
        ` : ''}
        ${story.thingsToAvoid ? `
          <div style="grid-column: 1 / -1;">
            <span style="color: var(--color-terracotta); font-weight: 700;">Things to Avoid:</span>
            <div style="color: var(--text-secondary);">${story.thingsToAvoid}</div>
          </div>
        ` : ''}
      </div>

      <!-- Tags -->
      <div style="display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 16px;">
        ${tagsHtml}
      </div>

      <!-- Action Bar (Likes, Comments Count, Share) -->
      <div style="display: flex; align-items: center; justify-content: space-between; padding-top: 12px; border-top: 1px solid var(--border-subtle);">
        <div style="display: flex; gap: 16px;">
          <button onclick="window.likeStory('${story.id}')" style="display: flex; align-items: center; gap: 6px; color: ${isLiked ? '#E25555' : 'var(--text-secondary)'}; font-size: 0.875rem; font-weight: 600; cursor: pointer;">
            <i data-lucide="heart" style="width: 18px; height: 18px; ${isLiked ? 'fill: #E25555;' : ''}"></i>
            <span>${story.likes} Likes</span>
          </button>
          <button onclick="document.getElementById('commentSection-${story.id}').style.display = document.getElementById('commentSection-${story.id}').style.display === 'block' ? 'none' : 'block'" style="display: flex; align-items: center; gap: 6px; color: var(--text-secondary); font-size: 0.875rem; font-weight: 600; cursor: pointer;">
            <i data-lucide="message-square" style="width: 18px; height: 18px;"></i>
            <span>${(story.comments || []).length} Comments</span>
          </button>
        </div>
        <div>
          <button onclick="window.openShareModal('${story.title}')" style="color: var(--text-secondary); padding: 4px; cursor: pointer;" title="Share story">
            <i data-lucide="share-2" style="width: 18px; height: 18px;"></i>
          </button>
        </div>
      </div>

      <!-- Comments Container -->
      <div id="commentSection-${story.id}" style="display: none; margin-top: 16px; padding-top: 16px; border-top: 1px dashed var(--border-subtle);">
        <div style="margin-bottom: 12px;">${commentsHtml || '<div style="font-size: 0.75rem; color: var(--text-muted); margin-bottom: 8px;">No comments yet. Start the conversation!</div>'}</div>
        <form onsubmit="event.preventDefault(); window.submitStoryComment('${story.id}', this);" style="display: flex; gap: 8px;">
          <input type="text" name="comment" placeholder="Write a helpful tip or comment..." style="flex: 1; background: rgba(16,16,15,0.7); border: 1px solid var(--border-subtle); border-radius: var(--radius-full); padding: 8px 16px; font-size: 0.8125rem; color: var(--text-primary);" required />
          <button type="submit" class="btn btn-primary btn-sm" style="border-radius: var(--radius-full); padding: 8px 14px;">Post</button>
        </form>
      </div>
    </article>
  `;
}

window.likeStory = function(storyId) {
  appState.toggleLikeStory(storyId);
};

window.submitStoryComment = function(storyId, form) {
  const input = form.querySelector('input[name="comment"]');
  const val = input.value.trim();
  if (val) {
    appState.addCommentToStory(storyId, val);
    input.value = '';
    window.showToast("Comment posted!");
  }
};

/* ==========================================================================
   8-STEP EXPERIENCE SUBMISSION WIZARD
   ========================================================================== */

function initExperienceSubmissionWizard() {
  const modal = document.getElementById('createPostModal');
  const closeBtn = document.getElementById('closeCreatePostBtn');
  const nextBtn = document.getElementById('wizardNextBtn');
  const prevBtn = document.getElementById('wizardPrevBtn');
  const publishBtn = document.getElementById('wizardPublishBtn');

  window.openCreatePostModal = function() {
    currentStep = 1;
    uploadedPhotos = [];
    updateWizardStepUI();
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
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

  // Photo Input Handling (Supports real files or fast sample images)
  const photoInput = document.getElementById('postPhotoInput');
  const photoPreviews = document.getElementById('postPhotoPreviews');

  photoInput?.addEventListener('change', (e) => {
    const files = Array.from(e.target.files);
    files.forEach(file => {
      const reader = new FileReader();
      reader.onload = (loadEvent) => {
        uploadedPhotos.push(loadEvent.target.result);
        renderPhotoPreviews();
      };
      reader.readAsDataURL(file);
    });
  });

  // Quick preset sample photo buttons for instant testing
  window.addSamplePhoto = function(url) {
    uploadedPhotos.push(url);
    renderPhotoPreviews();
  };

  function renderPhotoPreviews() {
    if (!photoPreviews) return;
    photoPreviews.innerHTML = uploadedPhotos.map((p, idx) => `
      <div style="position: relative; width: 90px; height: 90px; border-radius: 8px; overflow: hidden; border: 1px solid var(--border-medium);">
        <img src="${p}" style="width: 100%; height: 100%; object-fit: cover;" alt="Upload preview" />
        <button onclick="window.removeUploadedPhoto(${idx})" style="position: absolute; top: 2px; right: 2px; background: rgba(0,0,0,0.7); color: #fff; width: 20px; height: 20px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 10px; cursor: pointer;">✕</button>
      </div>
    `).join('');
  }

  window.removeUploadedPhoto = function(idx) {
    uploadedPhotos.splice(idx, 1);
    renderPhotoPreviews();
  };

  nextBtn?.addEventListener('click', () => {
    if (validateStep(currentStep)) {
      currentStep++;
      if (currentStep === 7) buildLivePreview();
      updateWizardStepUI();
    }
  });

  prevBtn?.addEventListener('click', () => {
    if (currentStep > 1) {
      currentStep--;
      updateWizardStepUI();
    }
  });

  publishBtn?.addEventListener('click', () => {
    const title = document.getElementById('postTitleInput').value.trim();
    const destName = document.getElementById('postDestSelect').value;
    const content = document.getElementById('postStoryContent').value.trim();
    const category = document.getElementById('postCategorySelect').value;
    const food = document.getElementById('postFoodInput').value.trim();
    const tips = document.getElementById('postTipsInput').value.trim();
    const costs = document.getElementById('postCostInput').value.trim();

    const newStory = {
      title,
      destination: destName,
      state: "India",
      content,
      category,
      spending: costs || "₹3,500 approx",
      tripDuration: "2 Days",
      rating: 5.0,
      foodRecommendations: food,
      transportTips: tips,
      photos: uploadedPhotos.length > 0 ? uploadedPhotos : [
        "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=80"
      ],
      tags: ["TravelMark", "RealExperience", category.split(' ')[0]]
    };

    appState.addStory(newStory);
    modal.classList.remove('open');
    document.body.style.overflow = '';
    window.showToast("Your travel experience has been published successfully!");
  });
}

function validateStep(step) {
  if (step === 1) {
    const dest = document.getElementById('postDestSelect');
    if (!dest || !dest.value) {
      alert("Please select a destination");
      return false;
    }
  } else if (step === 3) {
    const title = document.getElementById('postTitleInput');
    const content = document.getElementById('postStoryContent');
    if (!title.value.trim() || !content.value.trim()) {
      alert("Please provide both a title and your experience story");
      return false;
    }
  }
  return true;
}

function updateWizardStepUI() {
  document.querySelectorAll('.wizard-step-pane').forEach((pane, idx) => {
    pane.style.display = (idx + 1 === currentStep) ? 'block' : 'none';
  });

  const stepIndicator = document.getElementById('wizardStepIndicator');
  if (stepIndicator) stepIndicator.textContent = `Step ${currentStep} of 8`;

  const prevBtn = document.getElementById('wizardPrevBtn');
  const nextBtn = document.getElementById('wizardNextBtn');
  const publishBtn = document.getElementById('wizardPublishBtn');

  if (prevBtn) prevBtn.style.display = currentStep > 1 ? 'block' : 'none';
  if (nextBtn) nextBtn.style.display = currentStep < 8 ? 'block' : 'none';
  if (publishBtn) publishBtn.style.display = currentStep === 8 ? 'block' : 'none';
}

function buildLivePreview() {
  const previewBox = document.getElementById('wizardLivePreviewBox');
  if (!previewBox) return;

  const title = document.getElementById('postTitleInput')?.value || "Untitled Journey";
  const dest = document.getElementById('postDestSelect')?.value || "India";
  const content = document.getElementById('postStoryContent')?.value || "Your story will appear here...";

  previewBox.innerHTML = `
    <div style="background: rgba(255,255,255,0.03); border: 1px solid var(--border-gold); border-radius: var(--radius-lg); padding: 20px;">
      <span style="font-size: 0.6875rem; color: var(--color-gold); font-weight: 700; text-transform: uppercase;">${dest}</span>
      <h3 style="font-size: 1.25rem; color: var(--text-primary); margin: 6px 0 10px 0;">${title}</h3>
      <p style="font-size: 0.875rem; color: var(--text-secondary); line-height: 1.6;">${content}</p>
      ${uploadedPhotos.length > 0 ? `<div style="display: flex; gap: 8px; margin-top: 12px; overflow-x: auto;">${uploadedPhotos.map(p => `<img src="${p}" style="width: 80px; height: 80px; border-radius: 6px; object-fit: cover;" />`).join('')}</div>` : ''}
    </div>
  `;
}
