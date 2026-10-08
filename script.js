/* =========================================================
   WANDERLY — Single-Page Application (SPA) Engine
   Theme: SUNSET JOURNEY (Midnight Navy, Deep Ocean, Electric Cyan, Sunset Orange)
   Features: Hash-based Virtual Router, History API, Live Trip Planner,
   Budget Calculator Dashboard, LocalStorage Trip Saving, Modal System
========================================================= */

document.addEventListener('DOMContentLoaded', () => {

    /* ---------------------------------------------------------
       1. DESTINATION DATASET
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
            bestFor: 'Coastal relaxation, palm-fringed beaches, Portuguese heritage, and seafood dining',
            budgetRange: '₹12,000 – ₹25,000'
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
            bestFor: 'Rolling emerald tea gardens, misty cliff walks, and refreshing mountain climate',
            budgetRange: '₹10,000 – ₹20,000'
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
            bestFor: 'Royal forts, honeycomb sandstone palaces, block-print textiles, and thali dining',
            budgetRange: '₹11,000 – ₹22,000'
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
            bestFor: 'Volcanic views, terraced rice paddies, cliffside temples, and beach clubs',
            budgetRange: '₹28,500 – ₹55,000'
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
            bestFor: 'Ultramodern skyscrapers, desert safari dune bashing, and luxury shopping',
            budgetRange: '₹45,000 – ₹95,000'
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
            bestFor: 'Torii gate corridors, bamboo groves, zen gardens, and matcha tea ceremonies',
            budgetRange: '₹65,000 – ₹1,20,000'
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
            bestFor: 'Overwater bungalows, turquoise lagoon snorkeling, and pristine white sands',
            budgetRange: '₹85,000 – ₹1,80,000'
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
            bestFor: 'Alpine summits, mountain cogwheel trains, lake cruises, and cheese fondue',
            budgetRange: '₹1,10,000 – ₹2,20,000'
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
            bestFor: 'Gardens by the Bay supertrees, hawker center feasts, and clean urban luxury',
            budgetRange: '₹55,000 – ₹1,10,000'
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
            bestFor: 'Golden Buddhist temples, floating boat markets, night markets, and street eats',
            budgetRange: '₹22,000 – ₹45,000'
        }
    ];

    /* ---------------------------------------------------------
       2. CURRENCY FORMATTER
    --------------------------------------------------------- */
    function formatINR(val) {
        if (isNaN(val) || val === null || val === undefined) return '₹0';
        return '₹' + Math.round(val).toLocaleString('en-IN');
    }

    /* ---------------------------------------------------------
       3. VIRTUAL SPA ROUTER & NAVIGATION ENGINE
    --------------------------------------------------------- */
    const VALID_PAGES = ['home', 'discover', 'destinations', 'planner', 'budget', 'trips', 'guides', 'about'];
    let currentPage = 'home';

    window.navigateTo = function(pageId, pushToHistory = true) {
        if (!VALID_PAGES.includes(pageId)) pageId = 'home';

        // 1. Hide active page
        const pages = document.querySelectorAll('.page');
        pages.forEach(p => p.classList.remove('active'));

        // 2. Show target page
        const targetPage = document.getElementById(`page-${pageId}`);
        if (targetPage) {
            targetPage.classList.add('active');
        }

        currentPage = pageId;

        // 3. Update Navbar Links active state
        document.querySelectorAll('[data-page]').forEach(link => {
            if (link.getAttribute('data-page') === pageId) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });

        // 4. Update URL Hash / History
        if (pushToHistory) {
            history.pushState({ page: pageId }, '', `#${pageId}`);
        }

        // 5. Scroll smoothly to top
        window.scrollTo({ top: 0, behavior: 'smooth' });

        // 6. Close mobile menu if open
        const mobileMenu = document.getElementById('mobileMenu');
        if (mobileMenu) mobileMenu.classList.remove('open');

        // 7. Refresh page-specific components
        if (pageId === 'trips') updateSavedTripsUI();
        if (pageId === 'destinations') initDestinationsPage();
        if (pageId === 'discover') initDiscoverPage();
    };

    // Handle initial route loading and browser back/forward buttons
    function handleInitialRoute() {
        const hash = window.location.hash.replace('#', '').trim();
        if (hash && VALID_PAGES.includes(hash)) {
            navigateTo(hash, false);
        } else {
            navigateTo('home', false);
        }
    }

    window.addEventListener('popstate', (e) => {
        const page = (e.state && e.state.page) ? e.state.page : window.location.hash.replace('#', '').trim();
        if (page && VALID_PAGES.includes(page)) {
            navigateTo(page, false);
        } else {
            navigateTo('home', false);
        }
    });

    window.addEventListener('hashchange', () => {
        const hash = window.location.hash.replace('#', '').trim();
        if (hash && VALID_PAGES.includes(hash) && hash !== currentPage) {
            navigateTo(hash, false);
        }
    });

    /* ---------------------------------------------------------
       4. LOCALSTORAGE SAVED TRIPS & BADGES
    --------------------------------------------------------- */
    let currentCalculation = null;

    function getSavedTrips() {
        try {
            return JSON.parse(localStorage.getItem('wanderlySavedTrips') || '[]');
        } catch (e) {
            return [];
        }
    }

    function saveTripsToStorage(trips) {
        localStorage.setItem('wanderlySavedTrips', JSON.stringify(trips));
        updateSavedTripsUI();
    }

    function updateNavBadge() {
        const badge = document.getElementById('navTripBadge');
        if (badge) {
            badge.textContent = getSavedTrips().length;
        }
    }

    /* ---------------------------------------------------------
       5. GLOBAL CONTROLS & TOAST NOTIFICATION
    --------------------------------------------------------- */
    window.toggleMobileMenu = function() {
        const menu = document.getElementById('mobileMenu');
        if (menu) menu.classList.toggle('open');
    };

    window.showToast = function(msg) {
        const toast = document.getElementById('toast');
        if (!toast) return;
        toast.textContent = msg;
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 3200);
    };

    /* ---------------------------------------------------------
       6. HOME PAGE FEATURED GRID & DESTINATION CARD CLICK
    --------------------------------------------------------- */
    function initHomePage() {
        const grid = document.getElementById('homeFeaturedGrid');
        if (!grid) return;

        grid.innerHTML = DESTINATIONS.slice(0, 4).map((dest, idx) => `
            <article class="destination-card ${idx === 0 ? 'large' : ''}" onclick="planDestination('${dest.id}')">
                <img src="${dest.image}" alt="${dest.name}, ${dest.country}">
                <div class="destination-overlay">
                    <div>
                        <span>${dest.country.toUpperCase()}</span>
                        <h3>${dest.name}</h3>
                        <p>${dest.categories}</p>
                    </div>
                    <button type="button">→</button>
                </div>
            </article>
        `).join('');
    }

    /* ---------------------------------------------------------
       7. DISCOVER PAGE SEARCH & CATEGORY GRIDS
    --------------------------------------------------------- */
    function initDiscoverPage() {
        const trendingGrid = document.getElementById('trendingGrid');
        if (!trendingGrid) return;

        trendingGrid.innerHTML = DESTINATIONS.slice(0, 3).map(dest => createDiscoverCardHTML(dest)).join('');

        const seasonalGrid = document.getElementById('seasonalGrid');
        if (seasonalGrid) {
            seasonalGrid.innerHTML = DESTINATIONS.slice(3, 6).map(dest => createDiscoverCardHTML(dest)).join('');
        }

        const gemsGrid = document.getElementById('gemsGrid');
        if (gemsGrid) {
            gemsGrid.innerHTML = [DESTINATIONS[1], DESTINATIONS[2], DESTINATIONS[8]].map(dest => createDiscoverCardHTML(dest)).join('');
        }

        const budgetGrid = document.getElementById('budgetFriendlyGrid');
        if (budgetGrid) {
            budgetGrid.innerHTML = [DESTINATIONS[0], DESTINATIONS[1], DESTINATIONS[9]].map(dest => createDiscoverCardHTML(dest)).join('');
        }
    }

    function createDiscoverCardHTML(dest) {
        return `
            <article class="destination-card" onclick="planDestination('${dest.id}')">
                <img src="${dest.image}" alt="${dest.name}">
                <div class="destination-overlay">
                    <div>
                        <span>${dest.country.toUpperCase()}</span>
                        <h3>${dest.name}</h3>
                        <p>${dest.categories} · ${dest.budgetRange}</p>
                    </div>
                    <button type="button">→</button>
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
                planDestination(match.id, budgetVal, styleVal);
                return;
            }
        }

        navigateTo('planner');
        if (budgetVal) {
            const budgetInput = document.getElementById('budget');
            if (budgetInput) budgetInput.value = budgetVal;
        }
        if (styleVal) {
            const styleSelect = document.getElementById('travelStyle');
            if (styleSelect) styleSelect.value = styleVal;
        }
        calculateTrip(false);
    };

    /* ---------------------------------------------------------
       8. DESTINATIONS DIRECTORY & DETAIL MODAL
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
                    <img src="${dest.image}" alt="${dest.name}">
                </div>
                <div class="directory-body">
                    <span class="country-tag">${dest.country}</span>
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

        const backdrop = document.getElementById('destModalBackdrop');
        const body = document.getElementById('destModalBody');
        if (!backdrop || !body) return;

        body.innerHTML = `
            <div style="height:240px; border-radius:16px; overflow:hidden; margin-bottom:20px;">
                <img src="${dest.image}" alt="${dest.name}" style="width:100%; height:100%; object-fit:cover;">
            </div>
            <span class="country-tag">${dest.country}</span>
            <h2 style="font-family:var(--font-heading); font-size:32px; margin-bottom:8px; color:var(--text-main);">${dest.name}</h2>
            <p style="color:var(--text-muted); font-size:14px; margin-bottom:20px; line-height:1.6;">${dest.bestFor}</p>

            <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px; margin-bottom:24px; background:var(--bg-dark); padding:18px; border-radius:14px; border:1px solid var(--border-subtle);">
                <div>
                    <small style="color:var(--text-muted); font-size:11px; text-transform:uppercase; font-weight:700; letter-spacing:1px; display:block;">Best Time to Visit</small>
                    <strong style="display:block; font-size:14px; margin-top:4px; color:var(--text-main); font-family:var(--font-heading);">${dest.bestTime}</strong>
                </div>
                <div>
                    <small style="color:var(--text-muted); font-size:11px; text-transform:uppercase; font-weight:700; letter-spacing:1px; display:block;">Estimated Budget</small>
                    <strong style="display:block; font-size:14px; margin-top:4px; color:var(--accent-orange); font-family:var(--font-heading);">${dest.budgetRange}</strong>
                </div>
            </div>

            <div style="display:flex; justify-content:flex-end; gap:12px;">
                <button type="button" class="outline-btn" onclick="closeDestModal()">Close</button>
                <button type="button" class="primary-btn" onclick="closeDestModal(); planDestination('${dest.id}')">Plan this trip ↗</button>
            </div>
        `;

        backdrop.classList.add('open');
    };

    window.closeDestModal = function() {
        const backdrop = document.getElementById('destModalBackdrop');
        if (backdrop) backdrop.classList.remove('open');
    };

    /* ---------------------------------------------------------
       9. CROSS-PAGE PLANNER INITIALIZER
    --------------------------------------------------------- */
    window.planDestination = function(destId, budgetVal = null, styleVal = null) {
        navigateTo('planner');

        const destSelect = document.getElementById('destination');
        if (destSelect && destId) {
            destSelect.value = destId;
        }

        if (budgetVal) {
            const budgetInput = document.getElementById('budget');
            if (budgetInput) budgetInput.value = budgetVal;
        }

        if (styleVal) {
            const styleSelect = document.getElementById('travelStyle');
            if (styleSelect) styleSelect.value = styleVal;
        }

        calculateTrip(false);
    };

    /* ---------------------------------------------------------
       10. SMART TRIP PLANNER ENGINE
    --------------------------------------------------------- */
    window.changeValue = function(fieldId, delta) {
        const input = document.getElementById(fieldId);
        if (!input) return;

        let current = parseInt(input.value, 10) || 1;
        current = Math.max(1, Math.min(30, current + delta));
        input.value = current;

        if (currentCalculation) calculateTrip(false);
    };

    window.toggleInterest = function(btn) {
        btn.classList.toggle('active');
        if (currentCalculation) calculateTrip(false);
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

        const totalEstimatedCost = transportTotal + stayTotal + foodTotal + activityTotal;
        const perPersonCost = Math.round(totalEstimatedCost / travellers);
        const budgetPercentage = Math.round((totalEstimatedCost / budgetInput) * 100);
        const isWithin = totalEstimatedCost <= budgetInput;

        currentCalculation = {
            destId: destObj.id,
            destinationName: `${destObj.name}, ${destObj.country}`,
            image: destObj.image,
            travellers,
            days,
            style: styleSelect.charAt(0).toUpperCase() + styleSelect.slice(1),
            budget: budgetInput,
            totalCost: totalEstimatedCost,
            perPerson: perPersonCost,
            transportCost: transportTotal,
            stayCost: stayTotal,
            foodCost: foodTotal,
            activityCost: activityTotal,
            budgetPercentage,
            isWithin
        };

        const emptyState = document.getElementById('emptyState');
        const resultContent = document.getElementById('resultContent');

        if (emptyState) emptyState.style.display = 'none';
        if (resultContent) resultContent.classList.remove('hidden');

        const resDest = document.getElementById('resultDestination');
        if (resDest) resDest.textContent = `${destObj.name}, ${destObj.country}`;
        
        const statusBadge = document.getElementById('budgetStatus');
        if (statusBadge) {
            if (isWithin) {
                statusBadge.className = 'budget-status within';
                statusBadge.textContent = '✓ Within budget';
            } else {
                statusBadge.className = 'budget-status over';
                statusBadge.textContent = `Over budget (+${formatINR(totalEstimatedCost - budgetInput)})`;
            }
        }

        const totalEl = document.getElementById('totalCost');
        if (totalEl) totalEl.textContent = formatINR(totalEstimatedCost);

        const perPersonEl = document.getElementById('perPerson');
        if (perPersonEl) perPersonEl.textContent = `${formatINR(perPersonCost)} per person`;

        const trCost = document.getElementById('transportCost');
        if (trCost) trCost.textContent = formatINR(transportTotal);

        const stCost = document.getElementById('stayCost');
        if (stCost) stCost.textContent = formatINR(stayTotal);

        const fdCost = document.getElementById('foodCost');
        if (fdCost) fdCost.textContent = formatINR(foodTotal);

        const actCost = document.getElementById('activityCost');
        if (actCost) actCost.textContent = formatINR(activityTotal);

        const pctEl = document.getElementById('budgetPercentage');
        if (pctEl) pctEl.textContent = `${budgetPercentage}%`;

        const fillBar = document.getElementById('progressFill');
        if (fillBar) {
            fillBar.style.width = `${Math.min(100, budgetPercentage)}%`;
            fillBar.style.background = isWithin ? 'linear-gradient(90deg, var(--accent-cyan), var(--accent-orange))' : '#ff4444';
        }

        const recEl = document.getElementById('recommendationText');
        if (recEl) {
            if (budgetPercentage < 70) {
                recEl.textContent = 'Excellent! You have plenty of room for unexpected experiences, shopping, or upgrading your stay.';
            } else if (budgetPercentage <= 90) {
                recEl.textContent = 'Your budget leaves enough room for experiences and unexpected expenses.';
            } else if (budgetPercentage <= 100) {
                recEl.textContent = 'This trip fits, but your budget will be fairly tight during your stay.';
            } else {
                recEl.textContent = 'Consider reducing travel days, switching to a Budget style, or exploring nearby destinations.';
            }
        }

        if (showToastNotice) {
            showToast(`Calculated trip for ${destObj.name}!`);
        }
    };

    window.saveTrip = function() {
        if (!currentCalculation) {
            showToast('Please calculate a trip first!');
            return;
        }

        const trips = getSavedTrips();
        const newTrip = {
            id: 'trip_' + Date.now(),
            ...currentCalculation,
            dateSaved: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
        };

        trips.unshift(newTrip);
        saveTripsToStorage(trips);
        showToast(`Saved trip to ${currentCalculation.destinationName}! ♡`);
        navigateTo('trips');
    };

    /* ---------------------------------------------------------
       11. BUDGET CALCULATOR WIDGET (BUDGET VIEW)
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
       12. MY TRIPS PAGE RENDER (LOCALSTORAGE PERSISTENCE)
    --------------------------------------------------------- */
    function updateSavedTripsUI() {
        updateNavBadge();
        const container = document.getElementById('savedTrips');
        const countBadge = document.getElementById('tripCount');
        if (!container) return;

        const trips = getSavedTrips();
        if (countBadge) countBadge.textContent = `${trips.length} trip${trips.length === 1 ? '' : 's'}`;

        if (trips.length === 0) {
            container.innerHTML = `
                <div class="no-trips">
                    <div>✈</div>
                    <h3>Your next adventure belongs here.</h3>
                    <p>Build a trip with our smart planner and save it to your digital postcards.</p>
                    <button type="button" class="primary-btn" onclick="navigateTo('planner')">Start planning ↗</button>
                </div>
            `;
            return;
        }

        container.innerHTML = `
            <div class="saved-grid">
                ${trips.map(trip => `
                    <article class="trip-card">
                        <div class="trip-card-img">
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
                                <div style="display:flex; gap:10px; align-items:center;">
                                    <button type="button" class="outline-btn" style="padding:6px 12px; font-size:12px;" onclick="planDestination('${trip.destId}')">View trip</button>
                                    <button type="button" class="remove-btn" onclick="removeTrip('${trip.id}')">Delete</button>
                                </div>
                            </div>
                        </div>
                    </article>
                `).join('')}
            </div>
        `;
    }

    window.removeTrip = function(tripId) {
        let trips = getSavedTrips();
        trips = trips.filter(t => t.id !== tripId);
        saveTripsToStorage(trips);
        showToast('Trip removed from saved journeys.');
    };

    /* ---------------------------------------------------------
       13. TRAVEL GUIDES FILTER & MODAL
    --------------------------------------------------------- */
    const GUIDES = {
        international: {
            badge: "FIRST TIMER",
            title: "How to Plan Your First International Trip Without Overthinking",
            content: `
                <p>Before flying overseas, sort out your forex card, verify passport validity (minimum 6 months), and download offline map regions on Google Maps.</p>
                <p>Buying an e-SIM online prior to departure is 70% cheaper than international roaming packages and provides instant 5G connectivity upon landing.</p>
            `
        },
        weekend: {
            badge: "WEEKEND TRIPS",
            title: "7 Budget-Friendly Weekend Escapes That Feel Premium",
            content: `
                <p>Short 3-day weekend trips require sharp pacing. Keep day one low-pressure: check in, explore local night markets, and orient yourself.</p>
                <p>Reserve your middle day for peak experiences — whether climbing view points or lake boating. Keep day three for slow coffee and buying local spices before heading home.</p>
            `
        },
        budget25k: {
            badge: "BUDGET TRAVEL",
            title: "How to Build a High-Impact ₹25,000 Vacation",
            content: `
                <p>A ₹25,000 budget for two people is plenty for destinations like Goa, Munnar, or Jaipur if you separate transport from accommodation.</p>
                <p>Book scenic trains or express buses to save 60% compared to last-minute flights, leaving ample funds for charming heritage boutique stays.</p>
            `
        },
        food: {
            badge: "CULINARY",
            title: "Best Destinations & Hacks for Culinary Lovers",
            content: `
                <p>Avoid main plaza tourist cafes with English menus posted outside. Walk two blocks into residential neighborhoods to find long queues of locals.</p>
                <p>In food capitals like Bangkok, Tokyo, or Jaipur, street hawkers specializing in a single signature dish offer unmatched flavor for under ₹300.</p>
            `
        },
        nature: {
            badge: "NATURE",
            title: "How to Travel Without Overplanning Every Hour",
            content: `
                <p>Attempting to schedule 15 attractions into 3 days leads to exhaustion rather than enjoyment.</p>
                <p>Limit yourself to one anchor activity per day (e.g. morning tea estate walk or sunset fort tour), leaving afternoons open for spontaneous discovery.</p>
            `
        },
        hacks: {
            badge: "SMART HACKS",
            title: "Off-Peak Travel Secrets: 50% Off Luxury Stays",
            content: `
                <p>Getting 5-star comfort on a 3-star budget comes down to booking shoulder seasons. Visiting Kerala in late September or Bali in early October drops room tariffs by up to 50% while offering pristine weather.</p>
            `
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

        const backdrop = document.getElementById('guideModalBackdrop');
        const body = document.getElementById('guideModalBody');
        if (!backdrop || !body) return;

        body.innerHTML = `
            <span class="guide-badge" style="display:inline-block; margin-bottom:12px;">${guide.badge}</span>
            <h2 style="font-family:var(--font-heading); font-size:26px; line-height:1.3; margin-bottom:16px; color:var(--text-main);">${guide.title}</h2>
            <div style="font-size:15px; color:var(--text-muted); line-height:1.8;">
                ${guide.content}
            </div>
        `;

        backdrop.classList.add('open');
    };

    window.closeGuideModal = function() {
        const backdrop = document.getElementById('guideModalBackdrop');
        if (backdrop) backdrop.classList.remove('open');
    };

    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeGuideModal();
            closeDestModal();
        }
    });

    /* ---------------------------------------------------------
       14. INITIAL ROUTE & ENGINE BOOTSTRAP
    --------------------------------------------------------- */
    updateNavBadge();
    initHomePage();
    initDiscoverPage();
    initDestinationsPage();
    initBudgetWidget();
    updateSavedTripsUI();

    handleInitialRoute();
});
