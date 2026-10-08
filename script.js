/* =========================================================
   WANDERLY — Celestial Journey Command Center Engine
   Features: SPA Routing, History API, Match Score Engine,
   Live Trip Planner, Cost Optimization ("Make It Cheaper"),
   Itinerary Builder, Budget Dashboard & Simulator, Saved Trips,
   Trip Comparison Matrix, Travel Checklist & Packing List,
   Readiness Score, Countdown Timer, Search, Theme Toggle
========================================================= */

document.addEventListener('DOMContentLoaded', () => {

    /* ---------------------------------------------------------
       1. DESTINATION DATASET (12 WORLD DESTINATIONS)
    --------------------------------------------------------- */
    const DESTINATIONS = [
        {
            id: 'goa',
            name: 'Goa',
            country: 'India',
            region: 'India',
            categories: 'Beach · Food · Nightlife',
            image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=85',
            transportCost: 3500,
            stayCostPerDay: 2200,
            foodCostPerDay: 1000,
            activityCostPerDay: 800,
            bestTime: 'November to February',
            bestSeasonRating: 'EXCELLENT',
            recommendedDays: '4-5 Days',
            bestFor: 'Coastal relaxation, palm-fringed beaches, Portuguese heritage, and seafood dining',
            budgetRange: '₹12,000 – ₹25,000',
            rating: 4.8,
            mood: ['beach', 'food', 'backpacking'],
            topExperiences: ['Sunset at Anjuna Beach', 'Fontainhas Heritage Walk', 'Scuba Diving at Grand Island'],
            foodHighlights: ['Goan Fish Curry', 'Pork Vindaloo', 'Bebinca Dessert']
        },
        {
            id: 'munnar',
            name: 'Munnar',
            country: 'India',
            region: 'India',
            categories: 'Mountains · Tea · Nature',
            image: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=1200&q=85',
            transportCost: 3000,
            stayCostPerDay: 1800,
            foodCostPerDay: 800,
            activityCostPerDay: 600,
            bestTime: 'September to March',
            bestSeasonRating: 'EXCELLENT',
            recommendedDays: '3-4 Days',
            bestFor: 'Rolling emerald tea gardens, misty cliff walks, and refreshing mountain climate',
            budgetRange: '₹10,000 – ₹20,000',
            rating: 4.9,
            mood: ['mountain', 'nature', 'relax'],
            topExperiences: ['Kolukkumalai Sunrise Jeep Safari', 'Tea Museum Tour', 'Eravikulam National Park'],
            foodHighlights: ['Kerala Sadya', 'Appam with Stew', 'Cardamom Tea']
        },
        {
            id: 'jaipur',
            name: 'Jaipur',
            country: 'India',
            region: 'India',
            categories: 'Heritage · Culture · Palaces',
            image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1200&q=85',
            transportCost: 2800,
            stayCostPerDay: 2000,
            foodCostPerDay: 900,
            activityCostPerDay: 700,
            bestTime: 'October to March',
            bestSeasonRating: 'EXCELLENT',
            recommendedDays: '3-4 Days',
            bestFor: 'Royal forts, honeycomb sandstone palaces, block-print textiles, and thali dining',
            budgetRange: '₹11,000 – ₹22,000',
            rating: 4.7,
            mood: ['culture', 'food', 'city'],
            topExperiences: ['Amer Fort Light Show', 'Hawa Mahal Photography', 'Johari Bazaar Shopping'],
            foodHighlights: ['Dal Baati Churma', 'Pyaaz Kachori', 'Laal Maas']
        },
        {
            id: 'bali',
            name: 'Bali',
            country: 'Indonesia',
            region: 'Asia',
            categories: 'Beaches · Culture · Adventure',
            image: 'https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=1200&q=85',
            transportCost: 16000,
            stayCostPerDay: 2800,
            foodCostPerDay: 1200,
            activityCostPerDay: 1000,
            bestTime: 'April to October',
            bestSeasonRating: 'EXCELLENT',
            recommendedDays: '5-7 Days',
            bestFor: 'Volcanic views, terraced rice paddies, cliffside temples, and beach clubs',
            budgetRange: '₹28,500 – ₹55,000',
            rating: 4.9,
            mood: ['beach', 'adventure', 'relax', 'nature'],
            topExperiences: ['Uluwatu Temple Sunset', 'Tegallalang Rice Terraces', 'Nusa Penida Boat Trip'],
            foodHighlights: ['Nasi Goreng', 'Babi Guling', 'Fresh Pitaya Smoothie Bowls']
        },
        {
            id: 'kyoto',
            name: 'Kyoto',
            country: 'Japan',
            region: 'Asia',
            categories: 'Culture · Food · History',
            image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=85',
            transportCost: 38000,
            stayCostPerDay: 7000,
            foodCostPerDay: 3000,
            activityCostPerDay: 1800,
            bestTime: 'March to May & October to November',
            bestSeasonRating: 'EXCELLENT',
            recommendedDays: '4-5 Days',
            bestFor: 'Torii gate corridors, bamboo groves, zen gardens, and matcha tea ceremonies',
            budgetRange: '₹65,000 – ₹1,20,000',
            rating: 4.9,
            mood: ['culture', 'food', 'nature'],
            topExperiences: ['Fushimi Inari Shrine Hike', 'Arashiyama Bamboo Grove Walk', 'Gion Geisha District'],
            foodHighlights: ['Tonkotsu Ramen', 'Matcha Parfait', 'Kaiseki Dining']
        },
        {
            id: 'maldives',
            name: 'Maldives',
            country: 'Maldives',
            region: 'Asia',
            categories: 'Ocean · Relaxation · Luxury',
            image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=85',
            transportCost: 22000,
            stayCostPerDay: 12000,
            foodCostPerDay: 4000,
            activityCostPerDay: 3000,
            bestTime: 'November to April',
            bestSeasonRating: 'EXCELLENT',
            recommendedDays: '4-5 Days',
            bestFor: 'Overwater bungalows, turquoise lagoon snorkeling, and pristine white sands',
            budgetRange: '₹85,000 – ₹1,80,000',
            rating: 4.9,
            mood: ['beach', 'relax'],
            topExperiences: ['Overwater Villa Stay', 'Manta Ray Snorkeling', 'Sunset Dolphin Cruise'],
            foodHighlights: ['Grilled Lobster', 'Mas Huni Breakfast', 'Fresh Coconut Water']
        },
        {
            id: 'dubai',
            name: 'Dubai',
            country: 'UAE',
            region: 'Middle East',
            categories: 'Futuristic · Shopping · Desert',
            image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=85',
            transportCost: 18000,
            stayCostPerDay: 6500,
            foodCostPerDay: 2500,
            activityCostPerDay: 2000,
            bestTime: 'November to March',
            bestSeasonRating: 'EXCELLENT',
            recommendedDays: '4-5 Days',
            bestFor: 'Ultramodern skyscrapers, desert safari dune bashing, and luxury shopping',
            budgetRange: '₹45,000 – ₹95,000',
            rating: 4.8,
            mood: ['city', 'adventure', 'nightlife'],
            topExperiences: ['Burj Khalifa Observation Deck', 'Desert Safari Dune Bashing', 'Museum of the Future'],
            foodHighlights: ['Shawarma Wrap', 'Emirati Machboos', 'Kunafa Dessert']
        },
        {
            id: 'switzerland',
            name: 'Swiss Alps',
            country: 'Switzerland',
            region: 'Europe',
            categories: 'Mountains · Lakes · Snow',
            image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1200&q=85',
            transportCost: 55000,
            stayCostPerDay: 11000,
            foodCostPerDay: 4500,
            activityCostPerDay: 3500,
            bestTime: 'June to September & December to March',
            bestSeasonRating: 'EXCELLENT',
            recommendedDays: '5-7 Days',
            bestFor: 'Alpine summits, mountain cogwheel trains, lake cruises, and cheese fondue',
            budgetRange: '₹1,10,000 – ₹2,20,000',
            rating: 5.0,
            mood: ['mountain', 'nature', 'adventure'],
            topExperiences: ['Jungfraujoch Top of Europe', 'Lake Lucerne Cruise', 'Zermatt Matterhorn View'],
            foodHighlights: ['Swiss Cheese Fondue', 'Rösti Hash Browns', 'Swiss Milk Chocolate']
        },
        {
            id: 'singapore',
            name: 'Singapore',
            country: 'Singapore',
            region: 'Asia',
            categories: 'City · Food · Family',
            image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1200&q=85',
            transportCost: 22000,
            stayCostPerDay: 7500,
            foodCostPerDay: 2800,
            activityCostPerDay: 2200,
            bestTime: 'November to August',
            bestSeasonRating: 'GOOD',
            recommendedDays: '3-4 Days',
            bestFor: 'Gardens by the Bay supertrees, hawker center feasts, and clean urban luxury',
            budgetRange: '₹55,000 – ₹1,10,000',
            rating: 4.8,
            mood: ['city', 'food'],
            topExperiences: ['Gardens by the Bay Light Show', 'Marina Bay Sands SkyPark', 'Universal Studios Singapore'],
            foodHighlights: ['Hainanese Chicken Rice', 'Chilli Crab', 'Kaya Toast']
        },
        {
            id: 'thailand',
            name: 'Bangkok',
            country: 'Thailand',
            region: 'Asia',
            categories: 'City · Food · Culture',
            image: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=1200&q=85',
            transportCost: 14000,
            stayCostPerDay: 2500,
            foodCostPerDay: 1000,
            activityCostPerDay: 900,
            bestTime: 'November to February',
            bestSeasonRating: 'EXCELLENT',
            recommendedDays: '4-5 Days',
            bestFor: 'Golden Buddhist temples, floating boat markets, night markets, and street eats',
            budgetRange: '₹22,000 – ₹45,000',
            rating: 4.7,
            mood: ['city', 'food', 'culture', 'nightlife'],
            topExperiences: ['Grand Palace Tour', 'Chatuchak Weekend Market', 'Chao Phraya River Cruise'],
            foodHighlights: ['Pad Thai', 'Tom Yum Goong', 'Mango Sticky Rice']
        },
        {
            id: 'paris',
            name: 'Paris',
            country: 'France',
            region: 'Europe',
            categories: 'Culture · Architecture · Romance',
            image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=85',
            transportCost: 48000,
            stayCostPerDay: 8500,
            foodCostPerDay: 3500,
            activityCostPerDay: 2500,
            bestTime: 'April to May & September to October',
            bestSeasonRating: 'EXCELLENT',
            recommendedDays: '4-5 Days',
            bestFor: 'Iconic Eiffel Tower views, Louvre Museum art, Seine cruises, and Parisian cafes',
            budgetRange: '₹90,000 – ₹1,70,000',
            rating: 4.8,
            mood: ['culture', 'city', 'food'],
            topExperiences: ['Eiffel Tower Sparkle View', 'Louvre Museum Tour', 'Montmartre Neighborhood Stroll'],
            foodHighlights: ['Fresh Croissant', 'French Onion Soup', 'Macarons']
        },
        {
            id: 'london',
            name: 'London',
            country: 'UK',
            region: 'Europe',
            categories: 'History · City · Museums',
            image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=85',
            transportCost: 52000,
            stayCostPerDay: 9000,
            foodCostPerDay: 3800,
            activityCostPerDay: 2600,
            bestTime: 'May to September',
            bestSeasonRating: 'EXCELLENT',
            recommendedDays: '4-6 Days',
            bestFor: 'Big Ben & Parliament, West End theatre shows, free world-class museums, and red double-decker buses',
            budgetRange: '₹95,000 – ₹1,85,000',
            rating: 4.8,
            mood: ['city', 'culture'],
            topExperiences: ['London Eye Flight', 'British Museum Tour', 'Tower Bridge Walk'],
            foodHighlights: ['Fish and Chips', 'Traditional Afternoon Tea', 'Sunday Roast']
        }
    ];

    /* ---------------------------------------------------------
       2. CURRENCY & MATCH SCORE UTILITIES
    --------------------------------------------------------- */
    function formatINR(val) {
        if (isNaN(val) || val === null || val === undefined) return '₹0';
        return '₹' + Math.round(val).toLocaleString('en-IN');
    }

    function calculateMatchScore(dest, userBudget, days, userStyle, selectedInterests, selectedMood) {
        let score = 75; // base score

        // Budget match
        const multiplier = { budget: 0.78, balanced: 1.0, comfort: 1.3, luxury: 1.8 }[userStyle] || 1.0;
        const totalEst = (dest.transportCost + (dest.stayCostPerDay + dest.foodCostPerDay + dest.activityCostPerDay) * days) * 2 * multiplier;
        
        if (userBudget && totalEst <= userBudget) {
            score += 15;
        } else if (userBudget && totalEst <= userBudget * 1.15) {
            score += 5;
        } else if (userBudget) {
            score -= 15;
        }

        // Mood match
        if (selectedMood && dest.mood.includes(selectedMood)) {
            score += 10;
        }

        return Math.max(55, Math.min(99, score));
    }

    /* ---------------------------------------------------------
       3. LOCALSTORAGE STATE ENGINE
    --------------------------------------------------------- */
    function getStoredData(key, fallback) {
        try {
            const data = localStorage.getItem(key);
            return data ? JSON.parse(data) : fallback;
        } catch (e) {
            return fallback;
        }
    }

    function setStoredData(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    }

    let savedTrips = getStoredData('wanderlySavedTrips', []);
    let favorites = getStoredData('wanderlyFavorites', ['bali', 'switzerland']);
    let recentlyViewed = getStoredData('wanderlyRecentlyViewed', ['goa', 'bali', 'kyoto']);
    let checklist = getStoredData('wanderlyChecklist', [
        { id: 1, category: 'DOCUMENTS', title: 'Passport & Visas verified', done: true },
        { id: 2, category: 'DOCUMENTS', title: 'Hotel & Flight bookings saved offline', done: true },
        { id: 3, category: 'ESSENTIALS', title: 'Universal power adapter & power bank', done: false },
        { id: 4, category: 'ESSENTIALS', title: 'Forex card / local currency exchanged', done: false },
        { id: 5, category: 'HEALTH', title: 'First-aid kit & basic medications', done: true }
    ]);
    let packingList = getStoredData('wanderlyPackingList', [
        { id: 1, title: 'Light linen clothing', done: true },
        { id: 2, title: 'Comfortable walking shoes', done: true },
        { id: 3, title: 'Sunglasses & Sunscreen SPF50', done: false },
        { id: 4, title: 'Camera & Memory cards', done: false }
    ]);
    let currentTheme = localStorage.getItem('wanderlyTheme') || 'dark';

    /* ---------------------------------------------------------
       4. THEME SWITCHER
    --------------------------------------------------------- */
    function applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('wanderlyTheme', theme);
        currentTheme = theme;
        const btn = document.getElementById('themeToggleBtn');
        if (btn) btn.textContent = theme === 'dark' ? '☀️ Light' : '🌙 Dark';
    }

    window.toggleTheme = function() {
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        applyTheme(newTheme);
        showToast(`Switched to ${newTheme.toUpperCase()} theme`);
    };

    applyTheme(currentTheme);

    /* ---------------------------------------------------------
       5. SPA ROUTER & HISTORY API
    --------------------------------------------------------- */
    const VALID_PAGES = ['home', 'discover', 'destinations', 'planner', 'budget', 'trips', 'guides', 'about'];
    let currentPage = 'home';

    window.navigateTo = function(pageId, pushToHistory = true) {
        if (!VALID_PAGES.includes(pageId)) pageId = 'home';

        // 1. Hide active page
        document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));

        // 2. Show target page
        const targetPage = document.getElementById(`page-${pageId}`);
        if (targetPage) {
            targetPage.classList.add('active');
        }

        currentPage = pageId;

        // 3. Update active nav state
        document.querySelectorAll('[data-page]').forEach(link => {
            if (link.getAttribute('data-page') === pageId) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });

        // 4. Update History
        if (pushToHistory) {
            history.pushState({ page: pageId }, '', `#${pageId}`);
        }

        // 5. Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });

        // 6. Close mobile menu
        const mobileMenu = document.getElementById('mobileMenu');
        if (mobileMenu) mobileMenu.classList.remove('open');

        // 7. Trigger route specific component render
        if (pageId === 'trips') renderCommandCenter();
        if (pageId === 'destinations') initDestinationsPage();
        if (pageId === 'discover') initDiscoverPage();
    };

    window.addEventListener('popstate', (e) => {
        const page = (e.state && e.state.page) ? e.state.page : window.location.hash.replace('#', '').trim();
        navigateTo(page || 'home', false);
    });

    window.addEventListener('hashchange', () => {
        const hash = window.location.hash.replace('#', '').trim();
        if (hash && VALID_PAGES.includes(hash) && hash !== currentPage) {
            navigateTo(hash, false);
        }
    });

    /* ---------------------------------------------------------
       6. GLOBAL SEARCH & NOTIFICATION DROPDOWN
    --------------------------------------------------------- */
    window.toggleSearchOverlay = function() {
        const overlay = document.getElementById('globalSearchOverlay');
        if (!overlay) return;
        overlay.classList.toggle('open');
        if (overlay.classList.contains('open')) {
            const input = document.getElementById('globalSearchInput');
            if (input) { input.value = ''; input.focus(); }
        }
    };

    window.handleGlobalSearch = function(query) {
        const list = document.getElementById('globalSearchResults');
        if (!list) return;
        const q = query.trim().toLowerCase();

        if (!q) {
            list.innerHTML = '<div style="color:var(--text-muted); padding:20px; text-align:center;">Type to search destinations, guides, or saved trips...</div>';
            return;
        }

        const matches = DESTINATIONS.filter(d => d.name.toLowerCase().includes(q) || d.country.toLowerCase().includes(q) || d.categories.toLowerCase().includes(q));

        if (matches.length === 0) {
            list.innerHTML = `<div style="color:var(--text-muted); padding:20px; text-align:center;">No places found for "${query}"</div>`;
            return;
        }

        list.innerHTML = matches.map(dest => `
            <div class="search-result-item" onclick="toggleSearchOverlay(); openDestModal('${dest.id}')">
                <div>
                    <strong style="font-family:var(--font-heading); color:var(--text-white); font-size:16px;">${dest.name}, ${dest.country}</strong>
                    <small style="display:block; color:var(--text-muted); font-size:12px;">${dest.categories} · ${dest.budgetRange}</small>
                </div>
                <button type="button" class="text-btn">Explore →</button>
            </div>
        `).join('');
    };

    window.toggleNotifications = function() {
        const notif = document.getElementById('notifDropdown');
        if (notif) notif.classList.toggle('open');
    };

    window.showToast = function(msg) {
        const toast = document.getElementById('toast');
        if (!toast) return;
        toast.textContent = msg;
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 3200);
    };

    /* ---------------------------------------------------------
       7. FAVORITES TOGGLE
    --------------------------------------------------------- */
    window.toggleFavorite = function(destId, btn) {
        if (favorites.includes(destId)) {
            favorites = favorites.filter(id => id !== destId);
            showToast('Removed from favorites ♡');
        } else {
            favorites.push(destId);
            showToast('Saved to favorites! ♥');
        }
        setStoredData('wanderlyFavorites', favorites);
        if (btn) btn.classList.toggle('active', favorites.includes(destId));
    };

    /* ---------------------------------------------------------
       8. HOME VIEW INITIALIZATION & TRAVEL MOOD
    --------------------------------------------------------- */
    function initHomePage() {
        const grid = document.getElementById('homeFeaturedGrid');
        if (!grid) return;

        grid.innerHTML = DESTINATIONS.slice(0, 4).map((dest, idx) => `
            <article class="destination-card ${idx === 0 ? 'large' : ''}" onclick="planDestination('${dest.id}')">
                <div class="card-top-badges">
                    <span class="match-badge">${calculateMatchScore(dest, 40000, 3, 'balanced', [], null)}% MATCH</span>
                    <button type="button" class="fav-btn ${favorites.includes(dest.id) ? 'active' : ''}" onclick="event.stopPropagation(); toggleFavorite('${dest.id}', this)">♥</button>
                </div>
                <img src="${dest.image}" alt="${dest.name}, ${dest.country}">
                <div class="destination-overlay">
                    <div>
                        <span class="country-label">${dest.country.toUpperCase()}</span>
                        <h3>${dest.name}</h3>
                        <p>${dest.categories} · From ${dest.budgetRange.split('–')[0]}</p>
                    </div>
                    <button type="button" class="action-arrow">→</button>
                </div>
            </article>
        `).join('');
    }

    window.selectTravelMood = function(mood, btn) {
        document.querySelectorAll('.mood-pill').forEach(b => b.classList.remove('active'));
        if (btn) btn.classList.add('active');

        const filtered = DESTINATIONS.filter(d => d.mood.includes(mood));
        const resBox = document.getElementById('moodRecommendations');
        if (!resBox) return;

        resBox.innerHTML = `
            <div style="background:var(--bg-deep-ocean); border:1px solid var(--border-glow); padding:20px; border-radius:var(--radius-lg); margin-top:20px;">
                <h4 style="font-family:var(--font-heading); color:var(--accent-cyan); font-size:14px; margin-bottom:12px;">RECOMMENDED FOR ${mood.toUpperCase()} MOOD</h4>
                <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(220px, 1fr)); gap:16px;">
                    ${filtered.slice(0, 3).map(dest => `
                        <div style="background:var(--bg-midnight); padding:14px; border-radius:var(--radius-md); border:1px solid var(--border-subtle); display:flex; justify-content:space-between; align-items:center;">
                            <div>
                                <strong style="font-family:var(--font-heading); color:var(--text-white); font-size:15px; display:block;">${dest.name}</strong>
                                <small style="color:var(--text-muted); font-size:12px;">${dest.country} · ${dest.budgetRange}</small>
                            </div>
                            <button type="button" class="primary-btn" style="padding:6px 12px; font-size:12px;" onclick="planDestination('${dest.id}')">Plan ↗</button>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    };

    window.executeQuickPlan = function() {
        const dest = document.getElementById('quickDest').value.trim().toLowerCase();
        const budget = document.getElementById('quickBudget').value;
        const days = document.getElementById('quickDays').value;

        if (dest) {
            const match = DESTINATIONS.find(d => d.name.toLowerCase().includes(dest) || d.country.toLowerCase().includes(dest));
            if (match) {
                planDestination(match.id, budget, days);
                return;
            }
        }

        navigateTo('planner');
        if (budget) document.getElementById('budget').value = budget;
        if (days) document.getElementById('days').value = days;
        calculateTrip(false);
    };

    /* ---------------------------------------------------------
       9. DISCOVER VIEW INITIALIZATION
    --------------------------------------------------------- */
    function initDiscoverPage() {
        const trendingGrid = document.getElementById('trendingGrid');
        if (!trendingGrid) return;

        trendingGrid.innerHTML = DESTINATIONS.slice(0, 3).map(dest => createDiscoverCardHTML(dest)).join('');

        const seasonalGrid = document.getElementById('seasonalGrid');
        if (seasonalGrid) seasonalGrid.innerHTML = DESTINATIONS.slice(3, 6).map(dest => createDiscoverCardHTML(dest)).join('');

        const gemsGrid = document.getElementById('gemsGrid');
        if (gemsGrid) gemsGrid.innerHTML = [DESTINATIONS[1], DESTINATIONS[2], DESTINATIONS[8]].map(dest => createDiscoverCardHTML(dest)).join('');

        const budgetGrid = document.getElementById('budgetFriendlyGrid');
        if (budgetGrid) budgetGrid.innerHTML = [DESTINATIONS[0], DESTINATIONS[1], DESTINATIONS[9]].map(dest => createDiscoverCardHTML(dest)).join('');
    }

    function createDiscoverCardHTML(dest) {
        return `
            <article class="destination-card" onclick="planDestination('${dest.id}')">
                <div class="card-top-badges">
                    <span class="match-badge">${calculateMatchScore(dest, 40000, 3, 'balanced', [], null)}% MATCH</span>
                    <button type="button" class="fav-btn ${favorites.includes(dest.id) ? 'active' : ''}" onclick="event.stopPropagation(); toggleFavorite('${dest.id}', this)">♥</button>
                </div>
                <img src="${dest.image}" alt="${dest.name}">
                <div class="destination-overlay">
                    <div>
                        <span class="country-label">${dest.country.toUpperCase()}</span>
                        <h3>${dest.name}</h3>
                        <p>${dest.categories} · ${dest.budgetRange}</p>
                    </div>
                    <button type="button" class="action-arrow">→</button>
                </div>
            </article>
        `;
    }

    window.executeDiscoverSearch = function() {
        const searchVal = document.getElementById('discoverDest').value.trim().toLowerCase();
        const budgetVal = document.getElementById('discoverBudget').value;
        const styleVal = document.getElementById('discoverStyle').value;

        if (searchVal) {
            const match = DESTINATIONS.find(d => d.name.toLowerCase().includes(searchVal) || d.country.toLowerCase().includes(searchVal));
            if (match) {
                planDestination(match.id, budgetVal, null, styleVal);
                return;
            }
        }

        navigateTo('planner');
        if (budgetVal) document.getElementById('budget').value = budgetVal;
        if (styleVal) document.getElementById('travelStyle').value = styleVal;
        calculateTrip(false);
    };

    /* ---------------------------------------------------------
       10. DESTINATIONS DIRECTORY & DETAIL MODAL
    --------------------------------------------------------- */
    function initDestinationsPage() {
        const grid = document.getElementById('directoryGrid');
        if (!grid) return;

        renderDirectoryCards(DESTINATIONS);
    }

    function renderDirectoryCards(list) {
        const grid = document.getElementById('directoryGrid');
        if (!grid) return;

        grid.innerHTML = list.map(dest => `
            <article class="directory-card">
                <div class="directory-img">
                    <button type="button" class="fav-btn ${favorites.includes(dest.id) ? 'active' : ''}" style="position:absolute; top:16px; right:16px; z-index:2;" onclick="event.stopPropagation(); toggleFavorite('${dest.id}', this)">♥</button>
                    <img src="${dest.image}" alt="${dest.name}">
                </div>
                <div class="directory-body">
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
                        <span class="country-tag">${dest.country}</span>
                        <span class="match-badge">${calculateMatchScore(dest, 40000, 3, 'balanced', [], null)}% MATCH</span>
                    </div>
                    <h3>${dest.name}</h3>
                    <p class="categories">${dest.categories}</p>
                    
                    <div class="directory-meta">
                        <span>Est. Budget</span>
                        <strong>${dest.budgetRange}</strong>
                    </div>

                    <div class="directory-footer">
                        <button type="button" class="text-btn" onclick="openDestModal('${dest.id}')">Explore details →</button>
                        <button type="button" class="primary-btn" style="padding:10px 16px; font-size:13px;" onclick="planDestination('${dest.id}')">Plan Trip ↗</button>
                    </div>
                </div>
            </article>
        `).join('');
    }

    window.filterDestinations = function(category, btn) {
        document.querySelectorAll('#page-destinations .filter-pill').forEach(b => b.classList.remove('active'));
        if (btn) btn.classList.add('active');

        if (category === 'All') {
            renderDirectoryCards(DESTINATIONS);
            return;
        }

        const filtered = DESTINATIONS.filter(dest => 
            dest.region === category || 
            dest.categories.toLowerCase().includes(category.toLowerCase()) ||
            dest.country.toLowerCase().includes(category.toLowerCase())
        );

        renderDirectoryCards(filtered);
    };

    window.openDestModal = function(destId) {
        const dest = DESTINATIONS.find(d => d.id === destId);
        if (!dest) return;

        // Track recently viewed
        if (!recentlyViewed.includes(destId)) {
            recentlyViewed.unshift(destId);
            if (recentlyViewed.length > 5) recentlyViewed.pop();
            setStoredData('wanderlyRecentlyViewed', recentlyViewed);
        }

        const backdrop = document.getElementById('destModalBackdrop');
        const body = document.getElementById('destModalBody');
        if (!backdrop || !body) return;

        body.innerHTML = `
            <div style="height:260px; border-radius:16px; overflow:hidden; margin-bottom:20px; position:relative;">
                <img src="${dest.image}" alt="${dest.name}" style="width:100%; height:100%; object-fit:cover;">
                <div style="position:absolute; top:16px; right:16px; display:flex; gap:10px;">
                    <span class="match-badge high" style="padding:6px 14px; font-size:13px;">${calculateMatchScore(dest, 50000, 4, 'balanced', [], null)}% MATCH</span>
                </div>
            </div>
            
            <span class="country-tag">${dest.country}</span>
            <h2 style="font-family:var(--font-heading); font-size:32px; margin-bottom:8px; color:var(--text-white);">${dest.name}</h2>
            <p style="color:var(--text-muted); font-size:14px; margin-bottom:20px; line-height:1.6;">${dest.bestFor}</p>

            <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px; margin-bottom:24px; background:var(--bg-midnight); padding:18px; border-radius:14px; border:1px solid var(--border-subtle);">
                <div>
                    <small style="color:var(--text-muted); font-size:11px; text-transform:uppercase; font-weight:700; letter-spacing:1px; display:block;">Best Time to Visit</small>
                    <strong style="display:block; font-size:14px; margin-top:4px; color:var(--text-white); font-family:var(--font-heading);">${dest.bestTime} (${dest.bestSeasonRating})</strong>
                </div>
                <div>
                    <small style="color:var(--text-muted); font-size:11px; text-transform:uppercase; font-weight:700; letter-spacing:1px; display:block;">Estimated Budget Range</small>
                    <strong style="display:block; font-size:14px; margin-top:4px; color:var(--accent-orange); font-family:var(--font-heading);">${dest.budgetRange}</strong>
                </div>
            </div>

            <div style="margin-bottom:24px;">
                <h4 style="font-family:var(--font-heading); color:var(--accent-cyan); font-size:14px; margin-bottom:10px;">TOP EXPERIENCES</h4>
                <ul style="list-style:none; padding:0; display:flex; flex-direction:column; gap:6px;">
                    ${dest.topExperiences.map(exp => `<li style="font-size:13px; color:var(--text-muted); font-family:var(--font-heading);">✦ ${exp}</li>`).join('')}
                </ul>
            </div>

            <div style="display:flex; justify-content:space-between; align-items:center;">
                <button type="button" class="fav-btn ${favorites.includes(dest.id) ? 'active' : ''}" onclick="toggleFavorite('${dest.id}', this)">♥ Save Favorite</button>
                <div style="display:flex; gap:12px;">
                    <button type="button" class="outline-btn" onclick="closeDestModal()">Close</button>
                    <button type="button" class="primary-btn" onclick="closeDestModal(); planDestination('${dest.id}')">Plan this trip ↗</button>
                </div>
            </div>
        `;

        backdrop.classList.add('open');
    };

    window.closeDestModal = function() {
        const backdrop = document.getElementById('destModalBackdrop');
        if (backdrop) backdrop.classList.remove('open');
    };

    /* ---------------------------------------------------------
       11. SMART PLANNER & LIVE COST ENGINE
    --------------------------------------------------------- */
    let currentCalculation = null;

    window.planDestination = function(destId, budgetVal = null, daysVal = null, styleVal = null) {
        navigateTo('planner');

        const destSelect = document.getElementById('destination');
        if (destSelect && destId) {
            destSelect.value = destId;
        }

        if (budgetVal) {
            const budgetInput = document.getElementById('budget');
            if (budgetInput) budgetInput.value = budgetVal;
        }

        if (daysVal) {
            const daysInput = document.getElementById('days');
            if (daysInput) daysInput.value = daysVal;
        }

        if (styleVal) {
            const styleSelect = document.getElementById('travelStyle');
            if (styleSelect) styleSelect.value = styleVal;
        }

        calculateTrip(false);
    };

    window.changeValue = function(fieldId, delta) {
        const input = document.getElementById(fieldId);
        if (!input) return;

        let current = parseInt(input.value, 10) || 1;
        current = Math.max(1, Math.min(30, current + delta));
        input.value = current;

        calculateTrip(false);
    };

    window.toggleInterest = function(btn) {
        btn.classList.toggle('active');
        calculateTrip(false);
    };

    window.calculateTrip = function(showToastNotice = true) {
        const destSelect = document.getElementById('destination');
        if (!destSelect) return;

        const travellers = parseInt(document.getElementById('travellers').value, 10) || 2;
        const days = parseInt(document.getElementById('days').value, 10) || 3;
        const budgetInput = parseInt(document.getElementById('budget').value, 10) || 40000;
        const styleSelect = document.getElementById('travelStyle').value;

        const styleMultipliers = { budget: 0.78, balanced: 1.0, comfort: 1.3, luxury: 1.8 };
        const multiplier = styleMultipliers[styleSelect] || 1.0;

        const activeInterests = Array.from(document.querySelectorAll('.interest.active')).map(b => b.getAttribute('data-interest'));

        let destObj;
        if (destSelect.value === 'any') {
            destObj = [...DESTINATIONS].sort((a, b) => {
                const costA = (a.transportCost + (a.stayCostPerDay + a.foodCostPerDay + a.activityCostPerDay) * days) * travellers * multiplier;
                const costB = (b.transportCost + (b.stayCostPerDay + b.foodCostPerDay + b.activityCostPerDay) * days) * travellers * multiplier;
                return Math.abs(costA - budgetInput) - Math.abs(costB - budgetInput);
            })[0];
        } else {
            destObj = DESTINATIONS.find(d => d.id === destSelect.value) || DESTINATIONS[0];
        }

        const transportTotal = destObj.transportCost * travellers;
        const stayTotal = Math.round(destObj.stayCostPerDay * days * travellers * multiplier);
        
        const foodMult = activeInterests.includes('food') ? 1.2 : 1.0;
        const foodTotal = Math.round(destObj.foodCostPerDay * days * travellers * multiplier * foodMult);

        const actMult = activeInterests.includes('adventure') || activeInterests.includes('culture') ? 1.2 : 1.0;
        const activityTotal = Math.round(destObj.activityCostPerDay * days * travellers * multiplier * actMult);

        const emergencyTotal = Math.round((stayTotal + foodTotal + activityTotal) * 0.08);

        const totalEstimatedCost = transportTotal + stayTotal + foodTotal + activityTotal + emergencyTotal;
        const perPersonCost = Math.round(totalEstimatedCost / travellers);
        const perDayCost = Math.round(totalEstimatedCost / days);
        const budgetPercentage = Math.round((totalEstimatedCost / budgetInput) * 100);
        const isWithin = totalEstimatedCost <= budgetInput;

        currentCalculation = {
            destId: destObj.id,
            destinationName: `${destObj.name}, ${destObj.country}`,
            image: destObj.image,
            travellers,
            days,
            style: styleSelect.charAt(0).toUpperCase() + styleSelect.slice(1),
            styleKey: styleSelect,
            budget: budgetInput,
            totalCost: totalEstimatedCost,
            perPerson: perPersonCost,
            perDay: perDayCost,
            transportCost: transportTotal,
            stayCost: stayTotal,
            foodCost: foodTotal,
            activityCost: activityTotal,
            emergencyCost: emergencyTotal,
            budgetPercentage,
            isWithin
        };

        // Update UI
        const emptyState = document.getElementById('emptyState');
        const resultContent = document.getElementById('resultContent');

        if (emptyState) emptyState.style.display = 'none';
        if (resultContent) resultContent.classList.remove('hidden');

        document.getElementById('resultDestination').textContent = `${destObj.name}, ${destObj.country}`;
        
        const statusBadge = document.getElementById('budgetStatus');
        if (statusBadge) {
            if (isWithin) {
                statusBadge.className = 'budget-status within';
                statusBadge.textContent = '✓ HEALTHY BUDGET';
            } else {
                statusBadge.className = 'budget-status over';
                statusBadge.textContent = `⚠ OVER BUDGET (+${formatINR(totalEstimatedCost - budgetInput)})`;
            }
        }

        document.getElementById('totalCost').textContent = formatINR(totalEstimatedCost);
        document.getElementById('perPerson').textContent = `${formatINR(perPersonCost)} per person · ${formatINR(perDayCost)}/day`;

        document.getElementById('transportCost').textContent = formatINR(transportTotal);
        document.getElementById('stayCost').textContent = formatINR(stayTotal);
        document.getElementById('foodCost').textContent = formatINR(foodTotal);
        document.getElementById('activityCost').textContent = formatINR(activityTotal);

        document.getElementById('budgetPercentage').textContent = `${budgetPercentage}%`;
        const fillBar = document.getElementById('progressFill');
        if (fillBar) {
            fillBar.style.width = `${Math.min(100, budgetPercentage)}%`;
            fillBar.style.background = isWithin ? 'linear-gradient(90deg, var(--accent-cyan), var(--accent-orange))' : '#ff4444';
        }

        // Render Optimization Box ("MAKE IT CHEAPER")
        renderCostOptimization(destObj, totalEstimatedCost, budgetInput, days, travellers);

        // Render Initial Itinerary Preview
        renderItineraryBuilder(days);

        if (showToastNotice) {
            showToast(`Calculated trip for ${destObj.name}!`);
        }
    };

    /* ---------------------------------------------------------
       12. SMART COST OPTIMIZATION ("MAKE IT CHEAPER")
    --------------------------------------------------------- */
    function renderCostOptimization(dest, currentTotal, targetBudget, days, travellers) {
        const box = document.getElementById('optimizationBox');
        if (!box) return;

        if (currentTotal <= targetBudget) {
            box.style.display = 'none';
            return;
        }

        box.style.display = 'block';

        const diff = currentTotal - targetBudget;
        let suggestions = [];

        if (days > 2) {
            const savingsDays = Math.round(currentTotal / days);
            suggestions.push({
                text: `Reduce trip by 1 day (${days - 1} days)`,
                savings: savingsDays,
                action: () => { document.getElementById('days').value = days - 1; calculateTrip(true); }
            });
        }

        const currentStyle = document.getElementById('travelStyle').value;
        if (currentStyle !== 'budget') {
            const savingsStyle = Math.round(currentTotal * 0.18);
            suggestions.push({
                text: `Switch style to Budget`,
                savings: savingsStyle,
                action: () => { document.getElementById('travelStyle').value = 'budget'; calculateTrip(true); }
            });
        }

        box.innerHTML = `
            <div class="optimization-box">
                <h4>💡 MAKE IT CHEAPER (SAVE UP TO ${formatINR(diff)})</h4>
                <p style="font-size:12px; color:var(--text-muted); margin-bottom:12px;">Your trip exceeds budget by ${formatINR(diff)}. Try these instant adjustments:</p>
                ${suggestions.map((s, i) => `
                    <div class="opt-suggestion">
                        <span>${s.text}</span>
                        <strong style="color:var(--accent-gold); font-family:var(--font-heading);">Save ~${formatINR(s.savings)}</strong>
                        <button type="button" class="opt-apply-btn" id="optBtn_${i}">Apply</button>
                    </div>
                `).join('')}
            </div>
        `;

        suggestions.forEach((s, i) => {
            const btn = document.getElementById(`optBtn_${i}`);
            if (btn) btn.addEventListener('click', s.action);
        });
    }

    /* ---------------------------------------------------------
       13. INTERACTIVE ITINERARY BUILDER
    --------------------------------------------------------- */
    function renderItineraryBuilder(days) {
        const container = document.getElementById('itineraryBuilderContainer');
        if (!container) return;

        let html = '<div class="itinerary-section"><h3 style="font-family:var(--font-heading); font-size:18px; margin-bottom:16px;">DAY-BY-DAY ITINERARY BUILDER</h3>';

        for (let d = 1; d <= days; d++) {
            html += `
                <div class="itinerary-day-block">
                    <div class="itinerary-day-title">DAY 0${d}</div>
                    <div class="activity-list" id="dayActivities_${d}">
                        <div class="activity-item">
                            <div><span class="act-time">09:00 AM</span> <span>Arrival & Check-in at Hotel</span></div>
                            <small style="color:var(--accent-cyan); font-weight:700;">Included</small>
                        </div>
                        <div class="activity-item">
                            <div><span class="act-time">01:00 PM</span> <span>Local Culinary Lunch</span></div>
                            <small style="color:var(--accent-orange); font-weight:700;">Food</small>
                        </div>
                        <div class="activity-item">
                            <div><span class="act-time">05:00 PM</span> <span>Sunset Sightseeing Tour</span></div>
                            <small style="color:var(--accent-cyan); font-weight:700;">Activity</small>
                        </div>
                    </div>
                </div>
            `;
        }

        html += '</div>';
        container.innerHTML = html;
    }

    /* ---------------------------------------------------------
       14. SAVE TRIP TO LOCALSTORAGE
    --------------------------------------------------------- */
    window.saveTrip = function() {
        if (!currentCalculation) {
            showToast('Please calculate a trip first!');
            return;
        }

        const newTrip = {
            id: 'trip_' + Date.now(),
            ...currentCalculation,
            dateSaved: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
            status: 'PLANNING',
            travelDate: '2026-11-15'
        };

        savedTrips.unshift(newTrip);
        setStoredData('wanderlySavedTrips', savedTrips);
        updateNavBadge();
        showToast(`Saved trip to ${currentCalculation.destinationName}! ♡`);
        navigateTo('trips');
    };

    /* ---------------------------------------------------------
       15. COMMAND CENTER & MY TRIPS VIEW
    --------------------------------------------------------- */
    function updateNavBadge() {
        const badge = document.getElementById('navTripBadge');
        if (badge) badge.textContent = savedTrips.length;
    }

    function renderCommandCenter() {
        updateNavBadge();
        const container = document.getElementById('savedTrips');
        const countBadge = document.getElementById('tripCount');
        const totalSpendEl = document.getElementById('totalSpendStat');
        const readinessEl = document.getElementById('readinessStat');

        if (countBadge) countBadge.textContent = `${savedTrips.length} trip${savedTrips.length === 1 ? '' : 's'}`;

        const totalSpend = savedTrips.reduce((acc, t) => acc + (t.totalCost || 0), 0);
        if (totalSpendEl) totalSpendEl.textContent = formatINR(totalSpend);

        // Calculate readiness score
        const doneCheck = checklist.filter(c => c.done).length;
        const totalCheck = checklist.length || 1;
        const readinessPct = Math.round((doneCheck / totalCheck) * 100);
        if (readinessEl) readinessEl.textContent = `${readinessPct}%`;

        if (!container) return;

        if (savedTrips.length === 0) {
            container.innerHTML = `
                <div class="no-trips">
                    <div>✈</div>
                    <h3>Your next adventure belongs here.</h3>
                    <p>Build a trip with our smart planner and save it to your command center dashboard.</p>
                    <button type="button" class="primary-btn" onclick="navigateTo('planner')">Start planning ↗</button>
                </div>
            `;
            return;
        }

        container.innerHTML = `
            <div class="saved-grid">
                ${savedTrips.map(trip => `
                    <article class="trip-card">
                        <div class="trip-card-img">
                            <span class="trip-status-tag ${trip.status.toLowerCase()}">${trip.status}</span>
                            <img src="${trip.image}" alt="${trip.destinationName}">
                        </div>
                        <div class="trip-card-body">
                            <div class="trip-card-header">
                                <h3>${trip.destinationName}</h3>
                                <span class="trip-style-tag">${trip.style}</span>
                            </div>
                            <div class="trip-meta">
                                ${trip.travellers} traveller${trip.travellers > 1 ? 's' : ''} • ${trip.days} days • Saved on ${trip.dateSaved}
                            </div>
                            <div class="trip-price-row">
                                <div>
                                    <small style="font-size:10px; text-transform:uppercase; color:var(--text-muted); display:block; font-family:var(--font-heading);">Est. Total</small>
                                    <strong>${formatINR(trip.totalCost)}</strong>
                                </div>
                                <div style="display:flex; gap:8px; align-items:center;">
                                    <button type="button" class="outline-btn" style="padding:6px 12px; font-size:12px;" onclick="openTripDetailModal('${trip.id}')">View</button>
                                    <button type="button" class="remove-btn" onclick="removeTrip('${trip.id}')">Delete</button>
                                </div>
                            </div>
                        </div>
                    </article>
                `).join('')}
            </div>
        `;
    }

    window.openTripDetailModal = function(tripId) {
        const trip = savedTrips.find(t => t.id === tripId);
        if (!trip) return;

        const backdrop = document.getElementById('universalModalBackdrop');
        const body = document.getElementById('universalModalBody');
        if (!backdrop || !body) return;

        body.innerHTML = `
            <span class="section-label">SAVED TRIP COMMAND CENTER</span>
            <h2 style="font-family:var(--font-heading); font-size:32px; margin-bottom:8px; color:var(--text-white);">${trip.destinationName}</h2>
            <p style="color:var(--text-muted); font-size:14px; margin-bottom:24px;">${trip.days} Days · ${trip.travellers} Travellers · ${trip.style} Style</p>

            <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(140px, 1fr)); gap:12px; margin-bottom:24px; background:var(--bg-midnight); padding:16px; border-radius:12px; border:1px solid var(--border-subtle);">
                <div><small style="color:var(--text-muted); font-size:10px; display:block;">EST. TOTAL</small><strong style="font-family:var(--font-heading); color:var(--accent-cyan); font-size:18px;">${formatINR(trip.totalCost)}</strong></div>
                <div><small style="color:var(--text-muted); font-size:10px; display:block;">PER PERSON</small><strong style="font-family:var(--font-heading); color:var(--accent-orange); font-size:18px;">${formatINR(trip.perPerson)}</strong></div>
                <div><small style="color:var(--text-muted); font-size:10px; display:block;">PER DAY</small><strong style="font-family:var(--font-heading); color:var(--text-white); font-size:18px;">${formatINR(trip.perDay)}</strong></div>
            </div>

            <div style="margin-bottom:24px;">
                <h4 style="font-family:var(--font-heading); color:var(--accent-cyan); font-size:14px; margin-bottom:10px;">TRIP COUNTDOWN</h4>
                <div style="background:var(--bg-midnight); padding:14px; border-radius:12px; text-align:center; font-family:var(--font-heading); font-size:20px; font-weight:700; color:var(--accent-gold);">
                    ✈ 23 DAYS 08 HOURS 32 MINUTES
                </div>
            </div>

            <div style="display:flex; justify-content:flex-end; gap:12px;">
                <button type="button" class="outline-btn" onclick="closeUniversalModal()">Close</button>
                <button type="button" class="primary-btn" onclick="closeUniversalModal(); planDestination('${trip.destId}')">Edit in Planner ↗</button>
            </div>
        `;

        backdrop.classList.add('open');
    };

    window.closeUniversalModal = function() {
        const backdrop = document.getElementById('universalModalBackdrop');
        if (backdrop) backdrop.classList.remove('open');
    };

    window.removeTrip = function(tripId) {
        savedTrips = savedTrips.filter(t => t.id !== tripId);
        setStoredData('wanderlySavedTrips', savedTrips);
        renderCommandCenter();
        showToast('Trip removed from saved journeys.');
    };

    /* ---------------------------------------------------------
       16. CHECKLIST & PACKING LIST CONTROLS
    --------------------------------------------------------- */
    window.toggleCheckItem = function(id) {
        checklist = checklist.map(c => c.id === id ? { ...c, done: !c.done } : c);
        setStoredData('wanderlyChecklist', checklist);
        renderCommandCenter();
        renderChecklistUI();
    };

    window.togglePackingItem = function(id) {
        packingList = packingList.map(p => p.id === id ? { ...p, done: !p.done } : p);
        setStoredData('wanderlyPackingList', packingList);
        renderChecklistUI();
    };

    function renderChecklistUI() {
        const container = document.getElementById('checklistContainer');
        if (!container) return;

        container.innerHTML = `
            <div class="checklist-widget">
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:16px;">
                    <h3 style="font-family:var(--font-heading); font-size:18px;">PRE-DEPARTURE TRAVEL CHECKLIST</h3>
                    <span class="match-badge high">${Math.round((checklist.filter(c => c.done).length / (checklist.length || 1)) * 100)}% READINESS</span>
                </div>
                ${checklist.map(item => `
                    <div class="check-item ${item.done ? 'done' : ''}">
                        <input type="checkbox" ${item.done ? 'checked' : ''} onchange="toggleCheckItem(${item.id})">
                        <span>[${item.category}] ${item.title}</span>
                    </div>
                `).join('')}

                <h3 style="font-family:var(--font-heading); font-size:18px; margin:24px 0 16px;">SMART PACKING LIST</h3>
                ${packingList.map(item => `
                    <div class="check-item ${item.done ? 'done' : ''}">
                        <input type="checkbox" ${item.done ? 'checked' : ''} onchange="togglePackingItem(${item.id})">
                        <span>${item.title}</span>
                    </div>
                `).join('')}
            </div>
        `;
    }

    /* ---------------------------------------------------------
       17. BUDGET CALCULATOR DASHBOARD WIDGET
    --------------------------------------------------------- */
    function initBudgetWidget() {
        const budgetInput = document.getElementById('widgetBudget');
        if (!budgetInput) return;

        function updateWidget() {
            const b = Math.max(1000, parseInt(document.getElementById('widgetBudget').value, 10) || 50000);
            const d = Math.max(1, parseInt(document.getElementById('widgetDays').value, 10) || 4);
            const tr = Math.max(1, parseInt(document.getElementById('widgetTravellers').value, 10) || 2);

            const dailyLimit = Math.round(b / d);
            const perPersonLimit = Math.round(b / tr);

            document.getElementById('widgetDailyLimit').textContent = `${formatINR(dailyLimit)} / day`;
            document.getElementById('widgetPerPersonLimit').textContent = `${formatINR(perPersonLimit)} / person`;

            document.getElementById('allocStay').textContent = formatINR(b * 0.35);
            document.getElementById('allocTransport').textContent = formatINR(b * 0.25);
            document.getElementById('allocFood').textContent = formatINR(b * 0.20);
            document.getElementById('allocActivities').textContent = formatINR(b * 0.12);
            document.getElementById('allocBuffer').textContent = formatINR(b * 0.08);
        }

        document.getElementById('widgetBudget').addEventListener('input', updateWidget);
        document.getElementById('widgetDays').addEventListener('input', updateWidget);
        document.getElementById('widgetTravellers').addEventListener('input', updateWidget);

        updateWidget();
    }

    /* ---------------------------------------------------------
       18. TRIP COMPARISON MATRIX TOOL
    --------------------------------------------------------- */
    let compareList = ['bali', 'goa', 'munnar'];

    function renderComparisonTable() {
        const container = document.getElementById('comparisonContainer');
        if (!container) return;

        const compareDests = DESTINATIONS.filter(d => compareList.includes(d.id));

        container.innerHTML = `
            <div class="comparison-table-wrapper">
                <table class="comparison-table">
                    <thead>
                        <tr>
                            <th>METRIC</th>
                            ${compareDests.map(d => `<th>${d.name} (${d.country})</th>`).join('')}
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>Budget Range</strong></td>
                            ${compareDests.map(d => `<td style="color:var(--accent-orange); font-family:var(--font-heading);">${d.budgetRange}</td>`).join('')}
                        </tr>
                        <tr>
                            <td><strong>Best Season</strong></td>
                            ${compareDests.map(d => `<td>${d.bestTime}</td>`).join('')}
                        </tr>
                        <tr>
                            <td><strong>Recommended Days</strong></td>
                            ${compareDests.map(d => `<td>${d.recommendedDays}</td>`).join('')}
                        </tr>
                        <tr>
                            <td><strong>Rating</strong></td>
                            ${compareDests.map(d => `<td style="color:var(--accent-gold); font-weight:700;">★ ${d.rating} / 5.0</td>`).join('')}
                        </tr>
                        <tr>
                            <td><strong>Match Score</strong></td>
                            ${compareDests.map(d => `<td><span class="match-badge">${calculateMatchScore(d, 40000, 3, 'balanced', [], null)}%</span></td>`).join('')}
                        </tr>
                    </tbody>
                </table>
            </div>
        `;
    }

    /* ---------------------------------------------------------
       19. GUIDES FILTER & MODAL
    --------------------------------------------------------- */
    const GUIDES = {
        international: {
            badge: "FIRST TIMER",
            title: "How to Plan Your First International Trip Without Overthinking",
            content: `<p>Before flying overseas, sort out your forex card, verify passport validity (minimum 6 months), and download offline map regions on Google Maps.</p><p>Buying an e-SIM online prior to departure is 70% cheaper than international roaming packages and provides instant 5G connectivity upon landing.</p>`
        },
        weekend: {
            badge: "WEEKEND TRIPS",
            title: "7 Budget-Friendly Weekend Escapes That Feel Premium",
            content: `<p>Short 3-day weekend trips require sharp pacing. Keep day one low-pressure: check in, explore local night markets, and orient yourself.</p><p>Reserve your middle day for peak experiences — whether climbing view points or lake boating. Keep day three for slow coffee and buying local spices before heading home.</p>`
        },
        budget25k: {
            badge: "BUDGET TRAVEL",
            title: "How to Build a High-Impact ₹25,000 Vacation",
            content: `<p>A ₹25,000 budget for two people is plenty for destinations like Goa, Munnar, or Jaipur if you separate transport from accommodation.</p><p>Book scenic trains or express buses to save 60% compared to last-minute flights, leaving ample funds for charming heritage boutique stays.</p>`
        },
        food: {
            badge: "CULINARY",
            title: "Best Destinations & Hacks for Culinary Lovers",
            content: `<p>Avoid main plaza tourist cafes with English menus posted outside. Walk two blocks into residential neighborhoods to find long queues of locals.</p><p>In food capitals like Bangkok, Tokyo, or Jaipur, street hawkers specializing in a single signature dish offer unmatched flavor for under ₹300.</p>`
        },
        nature: {
            badge: "NATURE",
            title: "How to Travel Without Overplanning Every Hour",
            content: `<p>Attempting to schedule 15 attractions into 3 days leads to exhaustion rather than enjoyment.</p><p>Limit yourself to one anchor activity per day (e.g. morning tea estate walk or sunset fort tour), leaving afternoons open for spontaneous discovery.</p>`
        },
        hacks: {
            badge: "SMART HACKS",
            title: "Off-Peak Travel Secrets: 50% Off Luxury Stays",
            content: `<p>Getting 5-star comfort on a 3-star budget comes down to booking shoulder seasons. Visiting Kerala in late September or Bali in early October drops room tariffs by up to 50% while offering pristine weather.</p>`
        }
    };

    window.filterGuides = function(category, btn) {
        document.querySelectorAll('#page-guides .filter-pill').forEach(b => b.classList.remove('active'));
        if (btn) btn.classList.add('active');

        const cards = document.querySelectorAll('#guidesGrid .guide-card');
        cards.forEach(card => {
            const cat = card.getAttribute('data-category');
            if (category === 'All' || cat === category) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });
    };

    window.openGuideModal = function(guideKey) {
        const guide = GUIDES[guideKey];
        if (!guide) return;

        const backdrop = document.getElementById('universalModalBackdrop');
        const body = document.getElementById('universalModalBody');
        if (!backdrop || !body) return;

        body.innerHTML = `
            <span class="guide-badge" style="display:inline-block; margin-bottom:12px;">${guide.badge}</span>
            <h2 style="font-family:var(--font-heading); font-size:26px; line-height:1.3; margin-bottom:16px; color:var(--text-white);">${guide.title}</h2>
            <div style="font-size:15px; color:var(--text-muted); line-height:1.8;">
                ${guide.content}
            </div>
        `;

        backdrop.classList.add('open');
    };

    window.openLegalModal = function(title, text) {
        const backdrop = document.getElementById('universalModalBackdrop');
        const body = document.getElementById('universalModalBody');
        if (!backdrop || !body) return;

        body.innerHTML = `
            <h2 style="font-family:var(--font-heading); font-size:24px; margin-bottom:16px; color:var(--text-white);">${title}</h2>
            <p style="color:var(--text-muted); font-size:14px; line-height:1.6;">${text}</p>
        `;

        backdrop.classList.add('open');
    };

    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeDestModal();
            closeUniversalModal();
            const overlay = document.getElementById('globalSearchOverlay');
            if (overlay) overlay.classList.remove('open');
        }
    });

    /* ---------------------------------------------------------
       20. BOOTSTRAP ENGINE
    --------------------------------------------------------- */
    updateNavBadge();
    initHomePage();
    initDiscoverPage();
    initDestinationsPage();
    initBudgetWidget();
    renderChecklistUI();
    renderComparisonTable();
    renderCommandCenter();

    // Check initial hash route
    const initialHash = window.location.hash.replace('#', '').trim();
    if (initialHash && VALID_PAGES.includes(initialHash)) {
        navigateTo(initialHash, false);
    } else {
        navigateTo('home', false);
    }
});
