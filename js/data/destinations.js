/* ==========================================================================
   BHARAT TRAILS — DESTINATIONS DATA
   Comprehensive, authentic seed database with real GPS coordinates,
   historical context, local food, sacred sites, and practical logistics.
   ========================================================================== */

export const DESTINATIONS_DATA = [
  {
    id: "taj-mahal-agra",
    name: "Taj Mahal",
    city: "Agra",
    state: "Uttar Pradesh",
    region: "North India",
    category: "Historical monuments",
    rating: 4.9,
    reviewsCount: 384,
    bestSeason: "October to March",
    duration: "1 - 2 Days",
    budgetRange: "Mid-range",
    approxBudget: "₹3,500 - ₹6,000 / day",
    coordinates: [27.1751, 78.0421],
    coverImage: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=800&q=80"
    ],
    overview: "Commissioned in 1631 by Mughal Emperor Shah Jahan in memory of his favourite wife Mumtaz Mahal, the Taj Mahal is an ivory-white marble mausoleum on the right bank of the Yamuna River. A UNESCO World Heritage Site and one of the New Seven Wonders of the World, it represents the zenith of Mughal architecture combining Indian, Persian, and Islamic artistic traditions.",
    whyVisit: "Witness the ethereal shifts in colour from blush pink at sunrise to golden marble under the afternoon sun, admire intricate pietra dura floral inlays, and explore Mughal garden symmetries.",
    topAttractions: [
      "Taj Mahal Main Mausoleum & Central Dome",
      "Mehtab Bagh (Moonlight Garden view across Yamuna)",
      "Agra Fort (Red sandstone citadel & Jahangiri Mahal)",
      "Itimad-ud-Daulah (The Baby Taj)",
      "Fatehpur Sikri (Mughal imperial city 36km away)"
    ],
    entryTickets: "₹50 for Indian nationals (+ ₹200 for main mausoleum), ₹1,100 for foreign tourists. Children below 15 years enter free. Online booking recommended via ASI portal.",
    visitingHours: "Sunrise to Sunset (approx. 6:00 AM - 6:30 PM). Closed on Fridays for general visitors.",
    weatherGuidance: "Winters (Nov-Feb) are pleasant (10°C - 24°C) though morning fog is common in Dec-Jan. Summers can exceed 42°C.",
    localTransport: "Electric auto-rickshaws, battery golf carts, and prepaid cabs operate from the Taj East & West Gates. Polluting vehicles are prohibited within a 500m radius of the monument.",
    accommodation: "Options range from backpacker hostels in Taj Ganj to heritage luxury hotels overlooking the monument along Fatehabad Road.",
    famousFood: [
      { name: "Agra Petha", place: "Panchi Petha Store", desc: "Translucent candied ash gourd sweet available in flavours like Kesar and Angoori." },
      { name: "Bedai & Jalebi", place: "Deviram Sweets", desc: "Puffy spiced lentil bread served with spicy potato curry and crisp sweet jalebis for breakfast." },
      { name: "Mughlai Kebabs", place: "Peshawri / Pinch of Spice", desc: "Slow-cooked tandoori dishes influenced by royal Mughal court recipes." }
    ],
    nearbySacred: [
      { name: "Jama Masjid Agra", tradition: "Islam", dist: "3 km", etiquette: "Modest dress required; head covering recommended." },
      { name: "Balkeshwar Temple", tradition: "Hinduism", dist: "6 km", etiquette: "Traditional riverbank Shiva temple on Yamuna ghats." },
      { name: "Guru ka Tal Gurdwara", tradition: "Sikhism", dist: "11 km", etiquette: "Head coverings mandatory; continuous langar served." }
    ],
    nearbyAmusement: [
      { name: "Sur Sarovar Bird Sanctuary & Keetham Lake", type: "Wildlife / Nature", dist: "20 km", note: "Includes the Agra Bear Rescue Facility." }
    ],
    safetyEtiquette: "Strict security screening at entry. Cigarettes, lighters, tripods, large backpacks, and drone cameras are strictly prohibited inside. Dress respectfully and maintain silence inside the cenotaph chamber.",
    suggestedItinerary: [
      { day: "Day 1", plan: "Sunrise Taj Mahal entry -> Breakfast with Bedai-Jalebi -> Agra Fort exploration -> Sunset view from Mehtab Bagh." },
      { day: "Day 2", plan: "Excursion to Fatehpur Sikri -> Return for Itimad-ud-Daulah -> Souvenir shopping in Kinari Bazaar." }
    ],
    tags: ["Heritage", "Mughal Architecture", "Romantic", "Photography", "UNESCO Site"]
  },
  {
    id: "jaipur-rajasthan",
    name: "Jaipur (Pink City)",
    city: "Jaipur",
    state: "Rajasthan",
    region: "North-West India",
    category: "Forts and palaces",
    rating: 4.8,
    reviewsCount: 412,
    bestSeason: "October to March",
    duration: "3 - 4 Days",
    budgetRange: "Mid-range",
    approxBudget: "₹3,000 - ₹7,000 / day",
    coordinates: [26.9124, 75.7873],
    coverImage: "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1603287681836-b174ce5074c2?auto=format&fit=crop&w=800&q=80"
    ],
    overview: "Founded in 1727 by Maharaja Sawai Jai Singh II, Jaipur is Rajasthan's capital and India's first planned city. Painted terracotta pink in 1876 to welcome the Prince of Wales, it is famed for towering hill forts, royal palaces, astronomical observatories, vibrant bazaars, and gemstone craftsmanship.",
    whyVisit: "Explore majestic Amer Fort, admire the 953 honeycomb windows of Hawa Mahal, shop for block-printed fabrics, and experience royal Rajput hospitality.",
    topAttractions: [
      "Amer Fort & Sheesh Mahal",
      "Hawa Mahal (Palace of Winds)",
      "City Palace & Museum",
      "Jantar Mantar (UNESCO Astronomical Observatory)",
      "Nahargarh & Jaigarh Forts",
      "Johari & Bapu Bazaars"
    ],
    entryTickets: "Composite tickets available for multiple monuments (~₹100 Indians, ₹500 Foreigners). Amer Fort light & sound show separate.",
    visitingHours: "Forts open 9:00 AM - 5:30 PM. Night tourism available at Amer & Nahargarh.",
    weatherGuidance: "Ideal in winter (12°C - 26°C). Pleasant evenings; dry daytime climate.",
    localTransport: "Jaipur Metro connects central corridors; e-rickshaws, autos, and app-based cabs readily available.",
    accommodation: "From royal palace heritage hotels (Rambagh, Samode) to boutique havelis and lively backpacker hostels.",
    famousFood: [
      { name: "Dal Baati Churma", place: "Laxmi Misthan Bhandar (LMB) / Chokhi Dhani", desc: "Baked wheat balls drowned in desi ghee, served with spiced lentils and sweet ground wheat churma." },
      { name: "Pyaaz Kachori", place: "Rawat Misthan Bhandar", desc: "Crisp, flaky pastry stuffed with seasoned onions and potatoes." },
      { name: "Ghevar & Lassi", place: "Lassiwala (MI Road)", desc: "Disc-shaped honeycomb sweet soaked in saffron syrup, paired with thick clay-pot lassi." }
    ],
    nearbySacred: [
      { name: "Govind Dev Ji Temple", tradition: "Hinduism", dist: "City Centre", etiquette: "Aarti sessions are deeply revered; modest attire expected." },
      { name: "Galtaji (Monkey Temple)", tradition: "Hinduism", dist: "10 km", etiquette: "Sacred kunds natural springs between mountain pass." },
      { name: "Moti Dungri Ganesh Temple", tradition: "Hinduism", dist: "4 km", etiquette: "Very popular on Wednesdays." }
    ],
    nearbyAmusement: [
      { name: "Pink Pearl Water Park", type: "Amusement / Water", dist: "16 km", note: "Wave pool, water slides, and family games." },
      { name: "Chokhi Dhani Cultural Resort", type: "Cultural Entertainment", dist: "20 km", note: "Folk dances, puppet shows, camel rides, and traditional dining." }
    ],
    safetyEtiquette: "Bargain respectfully in traditional bazaars. Beware of unauthorized gemstone/carpet touts. Carry water during uphill walks at forts.",
    suggestedItinerary: [
      { day: "Day 1", plan: "Hawa Mahal exterior -> City Palace -> Jantar Mantar -> Shopping in Johari Bazaar." },
      { day: "Day 2", plan: "Morning Amer Fort & elephant courtyard -> Jaigarh Fort -> Sunset at Nahargarh Fort." },
      { day: "Day 3", plan: "Galtaji Temple -> Albert Hall Museum -> Traditional dinner at Chokhi Dhani." }
    ],
    tags: ["Royal Heritage", "Forts & Palaces", "Shopping", "Food Trails", "Photography"]
  },
  {
    id: "varanasi-ghats",
    name: "Varanasi Ghats & Kashi",
    city: "Varanasi",
    state: "Uttar Pradesh",
    region: "North India",
    category: "Religious and spiritual",
    rating: 4.9,
    reviewsCount: 520,
    bestSeason: "October to March",
    duration: "2 - 3 Days",
    budgetRange: "Budget-friendly",
    approxBudget: "₹1,800 - ₹4,000 / day",
    coordinates: [25.3176, 82.9739],
    coverImage: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1571536802807-30451e3955d8?auto=format&fit=crop&w=800&q=80"
    ],
    overview: "One of the oldest continuously inhabited cities in the world, Varanasi (Kashi/Banaras) sits upon the sacred crescent of the River Ganga. It is the spiritual capital of India, where pilgrims come to perform sacred rituals, meditate at ancient ghats, and seek liberation (Moksha).",
    whyVisit: "Experience the mesmerizing evening Ganga Aarti at Dashashwamedh Ghat, take a sunrise boat ride along 84 ghats, and walk through centuries-old maze-like alleys.",
    topAttractions: [
      "Dashashwamedh Ghat & Evening Aarti",
      "Kashi Vishwanath Temple (Golden Temple of Shiva)",
      "Assi Ghat (Morning Subah-e-Banaras music & yoga)",
      "Manikarnika & Harishchandra Ghats",
      "Sarnath (Where Buddha gave his first sermon, 10km away)",
      "Banaras Hindu University (BHU) & Bharat Kala Bhavan"
    ],
    entryTickets: "Ghats are open & free to walk. Kashi Vishwanath temple corridor has special darshan queues (₹300 - ₹500 via temple trust) or free general queue.",
    visitingHours: "Ghats accessible 24/7. Sunrise boat tours typically start at 5:30 AM; Ganga Aarti begins at sunset (approx. 6:30 PM).",
    weatherGuidance: "Winters are crisp and cool (9°C - 23°C). Monsoon brings swollen river waters when boat rides may be restricted.",
    localTransport: "Walking and cycle rickshaws are best for narrow Old City lanes (galis). E-rickshaws run on main outer roads.",
    accommodation: "Atmospheric riverside havelis along the ghats, heritage ashrams, boutique guest houses, and budget hostels.",
    famousFood: [
      { name: "Banarasi Paan", place: "Keshav Tambool Bhandar / Old City", desc: "Betel leaf filled with fragrant gulkand, spices, and areca nut." },
      { name: "Kachori Sabzi & Jalebi", place: "Ram Bhandar (Thatheri Bazaar)", desc: "Flaky lentil kachori with spiced chickpea curry and crisp golden jalebis." },
      { name: "Malaiyo (Winter Special)", place: "Chaukhamba Gali", desc: "Frothy, saffron-scented milk foam infused with cardamom and pistachios." },
      { name: "Blue Lassi", place: "Near Manikarnika Ghat", desc: "Rich curd topped with fresh fruits, rabri, and nuts." }
    ],
    nearbySacred: [
      { name: "Kashi Vishwanath Jyotirlinga", tradition: "Hinduism", dist: "0 km", etiquette: "Security check; mobile phones and leather items not permitted in sanctum." },
      { name: "Sankat Mochan Hanuman Temple", tradition: "Hinduism", dist: "3 km", etiquette: "Famous for besan laddoos; respectful behaviour required." },
      { name: "Dhamekh Stupa, Sarnath", tradition: "Buddhism", dist: "10 km", etiquette: "Serene monastic grounds; circumambulation clockwise." },
      { name: "Gyanvapi Mosque", tradition: "Islam", dist: "Adjacent to Vishwanath corridor", etiquette: "Historic Islamic architecture; security protocols in effect." }
    ],
    nearbyAmusement: [
      { name: "Ganga River Cruise (Alaknanda Cruise)", type: "Scenic Water Cruise", dist: "Assi to Rajghat", note: "Electric double-decker cruise boat along the heritage ghats." }
    ],
    safetyEtiquette: "Strictly avoid photographing cremation ceremonies at Manikarnika and Harishchandra Ghats out of respect for grieving families. Always negotiate boat fares beforehand.",
    suggestedItinerary: [
      { day: "Day 1", plan: "5:30 AM boat ride from Assi to Manikarnika -> Walk the ghats -> Kashi Vishwanath Darshan -> Sunset Ganga Aarti at Dashashwamedh." },
      { day: "Day 2", plan: "Half-day excursion to Sarnath Buddhist stupas and museum -> Evening music concert or street food trail in Godowlia." }
    ],
    tags: ["Spiritual", "Ghats", "Ancient City", "Ganga Aarti", "Food Trail"]
  },
  {
    id: "alleppey-kerala",
    name: "Alleppey & Munnar Backwaters",
    city: "Alappuzha & Munnar",
    state: "Kerala",
    region: "South India",
    category: "Beaches and islands",
    rating: 4.8,
    reviewsCount: 360,
    bestSeason: "September to March",
    duration: "3 - 5 Days",
    budgetRange: "Mid-range",
    approxBudget: "₹3,500 - ₹8,000 / day",
    coordinates: [9.4981, 76.3388],
    coverImage: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=800&q=80"
    ],
    overview: "Known as the 'Venice of the East', Alleppey (Alappuzha) is the heart of Kerala's vast network of palm-fringed canals, tranquil lagoons, and paddy fields. Paired with Munnar's rolling misty tea plantations in the Western Ghats, it represents the quintessential green beauty of 'God's Own Country'.",
    whyVisit: "Cruise silently through the backwaters on a traditional thatched Kettuvallam (houseboat), witness village toddy-tapping, explore tea estates in Munnar, and savour authentic Kerala Sadhya on a banana leaf.",
    topAttractions: [
      "Punnamada Lake & Backwater Canals",
      "Marari Beach (Serene white sand)",
      "Munnar Tea Gardens & Eravikulam National Park",
      "Mattupetty Dam & Echo Point",
      "Vembanad Lake (Largest lake in India)",
      "Krishnapuram Palace"
    ],
    entryTickets: "Public ferry boats cost ₹15 - ₹40; Private houseboat day/overnight cruises range from ₹7,000 to ₹18,000 depending on luxury tier.",
    visitingHours: "Canals active from dawn to dusk; houseboat overnight stays anchor by 5:30 PM due to local fishing net laws.",
    weatherGuidance: "Tropical and humid; monsoons (June-August) are vibrant and popular for traditional Ayurveda treatments.",
    localTransport: "Kerala State Water Transport Department (SWTD) water taxis, canoes, and auto-rickshaws.",
    accommodation: "Traditional houseboats, lakeside eco-resorts, homestays, and plantation bungalows in Munnar.",
    famousFood: [
      { name: "Karimeen Pollichathu", place: "Thaff Restaurant / Houseboat chef", desc: "Pearl spot fish marinated in shallots, ginger, and curry leaves, wrapped and steamed in banana leaf." },
      { name: "Appam with Ishtu", place: "Local toddy shops & cafes", desc: "Lacy fermented rice batter hoppers served with coconut milk stew." },
      { name: "Traditional Kerala Sadhya", place: "Hotel Annapoorna", desc: "Multi-course vegetarian feast served on a plantain leaf with red rice and payasam." }
    ],
    nearbySacred: [
      { name: "Ambalapuzha Sri Krishna Temple", tradition: "Hinduism", dist: "14 km", etiquette: "Men must remove shirts; world-renowned for sweet Palpayasam offering." },
      { name: "St. Mary's Forane Church, Champakulam", tradition: "Christianity", dist: "15 km", etiquette: "One of the oldest Syrian Catholic churches in India, dating to 427 AD." },
      { name: "Edathua Church (St. George)", tradition: "Christianity", dist: "20 km", etiquette: "Famous pilgrimage site for prayers of healing on the Pamba riverbanks." }
    ],
    nearbyAmusement: [
      { name: "Wonderla Amusement Park (Kochi)", type: "Amusement / Theme Park", dist: "65 km", note: "Massive theme park with water rides and rollercoasters." },
      { name: "Munnar Wonder Valley Adventure", type: "Adventure Park", dist: "Munnar", note: "Zipline, rope bridges, and ATV quad biking." }
    ],
    safetyEtiquette: "Wear life vests on small open canoes. Respect local village privacy along the canal banks. Refrain from throwing plastic in water bodies.",
    suggestedItinerary: [
      { day: "Day 1", plan: "Board houseboat in Alleppey at noon -> Scenic canal cruising -> Village walk -> Sunset anchor with fresh catch dinner." },
      { day: "Day 2", plan: "Morning boat breakfast -> Drive up through waterfalls to Munnar -> Tea museum visit." },
      { day: "Day 3", plan: "Eravikulam National Park for Nilgiri Tahr -> Tea plantation trek -> Ayurvedic massage." }
    ],
    tags: ["Backwaters", "Nature", "Relaxation", "Houseboat", "Tea Gardens"]
  },
  {
    id: "hampi-karnataka",
    name: "Hampi Ruins & Boulders",
    city: "Hampi",
    state: "Karnataka",
    region: "South India",
    category: "Historical monuments",
    rating: 4.9,
    reviewsCount: 310,
    bestSeason: "October to February",
    duration: "2 - 3 Days",
    budgetRange: "Budget-friendly",
    approxBudget: "₹2,000 - ₹4,500 / day",
    coordinates: [15.3350, 76.4600],
    coverImage: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600100397608-f010f443b785?auto=format&fit=crop&w=800&q=80"
    ],
    overview: "The former capital of the magnificent 14th-century Vijayanagara Empire, Hampi is an open-air museum set amid a surreal landscape of giant granite boulders and banana groves beside the Tungabhadra River. It is a UNESCO World Heritage Site with over 1,600 surviving monuments.",
    whyVisit: "Marvel at the monolithic Stone Chariot, listen to musical pillars at Vittala Temple, watch golden sunrises over boulder horizons from Matanga Hill, and cycle through ruined royal markets.",
    topAttractions: [
      "Vittala Temple & Iconic Stone Chariot",
      "Virupaksha Temple (Active temple since 7th century)",
      "Matanga Hill (Epic sunrise & 360-degree view)",
      "Lotus Mahal & Elephant Stables",
      "Queen's Bath & Royal Enclosure",
      "Anegundi (Hippy Island & Sanapur Lake)"
    ],
    entryTickets: "ASI composite ticket for Vittala Temple & Zenana Enclosure: ₹40 (Indians), ₹600 (Foreigners). Virupaksha temple entry ₹5.",
    visitingHours: "Monuments open 6:00 AM - 6:00 PM.",
    weatherGuidance: "Sunny and dry; winter is delightful (15°C - 30°C). Mid-day sun can be strong even in winter.",
    localTransport: "Renting bicycles (₹100/day) or mopeds is the most authentic way to explore; auto-rickshaws available for guided tours.",
    accommodation: "Homestays near Hampi Bazaar or resort properties in nearby Hospet and Kamalapur.",
    famousFood: [
      { name: "Karnataka Thali", place: "Mango Tree Restaurant", desc: "Wholesome meal with jolada rotti (sorghum flatbread), ennegayi (stuffed brinjal), rice, and payasa." },
      { name: "South Indian Filter Coffee & Dosas", place: "Local shacks near Virupaksha", desc: "Piping hot crispy butter dosas and aromatic chicory filter coffee." }
    ],
    nearbySacred: [
      { name: "Virupaksha Temple", tradition: "Hinduism", dist: "0 km", etiquette: "Active pilgrimage shrine; shoes deposited outside; temple elephant Lakshmi gives blessings." },
      { name: "Anjaneya Hill (Hanuman Birthplace)", tradition: "Hinduism", dist: "Anegundi (5 km)", etiquette: "575 stone steps climb to whitewashed shrine on peak." },
      { name: "Hazara Rama Temple", tradition: "Hinduism", dist: "2 km", etiquette: "Exterior bas-reliefs depict the entire Ramayana epic in stone." }
    ],
    nearbyAmusement: [
      { name: "Coracle Boat Ride on Tungabhadra", type: "Adventure / Heritage Watercraft", dist: "Near Vittala Temple", note: "Traditional circular woven reed boats navigating river currents." },
      { name: "Sanapur Lake Cliff Jumping & Bouldering", type: "Adventure Sports", dist: "Sanapur (8 km)", note: "Popular destination for international bouldering climbers." }
    ],
    safetyEtiquette: "Do not climb or sit upon fragile archaeological carved pillars. Wear sturdy grip shoes for walking on slick boulders. Carry plenty of drinking water.",
    suggestedItinerary: [
      { day: "Day 1", plan: "Virupaksha Temple -> Hemakuta Hill temples -> Monolithic Narasimha -> Sunset from Matanga Hill." },
      { day: "Day 2", plan: "Royal Enclosure -> Lotus Mahal & Elephant Stables -> Vittala Temple & Stone Chariot in the golden afternoon light." }
    ],
    tags: ["Archaeology", "Boulders", "UNESCO Site", "Cycling", "Ancient History"]
  },
  {
    id: "goa-beaches-heritage",
    name: "Goa Beaches & Portuguese Heritage",
    city: "Panaji & South Goa",
    state: "Goa",
    region: "West India",
    category: "Beaches and islands",
    rating: 4.7,
    reviewsCount: 490,
    bestSeason: "November to March",
    duration: "4 - 5 Days",
    budgetRange: "Mid-range",
    approxBudget: "₹3,000 - ₹7,500 / day",
    coordinates: [15.2993, 74.1240],
    coverImage: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80"
    ],
    overview: "A blend of Indian coastal vibrancy and centuries of Portuguese colonial heritage, Goa offers sun-kissed Arabian Sea beaches, UNESCO Baroque churches in Old Goa, colourful Latin Quarters in Fontainhas, spice plantations, and renowned seafood cuisine.",
    whyVisit: "Relax on tranquil South Goa beaches like Palolem, explore 16th-century basilicas, kayak through backwater mangroves, and savour Goan fish curry rice.",
    topAttractions: [
      "Palolem & Agonda Beaches (South Goa tranquility)",
      "Fontainhas (Latin Quarter in Panaji with colourful villas)",
      "Basilica of Bom Jesus & Se Cathedral (Old Goa)",
      "Aguada Fort & Chapora Fort",
      "Dudhsagar Waterfalls (Four-tiered waterfall in jungle)",
      "Sahakari Spice Farm"
    ],
    entryTickets: "Beaches and churches are free. Dudhsagar jeep safari has fixed forest department rates (~₹500/seat).",
    visitingHours: "Churches open 9:00 AM - 5:30 PM (services on Sundays). Beaches open 24/7.",
    weatherGuidance: "Sunny winter days (20°C - 32°C). Monsoon brings lush green landscapes and fewer crowds.",
    localTransport: "Renting self-drive scooters/cars is widespread; GoaMiles app for official cabs.",
    accommodation: "Beachside wooden cottages, restored Portuguese villas, luxury beach resorts, and lively hostels.",
    famousFood: [
      { name: "Goan Fish Curry Thali", place: "Vinayak Family Restaurant / Ritz Classic", desc: "Fresh kingfish or pomfret in tangy kokum and coconut gravy served with rice." },
      { name: "Pork Vindaloo / Mushroom Xacuti", place: "Viva Panjim (Fontainhas)", desc: "Slow-simmered aromatic curry prepared with toddy vinegar and roasted spices." },
      { name: "Bebinca", place: "Mr. Baker 1922 / Local bakeries", desc: "Traditional 7-layer Indo-Portuguese baked dessert made from coconut milk and egg yolks." }
    ],
    nearbySacred: [
      { name: "Basilica of Bom Jesus", tradition: "Christianity", dist: "Old Goa", etiquette: "Holds mortal remains of St. Francis Xavier; respectful silence & modest clothing." },
      { name: "Shanta Durga Temple", tradition: "Hinduism", dist: "Kavlem (Ponda)", etiquette: "Unique Goan-Portuguese fusion temple architecture." },
      { name: "Safa Shahouri Masjid", tradition: "Islam", dist: "Ponda (25 km)", etiquette: "16th-century stone mosque built by Adil Shah with historic masonry tank." }
    ],
    nearbyAmusement: [
      { name: "Grand Island Scuba Diving & Snorkeling", type: "Water Sports / Marine", dist: "Departs from Panaji/Bogmalo", note: "Coral reefs, shipwrecks, and dolphin watching." },
      { name: "Splashdown Goa Waterpark", type: "Water Park", dist: "Anjuna (North Goa)", note: "Family water slides and flumes." }
    ],
    safetyEtiquette: "Swim only between flagged safe zones monitored by Drishti lifeguards. Strictly respect church service hours and photography restrictions inside sanctuaries.",
    suggestedItinerary: [
      { day: "Day 1", plan: "Old Goa heritage churches -> Walk through Fontainhas Latin Quarter -> Sunset Mandovi river cruise." },
      { day: "Day 2", plan: "Trip to Dudhsagar Waterfalls & spice plantation lunch -> Evening at Colva beach." },
      { day: "Day 3", plan: "South Goa beach day at Palolem -> Kayaking -> Fresh seafood dinner by the waves." }
    ],
    tags: ["Beaches", "Colonial Heritage", "Seafood", "Water Sports", "Relaxation"]
  },
  {
    id: "amritsar-golden-temple",
    name: "Golden Temple & Wagah",
    city: "Amritsar",
    state: "Punjab",
    region: "North India",
    category: "Religious and spiritual",
    rating: 4.9,
    reviewsCount: 460,
    bestSeason: "October to March",
    duration: "2 - 3 Days",
    budgetRange: "Budget-friendly",
    approxBudget: "₹1,500 - ₹3,500 / day",
    coordinates: [31.6200, 74.8765],
    coverImage: "https://images.unsplash.com/photo-1588096344356-9b5d2753ef49?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1588096344356-9b5d2753ef49?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1609137144822-7773db8e0573?auto=format&fit=crop&w=800&q=80"
    ],
    overview: "The spiritual and cultural center of the Sikh faith, the Sri Harmandir Sahib (Golden Temple) in Amritsar is an awe-inspiring shrine with its upper floors plated in real gold foil, standing serenely in the Amrit Sarovar (Pool of Nectar). Open to people of all faiths, its community kitchen (Langar) serves over 100,000 free hot meals daily without distinction.",
    whyVisit: "Bask in the transcendent peace of Gurbani kirtan echoing across the holy pool, participate in or eat at the world's largest free community kitchen, and witness the patriotic Wagah Border retreat ceremony.",
    topAttractions: [
      "Sri Harmandir Sahib (Golden Temple) & Amrit Sarovar",
      "Guru Ka Langar (24/7 Community Kitchen)",
      "Jallianwala Bagh Memorial & Eternal Flame",
      "Wagah Border Beating Retreat Ceremony (30 km)",
      "Partition Museum (Town Hall)",
      "Gobindgarh Fort (Historic military citadel)"
    ],
    entryTickets: "Golden Temple and Langar are completely free. Partition Museum: ₹10 (Indians), ₹250 (Foreigners). Wagah Border ceremony is free (arrive by 3:30 PM for seating).",
    visitingHours: "Golden Temple open 24 hours every day. Palki Sahib night ceremony takes place around 10:00 PM.",
    weatherGuidance: "Chilly in winter (4°C - 18°C); warm woolens required in Dec-Jan. Sunny afternoons.",
    localTransport: "Electric auto-rickshaws, pedal rickshaws, and free SGPC shuttle buses from railway station.",
    accommodation: "SGPC Sarai guest houses on temple premises, heritage boutique hotels, and budget city hotels.",
    famousFood: [
      { name: "Amritsari Kulcha with Chole", place: "Kulcha Land / Bhai Kulwant Singh Kulchian", desc: "Crisp tandoor-baked flaky bread stuffed with spiced potatoes and onions, topped with desi butter." },
      { name: "Makki di Roti & Sarson da Saag", place: "Kesar Da Dhaba (Heritage 1916)", desc: "Slow-simmered mustard greens with rich white butter and flat cornbread." },
      { name: "Gianiji di Lassi & Jalebi", place: "Near Hall Bazaar", desc: "Thick creamy sweet lassi served in clay kulhad with a slab of rabri." }
    ],
    nearbySacred: [
      { name: "Sri Harmandir Sahib (Golden Temple)", tradition: "Sikhism", dist: "0 km", etiquette: "Head must be covered at all times; remove shoes and wash feet at entrance pool; no tobacco or alcohol permitted anywhere near premises." },
      { name: "Durgiana Temple (Lakshmi Narayan)", tradition: "Hinduism", dist: "2 km", etiquette: "Beautiful temple set in water tank, dedicated to Goddess Durga." },
      { name: "Khairuddin Mosque (Hall Bazaar)", tradition: "Islam", dist: "1.5 km", etiquette: "Historic 1866 mosque from where call against British rule was heralded." }
    ],
    nearbyAmusement: [
      { name: "Suncity Amusement & Water Park", type: "Water / Theme Park", dist: "Batala Road (5 km)", note: "Wave pool and family water slides." },
      { name: "Gobindgarh Fort Whispering Walls Show", type: "Cultural Light & Sound", dist: "Old City", note: "3D projection mapping on historic fort walls depicting Maharaja Ranjit Singh." }
    ],
    safetyEtiquette: "Strict modesty of attire required in the temple complex. Always cover your head (scarves provided free at entrance). Do not walk with feet pointing towards the holy book.",
    suggestedItinerary: [
      { day: "Day 1", plan: "Morning Golden Temple visit & Langar meal -> Jallianwala Bagh -> Partition Museum -> Palki Sahib night ceremony." },
      { day: "Day 2", plan: "Amritsari Kulcha breakfast -> Heritage shopping in Hall Bazaar -> Afternoon trip to Wagah Border ceremony -> Dinner at Kesar Da Dhaba." }
    ],
    tags: ["Spiritual", "Sikh Heritage", "Community Kitchen", "Food Trail", "Patriotic"]
  },
  {
    id: "ladakh-pangong",
    name: "Ladakh & Pangong Tso",
    city: "Leh",
    state: "Ladakh UT",
    region: "Himalayan North",
    category: "Mountains and hill stations",
    rating: 4.9,
    reviewsCount: 320,
    bestSeason: "May to September",
    duration: "5 - 7 Days",
    budgetRange: "Mid-range",
    approxBudget: "₹4,000 - ₹9,000 / day",
    coordinates: [34.1526, 77.5771],
    coverImage: "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=800&q=80"
    ],
    overview: "Known as 'The Land of High Passes', Ladakh is a high-altitude desert framed by the Karakoram and Himalayan ranges. Famed for its deep blue cobalt skies, Tibetan Buddhist monasteries perched on cliff faces, and high-altitude lakes like Pangong Tso and Tso Moriri, it is one of the most dramatically scenic regions on Earth.",
    whyVisit: "Watch Pangong Tso change colours from emerald green to deep azure, cross the world's highest motorable passes like Khardung La, and discover centuries of Buddhist heritage.",
    topAttractions: [
      "Pangong Tso (High-altitude saline lake extending to Tibet)",
      "Nubra Valley & Hunder Sand Dunes (Double-humped Bactrian camels)",
      "Thiksey & Hemis Monasteries",
      "Khardung La Pass (17,982 ft)",
      "Shanti Stupa & Leh Palace",
      "Magnetic Hill & Confluence of Indus-Zanskar (Sangam)"
    ],
    entryTickets: "Inner Line Permit (ILP) required for Nubra & Pangong (~₹400 environmental fee via LAHDC portal). Monasteries have nominal entry fees (₹30 - ₹50).",
    visitingHours: "Monasteries typically open 7:00 AM - 6:00 PM.",
    weatherGuidance: "High altitude cold desert; summers are sunny (15°C - 25°C) with cold nights (5°C). Acclimatization for 48 hours in Leh is medically essential.",
    localTransport: "Leh Taxi Union 4x4 vehicles (Innova, Scorpio) or rented Royal Enfield motorcycles.",
    accommodation: "Eco-hotels in Leh, glamping luxury domes at Pangong and Nubra, village homestays.",
    famousFood: [
      { name: "Ladakhi Thukpa & Momos", place: "Gesmo Restaurant / The Tibetan Kitchen", desc: "Hearty handmade noodle soup with fresh vegetables and steamed wheat dumplings." },
      { name: "Tingmo & Vegetable Curry", place: "Chopsticks Noodle Bar", desc: "Soft, steamed flower-shaped yeast bread served with rich local curries." },
      { name: "Butter Tea (Gur Gur Chai)", place: "Monastery kitchens & local homes", desc: "Traditional warm tea brewed with yak butter, salt, and tea leaves." }
    ],
    nearbySacred: [
      { name: "Thiksey Monastery", tradition: "Buddhism", dist: "19 km from Leh", etiquette: "Houses majestic 49ft Maitreya Buddha; morning prayer ceremony at 6:00 AM is deeply meditative." },
      { name: "Hemis Monastery", tradition: "Buddhism", dist: "45 km", etiquette: "Largest and wealthiest monastery in Ladakh, home of the colourful Hemis Tsechu festival." },
      { name: "Gurdwara Pathar Sahib", tradition: "Sikhism", dist: "25 km", etiquette: "Built in 1517 to commemorate Guru Nanak Dev Ji's journey; maintained lovingly by the Indian Army." },
      { name: "Jama Masjid Leh", tradition: "Islam", dist: "Leh Main Bazaar", etiquette: "Built in 1666 under an agreement between Deldan Namgyal and Aurangzeb." }
    ],
    nearbyAmusement: [
      { name: "Zanskar River White Water Rafting", type: "Extreme Adventure", dist: "Chilling to Sangam (Grade III-IV)", note: "Rapid river rafting through rugged mountain gorges." },
      { name: "ATV Quad Biking in Hunder Sand Dunes", type: "Adventure Fun", dist: "Nubra Valley", note: "Riding across cold desert sand dunes." }
    ],
    safetyEtiquette: "Mandatory rest for 24-48 hours upon landing in Leh. Keep hydrated; avoid alcohol initially. Pangong Tso is ecologically sensitive—leave no trash and never drive vehicles onto the lakeshore.",
    suggestedItinerary: [
      { day: "Day 1-2", plan: "Complete rest in Leh for acclimatization -> Evening walk to Shanti Stupa." },
      { day: "Day 3", plan: "Drive across Khardung La to Nubra Valley -> Camel safari on Hunder sand dunes." },
      { day: "Day 4", plan: "Nubra to Pangong Tso via Shyok route -> Sunset over the lake -> Stargazing." },
      { day: "Day 5", plan: "Sunrise at Pangong -> Return to Leh via Chang La -> Thiksey Monastery visit." }
    ],
    tags: ["Himalayas", "Adventure", "High Passes", "Buddhism", "Road Trip"]
  },
  {
    id: "meghalaya-cherrapunji",
    name: "Cherrapunji & Living Root Bridges",
    city: "Sohra (Cherrapunji) & Shillong",
    state: "Meghalaya",
    region: "North-East India",
    category: "Waterfalls and lakes",
    rating: 4.8,
    reviewsCount: 275,
    bestSeason: "September to May",
    duration: "4 - 5 Days",
    budgetRange: "Mid-range",
    approxBudget: "₹3,000 - ₹6,500 / day",
    coordinates: [25.2986, 91.5822],
    coverImage: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
    ],
    overview: "Known as the 'Abode of Clouds', Meghalaya is home to dramatic limestone gorges, crystal-clear rivers, and living root bridges bio-engineered by the indigenous Khasi and Jaintia tribes over centuries using the aerial roots of Ficus elastica trees.",
    whyVisit: "Trek through lush rainforests to the Double Decker Living Root Bridge in Nongriat, boat on the glass-like waters of Dawki River, and stand before towering Nohkalikai Falls.",
    topAttractions: [
      "Nongriat Double Decker Living Root Bridge (3,500 stone steps)",
      "Nohkalikai Falls (Tallest plunge waterfall in India)",
      "Dawki & Umngot River (Glass-clear river boating)",
      "Mawsmai & Arwah Caves (Fossils & stalactites)",
      "Mawlynnong ('Cleanest Village in Asia')",
      "Seven Sisters Waterfalls"
    ],
    entryTickets: "Waterfall viewpoints: ₹20 - ₹50. Living Root Bridge community fee: ₹50. Dawki boating: ₹800 per boat for 45 minutes.",
    visitingHours: "Natural viewpoints open 6:00 AM - 5:00 PM (early sunsets in North-East).",
    weatherGuidance: "Cool and pleasant in winter (10°C - 22°C); monsoons (June-Aug) bring immense rainfall and raging waterfalls.",
    localTransport: "Private tourist taxis from Shillong; shared sumos connect major regional hubs.",
    accommodation: "Village homestays in Nongriat and Mawlynnong, eco-resorts overlooking Bangladesh plains in Sohra.",
    famousFood: [
      { name: "Jadoh with Dohkhleh", place: "Trattoria / Local Khasi Stalls in Shillong", desc: "Fragrant rice cooked in meat stock with ginger, served with traditional salad." },
      { name: "Pukhlein & Red Tea (Sha Saw)", place: "Village tea stalls", desc: "Sweet, crunchy deep-fried rice flour and jaggery bread paired with black tea." }
    ],
    nearbySacred: [
      { name: "Mawphlang Sacred Forest", tradition: "Indigenous Khasi Spiritual Forest", dist: "25 km from Shillong", etiquette: "Ancient sacred grove protected by tribal taboos; not a single leaf, twig, or stone may be taken from the forest." },
      { name: "All Saints Church & Cathedral of Mary Help of Christians", tradition: "Christianity", dist: "Shillong", etiquette: "Majestic wooden and stained-glass architecture; peaceful reflection." },
      { name: "Nartiang Monoliths & Durga Temple", tradition: "Hinduism / Heritage", dist: "Jaintia Hills (65 km)", etiquette: "Site of historic 500-year-old Hindu temple and the tallest tribal stone monoliths." }
    ],
    nearbyAmusement: [
      { name: "Dawki Cliff Jumping & Kayaking", type: "Adventure Water Sports", dist: "Shnongpdeng (Dawki)", note: "Kayaking, river camping, and snorkeling in crystal clear waters." },
      { name: "Arwah Cave Spelunking", type: "Cave Exploration", dist: "Cherrapunji", note: "Underground passages with marine fossils." }
    ],
    safetyEtiquette: "The Nongriat root bridge trek involves 3,500 steep steps each way—requires reasonable physical fitness and good knee support. Respect the sacred matrilineal traditions of the Khasi community.",
    suggestedItinerary: [
      { day: "Day 1", plan: "Arrive Shillong -> Umiam Lake -> Walk through Police Bazar." },
      { day: "Day 2", plan: "Drive to Cherrapunji -> Nohkalikai Falls -> Mawsmai Cave -> Seven Sisters view." },
      { day: "Day 3", plan: "Trek to Nongriat Double Decker Living Root Bridge & Rainbow Falls -> Overnight homestay or return." },
      { day: "Day 4", plan: "Dawki Umngot river boating -> Walk through Mawlynnong village." }
    ],
    tags: ["Rainforest", "Living Root Bridges", "Waterfalls", "Tribal Culture", "Trekking"]
  },
  {
    id: "mysuru-palace",
    name: "Mysuru Palace & Chamundi Hill",
    city: "Mysuru",
    state: "Karnataka",
    region: "South India",
    category: "Forts and palaces",
    rating: 4.8,
    reviewsCount: 340,
    bestSeason: "September to March",
    duration: "2 - 3 Days",
    budgetRange: "Mid-range",
    approxBudget: "₹2,500 - ₹5,000 / day",
    coordinates: [12.3052, 76.6552],
    coverImage: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80"
    ],
    overview: "Seat of the erstwhile Wadiyar Dynasty, Mysuru (Mysore) is the cultural capital of Karnataka. The grand Mysuru Palace, designed in Indo-Saracenic style by British architect Henry Irwin, boasts ornate carved mahogany ceilings, stained glass domes, solid silver doors, and nearly 100,000 electric bulbs that illuminate it like a fairy tale on Sundays.",
    whyVisit: "Admire royal regalia, witness the Sunday palace illumination, climb Chamundi Hill, browse fragrant sandalwood and Mysore silk bazaars, and taste original Mysore Pak.",
    topAttractions: [
      "Mysore Palace (Amba Vilas)",
      "Chamundeshwari Temple & Nandi Monolith",
      "Devaraja Market (Spices, flowers, essential oils)",
      "St. Philomena's Cathedral (Neo-Gothic)",
      "Brindavan Gardens & Musical Fountain",
      "Karanji Lake & Aviary"
    ],
    entryTickets: "Palace entry: ₹100 (Indians), ₹200 (Foreigners) with audio guide included. Illumination is free to watch from palace grounds on Sundays 7:00 PM - 7:45 PM.",
    visitingHours: "Palace open 10:00 AM - 5:30 PM. Chamundi temple open 7:30 AM - 9:00 PM.",
    weatherGuidance: "Pleasant year-round climate (19°C - 30°C).",
    localTransport: "KSRTC city buses, tongas (horse carriages around palace), and auto-rickshaws.",
    accommodation: "Royal heritage hotels (Lalitha Mahal Palace), boutique hotels, and budget city lodges.",
    famousFood: [
      { name: "Original Mysore Pak", place: "Guru Sweet Mart (Sayyaji Rao Rd)", desc: "Melt-in-the-mouth sweet created for the Maharaja by royal chef Kakasura Madappa." },
      { name: "Mysore Masala Dosa", place: "Mylari Hotel (Agrahara)", desc: "Soft and fluffy dosa smeared with spicy red garlic-onion chutney and fresh butter." }
    ],
    nearbySacred: [
      { name: "Chamundeshwari Temple", tradition: "Hinduism", dist: "13 km (Chamundi Hill)", etiquette: "Ancient Shakti temple; hair dress code; devotees climb 1,000 stone steps or take road." },
      { name: "St. Philomena's Cathedral", tradition: "Christianity", dist: "3 km", etiquette: "One of the tallest churches in Asia, built in 1936 with twin 175ft spires." },
      { name: "Masjid-e-Azam", tradition: "Islam", dist: "Near palace", etiquette: "Historic 18th-century mosque built by Tipu Sultan." }
    ],
    nearbyAmusement: [
      { name: "GRS Fantasy Park", type: "Amusement & Water Park", dist: "6 km from city", note: "Popular water slides, lazy river, and thrill rides." },
      { name: "Mysore Zoo (Sri Chamarajendra Zoological Gardens)", type: "Wildlife / Nature", dist: "City Centre", note: "One of India's oldest and best maintained zoological parks." }
    ],
    safetyEtiquette: "Shoes must be checked at the palace entrance locker room. Photography is permitted inside the palace corridors without flash.",
    suggestedItinerary: [
      { day: "Day 1", plan: "Morning Chamundi Hill -> Devaraja Market walk -> Mysore Palace tour -> Sunday night illumination." },
      { day: "Day 2", plan: "Breakfast at Mylari -> St. Philomena's Cathedral -> Afternoon Srirangapatna (Tipu Sultan's island fortress) -> Brindavan Gardens." }
    ],
    tags: ["Royal Heritage", "Palaces", "Sandalwood", "Food Trail", "Karnataka Culture"]
  },
  {
    id: "darjeeling-west-bengal",
    name: "Darjeeling & Kanchenjunga",
    city: "Darjeeling",
    state: "West Bengal",
    region: "East India / Himalayas",
    category: "Mountains and hill stations",
    rating: 4.7,
    reviewsCount: 290,
    bestSeason: "October to April",
    duration: "3 - 4 Days",
    budgetRange: "Mid-range",
    approxBudget: "₹2,500 - ₹5,500 / day",
    coordinates: [27.0410, 88.2663],
    coverImage: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80"
    ],
    overview: "Cradled in the Eastern Himalayas against the backdrop of Mount Kanchenjunga (the world's third-highest peak), Darjeeling is world-famous for its aromatic orthodox tea estates, colonial-era heritage, and the historic Darjeeling Himalayan Railway ('Toy Train')—a UNESCO World Heritage railway operating since 1881.",
    whyVisit: "Witness sunrise illuminating Mount Kanchenjunga in gold from Tiger Hill, ride the steam toy train, taste First Flush Darjeeling champagne tea, and explore Buddhist gompas.",
    topAttractions: [
      "Tiger Hill (Sunrise view of Kanchenjunga & Everest)",
      "Darjeeling Himalayan Railway (Toy Train Joyride to Ghoom)",
      "Batasia Loop & Gorkha War Memorial",
      "Happy Valley Tea Estate",
      "Padmaja Naidu Himalayan Zoological Park (Snow leopards & Red pandas)",
      "Himalayan Mountaineering Institute (HMI)"
    ],
    entryTickets: "Tiger Hill vehicle pass: ₹100. Zoo & HMI composite: ₹110. Toy Train steam joyride: ₹1,500 (First class steam), ₹1,000 (Diesel).",
    visitingHours: "Tiger Hill requires 4:00 AM departure. Tea estates open 9:00 AM - 4:00 PM.",
    weatherGuidance: "Chilly in winter (2°C - 10°C). Spring (March-April) brings blooming rhododendrons and clear mountain views.",
    localTransport: "Shared and private 4WD taxis (Bolero, Scorpio); Mall Road and Chowrasta are pedestrian-only promenades.",
    accommodation: "Colonial heritage hotels (Windamere, Elgin), cozy hill cottages, and homestays.",
    famousFood: [
      { name: "Steamed Momos & Thukpa", place: "Kunga Restaurant / Dekevas", desc: "Plump Tibetan momos with fiery red chili-dalle paste and piping hot broth." },
      { name: "First Flush Darjeeling Tea & Pastries", place: "Nathmulls Tea Lounge / Glenary's Bakery", desc: "Delicate muscatel floral tea served with fresh apple pies and fruit tarts." }
    ],
    nearbySacred: [
      { name: "Ghoom Monastery (Yiga Choeling)", tradition: "Buddhism", dist: "8 km", etiquette: "Built in 1850; houses 15ft clay Maitreya Buddha; spin prayer wheels clockwise." },
      { name: "Peace Pagoda & Japanese Buddhist Temple", tradition: "Buddhism", dist: "3 km", etiquette: "Built by Nichidatsu Fuji; serene outdoor chanting and drum prayers." },
      { name: "Mahakal Temple", tradition: "Hinduism / Buddhist Syncretism", dist: "Observatory Hill", etiquette: "Unique temple where Hindu priests and Buddhist monks pray together." }
    ],
    nearbyAmusement: [
      { name: "Darjeeling Ropeway (Cable Car)", type: "Scenic Cable Car", dist: "Singamari (3 km)", note: "Glide over lush tea gardens down into the valley." }
    ],
    safetyEtiquette: "Wear layered warm clothing for early morning Tiger Hill. Beware of steep cobblestone slopes if traveling with elderly relatives.",
    suggestedItinerary: [
      { day: "Day 1", plan: "Chowrasta promenade stroll -> Glenary's bakery -> Padmaja Naidu Zoo & Mountaineering Institute." },
      { day: "Day 2", plan: "4:00 AM Tiger Hill sunrise -> Ghoom Monastery & Batasia Loop -> Joyride Toy Train." },
      { day: "Day 3", plan: "Happy Valley Tea tasting -> Cable Car ropeway -> Peace Pagoda." }
    ],
    tags: ["Hill Station", "Tea Gardens", "Toy Train", "Kanchenjunga", "Tibetan Culture"]
  },
  {
    id: "udaipur-rajasthan",
    name: "Udaipur (City of Lakes)",
    city: "Udaipur",
    state: "Rajasthan",
    region: "West India",
    category: "Forts and palaces",
    rating: 4.9,
    reviewsCount: 395,
    bestSeason: "October to March",
    duration: "3 - 4 Days",
    budgetRange: "Mid-range",
    approxBudget: "₹3,500 - ₹8,500 / day",
    coordinates: [24.5854, 73.7125],
    coverImage: "https://images.unsplash.com/photo-1615836245337-f5b9b2303f10?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1615836245337-f5b9b2303f10?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80"
    ],
    overview: "Set amidst the serene Aravalli Range around Lake Pichola, Udaipur is often hailed as the 'Venice of the East'. Founded in 1559 by Maharana Udai Singh II as the historic capital of the Mewar Kingdom, it is celebrated for towering marble palaces, peacock courtyards, boat cruises, and sunset ghats.",
    whyVisit: "Cruise Lake Pichola past the floating Lake Palace, walk through the grand City Palace museum, admire Mewar miniature paintings, and dine overlooking shimmering waters at Ambrai Ghat.",
    topAttractions: [
      "City Palace & Crystal Gallery",
      "Lake Pichola Sunset Boat Cruise",
      "Jag Mandir Island Palace",
      "Saheliyon-ki-Bari (Courtyard of Maidens)",
      "Bagore Ki Haveli (Folk Dance & Puppet Show)",
      "Sajjangarh Monsoon Palace (Panoramic Sunset)"
    ],
    entryTickets: "City Palace entry: ₹300 (Indians), ₹400 (Foreigners). Pichola boat ride: ₹500 daytime, ₹800 sunset cruise.",
    visitingHours: "City Palace open 9:00 AM - 5:30 PM. Bagore Ki Haveli Dharohar show 7:00 PM - 8:00 PM.",
    weatherGuidance: "Winters (Nov-Feb) are pleasant (12°C - 28°C) with clear reflections on lakes.",
    localTransport: "Auto-rickshaws, e-rickshaws, walking along Lal Ghat, and boat transfers between island ghats.",
    accommodation: "Historic heritage havelis along Lake Pichola, boutique luxury palaces, and atmospheric lake-view guest houses.",
    famousFood: [
      { name: "Laal Maas", place: "Tribute / Traditional Dining", desc: "Slow-braised mutton curry infused with fiery red Mathania chilies and garlic." },
      { name: "Dal Baati Churma", place: "Krishna Dal Baati Restro", desc: "Authentic Mewari thali served with pure desi ghee and spiced buttermilk." }
    ],
    nearbySacred: [
      { name: "Jagdish Temple", tradition: "Hinduism", dist: "City Centre", etiquette: "Majestic 1651 Indo-Aryan temple dedicated to Lord Vishnu; steep stone flight of stairs." },
      { name: "Eklingji Temple", tradition: "Hinduism", dist: "22 km", etiquette: "Complex of 108 temples dedicated to Shiva, the guardian deity of Mewar rulers." }
    ],
    nearbyAmusement: [
      { name: "Udaipur Ropeway (Karni Mata)", type: "Cable Car", dist: "Doodh Talai", note: "Scenic cable car over Lake Pichola and city skyline." }
    ],
    safetyEtiquette: "Wear modest clothing when visiting Jagdish temple. Book the evening Bagore Ki Haveli cultural show ticket in advance as seats fill quickly.",
    suggestedItinerary: [
      { day: "Day 1", plan: "City Palace exploration -> Jagdish Temple -> Sunset boat ride on Lake Pichola -> Dinner at Ambrai." },
      { day: "Day 2", plan: "Saheliyon-ki-Bari -> Vintage Car Museum -> Monsoon Palace for sunset -> Bagore Ki Haveli folk dance." }
    ],
    tags: ["Lakes", "Palaces", "Romantic", "Mewar Heritage", "Photography"]
  },
  {
    id: "amritsar-punjab",
    name: "Amritsar & Golden Temple",
    city: "Amritsar",
    state: "Punjab",
    region: "North India",
    category: "Religious and spiritual",
    rating: 4.9,
    reviewsCount: 460,
    bestSeason: "October to March",
    duration: "2 - 3 Days",
    budgetRange: "Budget-friendly",
    approxBudget: "₹2,000 - ₹4,500 / day",
    coordinates: [31.6200, 74.8765],
    coverImage: "https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?auto=format&fit=crop&w=800&q=80"
    ],
    overview: "Home to Sri Harmandir Sahib (The Golden Temple), the spiritual and cultural heart of Sikhism, Amritsar was founded in 1577 by Guru Ram Das. Its central gold-leaf sanctum sits in the Amrit Sarovar ('Pool of Nectar'), where hymns (Gurbani) reverberate peacefully day and night.",
    whyVisit: "Experience the profound peace of the Golden Temple, partake in the world's largest community kitchen (Langar feeding 100,000 people daily for free), witness the patriotic Wagah Border Beating Retreat ceremony, and savor Amritsari Kulcha.",
    topAttractions: [
      "Sri Harmandir Sahib (The Golden Temple & Langar)",
      "Akal Takht & Central Sikh Museum",
      "Jallianwala Bagh Memorial & Flame of Liberty",
      "Partition Museum (Town Hall)",
      "Wagah-Attari Border Beating Retreat Ceremony",
      "Heritage Street Walk"
    ],
    entryTickets: "Golden Temple and Langar are free and open to all humanity. Wagah border viewing is free (arrive early for seating). Partition Museum: ₹10 (Indians), ₹250 (Foreigners).",
    visitingHours: "Golden Temple open 24/7. Wagah Border ceremony daily at sunset (4:30 PM - 5:30 PM).",
    weatherGuidance: "Winters are chilly and crisp (4°C - 20°C). Pleasant sunny days.",
    localTransport: "Electric rickshaws along the pedestrianized Heritage Street; taxis available for the Wagah Border drive (30 km).",
    accommodation: "Free pilgrim sarai accommodations in temple complex, boutique hotels on Heritage Street, and heritage farm stays in Punjab countryside.",
    famousFood: [
      { name: "Amritsari Kulcha", place: "Bhai Kulwant Singh / Pehelwan Kulcha", desc: "Crisp, flaky, layered flatbread stuffed with spiced potatoes and onions, topped with desi butter and tangy chole." },
      { name: "Golden Temple Langar", place: "Guru Ka Langar", desc: "Sacred community meal of hot rotis, dal makhani, and kheer served with unconditional love." },
      { name: "Creamy Lassi", place: "Ahuja Milk Bhandar / Gian Chand", desc: "Thick hand-churned yogurt drink served in brass cups topped with a thick layer of malai." }
    ],
    nearbySacred: [
      { name: "Durgiana Temple", tradition: "Hinduism", dist: "2 km", etiquette: "Historic 16th-century temple architecturally resembling the Golden Temple, dedicated to Goddess Durga." },
      { name: "Gurdwara Baba Deep Singh (Shahid Ganj)", tradition: "Sikhism", dist: "1.5 km", etiquette: "Sacred historical site commemorating Sikh martyr Baba Deep Singh." }
    ],
    nearbyAmusement: [
      { name: "Sadda Pind Cultural Village", type: "Cultural Resort & Entertainment", dist: "12 km", note: "Living museum of Punjabi heritage, folk dances, pottery, and traditional games." }
    ],
    safetyEtiquette: "Head coverings (rumāl) and barefoot entry are strictly mandatory for all visitors inside the Golden Temple. Tobacco, alcohol, and leather items are strictly prohibited.",
    suggestedItinerary: [
      { day: "Day 1", plan: "Sunrise darshan at Golden Temple -> Volunteer at Langar hall -> Walk Jallianwala Bagh -> Afternoon drive to Wagah Border ceremony -> Dinner with Amritsari Kulcha." },
      { day: "Day 2", plan: "Partition Museum -> Heritage Street shopping for Phulkari dupattas -> Night illumination of Golden Temple." }
    ],
    tags: ["Sikh Heritage", "Golden Temple", "Langar", "Wagah Border", "Culinary Trail"]
  },
  {
    id: "rann-of-kutch-gujarat",
    name: "Rann of Kutch & White Desert",
    city: "Dhordo & Bhuj",
    state: "Gujarat",
    region: "West India",
    category: "Mountains and hill stations",
    rating: 4.8,
    reviewsCount: 310,
    bestSeason: "November to February",
    duration: "3 - 4 Days",
    budgetRange: "Mid-range",
    approxBudget: "₹3,500 - ₹7,000 / day",
    coordinates: [23.8344, 69.8378],
    coverImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80"
    ],
    overview: "The Great Rann of Kutch is one of the world's largest salt marsh deserts, spanning over 7,500 square kilometres. During the winter full-moon nights, the vast crust of pure white salt gleams like diamonds under the starlit sky, accompanied by the vibrant Rann Utsav festival.",
    whyVisit: "Witness the surreal white salt expanse under a full moon, stay in traditional circular mud bhungas, discover Rogan art and Kutchi mirror-work embroidery in artisan villages, and spot flamingos.",
    topAttractions: [
      "White Desert Sunset & Full Moon Viewing",
      "Kalo Dungar (Black Hill - Highest point in Kutch)",
      "Nirona Artisan Village (Rogan art & Copper bells)",
      "Aina Mahal & Prag Mahal in Bhuj",
      "Dholavira (Harappan UNESCO World Heritage Site)"
    ],
    entryTickets: "Permit required for White Desert (~₹100 per person + ₹50 for vehicle, obtainable online or at Bhirandiyara checkpoint with government ID).",
    visitingHours: "Sunrise to 10:00 PM for the salt desert. Full moon nights offer magical illumination.",
    weatherGuidance: "Sunny days (24°C) but rapid temperature drops at night (can drop to 8°C). Warm woolens essential.",
    localTransport: "Private taxis or rental cars from Bhuj (85 km from Dhordo tent city). Camel carts operate on the salt flats.",
    accommodation: "Rann Utsav tent cities, luxury desert camps in Dhordo, and authentic homestays in Hodka artisan village.",
    famousFood: [
      { name: "Kutchi Dabeli", place: "Bhuj Street Stalls", desc: "Spiced mashed potato filling laced with pomegranate, roasted peanuts, and tamarind chutney inside a burger pav." },
      { name: "Traditional Kathiyawadi Thali", place: "Hodka & Bhuj", desc: "Bajra rotla served with Ringan No Olo (roasted eggplant), garlic chutney, and jaggery with fresh white butter." }
    ],
    nearbySacred: [
      { name: "Dattatreya Temple (Kalo Dungar)", tradition: "Hinduism", dist: "Highest peak", etiquette: "Priests feed wild jackals with sweet yellow rice prasad daily after noon aarti." },
      { name: "Mata No Madh (Ashapura Temple)", tradition: "Hinduism", dist: "80 km", etiquette: "Ancient 14th-century kuldevi shrine of Kutch rulers." }
    ],
    nearbyAmusement: [
      { name: "Rann Utsav Cultural Arena", type: "Cultural Festival & Adventure", dist: "Dhordo", note: "Hot air ballooning, paramotoring over salt flats, ATV rides, and Kutchi folk concerts." }
    ],
    safetyEtiquette: "Always carry an official government photo ID (Aadhaar or Passport) to obtain the border area entry permit. Do not drive standard non-4WD vehicles onto unpaved wet salt flats.",
    suggestedItinerary: [
      { day: "Day 1", plan: "Arrive Bhuj -> Visit Aina Mahal & Prag Mahal -> Drive to Dhordo -> Sunset on the White Desert." },
      { day: "Day 2", plan: "Kalo Dungar panoramic view -> Nirona craft village -> Full moon night walk on the salt desert." },
      { day: "Day 3", plan: "Day excursion to ancient Dholavira Harappan civilization ruins." }
    ],
    tags: ["White Desert", "Salt Flats", "Rann Utsav", "Artisan Crafts", "Full Moon"]
  },
  {
    id: "kaziranga-assam",
    name: "Kaziranga National Park",
    city: "Golaghat & Nagaon",
    state: "Assam",
    region: "East India",
    category: "Forests and wildlife sanctuaries",
    rating: 4.8,
    reviewsCount: 280,
    bestSeason: "November to April",
    duration: "2 - 3 Days",
    budgetRange: "Mid-range",
    approxBudget: "₹3,500 - ₹6,500 / day",
    coordinates: [26.5775, 93.1711],
    coverImage: "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&w=800&q=80"
    ],
    overview: "A UNESCO World Heritage Site in the fertile floodplains of the Brahmaputra River, Kaziranga is home to the world's largest population of the Great Indian One-horned Rhinoceros (over 2,400 rhinos). It also shelters wild water buffalo, Asian elephants, swamp deer, and Bengal tigers.",
    whyVisit: "Spot one-horned rhinos grazing in elephant grass, take an open-top 4WD jungle safari through Kohora and Bagori ranges, explore Assam tea plantations, and watch Bihu folk dances.",
    topAttractions: [
      "Bagori Western Range Jeep Safari (Prime Rhino habitat)",
      "Kohora Central Range (Grasslands & Water bodies)",
      "Kaziranga National Orchid and Biodiversity Park",
      "Brahmaputra River Dolphin Boat Sightseeing",
      "Hathikuli Organic Tea Estate"
    ],
    entryTickets: "Park entry: ₹100 (Indians), ₹650 (Foreigners). Jeep safari vehicle: ~₹2,200 - ₹3,000 per safari. Orchid park: ₹100.",
    visitingHours: "Morning safari 7:30 AM - 10:00 AM; Afternoon safari 1:30 PM - 3:30 PM. Closed during monsoon season (May to October).",
    weatherGuidance: "Pleasant winter climate (10°C - 25°C). Morning fog burns off by 8:30 AM.",
    localTransport: "Registered 4WD safari jeeps through forest department; private taxis from Guwahati Airport (220 km).",
    accommodation: "Eco jungle lodges, heritage tea bungalow homestays, and forest rest houses near Kohora.",
    famousFood: [
      { name: "Assamese Thali with Khar & Tenga", place: "Maihang / Local Dhabas", desc: "Fragrant Joha rice served with raw papaya khar, sour fish tenga curry, and bamboo shoot relish." },
      { name: "Assam Golden Tip Orthodox Tea", place: "Hathikuli Tea Lounge", desc: "Malty single-estate black tea brewed fresh at the edge of the forest." }
    ],
    nearbySacred: [
      { name: "Mahabhairab Temple, Tezpur", tradition: "Hinduism", dist: "50 km", etiquette: "Ancient Shiva shrine believed to be established by King Banasura." }
    ],
    nearbyAmusement: [
      { name: "Orchid Cultural Park Musical Show", type: "Cultural & Botanical", dist: "Central Kohora", note: "Houses 500+ indigenous wild orchid species and daily Assamese folk dance performances." }
    ],
    safetyEtiquette: "Keep arms and cameras inside safari vehicles at all times. Wearing earthy olive or khaki colors is advised to avoid distressing wild animals. Plastic bottles are banned.",
    suggestedItinerary: [
      { day: "Day 1", plan: "Arrive Kohora -> Orchid Park cultural show & herbal garden -> Evening tea estate walk." },
      { day: "Day 2", plan: "Morning Jeep Safari in Bagori Range (Rhinos & Elephants) -> Lunch Assamese thali -> Afternoon Jeep Safari in Kohora Range." }
    ],
    tags: ["Wildlife", "One-Horned Rhino", "UNESCO Site", "Assam Tea", "Safaris"]
  }
];

