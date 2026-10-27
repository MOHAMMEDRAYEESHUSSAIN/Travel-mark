/* ==========================================================================
   TRAVEL MARK — PERSONALIZED TRAVEL PLANNER & ITINERARY BUILDER
   ========================================================================== */

import { appState } from '../state.js';

let generatedPlan = null;

export function initTravelPlanner() {
  const form = document.getElementById('travelPlannerForm');
  const chipButtons = document.querySelectorAll('.selectable-chip');

  chipButtons.forEach(chip => {
    chip.addEventListener('click', () => {
      chip.classList.toggle('active');
    });
  });

  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    generateItineraryFromForm();
  });

  window.addToTripPlanner = function(destinationId) {
    const dest = appState.destinations.find(d => d.id === destinationId);
    if (!dest) return;
    window.navigateToPage('planner');

    const destInput = document.getElementById('plannerDestInput');
    if (destInput) destInput.value = dest.name;
    const daysSelect = document.getElementById('plannerDaysSelect');
    if (daysSelect) daysSelect.value = "3";
  };
}

function generateItineraryFromForm() {
  const startCity = document.getElementById('plannerStartInput')?.value || "Delhi";
  const destName = document.getElementById('plannerDestInput')?.value || "Jaipur, Rajasthan";
  const days = parseInt(document.getElementById('plannerDaysSelect')?.value || "3", 10);
  const budgetTier = document.getElementById('plannerBudgetSelect')?.value || "Mid-range";
  const travellers = parseInt(document.getElementById('plannerTravellersInput')?.value || "2", 10);

  // Collect selected interest chips
  const interests = Array.from(document.querySelectorAll('#plannerInterestsGroup .selectable-chip.active'))
    .map(c => c.textContent.trim());

  // Match or select related destination data
  const matchedDest = appState.destinations.find(d =>
    d.name.toLowerCase().includes(destName.toLowerCase()) ||
    destName.toLowerCase().includes(d.name.toLowerCase()) ||
    destName.toLowerCase().includes(d.state.toLowerCase())
  ) || appState.destinations[0];

  // Build daily schedules
  const daysArray = [];
  for (let i = 1; i <= days; i++) {
    daysArray.push(buildDayPlan(i, matchedDest, interests));
  }

  // Cost estimates based on budget tier & travellers
  const multiplier = budgetTier === 'Budget' ? 1500 : budgetTier === 'Luxury' ? 7500 : 3500;
  const totalCost = multiplier * days * travellers;
  const budgetBreakdown = {
    stay: Math.round(totalCost * 0.45),
    food: Math.round(totalCost * 0.25),
    transport: Math.round(totalCost * 0.18),
    tickets: Math.round(totalCost * 0.12),
    total: totalCost
  };

  generatedPlan = {
    title: `${days}-Day Discovery of ${matchedDest.name}`,
    destination: matchedDest.name,
    startCity,
    daysCount: days,
    travellers,
    budgetTier,
    budgetBreakdown,
    days: daysArray,
    coverImage: matchedDest.coverImage,
    advice: matchedDest.safetyEtiquette || "Carry comfortable walking shoes and stay hydrated."
  };

  renderGeneratedItinerary(generatedPlan);
}

function buildDayPlan(dayNumber, dest, interests) {
  const attractions = dest.topAttractions || ["Central Landmark", "Heritage Corridor", "Bazaar Trail"];
  const foods = dest.famousFood || [{ name: "Regional Thali", place: "Local Restaurant", desc: "Authentic seasonal meal" }];

  const morningActivity = attractions[(dayNumber - 1) % attractions.length] || "Sunrise exploration of historic quarters";
  const afternoonActivity = attractions[dayNumber % attractions.length] || "Cultural museum and artisan markets";
  const eveningActivity = attractions[(dayNumber + 1) % attractions.length] || "Sunset viewing terrace and street food crawl";
  const foodPick = foods[(dayNumber - 1) % foods.length] || foods[0];

  return {
    day: `Day ${dayNumber}`,
    morning: {
      time: "08:30 AM - 12:00 PM",
      activity: morningActivity,
      tip: "Start early to enjoy comfortable temperatures and low crowds."
    },
    afternoon: {
      time: "01:30 PM - 04:30 PM",
      activity: afternoonActivity,
      tip: `Lunch recommendation: Try ${foodPick.name} at ${foodPick.place}.`
    },
    evening: {
      time: "05:30 PM - 08:30 PM",
      activity: eveningActivity,
      tip: "Admire evening lighting and browse handcrafted regional mementos."
    }
  };
}

function renderGeneratedItinerary(plan) {
  const container = document.getElementById('itineraryOutputContainer');
  if (!container) return;

  const daysHtml = plan.days.map((d, idx) => `
    <div style="background: var(--color-card-bg); border: 1px solid var(--border-medium); border-radius: var(--radius-lg); padding: 24px; margin-bottom: 20px;">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 16px; border-bottom: 1px solid var(--border-subtle); padding-bottom: 10px;">
        <h4 style="font-size: 1.15rem; color: var(--color-gold);">${d.day}</h4>
        <span style="font-size: 0.75rem; color: var(--text-muted); text-transform: uppercase;">Estimated day spend: ₹${Math.round(plan.budgetBreakdown.total / plan.daysCount).toLocaleString('en-IN')}</span>
      </div>

      <div style="display: flex; flex-direction: column; gap: 14px;">
        <!-- Morning -->
        <div style="display: flex; gap: 14px;">
          <div style="width: 32px; height: 32px; border-radius: 50%; background: rgba(232,184,92,0.12); color: var(--color-gold); display: flex; align-items: center; justify-content: center; flex-shrink: 0; font-size: 0.75rem; font-weight: 700;">AM</div>
          <div>
            <div style="font-weight: 700; color: var(--text-primary); font-size: 0.9375rem;">${d.morning.activity}</div>
            <div style="font-size: 0.75rem; color: var(--color-gold);">${d.morning.time}</div>
            <p style="font-size: 0.8125rem; color: var(--text-secondary); margin-top: 2px;">${d.morning.tip}</p>
          </div>
        </div>

        <!-- Afternoon -->
        <div style="display: flex; gap: 14px;">
          <div style="width: 32px; height: 32px; border-radius: 50%; background: rgba(232,184,92,0.12); color: var(--color-gold); display: flex; align-items: center; justify-content: center; flex-shrink: 0; font-size: 0.75rem; font-weight: 700;">PM</div>
          <div>
            <div style="font-weight: 700; color: var(--text-primary); font-size: 0.9375rem;">${d.afternoon.activity}</div>
            <div style="font-size: 0.75rem; color: var(--color-gold);">${d.afternoon.time}</div>
            <p style="font-size: 0.8125rem; color: var(--text-secondary); margin-top: 2px;">${d.afternoon.tip}</p>
          </div>
        </div>

        <!-- Evening -->
        <div style="display: flex; gap: 14px;">
          <div style="width: 32px; height: 32px; border-radius: 50%; background: rgba(232,184,92,0.12); color: var(--color-gold); display: flex; align-items: center; justify-content: center; flex-shrink: 0; font-size: 0.75rem; font-weight: 700;">EVE</div>
          <div>
            <div style="font-weight: 700; color: var(--text-primary); font-size: 0.9375rem;">${d.evening.activity}</div>
            <div style="font-size: 0.75rem; color: var(--color-gold);">${d.evening.time}</div>
            <p style="font-size: 0.8125rem; color: var(--text-secondary); margin-top: 2px;">${d.evening.tip}</p>
          </div>
        </div>
      </div>
    </div>
  `).join('');

  container.innerHTML = `
    <div class="itinerary-header-card" style="padding: 28px; margin-bottom: 24px;">
      <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 16px;">
        <div>
          <span style="font-size: 0.75rem; font-weight: 700; color: var(--color-gold); text-transform: uppercase;">Suggested Community Itinerary</span>
          <h2 style="font-size: 1.8rem; color: var(--text-primary); margin: 4px 0 10px 0;">${plan.title}</h2>
          <div style="display: flex; gap: 16px; font-size: 0.875rem; color: var(--text-secondary); flex-wrap: wrap;">
            <span><i data-lucide="map-pin" style="width: 14px; height: 14px; display: inline;"></i> From ${plan.startCity}</span>
            <span><i data-lucide="users" style="width: 14px; height: 14px; display: inline;"></i> ${plan.travellers} Travellers</span>
            <span><i data-lucide="wallet" style="width: 14px; height: 14px; display: inline;"></i> ${plan.budgetTier}</span>
          </div>
        </div>
        <div style="display: flex; gap: 10px;">
          <button class="btn btn-primary" onclick="window.saveCurrentItinerary()">
            <i data-lucide="bookmark-check"></i> Save Itinerary
          </button>
          <button class="btn btn-secondary" onclick="window.openShareModal('${plan.title}')">
            <i data-lucide="share-2"></i> Share
          </button>
        </div>
      </div>

      <!-- Budget Breakdown Card -->
      <div style="margin-top: 24px; padding: 18px; background: rgba(16,16,15,0.7); border-radius: var(--radius-md); border: 1px solid var(--border-subtle);">
        <h4 style="font-size: 0.875rem; color: var(--color-gold); text-transform: uppercase; margin-bottom: 12px; display: flex; align-items: center; gap: 6px;">
          <i data-lucide="calculator" style="width: 14px; height: 14px;"></i> Estimated Budget Breakdown (Total ~₹${plan.budgetBreakdown.total.toLocaleString('en-IN')})
        </h4>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(130px, 1fr)); gap: 12px; font-size: 0.8125rem;">
          <div><span style="color: var(--text-muted);">Accommodation:</span><div style="font-weight: 700; color: var(--text-primary);">₹${plan.budgetBreakdown.stay.toLocaleString('en-IN')}</div></div>
          <div><span style="color: var(--text-muted);">Food & Dining:</span><div style="font-weight: 700; color: var(--text-primary);">₹${plan.budgetBreakdown.food.toLocaleString('en-IN')}</div></div>
          <div><span style="color: var(--text-muted);">Local Transport:</span><div style="font-weight: 700; color: var(--text-primary);">₹${plan.budgetBreakdown.transport.toLocaleString('en-IN')}</div></div>
          <div><span style="color: var(--text-muted);">Entry & Activities:</span><div style="font-weight: 700; color: var(--text-primary);">₹${plan.budgetBreakdown.tickets.toLocaleString('en-IN')}</div></div>
        </div>
        <div style="font-size: 0.6875rem; color: var(--text-muted); margin-top: 10px;">*Prices are estimated community averages. Actual costs may vary by season, hotel choice, and festival dates.</div>
      </div>
    </div>

    <div>${daysHtml}</div>
  `;

  container.style.display = 'block';
  if (window.lucide) window.lucide.createIcons();
  container.scrollIntoView({ behavior: 'smooth' });
}

window.saveCurrentItinerary = function() {
  if (!generatedPlan) return;
  appState.savePlan(generatedPlan);
  window.showToast("Itinerary saved to My Travel Plans!");
};
