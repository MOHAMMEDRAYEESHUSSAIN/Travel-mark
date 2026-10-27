/* ==========================================================================
   TRAVEL MARK — UNIFIED STATE & STORAGE MANAGER
   Reactive state management with persistent LocalStorage backing.
   Supports Auth, Wishlists, Custom Travel Plans, Community Posts,
   Moderation Reports, and Multi-Criteria Discovery Filters.
   ========================================================================== */

import { DESTINATIONS_DATA } from './data/destinations.js';
import { FOODS_DATA } from './data/foods.js';
import { SACRED_DATA } from './data/sacred.js';
import { AMUSEMENTS_DATA } from './data/amusements.js';
import { INITIAL_STORIES } from './data/stories.js';
import { INITIAL_GALLERY_PHOTOS } from './data/galleryData.js';

const STORAGE_KEYS = {
  USER: 'travelmark_user',
  WISHLIST: 'travelmark_wishlist',
  STORIES: 'travelmark_stories',
  PHOTOS: 'travelmark_photos',
  PLANS: 'travelmark_plans',
  NOTIFICATIONS: 'travelmark_notifications',
  REPORTS: 'travelmark_reports'
};

// Initial Demo Explorer Profile
const DEFAULT_USER = {
  id: "user-traveller-1",
  name: "Arjun Venkat",
  username: "arjun_wanderlust",
  email: "arjun.venkat@travelmark.in",
  avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
  bio: "Passionate photographer, mountain trekker, and heritage explorer discovering India one chai stall and ghat at a time.",
  region: "Bengaluru, Karnataka",
  languages: ["English", "Hindi", "Kannada", "Tamil"],
  favoriteCategories: ["Forts and palaces", "Mountains and hill stations", "Local food and cuisine"],
  isAdmin: true, // Empower user to test the Admin Dashboard
  followersCount: 148,
  followingCount: 92,
  isLoggedIn: true
};

const DEFAULT_NOTIFICATIONS = [
  { id: "n-1", title: "New Comment", message: "Meera Nair replied to your experience in Varanasi", time: "2h ago", read: false, icon: "message-square" },
  { id: "n-2", title: "Plan Saved", message: "Your 3-Day Golden Triangle itinerary is ready to view", time: "1d ago", read: false, icon: "map-pin" },
  { id: "n-3", title: "Community Welcome", message: "Welcome to Travel Mark! Discover India through real traveler journeys.", time: "3d ago", read: true, icon: "compass" }
];

class TravelMarkState {
  constructor() {
    this.destinations = DESTINATIONS_DATA;
    this.foods = FOODS_DATA;
    this.sacred = SACRED_DATA;
    this.amusements = AMUSEMENTS_DATA;
    
    // Load or initialize persistent storage
    this.currentUser = this.load(STORAGE_KEYS.USER, DEFAULT_USER);
    this.wishlist = new Set(this.load(STORAGE_KEYS.WISHLIST, ["taj-mahal-agra", "alleppey-kerala"]));
    this.stories = this.load(STORAGE_KEYS.STORIES, INITIAL_STORIES);
    this.photos = this.load(STORAGE_KEYS.PHOTOS, INITIAL_GALLERY_PHOTOS);
    this.plans = this.load(STORAGE_KEYS.PLANS, []);
    this.notifications = this.load(STORAGE_KEYS.NOTIFICATIONS, DEFAULT_NOTIFICATIONS);
    this.reports = this.load(STORAGE_KEYS.REPORTS, []);

    // Active Navigation & View State
    this.activePage = 'home';
    this.activeDetailId = null;

    // Explore India Filter Criteria
    this.exploreFilters = {
      searchQuery: '',
      experienceType: 'all',
      tradition: 'all',
      dietary: 'all',
      budget: 'all',
      state: 'all',
      sortBy: 'rating-desc'
    };

    this.listeners = new Set();
  }

  load(key, fallback) {
    try {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : fallback;
    } catch (e) {
      console.warn(`LocalStorage read error for ${key}:`, e);
      return fallback;
    }
  }

  save(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.warn(`LocalStorage write error for ${key}:`, e);
    }
  }

  subscribe(listener) {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  notify(event, payload = {}) {
    this.listeners.forEach(cb => cb(event, payload));
  }

  // --- Auth & Profile ---
  login(userData) {
    this.currentUser = { ...DEFAULT_USER, ...userData, isLoggedIn: true };
    this.save(STORAGE_KEYS.USER, this.currentUser);
    this.notify('auth_change', this.currentUser);
  }

  logout() {
    this.currentUser = { ...this.currentUser, isLoggedIn: false };
    this.save(STORAGE_KEYS.USER, this.currentUser);
    this.notify('auth_change', this.currentUser);
  }

  updateProfile(updates) {
    this.currentUser = { ...this.currentUser, ...updates };
    this.save(STORAGE_KEYS.USER, this.currentUser);
    this.notify('profile_updated', this.currentUser);
  }

  // --- Wishlist / Saved Places ---
  toggleWishlist(destinationId) {
    if (this.wishlist.has(destinationId)) {
      this.wishlist.delete(destinationId);
    } else {
      this.wishlist.add(destinationId);
    }
    this.save(STORAGE_KEYS.WISHLIST, Array.from(this.wishlist));
    this.notify('wishlist_change', { id: destinationId, isSaved: this.wishlist.has(destinationId) });
    return this.wishlist.has(destinationId);
  }

  isSaved(destinationId) {
    return this.wishlist.has(destinationId);
  }

  getSavedDestinations() {
    return this.destinations.filter(d => this.wishlist.has(d.id));
  }

  // --- Community Stories ---
  addStory(newStory) {
    const story = {
      id: "story-" + Date.now(),
      author: {
        id: this.currentUser.id,
        name: this.currentUser.name,
        username: `@${this.currentUser.username}`,
        avatar: this.currentUser.avatar,
        region: this.currentUser.region || "Explorer",
        badge: "Verified Explorer"
      },
      likes: 0,
      saved: false,
      liked: false,
      comments: [],
      date: "Just now",
      ...newStory
    };
    this.stories = [story, ...this.stories];
    this.save(STORAGE_KEYS.STORIES, this.stories);
    this.notify('stories_updated', this.stories);
    return story;
  }

  toggleLikeStory(storyId) {
    const story = this.stories.find(s => s.id === storyId);
    if (!story) return;
    story.liked = !story.liked;
    story.likes += story.liked ? 1 : -1;
    this.save(STORAGE_KEYS.STORIES, this.stories);
    this.notify('story_liked', story);
  }

  addCommentToStory(storyId, commentText) {
    const story = this.stories.find(s => s.id === storyId);
    if (!story) return;
    const newComment = {
      id: "c-" + Date.now(),
      author: this.currentUser.name,
      avatar: this.currentUser.avatar,
      date: "Just now",
      text: commentText
    };
    story.comments = story.comments || [];
    story.comments.push(newComment);
    this.save(STORAGE_KEYS.STORIES, this.stories);
    this.notify('comment_added', { storyId, comment: newComment });
  }

  deleteStory(storyId) {
    this.stories = this.stories.filter(s => s.id !== storyId);
    this.save(STORAGE_KEYS.STORIES, this.stories);
    this.notify('stories_updated', this.stories);
  }

  // --- Photo Gallery ---
  addPhoto(newPhoto) {
    const photo = {
      id: "photo-" + Date.now(),
      author: this.currentUser.name,
      authorAvatar: this.currentUser.avatar,
      likes: 0,
      date: "Just now",
      ...newPhoto
    };
    this.photos = [photo, ...this.photos];
    this.save(STORAGE_KEYS.PHOTOS, this.photos);
    this.notify('photos_updated', this.photos);
    return photo;
  }

  toggleLikePhoto(photoId) {
    const photo = this.photos.find(p => p.id === photoId);
    if (!photo) return;
    photo.liked = !photo.liked;
    photo.likes += photo.liked ? 1 : -1;
    this.save(STORAGE_KEYS.PHOTOS, this.photos);
    this.notify('photos_updated', this.photos);
  }

  // --- Travel Planner ---
  savePlan(planData) {
    const plan = {
      id: "plan-" + Date.now(),
      createdAt: new Date().toLocaleDateString('en-IN', { month: 'short', day: 'numeric', year: 'numeric' }),
      ...planData
    };
    this.plans = [plan, ...this.plans];
    this.save(STORAGE_KEYS.PLANS, this.plans);
    this.notify('plans_updated', this.plans);
    return plan;
  }

  deletePlan(planId) {
    this.plans = this.plans.filter(p => p.id !== planId);
    this.save(STORAGE_KEYS.PLANS, this.plans);
    this.notify('plans_updated', this.plans);
  }

  // --- Reports & Moderation ---
  submitReport(reportData) {
    const report = {
      id: "rep-" + Date.now(),
      date: new Date().toISOString(),
      status: "pending",
      reporter: this.currentUser.username,
      ...reportData
    };
    this.reports = [report, ...this.reports];
    this.save(STORAGE_KEYS.REPORTS, this.reports);
    this.notify('report_submitted', report);
  }

  resolveReport(reportId, action) {
    const rep = this.reports.find(r => r.id === reportId);
    if (rep) {
      rep.status = action; // 'approved' or 'dismissed'
      this.save(STORAGE_KEYS.REPORTS, this.reports);
      this.notify('reports_updated', this.reports);
    }
  }

  // --- Notifications ---
  markAllNotificationsRead() {
    this.notifications.forEach(n => n.read = true);
    this.save(STORAGE_KEYS.NOTIFICATIONS, this.notifications);
    this.notify('notifications_updated', this.notifications);
  }
}

export const appState = new TravelMarkState();
