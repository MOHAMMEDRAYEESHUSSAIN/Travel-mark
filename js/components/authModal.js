/* ==========================================================================
   TRAVEL MARK — AUTHENTICATION MODAL & SESSION MANAGER
   Supports Google OAuth, Mobile OTP with Resend Cooldown,
   and Email/Password Registration & Login.
   ========================================================================== */

import { appState } from '../state.js';

let otpTimerInterval = null;
let otpCooldownSeconds = 60;

export function initAuthModal() {
  const modal = document.getElementById('authModal');
  const closeBtn = document.getElementById('closeAuthModalBtn');
  const openBtns = document.querySelectorAll('.auth-trigger-btn');
  const tabs = document.querySelectorAll('.auth-tab-btn');

  openBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (appState.currentUser.isLoggedIn) {
        window.navigateToPage('profile');
      } else {
        openAuthModal();
      }
    });
  });

  window.openAuthModal = function() {
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

  // Switch between Tabs: Email / Mobile OTP / Register
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const target = tab.getAttribute('data-target');

      document.querySelectorAll('.auth-pane').forEach(p => p.style.display = 'none');
      const pane = document.getElementById(`authPane-${target}`);
      if (pane) pane.style.display = 'block';
    });
  });

  // 1. Google OAuth
  document.getElementById('googleAuthBtn')?.addEventListener('click', () => {
    // Simulated Google OAuth Flow
    window.showToast("Authenticating with Google...");
    setTimeout(() => {
      appState.login({
        name: "Devika Sen",
        username: "devika_travels",
        email: "devika.sen@gmail.com",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
        region: "Kolkata, West Bengal"
      });
      modal.classList.remove('open');
      document.body.style.overflow = '';
      window.showToast("Signed in as Devika Sen (Google Account)");
    }, 700);
  });

  // 2. Mobile OTP Flow
  const sendOtpBtn = document.getElementById('sendOtpBtn');
  const verifyOtpBtn = document.getElementById('verifyOtpBtn');
  const otpInputGroup = document.getElementById('otpInputGroup');
  const otpTimerText = document.getElementById('otpTimerText');

  sendOtpBtn?.addEventListener('click', () => {
    const phone = document.getElementById('authPhoneInput')?.value.trim();
    if (!phone || phone.length < 10) {
      alert("Please enter a valid 10-digit mobile number.");
      return;
    }

    sendOtpBtn.style.display = 'none';
    if (otpInputGroup) otpInputGroup.style.display = 'block';

    window.showToast(`Verification code sent to +91 ${phone}! (Demo code: 7492)`);
    startOtpCountdown(otpTimerText, sendOtpBtn);
  });

  verifyOtpBtn?.addEventListener('click', () => {
    const otpVal = document.getElementById('authOtpCodeInput')?.value.trim();
    if (otpVal === '7492' || otpVal.length === 4) {
      appState.login({
        name: "Travel Mark Explorer",
        username: "traveller_" + Math.floor(1000 + Math.random() * 9000),
        region: "India"
      });
      modal.classList.remove('open');
      document.body.style.overflow = '';
      window.showToast("Mobile number verified! Welcome to Travel Mark.");
    } else {
      alert("Invalid code. Please enter the demo OTP '7492'.");
    }
  });

  // 3. Email & Password Login
  const loginForm = document.getElementById('emailLoginForm');
  loginForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('loginEmailInput').value.trim();
    const name = email.split('@')[0];
    appState.login({
      name: name.charAt(0).toUpperCase() + name.slice(1),
      username: name.toLowerCase().replace(/[^a-z0-9]/g, '_'),
      email
    });
    modal.classList.remove('open');
    document.body.style.overflow = '';
    window.showToast("Welcome back to Travel Mark!");
  });

  // 4. Register Form
  const registerForm = document.getElementById('emailRegisterForm');
  registerForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('regNameInput').value.trim();
    const username = document.getElementById('regUsernameInput').value.trim();
    const email = document.getElementById('regEmailInput').value.trim();
    appState.login({ name, username, email });
    modal.classList.remove('open');
    document.body.style.overflow = '';
    window.showToast(`Account created for @${username}!`);
  });
}

function startOtpCountdown(timerEl, resendBtn) {
  clearInterval(otpTimerInterval);
  otpCooldownSeconds = 60;

  otpTimerInterval = setInterval(() => {
    otpCooldownSeconds--;
    if (timerEl) timerEl.textContent = `Resend in ${otpCooldownSeconds}s`;
    if (otpCooldownSeconds <= 0) {
      clearInterval(otpTimerInterval);
      if (timerEl) timerEl.textContent = "";
      if (resendBtn) {
        resendBtn.style.display = 'block';
        resendBtn.textContent = 'Resend OTP';
      }
    }
  }, 1000);
}
