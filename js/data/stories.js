/* ==========================================================================
   TRAVEL MARK — COMMUNITY EXPERIENCES & STORIES DATASET
   Authentic travel journals shared by community explorers across India.
   Equipped with spending breakdowns, practical advice, hidden gems, and tips.
   (Sample verified seed content for initial platform demonstration)
   ========================================================================== */

export const INITIAL_STORIES = [
  {
    id: "story-1",
    author: {
      id: "user-aravind",
      name: "Aravind Mohan",
      username: "@aravind_trips",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
      region: "Bengaluru, Karnataka",
      badge: "Master Explorer"
    },
    title: "48 Hours in Varanasi: Beyond the Postcards & Into the Alleyways",
    destination: "Varanasi (Kashi)",
    destinationId: "varanasi-ghats",
    state: "Uttar Pradesh",
    date: "October 2026",
    category: "Spiritual & Heritage",
    spending: "₹4,200 for 2 days",
    tripDuration: "2 Days / 3 Nights",
    rating: 5.0,
    likes: 124,
    saved: false,
    liked: false,
    photos: [
      "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1571536802807-30451e3955d8?auto=format&fit=crop&w=800&q=80"
    ],
    content: "If you want to truly feel Varanasi, do not rush from temple to temple with a checklist. Book a wooden hand-rowed boat at Assi Ghat at 5:15 AM before the sky turns amber. As the bells echo across the water, the ancient stone facades slowly illuminate. After stepping off at Dashashwamedh, get lost in the maze of galis. Stop at Ram Bhandar for kachori served on leaf plates with spicy potato gravy, and finish with winter malaiyo in Chaukhamba.",
    foodRecommendations: "Ram Bhandar for early morning kachori sabzi, Blue Lassi near Manikarnika, and Paan at Godowlia crossing.",
    transportTips: "Never take cars into the old city; walking is the only real way. Hire government-registered wooden rowboats rather than diesel motorboats for peace.",
    worthSeeing: "The Subah-e-Banaras morning classical music recital at Assi Ghat.",
    hiddenGem: "Panchganga Ghat, where five sacred subterranean rivers meet; far quieter than the central ghats.",
    thingsToAvoid: "Unauthorized priests approaching you with fake ritual receipts or overpriced flower plates.",
    crowdAdvice: "Dashashwamedh Aarti gets overwhelmingly crowded by 6:00 PM; arrive by 5:15 PM or watch from a boat on the river.",
    accessibilityNotes: "The ghats feature steep stone steps without ramps; difficult for wheelchairs or travelers with knee pain.",
    tags: ["Varanasi", "Ghats", "SunriseBoat", "Spiritual", "BanarasiFood"],
    comments: [
      {
        id: "c-101",
        author: "Meera Nair",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80",
        date: "2 days ago",
        text: "The sunrise boat advice is gold! We tried taking an auto into the galis last year and got completely stuck. Walking is definitely the way."
      },
      {
        id: "c-102",
        author: "Devendra Joshi",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80",
        date: "Yesterday",
        text: "Is Chaukhamba safe for solo women travelers in the morning?"
      }
    ]
  },
  {
    id: "story-2",
    author: {
      id: "user-priya",
      name: "Priya Sharma",
      username: "@priyagoesplaces",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80",
      region: "Mumbai, Maharashtra",
      badge: "Photographer & Foodie"
    },
    title: "Chasing Clouds & Living Root Bridges: Trekking Deep into Meghalaya",
    destination: "Meghalaya & Cherrapunji",
    destinationId: "meghalaya-caves",
    state: "Meghalaya",
    date: "September 2026",
    category: "Nature & Hiking",
    spending: "₹14,500 total for 4 days",
    tripDuration: "4 Days",
    rating: 4.9,
    likes: 89,
    saved: true,
    liked: false,
    photos: [
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80"
    ],
    content: "The descent to Nongriat's Double Decker Living Root Bridge is 3,500 stone steps down through dense rainforest. Your calves will burn, but when you hear the gush of the turquoise river and step onto a bridge woven from living ficus elastica roots that have breathed for 150 years, everything disappears. Stay overnight in a Khasi homestay rather than rushing back on the same day.",
    foodRecommendations: "Tungrymbai (fermented soybean dish) and Jadoh rice with local herbs at local Khasi stalls.",
    transportTips: "Shared sumos run from Shillong to Cherrapunji; hire a private taxi if carrying bulky luggage.",
    worthSeeing: "Rainbow Falls, located another 1.5 hours past the double-decker bridge—crystal clear natural swimming pool.",
    hiddenGem: "Wei Sawdong three-tier waterfall near Sohra—bring sturdy grip shoes.",
    thingsToAvoid: "Do not litter any plastic bottles. Meghalaya villages take zero-waste very seriously, and Mawlynnong especially penalizes littering.",
    crowdAdvice: "Start the root bridge trek by 7:00 AM to avoid the midday heat and humidity in the gorge.",
    accessibilityNotes: "Very challenging trek; not recommended for people with severe vertigo, knee conditions, or tiny toddlers.",
    tags: ["Meghalaya", "RootBridges", "Trekking", "Rainforest", "EcoTourism"],
    comments: [
      {
        id: "c-201",
        author: "Karan Verma",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80",
        date: "3 days ago",
        text: "Did you need special hiking poles for the 3500 steps down? Planning this for December!"
      }
    ]
  },
  {
    id: "story-3",
    author: {
      id: "user-rohit",
      name: "Rohit & Ananya",
      username: "@rohit_ananya_wander",
      avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=200&q=80",
      region: "Delhi NCR",
      badge: "Couple Explorers"
    },
    title: "Sunrise at Taj Mahal vs Sunset at Mehtab Bagh: Our Honest Experience",
    destination: "Taj Mahal, Agra",
    destinationId: "taj-mahal-agra",
    state: "Uttar Pradesh",
    date: "October 2026",
    category: "Historical Monuments",
    spending: "₹5,800 for 1 Day",
    tripDuration: "1 Full Day",
    rating: 5.0,
    likes: 215,
    saved: false,
    liked: true,
    photos: [
      "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80"
    ],
    content: "We took the Gatimaan Express from Delhi early morning. Pro tip: Buy your ASI entry tickets online on the official portal the night before. Arrive at Taj East Gate by 5:45 AM. The queue moves fast at sunrise and you get 45 minutes of serene golden light with virtually no crowds. Later in the afternoon, cross the Yamuna River to Mehtab Bagh for sunset—you will see the Taj reflected across the river without having to navigate any interior queues.",
    foodRecommendations: "Deviram Sweets for morning Bedai-Jalebi (unbelievable flavor!) and Pinch of Spice for evening dinner.",
    transportTips: "The Gatimaan Express takes just 1h 40m from Hazrat Nizamuddin to Agra Cantt. Inside Agra, pre-book an EV cab.",
    worthSeeing: "The intricate Pietra Dura stone inlays inside the octagonal screen of the main mausoleum.",
    hiddenGem: "Itimad-ud-Daulah (Baby Taj)—often empty compared to the main monument and has even finer carved marble screens.",
    thingsToAvoid: "Never bring tripods, lighters, or books into the security check; you will be forced to walk back to the outer locker lockers.",
    crowdAdvice: "Avoid Fridays at all costs because the monument is closed for congregational prayer.",
    accessibilityNotes: "Electric golf carts transport seniors from the parking to the gates; ramp access is provided along monument corridors.",
    tags: ["TajMahal", "Agra", "Gatimaan", "MughalArchitecture", "Sunrise"],
    comments: [
      {
        id: "c-301",
        author: "Zoya Siddiqui",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&q=80",
        date: "5 days ago",
        text: "The Mehtab Bagh tip is so true! Got my best photo of the trip from there right at dusk."
      }
    ]
  }
];
