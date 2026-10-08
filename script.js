/* =========================================================
   WANDERLY — Travel Operating System Engine (script.js)
   Brand Philosophy: "Plan less. Wander more."
   Flow: DISCOVER → PLAN → OPTIMIZE → PREPARE → WANDER
   Constraints: Exactly 3 frontend files (index.html, style.css, script.js)
   ========================================================= */

document.addEventListener('DOMContentLoaded', () => {

    /* ---------------------------------------------------------
       1. DATASET: 22 WORLD DESTINATIONS
    --------------------------------------------------------- */
    const DESTINATIONS = [
        {
            id: 'bali',
            name: 'Bali',
            country: 'Indonesia',
            region: 'Asia',
            categories: 'Beaches · Culture · Nature',
            image: 'https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=1200&q=85',
            transportCost: 16000,
            stayCostPerDay: 2800,
            foodCostPerDay: 1200,
            activityCostPerDay: 1000,
            bestTime: 'April to October',
            bestSeasonRating: 'EXCELLENT',
            recommendedDays: 5,
            bestFor: 'Volcanic views, terraced rice paddies, cliffside temples, and vibrant beach clubs',
            budgetRange: '₹28,500 – ₹55,000',
            rating: 4.9,
            match: 94,
            mood: ['beach', 'adventure', 'relax', 'nature'],
            topExperiences: ['Uluwatu Temple Sunset & Kecak Fire Dance', 'Tegallalang Rice Terraces Walk', 'Nusa Penida Snorkeling Expedition'],
            foodHighlights: ['Nasi Goreng', 'Babi Guling Roast', 'Pitaya Smoothie Bowls'],
            stay: 'Boutique Jungle Villas & Cliffside Resorts',
            transport: 'Scooter rentals & private driver hires',
            activities: 'Surfing, Yoga, Temple tours, Waterfall hikes',
            goodFor: ['Beaches', 'Food', 'Couples', 'Friends', 'Relaxation'],
            scores: { food: 92, nature: 96, culture: 90, adventure: 88, value: 94 }
        },
        {
            id: 'kyoto',
            name: 'Kyoto',
            country: 'Japan',
            region: 'Asia',
            categories: 'Culture · Temples · Food',
            image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=85',
            transportCost: 38000,
            stayCostPerDay: 7000,
            foodCostPerDay: 3000,
            activityCostPerDay: 1800,
            bestTime: 'March – May & Oct – Nov',
            bestSeasonRating: 'EXCELLENT',
            recommendedDays: 5,
            bestFor: 'Torii gate corridors, bamboo groves, zen stone gardens, and traditional matcha tea houses',
            budgetRange: '₹65,000 – ₹1,20,000',
            rating: 4.9,
            match: 91,
            mood: ['culture', 'food', 'nature', 'city'],
            topExperiences: ['Fushimi Inari Shrine Morning Hike', 'Arashiyama Bamboo Grove Walk', 'Gion Historic Geisha District Stroll'],
            foodHighlights: ['Tonkotsu Ramen', 'Matcha Parfaits', 'Traditional Kaiseki Multi-Course'],
            stay: 'Traditional Machiya Ryokans & Minimalist City Hotels',
            transport: 'Shinkansen Bullet Train & Kyoto Bus Pass',
            activities: 'Tea ceremony, Temple hopping, Kimono walk, Market tasting',
            goodFor: ['Culture', 'Food', 'Couples', 'Solo', 'Photography'],
            scores: { food: 98, nature: 88, culture: 99, adventure: 72, value: 85 }
        },
        {
            id: 'munnar',
            name: 'Munnar',
            country: 'India',
            region: 'India',
            categories: 'Mountains · Tea Estates · Nature',
            image: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=1200&q=85',
            transportCost: 3000,
            stayCostPerDay: 1800,
            foodCostPerDay: 800,
            activityCostPerDay: 600,
            bestTime: 'September to March',
            bestSeasonRating: 'EXCELLENT',
            recommendedDays: 4,
            bestFor: 'Rolling emerald tea gardens, misty mountain cliff walks, and refreshing Western Ghats air',
            budgetRange: '₹9,500 – ₹20,000',
            rating: 4.9,
            match: 96,
            mood: ['mountain', 'nature', 'relax'],
            topExperiences: ['Kolukkumalai Sunrise Jeep Trek', 'Kannandavan Tea Factory Tour', 'Eravikulam Nilgiri Tahr Spotting'],
            foodHighlights: ['Kerala Feast on Banana Leaf', 'Appam with Coconut Stew', 'Fresh Spiced Cardamom Tea'],
            stay: 'Heritage Plantation Bungalows & Eco Treehouses',
            transport: 'Local taxis & open 4x4 mountain jeeps',
            activities: 'Tea tasting, Trekking, Wildlife spotting, Waterfall visits',
            goodFor: ['Mountains', 'Nature', 'Couples', 'Budget', 'Relaxation'],
            scores: { food: 86, nature: 98, culture: 82, adventure: 80, value: 98 }
        },
        {
            id: 'goa',
            name: 'Goa',
            country: 'India',
            region: 'India',
            categories: 'Beaches · Nightlife · Heritage',
            image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=85',
            transportCost: 3500,
            stayCostPerDay: 2200,
            foodCostPerDay: 1000,
            activityCostPerDay: 800,
            bestTime: 'November to February',
            bestSeasonRating: 'EXCELLENT',
            recommendedDays: 4,
            bestFor: 'Pristine coastal beaches, Portuguese colonial architecture, sunset shacks, and seafood feasts',
            budgetRange: '₹12,000 – ₹25,000',
            rating: 4.8,
            match: 93,
            mood: ['beach', 'food', 'nightlife'],
            topExperiences: ['Sunset at Anjuna & Vagator Cliffs', 'Fontainhas Latin Quarter Architecture Walk', 'Grand Island Scuba & Snorkel Boat Trip'],
            foodHighlights: ['Goan Fish Curry Rice', 'Pork Vindaloo', 'Bebinca Layer Cake'],
            stay: 'Beachside Heritage Villas & Modern Boutique Resorts',
            transport: 'Scooter rentals & local taxis',
            activities: 'Water sports, Heritage walks, Sunset cruises, Beach cafes',
            goodFor: ['Beaches', 'Food', 'Friends', 'Nightlife', 'Budget'],
            scores: { food: 90, nature: 85, culture: 84, adventure: 86, value: 95 }
        },
        {
            id: 'dubai',
            name: 'Dubai',
            country: 'UAE',
            region: 'Middle East',
            categories: 'Futuristic · Desert · Shopping',
            image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=85',
            transportCost: 18000,
            stayCostPerDay: 6500,
            foodCostPerDay: 2500,
            activityCostPerDay: 2000,
            bestTime: 'November to March',
            bestSeasonRating: 'EXCELLENT',
            recommendedDays: 5,
            bestFor: 'Ultramodern architecture, desert safari dune bashing, luxury shopping, and marina skyline cruises',
            budgetRange: '₹38,000 – ₹95,000',
            rating: 4.8,
            match: 88,
            mood: ['city', 'adventure', 'nightlife', 'shopping'],
            topExperiences: ['Burj Khalifa 148th Floor View', 'Red Dune Desert Safari & BBQ Dinner', 'Museum of the Future Interactive Tour'],
            foodHighlights: ['Emirati Machboos', 'Authentic Shawarma', 'Crispy Kunafa Dessert'],
            stay: 'Luxury Skyline Towers & Palm Jumeirah Resorts',
            transport: 'Driverless Metro System & Taxi Apps',
            activities: 'Dune bashing, Yacht cruises, Skydiving, Mega shopping',
            goodFor: ['City', 'Shopping', 'Couples', 'Luxury', 'Futuristic'],
            scores: { food: 88, nature: 70, culture: 80, adventure: 92, value: 80 }
        },
        {
            id: 'maldives',
            name: 'Maldives',
            country: 'Maldives',
            region: 'Asia',
            categories: 'Ocean · Overwater Villas · Luxury',
            image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=85',
            transportCost: 22000,
            stayCostPerDay: 12000,
            foodCostPerDay: 4000,
            activityCostPerDay: 3000,
            bestTime: 'November to April',
            bestSeasonRating: 'EXCELLENT',
            recommendedDays: 4,
            bestFor: 'Private overwater bungalows, crystal lagoon snorkeling with sea turtles, and candlelit beach dining',
            budgetRange: '₹85,000 – ₹1,80,000',
            rating: 4.9,
            match: 90,
            mood: ['beach', 'relax'],
            topExperiences: ['Overwater Bungalow Sunrise Glass Floor', 'Manta Ray & Whale Shark Snorkeling', 'Sunset Dolphin Speedboat Cruise'],
            foodHighlights: ['Grilled Island Lobster', 'Mas Huni Coconut Breakfast', 'Fresh Mango Cocktails'],
            stay: 'Luxury Atoll Water Villas & Eco Island Guesthouses',
            transport: 'Seaplanes & Speedboat Transfers',
            activities: 'Scuba diving, Snorkeling, Spa treatments, Sunset dining',
            goodFor: ['Beaches', 'Couples', 'Relaxation', 'Luxury', 'Ocean'],
            scores: { food: 88, nature: 99, culture: 75, adventure: 85, value: 78 }
        },
        {
            id: 'switzerland',
            name: 'Swiss Alps',
            country: 'Switzerland',
            region: 'Europe',
            categories: 'Mountains · Lakes · Alpine',
            image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1200&q=85',
            transportCost: 55000,
            stayCostPerDay: 11000,
            foodCostPerDay: 4500,
            activityCostPerDay: 3500,
            bestTime: 'June – Sept & Dec – March',
            bestSeasonRating: 'EXCELLENT',
            recommendedDays: 6,
            bestFor: 'Soaring alpine snow peaks, cogwheel mountain train rides, glacier lakes, and molten cheese fondue',
            budgetRange: '₹1,10,000 – ₹2,20,000',
            rating: 5.0,
            match: 89,
            mood: ['mountain', 'nature', 'adventure'],
            topExperiences: ['Jungfraujoch Top of Europe Train Ride', 'Lake Lucerne Steamboat Cruise', 'Zermatt Matterhorn View Hiking Trail'],
            foodHighlights: ['Swiss Cheese Fondue', 'Crispy Rösti Hash Browns', 'Artisanal Swiss Chocolate'],
            stay: 'Alpine Chalets & Mountain View Grand Hotels',
            transport: 'Swiss Travel Pass Train Network',
            activities: 'Skiing, Hiking, Cable car rides, Lake cruises',
            goodFor: ['Mountains', 'Nature', 'Couples', 'Photography', 'Luxury'],
            scores: { food: 90, nature: 100, culture: 88, adventure: 95, value: 75 }
        },
        {
            id: 'singapore',
            name: 'Singapore',
            country: 'Singapore',
            region: 'Asia',
            categories: 'City · Garden City · Hawker Food',
            image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1200&q=85',
            transportCost: 22000,
            stayCostPerDay: 7500,
            foodCostPerDay: 2800,
            activityCostPerDay: 2200,
            bestTime: 'November to August',
            bestSeasonRating: 'GOOD',
            recommendedDays: 4,
            bestFor: 'Avatar-like Supertree light shows, UNESCO hawker street food centers, and futuristic garden architecture',
            budgetRange: '₹55,000 – ₹1,10,000',
            rating: 4.8,
            match: 92,
            mood: ['city', 'food', 'nature'],
            topExperiences: ['Gardens by the Bay Light & Sound Show', 'Marina Bay Sands Infinity Pool View', 'Maxwell Hawker Center Gourmet Tour'],
            foodHighlights: ['Hainanese Chicken Rice', 'Singapore Chilli Crab', 'Kaya Toast with Soft Eggs'],
            stay: 'Iconic Marina Hotels & Heritage Chinatown Boutique Stays',
            transport: 'MRT Subway Network & Taxi Apps',
            activities: 'Night safari, Cable car to Sentosa, Garden walks, Rooftop bars',
            goodFor: ['City', 'Food', 'Family', 'Architecture', 'Shopping'],
            scores: { food: 97, nature: 85, culture: 88, adventure: 80, value: 84 }
        },
        {
            id: 'jaipur',
            name: 'Jaipur',
            country: 'India',
            region: 'India',
            categories: 'Palaces · Heritage · Textiles',
            image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1200&q=85',
            transportCost: 2800,
            stayCostPerDay: 2000,
            foodCostPerDay: 900,
            activityCostPerDay: 700,
            bestTime: 'October to March',
            bestSeasonRating: 'EXCELLENT',
            recommendedDays: 3,
            bestFor: 'Pink terracotta palaces, hilltop Amber Fort, block-print textiles, and spicy Royal Rajasthani thali dining',
            budgetRange: '₹11,000 – ₹22,000',
            rating: 4.7,
            match: 95,
            mood: ['culture', 'food', 'city'],
            topExperiences: ['Amber Fort Light & Sound Show', 'Hawa Mahal Window Photography', 'Johari Bazaar Block Print Shopping'],
            foodHighlights: ['Dal Baati Churma', 'Crispy Pyaaz Kachori', 'Royal Laal Maas Curry'],
            stay: 'Heritage Haveli Stays & Luxury Palace Hotels',
            transport: 'Autorickshaws & local cabs',
            activities: 'Fort exploration, Artisan shopping, Food walks, Palace tours',
            goodFor: ['Culture', 'Food', 'History', 'Budget', 'Photography'],
            scores: { food: 92, nature: 75, culture: 98, adventure: 78, value: 96 }
        },
        {
            id: 'bangkok',
            name: 'Bangkok',
            country: 'Thailand',
            region: 'Asia',
            categories: 'City · Street Food · Temples',
            image: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=1200&q=85',
            transportCost: 14000,
            stayCostPerDay: 2500,
            foodCostPerDay: 1000,
            activityCostPerDay: 900,
            bestTime: 'November to February',
            bestSeasonRating: 'EXCELLENT',
            recommendedDays: 4,
            bestFor: 'Golden Buddhist spire temples, bustling floating river markets, night street food stalls, and rooftop lounges',
            budgetRange: '₹22,000 – ₹45,000',
            rating: 4.7,
            match: 93,
            mood: ['city', 'food', 'culture', 'nightlife'],
            topExperiences: ['Grand Palace & Emerald Buddha Tour', 'Chatuchak Weekend Market Shopping', 'Chao Phraya Princess Dinner Cruise'],
            foodHighlights: ['Authentic Pad Thai', 'Spicy Tom Yum Goong', 'Sweet Mango Sticky Rice'],
            stay: 'Riverside Luxury Hotels & Trendy Sukhumvit Stays',
            transport: 'BTS Skytrain, MRT subway & River Boats',
            activities: 'Temple hopping, Floating markets, Tuk-tuk food tours, Rooftop cocktails',
            goodFor: ['City', 'Food', 'Budget', 'Nightlife', 'Shopping'],
            scores: { food: 99, nature: 72, culture: 92, adventure: 85, value: 92 }
        },
        {
            id: 'paris',
            name: 'Paris',
            country: 'France',
            region: 'Europe',
            categories: 'Art · Museums · Romance',
            image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=85',
            transportCost: 48000,
            stayCostPerDay: 8500,
            foodCostPerDay: 3500,
            activityCostPerDay: 2500,
            bestTime: 'April – May & Sept – Oct',
            bestSeasonRating: 'EXCELLENT',
            recommendedDays: 5,
            bestFor: 'Sparkling Eiffel Tower night views, Louvre masterworks, Seine riverfront walks, and Parisian boulangerie pastries',
            budgetRange: '₹90,000 – ₹1,70,000',
            rating: 4.8,
            match: 90,
            mood: ['culture', 'city', 'food'],
            topExperiences: ['Eiffel Tower Summit Sparkle Experience', 'Louvre Museum Mona Lisa Tour', 'Montmartre Artists Quarter Stroll'],
            foodHighlights: ['Warm Butter Croissants', 'French Onion Soup', 'Artisanal Ladurée Macarons'],
            stay: 'Haussmannian Boutique Hotels & Charming Latin Quarter Apartments',
            transport: 'Paris Métro network & Velib bike rental',
            activities: 'Museum visits, Seine cruises, Bakery hopping, Fashion shopping',
            goodFor: ['Culture', 'Romance', 'Food', 'Art', 'Architecture'],
            scores: { food: 96, nature: 78, culture: 99, adventure: 75, value: 79 }
        },
        {
            id: 'london',
            name: 'London',
            country: 'UK',
            region: 'Europe',
            categories: 'History · West End · Museums',
            image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=85',
            transportCost: 52000,
            stayCostPerDay: 9000,
            foodCostPerDay: 3800,
            activityCostPerDay: 2600,
            bestTime: 'May to September',
            bestSeasonRating: 'EXCELLENT',
            recommendedDays: 5,
            bestFor: 'Big Ben & Parliament, West End theatre musicals, world-class free museums, and red double-decker bus rides',
            budgetRange: '₹95,000 – ₹1,85,000',
            rating: 4.8,
            match: 89,
            mood: ['city', 'culture'],
            topExperiences: ['London Eye Glass Pod Flight', 'British Museum Treasure Tour', 'Tower Bridge Walk & Crown Jewels'],
            foodHighlights: ['Golden Fish and Chips', 'Traditional Afternoon High Tea', 'Borough Market Street Food'],
            stay: 'Covent Garden Boutique Hotels & Historic Victorian Townhouses',
            transport: 'London Underground (Tube) & Buses',
            activities: 'Theatre shows, Museum exploration, Park walks, Thames cruises',
            goodFor: ['City', 'Culture', 'History', 'Family', 'Shows'],
            scores: { food: 90, nature: 80, culture: 98, adventure: 76, value: 78 }
        },
        {
            id: 'rome',
            name: 'Rome',
            country: 'Italy',
            region: 'Europe',
            categories: 'History · Architecture · Pasta',
            image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1200&q=85',
            transportCost: 46000,
            stayCostPerDay: 7800,
            foodCostPerDay: 3200,
            activityCostPerDay: 2200,
            bestTime: 'April – June & Sept – Oct',
            bestSeasonRating: 'EXCELLENT',
            recommendedDays: 4,
            bestFor: 'Ancient Colosseum arena, Vatican Sistine Chapel frescoes, Trevi Fountain coin tossing, and handmade gelato',
            budgetRange: '₹82,000 – ₹1,60,000',
            rating: 4.9,
            match: 91,
            mood: ['culture', 'food', 'city'],
            topExperiences: ['Colosseum Underground Tour', 'Vatican Museums & St Peter’s Basilica', 'Trevi Fountain Evening Stroll'],
            foodHighlights: ['Cacio e Pepe Pasta', 'Authentic Neapolitan Pizza', 'Artisanal Gelato'],
            stay: 'Historic Trastevere Guest Houses & Classical City Hotels',
            transport: 'Walking, Metro & Tramways',
            activities: 'Ancient ruins, Gelato tasting, Fountain walks, Church art tours',
            goodFor: ['History', 'Food', 'Culture', 'Couples', 'Architecture'],
            scores: { food: 98, nature: 76, culture: 100, adventure: 74, value: 82 }
        },
        {
            id: 'santorini',
            name: 'Santorini',
            country: 'Greece',
            region: 'Europe',
            categories: 'Caldera · Sunsets · Whitewashed',
            image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1200&q=85',
            transportCost: 50000,
            stayCostPerDay: 9500,
            foodCostPerDay: 3600,
            activityCostPerDay: 2400,
            bestTime: 'May to October',
            bestSeasonRating: 'EXCELLENT',
            recommendedDays: 4,
            bestFor: 'Whitewashed cliffside Oia villages, blue dome churches, volcanic red beaches, and Aegean sunset cruises',
            budgetRange: '₹95,000 – ₹1,90,000',
            rating: 4.9,
            match: 92,
            mood: ['beach', 'relax', 'nature'],
            topExperiences: ['Oia Castle Sunset Viewing', 'Caldera Catamaran Sailing Cruise', 'Fira to Oia Cliffside Hike'],
            foodHighlights: ['Fresh Greek Salad with Feta', 'Grilled Octopus', 'Assyrtiko Volcanic Wine'],
            stay: 'Cave Suites with Private Plunge Pools & Cliffside Hotels',
            transport: 'ATV rentals & local island buses',
            activities: 'Catamaran cruises, Wine tasting, Cliff walking, Beach lounging',
            goodFor: ['Couples', 'Sunsets', 'Relaxation', 'Photography', 'Luxury'],
            scores: { food: 90, nature: 97, culture: 86, adventure: 80, value: 76 }
        },
        {
            id: 'tokyo',
            name: 'Tokyo',
            country: 'Japan',
            region: 'Asia',
            categories: 'Futuristic · Neon · Anime & Food',
            image: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1200&q=85',
            transportCost: 40000,
            stayCostPerDay: 7500,
            foodCostPerDay: 3200,
            activityCostPerDay: 2200,
            bestTime: 'March – May & Oct – Nov',
            bestSeasonRating: 'EXCELLENT',
            recommendedDays: 5,
            bestFor: 'Shibuya Crossing neon lights, teamLab digital art, Tsukiji sushi breakfasts, and Akihabara tech culture',
            budgetRange: '₹72,000 – ₹1,40,000',
            rating: 5.0,
            match: 95,
            mood: ['city', 'food', 'culture', 'shopping'],
            topExperiences: ['Shibuya Scramble Crossing & Sky View', 'teamLab Planets Digital Art Museum', 'Senso-ji Asakusa Temple Stroll'],
            foodHighlights: ['Omakase Nigiri Sushi', 'Crispy Pork Katsu', 'Wagyu Beef Skewers'],
            stay: 'Futuristic Pod Hotels & Luxury High-Rise Towers',
            transport: 'JR Yamanote Train Loop & Metro',
            activities: 'Digital art, Anime shopping, Izakaya hopping, Shrine visits',
            goodFor: ['City', 'Food', 'Futuristic', 'Shopping', 'Solo'],
            scores: { food: 100, nature: 75, culture: 96, adventure: 88, value: 85 }
        },
        {
            id: 'iceland',
            name: 'Iceland',
            country: 'Iceland',
            region: 'Europe',
            categories: 'Volcanoes · Northern Lights · Waterfalls',
            image: 'https://images.unsplash.com/photo-1504893524553-b855bce32c67?auto=format&fit=crop&w=1200&q=85',
            transportCost: 58000,
            stayCostPerDay: 10000,
            foodCostPerDay: 4200,
            activityCostPerDay: 3200,
            bestTime: 'Sept – April (Lights) or June – Aug (Summer)',
            bestSeasonRating: 'EXCELLENT',
            recommendedDays: 6,
            bestFor: 'Dancing Northern Lights, Blue Lagoon geothermal spa, roaring Skógafoss waterfalls, and black sand beaches',
            budgetRange: '₹1,15,000 – ₹2,30,000',
            rating: 4.9,
            match: 90,
            mood: ['adventure', 'nature', 'mountain'],
            topExperiences: ['Golden Circle Geysir & Gullfoss Tour', 'Blue Lagoon Geothermal Spa Bath', 'Northern Lights Wilderness Chase'],
            foodHighlights: ['Icelandic Lamb Soup', 'Fresh Arctic Char', 'Skyr Yogurt'],
            stay: 'Glass Igloo Cabins & Remote Wilderness Lodges',
            transport: '4x4 Camper Van & Rental Cars',
            activities: 'Glacier hiking, Geothermal baths, Aurora hunting, Volcano tours',
            goodFor: ['Nature', 'Adventure', 'Photography', 'Unique', 'Wilderness'],
            scores: { food: 82, nature: 100, culture: 82, adventure: 98, value: 74 }
        },
        {
            id: 'barcelona',
            name: 'Barcelona',
            country: 'Spain',
            region: 'Europe',
            categories: 'Gaudí · Tapas · Beach',
            image: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=1200&q=85',
            transportCost: 45000,
            stayCostPerDay: 7200,
            foodCostPerDay: 3000,
            activityCostPerDay: 2000,
            bestTime: 'May to October',
            bestSeasonRating: 'EXCELLENT',
            recommendedDays: 4,
            bestFor: 'Gaudí Sagrada Família spires, Park Güell mosaics, Gothic Quarter alleyways, and beachfront tapas bars',
            budgetRange: '₹78,000 – ₹1,50,000',
            rating: 4.8,
            match: 92,
            mood: ['city', 'beach', 'food', 'culture'],
            topExperiences: ['Sagrada Família Guided Basilica Tour', 'Park Güell Mosaic Sunset View', 'La Boqueria Market Food Crawl'],
            foodHighlights: ['Seafood Paella', 'Patatas Bravas Tapas', 'Churros with Thick Chocolate'],
            stay: 'Modernist Eixample Apartments & Gothic Quarter Hotels',
            transport: 'Metro, Trams & Bicycles',
            activities: 'Architecture tours, Tapas crawls, Beach lounging, Flamenco shows',
            goodFor: ['Architecture', 'Food', 'Culture', 'Beaches', 'Nightlife'],
            scores: { food: 95, nature: 80, culture: 97, adventure: 82, value: 84 }
        },
        {
            id: 'newyork',
            name: 'New York City',
            country: 'USA',
            region: 'Americas',
            categories: 'Skyscrapers · Broadway · Museums',
            image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=1200&q=85',
            transportCost: 65000,
            stayCostPerDay: 12500,
            foodCostPerDay: 4800,
            activityCostPerDay: 3500,
            bestTime: 'April – June & Sept – Nov',
            bestSeasonRating: 'EXCELLENT',
            recommendedDays: 5,
            bestFor: 'Times Square lights, Broadway musicals, Central Park strolls, and Empire State observation views',
            budgetRange: '₹1,20,000 – ₹2,50,000',
            rating: 4.8,
            match: 87,
            mood: ['city', 'culture', 'shopping', 'food'],
            topExperiences: ['Summit One Vanderbilt Glass Observation', 'Broadway Musical Live Show', 'Central Park Rowboat & Stroll'],
            foodHighlights: ['NYC Dollar Slice Pizza', 'Pastrami on Rye Sandwich', 'New York Cheesecake'],
            stay: 'Manhattan High-Rise Hotels & Trendy Brooklyn Lofts',
            transport: 'NYC Subway System & Yellow Cabs',
            activities: 'Broadway shows, Museum hopping, Skyline viewing, Shopping',
            goodFor: ['City', 'Culture', 'Shows', 'Shopping', 'Food'],
            scores: { food: 95, nature: 72, culture: 98, adventure: 80, value: 70 }
        },
        {
            id: 'capetown',
            name: 'Cape Town',
            country: 'South Africa',
            region: 'Africa',
            categories: 'Table Mountain · Wine · Ocean',
            image: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=1200&q=85',
            transportCost: 52000,
            stayCostPerDay: 6000,
            foodCostPerDay: 2400,
            activityCostPerDay: 1800,
            bestTime: 'November to March',
            bestSeasonRating: 'EXCELLENT',
            recommendedDays: 5,
            bestFor: 'Table Mountain cable car views, Boulders Beach penguin colony, Cape Peninsula coastal drives, and vineyards',
            budgetRange: '₹80,000 – ₹1,60,000',
            rating: 4.9,
            match: 93,
            mood: ['mountain', 'beach', 'nature', 'adventure'],
            topExperiences: ['Table Mountain Aerial Cableway Hike', 'Boulders Beach African Penguin Visit', 'Stellenbosch Wine Estate Tasting'],
            foodHighlights: ['Cape Malay Curry', 'Braai Barbecue Feast', 'Fresh Ocean Oysters'],
            stay: 'V&A Waterfront Hotels & Camps Bay Beachfront Villas',
            transport: 'Rental Cars & Uber',
            activities: 'Hiking, Wine tasting, Wildlife spotting, Coastal drives',
            goodFor: ['Nature', 'Mountains', 'Wine', 'Adventure', 'Couples'],
            scores: { food: 92, nature: 99, culture: 88, adventure: 94, value: 86 }
        },
        {
            id: 'amalfi',
            name: 'Amalfi Coast',
            country: 'Italy',
            region: 'Europe',
            categories: 'Cliffs · Limoncello · Villages',
            image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=85',
            transportCost: 48000,
            stayCostPerDay: 10500,
            foodCostPerDay: 3800,
            activityCostPerDay: 2600,
            bestTime: 'May to September',
            bestSeasonRating: 'EXCELLENT',
            recommendedDays: 4,
            bestFor: 'Pastel cliffside Positano villages, Path of the Gods hiking trails, lemon groves, and Tyrrhenian boat tours',
            budgetRange: '₹98,000 – ₹1,95,000',
            rating: 4.9,
            match: 91,
            mood: ['beach', 'relax', 'nature', 'food'],
            topExperiences: ['Positano Cliffside Village Exploration', 'Path of the Gods Scenic Trek', 'Capri Island Boat & Blue Grotto Tour'],
            foodHighlights: ['Fresh Spaghetti al Limone', 'Caprese Salad', 'Chilled Limoncello Liqueur'],
            stay: 'Cliffside Boutique Hotels & Terraced Lemon Villa Suites',
            transport: 'Ferries, SITA buses & Scooter rentals',
            activities: 'Boat tours, Cliff hiking, Village strolls, Lemon estate tours',
            goodFor: ['Couples', 'Scenery', 'Food', 'Relaxation', 'Romance'],
            scores: { food: 96, nature: 98, culture: 88, adventure: 82, value: 75 }
        },
        {
            id: 'sydney',
            name: 'Sydney',
            country: 'Australia',
            region: 'Oceania',
            categories: 'Harbour · Opera House · Bondi',
            image: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=1200&q=85',
            transportCost: 68000,
            stayCostPerDay: 8800,
            foodCostPerDay: 3500,
            activityCostPerDay: 2400,
            bestTime: 'September to November & Feb – April',
            bestSeasonRating: 'EXCELLENT',
            recommendedDays: 5,
            bestFor: 'Sydney Opera House sails, Harbour Bridge climbs, Bondi to Coogee coastal walks, and surf culture',
            budgetRange: '₹1,05,000 – ₹2,10,000',
            rating: 4.8,
            match: 89,
            mood: ['city', 'beach', 'nature'],
            topExperiences: ['Sydney Opera House Backstage Tour', 'Harbour Bridge Climb', 'Bondi Beach Surf & Coastal Walk'],
            foodHighlights: ['Flat White Coffee', 'Fresh Sydney Rock Oysters', 'Aussie Meat Pie'],
            stay: 'Harbourfront Hotels & Manly Beach Apartments',
            transport: 'Ferries, Trains & Opal Card buses',
            activities: 'Surfing, Harbour cruises, Bridge climbs, Coastal walking',
            goodFor: ['City', 'Beaches', 'Outdoors', 'Family', 'Couples'],
            scores: { food: 91, nature: 92, culture: 88, adventure: 88, value: 78 }
        },
        {
            id: 'queenstown',
            name: 'Queenstown',
            country: 'New Zealand',
            region: 'Oceania',
            categories: 'Adventure · Lakes · Fjords',
            image: 'https://images.unsplash.com/photo-1507699622108-4be3abd695ad?auto=format&fit=crop&w=1200&q=85',
            transportCost: 72000,
            stayCostPerDay: 9000,
            foodCostPerDay: 3400,
            activityCostPerDay: 3600,
            bestTime: 'Dec – Feb (Summer) or June – Aug (Ski)',
            bestSeasonRating: 'EXCELLENT',
            recommendedDays: 5,
            bestFor: 'Milford Sound fjord cruises, Lake Wakatipu alpine views, bungy jumping, and Pinot Noir wine tasting',
            budgetRange: '₹1,10,000 – ₹2,20,000',
            rating: 5.0,
            match: 92,
            mood: ['adventure', 'mountain', 'nature'],
            topExperiences: ['Milford Sound Fjord Scenic Cruise', 'Shotover Jet Boat Canyons Ride', 'Skyline Gondola & Luge Ride'],
            foodHighlights: ['Famous Fergburger', 'Central Otago Pinot Noir', 'New Zealand Lamb Chops'],
            stay: 'Lakefront Lodges & Alpine Chalets',
            transport: 'Rental SUV & Orbus public transit',
            activities: 'Jet boating, Fjord cruises, Bungy jumping, Wine tours',
            goodFor: ['Adventure', 'Nature', 'Mountains', 'Photography', 'Thrill'],
            scores: { food: 88, nature: 100, culture: 80, adventure: 100, value: 77 }
        }
    ];

    /* ---------------------------------------------------------
       2. DATASET: 15 RICH EDITORIAL GUIDES
    --------------------------------------------------------- */
    const GUIDES_DATA = [
        {
            id: 'g1',
            key: 'international',
            category: 'Planning',
            badge: 'FIRST TIMER',
            readTime: '6 min read',
            image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800&q=80',
            title: 'How to Plan Your First International Trip Without Overthinking',
            desc: 'Essential checklist covering passport validity, forex cards, e-SIMs, and travel insurance.',
            content: `
                <p>Planning an overseas journey can feel daunting, but breaking it down into simple steps guarantees a stress-free departure.</p>
                <h3>1. Passport & Visa Validity</h3>
                <p>Most countries require your passport to have at least 6 months of validity remaining from your date of entry. Check visa rules early — countries like Thailand and Dubai offer simple e-Visas or Visa-on-Arrival.</p>
                <h3>2. Forex Cards & Foreign Exchange</h3>
                <p>Never exchange currency at airports — rates are up to 15% worse. Carry a multi-currency Forex card or zero-forex-markup debit card (like Niyo or Scapia) and carry $100 in physical cash for emergency cash payments.</p>
                <h3>3. Instant Connectivity via e-SIM</h3>
                <p>Avoid expensive international roaming. Install an e-SIM app (Airalo or Holafly) before landing to get instant 5G data activation upon arrival for under ₹1,000.</p>
            `
        },
        {
            id: 'g2',
            key: 'weekend',
            category: 'Weekend',
            badge: 'SHORT ESCAPES',
            readTime: '4 min read',
            image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80',
            title: '7 Budget-Friendly Weekend Escapes That Feel Premium',
            desc: 'Pacing secrets for 3-day getaways to maximize relaxation without rushing.',
            content: `
                <p>Short 3-day weekend getaways require smart pacing. Attempting to cram 15 sights into 48 hours results in fatigue instead of renewal.</p>
                <h3>Day 1: Orientation & Night Vibe</h3>
                <p>Check into your stay, grab local street food, and take a casual evening stroll to get a feel for the destination.</p>
                <h3>Day 2: Peak Anchor Experience</h3>
                <p>Dedicate your middle day to ONE major highlight — whether climbing Kolukkumalai in Munnar or catching an ocean sunset in Goa.</p>
                <h3>Day 3: Slow Coffee & Regional Shopping</h3>
                <p>Keep your final day light. Enjoy a long café breakfast, buy local spices or souvenirs, and head home refreshed.</p>
            `
        },
        {
            id: 'g3',
            key: 'budget25k',
            category: 'Budget',
            badge: 'SMART SPENDING',
            readTime: '5 min read',
            image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80',
            title: 'How to Build a High-Impact ₹25,000 Vacation for Two',
            desc: 'Where to allocate money and where to save without sacrificing comfort.',
            content: `
                <p>A ₹25,000 budget for two people is more than enough for destinations like Goa, Jaipur, or Munnar if you decouple transit from accommodation.</p>
                <h3>The 40-35-25 Spending Rule</h3>
                <p>Allocate 40% (₹10,000) to accommodation, 35% (₹8,750) to food & drinks, and 25% (₹6,250) to activities & local transport.</p>
                <h3>Book Overnight Trains or Express Buses</h3>
                <p>Choosing overnight luxury sleeper buses or AC trains saves 60% compared to last-minute flights, while also eliminating one night of hotel costs!</p>
            `
        },
        {
            id: 'g4',
            key: 'food',
            category: 'Food',
            badge: 'CULINARY JOURNEY',
            readTime: '5 min read',
            image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80',
            title: 'Culinary Travel Hacks: How to Eat Like a Local Anywhere',
            desc: 'Spotting authentic eateries, avoiding tourist traps, and staying healthy.',
            content: `
                <p>Food is the soul of travel. Here is how to find unforgettable regional dishes without falling into overpriced tourist traps.</p>
                <h3>The 2-Block Rule</h3>
                <p>Never eat directly in front of major monuments or central plazas. Walk just two blocks into residential side streets to find long queues of locals and half-price authentic menus.</p>
                <h3>Look for Single-Dish Specialists</h3>
                <p>In food capitals like Bangkok, Tokyo, or Jaipur, the best meals come from vendors who have perfected a single dish for decades.</p>
            `
        },
        {
            id: 'g5',
            key: 'nature',
            category: 'Nature',
            badge: 'SLOW TRAVEL',
            readTime: '4 min read',
            image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&q=80',
            title: 'The Art of Slow Travel: How to Travel Without Overplanning',
            desc: 'Leaving room for serendipity, quiet moments, and spontaneous discoveries.',
            content: `
                <p>Over-scheduled itineraries turn vacations into work tasks. True travel magic happens in unscripted moments.</p>
                <h3>Schedule One Anchor Activity Per Day</h3>
                <p>Pick one non-negotiable activity per day (e.g. morning museum or sunset hike). Leave the rest of your day completely open.</p>
                <h3>Talk to Local Baristas & Hosts</h3>
                <p>Ask your stay host or local coffee barista: "Where do you eat on your day off?" This single question reveals places no travel blog lists.</p>
            `
        },
        {
            id: 'g6',
            key: 'hacks',
            category: 'Budget',
            badge: 'OFF-PEAK TRAVEL',
            readTime: '6 min read',
            image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
            title: 'Off-Peak Secrets: 50% Off Luxury Stays in Bali & Europe',
            desc: 'Targeting shoulder seasons to get 5-star experiences at 3-star prices.',
            content: `
                <p>High season brings high prices and packed crowds. Shoulder season offers ideal weather with massive hotel discounts.</p>
                <h3>Bali in April & October</h3>
                <p>Right before and after monsoon season, rainfall is rare, temperatures are pleasant, and luxury villa rates drop by up to 50%.</p>
                <h3>European Shoulder Months</h3>
                <p>Visit Paris or Rome in May or September. You will avoid the blistering July heat waves and enjoy reasonable room rates.</p>
            `
        },
        {
            id: 'g7',
            key: 'nomad',
            category: 'Planning',
            badge: 'REMOTE WORK',
            readTime: '5 min read',
            image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80',
            title: 'Work + Wander: The Digital Nomad Guide to Southeast Asia',
            desc: 'Finding high-speed Wi-Fi, co-living spaces, and balancing work with travel.',
            content: `
                <p>Working remotely while exploring the world requires clear boundaries, reliable Wi-Fi, and ergonomically sound workspaces.</p>
                <p>Top digital nomad hubs like Canggu (Bali) and Chiang Mai offer dedicated co-working passes with high-speed fiber internet for under ₹8,000/month.</p>
            `
        },
        {
            id: 'g8',
            key: 'solo',
            category: 'International',
            badge: 'SOLO TRAVEL',
            readTime: '6 min read',
            image: 'https://images.unsplash.com/photo-1501555088652-021faa106b9b?auto=format&fit=crop&w=800&q=80',
            title: 'Solo Travel 101: Safety, Confidence & Unforgettable Freedom',
            desc: 'Practical safety tips, meeting fellow travelers, and enjoying your own company.',
            content: `
                <p>Solo travel is one of the most empowering experiences you can have. Start with welcoming destinations like Kyoto, Singapore, or Munnar.</p>
                <p>Always share your live location via WhatsApp with a trusted friend, stay at social boutique hostels, and join free walking tours to meet people easily.</p>
            `
        },
        {
            id: 'g9',
            key: 'packing',
            category: 'Planning',
            badge: 'MINIMALISM',
            readTime: '4 min read',
            image: 'https://images.unsplash.com/photo-1553531384-cc14c8086119?auto=format&fit=crop&w=800&q=80',
            title: 'Pack Carry-On Only: The 5-4-3-2-1 Capsule Wardrobe Method',
            desc: 'Never pay checked bag fees again with this foolproof packing strategy.',
            content: `
                <p>Travel light to move fast. Use compression packing cubes and stick to neutral color palettes that mix and match easily.</p>
                <p>The 5-4-3-2-1 rule: 5 sets of socks & underwear, 4 tops, 3 bottoms, 2 pairs of shoes, and 1 outerwear jacket.</p>
            `
        },
        {
            id: 'g10',
            key: 'sustainable',
            category: 'Nature',
            badge: 'ECO TRAVEL',
            readTime: '5 min read',
            image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80',
            title: 'Sustainable Tourism: Leaving Places Better Than You Found Them',
            desc: 'Supporting local communities, reducing plastic waste, and ethical wildlife visits.',
            content: `
                <p>Be a conscious traveler. Carry a reusable insulated water bottle, decline single-use plastic straws, and buy directly from local artisans.</p>
                <p>Never support unethical animal rides or close-up wildlife photo props — choose certified sanctuaries instead.</p>
            `
        },
        {
            id: 'g11',
            key: 'currency',
            category: 'Budget',
            badge: 'FINANCES',
            readTime: '4 min read',
            image: 'https://images.unsplash.com/photo-1580519542036-c47de6196ba5?auto=format&fit=crop&w=800&q=80',
            title: 'Zero FX Fees: Master Foreign Exchange & Airport ATMs',
            desc: 'How to avoid hidden dynamic currency conversion traps overseas.',
            content: `
                <p>When paying abroad or withdrawing cash from ATMs, ALWAYS choose to be charged in the LOCAL CURRENCY rather than your home currency.</p>
                <p>Choosing your home currency triggers "Dynamic Currency Conversion" (DCC), adding a 6% to 9% hidden fee on top of bank charges!</p>
            `
        },
        {
            id: 'g12',
            key: 'insurance',
            category: 'Planning',
            badge: 'SAFETY',
            readTime: '5 min read',
            image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
            title: 'Travel Insurance 101: What Is Covered & What Is a Scam',
            desc: 'Understanding medical coverage, flight delays, and baggage loss protection.',
            content: `
                <p>Travel insurance is non-negotiable for international trips. A simple ₹800 policy can save lakhs in emergency medical situations.</p>
                <p>Ensure your policy covers emergency medical evacuation, flight cancellations due to severe weather, and lost baggage compensation.</p>
            `
        },
        {
            id: 'g13',
            key: 'photography',
            category: 'Weekend',
            badge: 'CREATIVE',
            readTime: '4 min read',
            image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80',
            title: 'Mobile Travel Photography: Capturing Professional Memories',
            desc: 'Mastering golden hour lighting, grid lines, and subtle editing apps.',
            content: `
                <p>You do not need a heavy DSLR to take world-class travel photos. Enable the 3x3 camera grid on your phone to apply the rule of thirds.</p>
                <p>Shoot during Golden Hour (30 minutes after sunrise or before sunset) for soft warm light, and edit subtly in Lightroom Mobile.</p>
            `
        },
        {
            id: 'g14',
            key: 'trains',
            category: 'Budget',
            badge: 'SCENIC TRANSIT',
            readTime: '5 min read',
            image: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=800&q=80',
            title: 'Scenic Railway Journeys vs Flight Hopping',
            desc: 'Why train travel offers richer views, lower carbon footprint, and lower costs.',
            content: `
                <p>High-speed trains in Europe and Japan (like the TGV or Shinkansen) run city-center to city-center, avoiding 3-hour airport security checks.</p>
                <p>Plus, mountain railways in Switzerland or India offer breathtaking panoramic views impossible to see from 35,000 feet.</p>
            `
        },
        {
            id: 'g15',
            key: 'gems',
            category: 'International',
            badge: 'DISCOVERY',
            readTime: '6 min read',
            image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
            title: 'Finding Hidden Gems Beyond Instagram Tourist Hotspots',
            desc: 'Uncovering quiet fishing villages, hidden waterfalls, and secret viewpoints.',
            content: `
                <p>Skip over-visited Instagram photo spots to experience authentic local life.</p>
                <p>Research government tourism archives, read local travel blogs, and hire local guides who know off-grid trails and uncrowded beaches.</p>
            `
        }
    ];

    /* ---------------------------------------------------------
       3. LOCALSTORAGE HELPER FUNCTIONS
    --------------------------------------------------------- */
    function loadData(key, fallback) {
        try {
            const data = localStorage.getItem(key);
            return data ? JSON.parse(data) : fallback;
        } catch (e) {
            console.warn(`LocalStorage read error for key "${key}":`, e);
            return fallback;
        }
    }

    function saveData(key, value) {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch (e) {
            console.warn(`LocalStorage write error for key "${key}":`, e);
        }
    }

    // App Persistent State Variables
    let savedTrips = loadData('wanderly_saved_trips', [
        {
            id: 'trip_1',
            destId: 'kyoto',
            destinationName: 'Kyoto, Japan',
            image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=85',
            travellers: 2,
            days: 5,
            style: 'Balanced',
            budget: 85000,
            totalCost: 78500,
            perPerson: 39250,
            perDay: 15700,
            status: 'READY',
            travelDate: '2026-11-15',
            dateSaved: 'Oct 04, 2026',
            readiness: 85
        },
        {
            id: 'trip_2',
            destId: 'bali',
            destinationName: 'Bali, Indonesia',
            image: 'https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=1200&q=85',
            travellers: 2,
            days: 5,
            style: 'Balanced',
            budget: 45000,
            totalCost: 42800,
            perPerson: 21400,
            perDay: 8560,
            status: 'PLANNING',
            travelDate: '2026-12-10',
            dateSaved: 'Oct 06, 2026',
            readiness: 60
        }
    ]);

    let favorites = loadData('wanderly_favorites', ['kyoto', 'bali', 'munnar']);
    let recentlyViewed = loadData('wanderly_recent', ['kyoto', 'bali', 'goa', 'dubai']);
    let compareList = loadData('wanderly_compare', ['bali', 'goa', 'munnar']);
    
    let expenses = loadData('wanderly_expenses', [
        { id: 1, title: 'Hotel Deposit', category: 'Accommodation', amount: 12000, date: '2026-10-01', note: 'Pre-paid 2 nights' },
        { id: 2, title: 'Flight Tickets', category: 'Transport', amount: 16000, date: '2026-10-02', note: 'Return ticket' },
        { id: 3, title: 'Heritage Dinner', category: 'Food', amount: 24000, date: '2026-10-05', note: 'Seafood shack' }
    ]);

    let checklist = loadData('wanderly_checklist', [
        { id: 1, category: 'DOCUMENTS', title: 'Passport validity verified (6+ months)', done: true },
        { id: 2, category: 'DOCUMENTS', title: 'Hotel & Flight confirmations saved offline', done: true },
        { id: 3, category: 'ESSENTIALS', title: 'Universal travel power adapter & power bank', done: true },
        { id: 4, category: 'FINANCES', title: 'Zero-Forex card activated & physical cash exchanged', done: false },
        { id: 5, category: 'HEALTH', title: 'Travel insurance policy & first-aid kit packed', done: false }
    ]);

    let packingList = loadData('wanderly_packing', [
        { id: 1, category: 'Clothing', title: 'Light linen shirts & shorts (4 pairs)', done: true },
        { id: 2, category: 'Footwear', title: 'Comfortable walking sneakers & sandals', done: true },
        { id: 3, category: 'Toiletries', title: 'Sunscreen SPF50 & lip balm', done: false },
        { id: 4, category: 'Electronics', title: 'Camera, memory cards & portable charger', done: false }
    ]);

    let notifications = loadData('wanderly_notifications', [
        { id: 1, title: 'Welcome to WANDERLY', time: 'Just now', read: false },
        { id: 2, title: 'Kyoto Trip Ready', time: '2h ago', read: false }
    ]);

    let currentTheme = localStorage.getItem('wanderly_theme') || 'dark';

    /* ---------------------------------------------------------
       4. THEME CONTROLLER
    --------------------------------------------------------- */
    function applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('wanderly_theme', theme);
        currentTheme = theme;
        const btn = document.getElementById('themeToggleBtn');
        if (btn) {
            btn.innerHTML = theme === 'dark' ? '☀️ Light' : '🌙 Dark';
        }
    }

    window.toggleTheme = function() {
        const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
        applyTheme(nextTheme);
        showToast(`Switched to ${nextTheme.toUpperCase()} theme`);
    };

    applyTheme(currentTheme);

    /* ---------------------------------------------------------
       5. SPA ROUTER WITH HISTORY API & SCROLL RESTORATION
    --------------------------------------------------------- */
    const VALID_PAGES = ['home', 'discover', 'destinations', 'planner', 'budget', 'trips', 'guides', 'about'];
    let currentPage = 'home';

    window.navigateTo = function(pageId, pushToHistory = true) {
        if (!VALID_PAGES.includes(pageId)) pageId = 'home';

        // 1. Hide active page views
        document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));

        // 2. Show target page view
        const targetPage = document.getElementById(`page-${pageId}`);
        if (targetPage) {
            targetPage.classList.add('active');
        }

        currentPage = pageId;

        // 3. Update active nav links
        document.querySelectorAll('[data-page]').forEach(link => {
            if (link.getAttribute('data-page') === pageId) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });

        // 4. Push State to URL Hash
        if (pushToHistory) {
            history.pushState({ page: pageId }, '', `#${pageId}`);
        }

        // 5. Scroll Restoration
        window.scrollTo({ top: 0, behavior: 'smooth' });

        // 6. Close mobile menu drawer if open
        const mobileMenu = document.getElementById('mobileMenu');
        if (mobileMenu) mobileMenu.classList.remove('open');

        // 7. Route Specific Triggers & Renders
        if (pageId === 'home') renderHomePage();
        if (pageId === 'discover') renderDiscoverPage();
        if (pageId === 'destinations') renderDestinationsPage();
        if (pageId === 'budget') renderBudgetDashboard();
        if (pageId === 'trips') renderMyTripsPage();
        if (pageId === 'guides') renderGuidesPage();
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
       6. UTILITIES: CURRENCY FORMATTER & MATCH SCORE CALCULATOR
    --------------------------------------------------------- */
    function formatINR(val) {
        if (isNaN(val) || val === null || val === undefined) return '₹0';
        return '₹' + Math.round(val).toLocaleString('en-IN');
    }

    function calculateMatchScore(dest, userBudget = 50000, days = 4, style = 'balanced', selectedInterests = [], mood = null) {
        let score = 82;

        // Budget evaluation
        const styleMultiplier = { budget: 0.78, balanced: 1.0, comfort: 1.3, premium: 1.8 }[style] || 1.0;
        const estimatedTotal = (dest.transportCost + (dest.stayCostPerDay + dest.foodCostPerDay + dest.activityCostPerDay) * days) * 2 * styleMultiplier;

        if (userBudget && estimatedTotal <= userBudget) {
            score += 12;
        } else if (userBudget && estimatedTotal <= userBudget * 1.2) {
            score += 4;
        } else {
            score -= 10;
        }

        // Mood evaluation
        if (mood && dest.mood.includes(mood)) {
            score += 6;
        }

        return Math.max(65, Math.min(99, score));
    }

    /* ---------------------------------------------------------
       7. GLOBAL SEARCH & COMMAND PALETTE OVERLAY
    --------------------------------------------------------- */
    window.toggleSearchOverlay = function() {
        const overlay = document.getElementById('globalSearchOverlay');
        if (!overlay) return;
        overlay.classList.toggle('open');
        if (overlay.classList.contains('open')) {
            const input = document.getElementById('globalSearchInput');
            if (input) { input.value = ''; input.focus(); }
            handleGlobalSearch('');
        }
    };

    window.handleGlobalSearch = function(query) {
        const list = document.getElementById('globalSearchResults');
        if (!list) return;
        const q = query.trim().toLowerCase();

        if (!q) {
            list.innerHTML = `
                <div style="padding:16px; color:var(--text-muted); text-align:center; font-size:13px;">
                    Search destinations, travel styles, or saved guides...
                </div>
            `;
            return;
        }

        const matchedDests = DESTINATIONS.filter(d => 
            d.name.toLowerCase().includes(q) || 
            d.country.toLowerCase().includes(q) || 
            d.categories.toLowerCase().includes(q)
        );

        const matchedGuides = GUIDES_DATA.filter(g => 
            g.title.toLowerCase().includes(q) || 
            g.category.toLowerCase().includes(q)
        );

        let html = '';

        if (matchedDests.length > 0) {
            html += `<div class="search-category-header">DESTINATIONS</div>`;
            matchedDests.forEach(dest => {
                html += `
                    <div class="search-result-item" onclick="toggleSearchOverlay(); openDestModal('${dest.id}')">
                        <div>
                            <strong style="font-family:var(--font-heading); color:var(--text-white); font-size:15px;">${dest.name}, ${dest.country}</strong>
                            <small style="display:block; color:var(--text-muted); font-size:12px;">${dest.categories} · From ${dest.budgetRange.split('–')[0]}</small>
                        </div>
                        <button type="button" class="text-btn">View place →</button>
                    </div>
                `;
            });
        }

        if (matchedGuides.length > 0) {
            html += `<div class="search-category-header" style="margin-top:12px;">EDITORIAL GUIDES</div>`;
            matchedGuides.forEach(guide => {
                html += `
                    <div class="search-result-item" onclick="toggleSearchOverlay(); openGuideModal('${guide.key}')">
                        <div>
                            <strong style="font-family:var(--font-heading); color:var(--text-white); font-size:14px;">${guide.title}</strong>
                            <small style="display:block; color:var(--text-muted); font-size:12px;">${guide.category} · ${guide.readTime}</small>
                        </div>
                        <button type="button" class="text-btn">Read guide →</button>
                    </div>
                `;
            });
        }

        if (matchedDests.length === 0 && matchedGuides.length === 0) {
            html = `<div style="padding:24px; color:var(--text-muted); text-align:center;">No results found for "${query}"</div>`;
        }

        list.innerHTML = html;
    };

    /* ---------------------------------------------------------
       8. TOAST NOTIFICATION & FAVORITES ENGINE
    --------------------------------------------------------- */
    window.showToast = function(msg) {
        const toast = document.getElementById('toast');
        if (!toast) return;
        toast.textContent = msg;
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 3200);
    };

    window.toggleFavorite = function(destId, btn) {
        if (favorites.includes(destId)) {
            favorites = favorites.filter(id => id !== destId);
            showToast('Removed from favorites ♡');
        } else {
            favorites.push(destId);
            showToast('Saved to favorites! ♥');
        }
        saveData('wanderly_favorites', favorites);
        if (btn) btn.classList.toggle('active', favorites.includes(destId));
        
        // Refresh views if active
        if (currentPage === 'trips') renderMyTripsPage();
    };

    /* ---------------------------------------------------------
       9. HOME PAGE (#page-home) COMPONENT RENDERING
    --------------------------------------------------------- */
    function renderHomePage() {
        const featuredGrid = document.getElementById('homeFeaturedGrid');
        if (!featuredGrid) return;

        const featuredDests = [DESTINATIONS[0], DESTINATIONS[1], DESTINATIONS[2], DESTINATIONS[4]]; // Bali, Kyoto, Munnar, Dubai

        featuredGrid.innerHTML = featuredDests.map((dest, idx) => `
            <article class="destination-card ${idx === 0 ? 'large' : ''}" onclick="openDestModal('${dest.id}')">
                <div class="card-top-badges">
                    <span class="match-badge">${dest.match}% MATCH</span>
                    <button type="button" class="fav-btn ${favorites.includes(dest.id) ? 'active' : ''}" onclick="event.stopPropagation(); toggleFavorite('${dest.id}', this)">♥</button>
                </div>
                <img src="${dest.image}" alt="${dest.name}, ${dest.country}">
                <div class="destination-overlay">
                    <div>
                        <span class="country-label">${dest.country.toUpperCase()}</span>
                        <h3>${dest.name}</h3>
                        <p>${dest.categories} · From ${dest.budgetRange.split('–')[0]}</p>
                    </div>
                    <button type="button" class="action-arrow" title="Explore details">→</button>
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
                <h4 style="font-family:var(--font-heading); color:var(--accent-cyan); font-size:13px; margin-bottom:12px; letter-spacing:1px; text-transform:uppercase;">RECOMMENDED DESTINATIONS FOR ${mood.toUpperCase()}</h4>
                <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(240px, 1fr)); gap:16px;">
                    ${filtered.slice(0, 3).map(dest => `
                        <div style="background:var(--bg-midnight); padding:14px; border-radius:var(--radius-md); border:1px solid var(--border-subtle); display:flex; justify-content:space-between; align-items:center;">
                            <div>
                                <strong style="font-family:var(--font-heading); color:var(--text-white); font-size:15px; display:block;">${dest.name}, ${dest.country}</strong>
                                <small style="color:var(--text-muted); font-size:12px;">${dest.categories} · ${dest.budgetRange.split('–')[0]}</small>
                            </div>
                            <button type="button" class="primary-btn" style="padding:6px 14px; font-size:12px;" onclick="planDestination('${dest.id}')">Plan ↗</button>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    };

    window.executeQuickPlan = function() {
        const destInput = document.getElementById('quickDest').value.trim().toLowerCase();
        const budgetInput = document.getElementById('quickBudget').value;
        const daysInput = document.getElementById('quickDays').value;

        if (destInput) {
            const match = DESTINATIONS.find(d => d.name.toLowerCase().includes(destInput) || d.country.toLowerCase().includes(destInput));
            if (match) {
                planDestination(match.id, budgetInput, daysInput);
                return;
            }
        }

        navigateTo('planner');
        if (budgetInput) document.getElementById('plannerBudget').value = budgetInput;
        if (daysInput) document.getElementById('plannerDays').value = daysInput;
        calculateTrip(false);
    };

    /* ---------------------------------------------------------
       10. DISCOVER PAGE (#page-discover) WORKSPACE
    --------------------------------------------------------- */
    function renderDiscoverPage() {
        const grid = document.getElementById('discoverGrid');
        if (!grid) return;

        filterAndRenderDiscover();
    }

    window.filterAndRenderDiscover = function() {
        const searchQuery = (document.getElementById('discoverSearchInput')?.value || '').trim().toLowerCase();
        const region = document.getElementById('discoverRegionFilter')?.value || 'all';
        const style = document.getElementById('discoverStyleFilter')?.value || 'all';
        const sort = document.getElementById('discoverSortFilter')?.value || 'match';

        let list = [...DESTINATIONS];

        if (searchQuery) {
            list = list.filter(d => d.name.toLowerCase().includes(searchQuery) || d.country.toLowerCase().includes(searchQuery) || d.categories.toLowerCase().includes(searchQuery));
        }

        if (region !== 'all') {
            list = list.filter(d => d.region.toLowerCase() === region.toLowerCase());
        }

        if (style !== 'all') {
            list = list.filter(d => d.mood.includes(style.toLowerCase()));
        }

        if (sort === 'budget') {
            list.sort((a, b) => a.transportCost - b.transportCost);
        } else if (sort === 'rating') {
            list.sort((a, b) => b.rating - a.rating);
        } else {
            list.sort((a, b) => b.match - a.match);
        }

        const grid = document.getElementById('discoverGrid');
        if (!grid) return;

        if (list.length === 0) {
            grid.innerHTML = `
                <div style="grid-column: 1 / -1; padding:48px 20px; text-align:center; background:var(--bg-deep-ocean); border-radius:var(--radius-lg); border:1px dashed var(--border-subtle);">
                    <h3 style="font-family:var(--font-heading); color:var(--text-white); margin-bottom:8px;">No places match your filters</h3>
                    <p style="color:var(--text-muted); font-size:14px; margin-bottom:16px;">Try expanding your budget or clearing region filters.</p>
                    <button type="button" class="outline-btn" onclick="resetDiscoverFilters()">Reset Filters</button>
                </div>
            `;
            return;
        }

        grid.innerHTML = list.map(dest => `
            <article class="destination-card" onclick="openDestModal('${dest.id}')">
                <div class="card-top-badges">
                    <span class="match-badge">${dest.match}% MATCH</span>
                    <button type="button" class="fav-btn ${favorites.includes(dest.id) ? 'active' : ''}" onclick="event.stopPropagation(); toggleFavorite('${dest.id}', this)">♥</button>
                </div>
                <img src="${dest.image}" alt="${dest.name}, ${dest.country}">
                <div class="destination-overlay">
                    <div>
                        <span class="country-label">${dest.country.toUpperCase()}</span>
                        <h3>${dest.name}</h3>
                        <p>${dest.categories} · ${dest.budgetRange}</p>
                    </div>
                    <button type="button" class="action-arrow" title="Explore details">→</button>
                </div>
            </article>
        `).join('');
    };

    window.resetDiscoverFilters = function() {
        if (document.getElementById('discoverSearchInput')) document.getElementById('discoverSearchInput').value = '';
        if (document.getElementById('discoverRegionFilter')) document.getElementById('discoverRegionFilter').value = 'all';
        if (document.getElementById('discoverStyleFilter')) document.getElementById('discoverStyleFilter').value = 'all';
        if (document.getElementById('discoverSortFilter')) document.getElementById('discoverSortFilter').value = 'match';
        filterAndRenderDiscover();
    };

    /* ---------------------------------------------------------
       11. DESTINATIONS PAGE (#page-destinations) & COMPARISON MATRIX
    --------------------------------------------------------- */
    function renderDestinationsPage() {
        renderDestinationsDirectory(DESTINATIONS);
        renderComparisonWorkspace();
    }

    function renderDestinationsDirectory(list) {
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
                        <span class="match-badge">${dest.match}% MATCH</span>
                    </div>
                    <h3>${dest.name}</h3>
                    <p class="categories">${dest.categories}</p>
                    
                    <div class="directory-meta">
                        <span>Est. Budget</span>
                        <strong>${dest.budgetRange}</strong>
                    </div>

                    <div class="directory-footer">
                        <button type="button" class="text-btn" onclick="openDestModal('${dest.id}')">Explore details →</button>
                        <button type="button" class="primary-btn" style="padding:8px 14px; font-size:12px;" onclick="planDestination('${dest.id}')">Plan Trip ↗</button>
                    </div>
                </div>
            </article>
        `).join('');
    }

    window.filterDirectoryCategory = function(cat, btn) {
        document.querySelectorAll('#page-destinations .filter-pill').forEach(b => b.classList.remove('active'));
        if (btn) btn.classList.add('active');

        if (cat === 'All') {
            renderDestinationsDirectory(DESTINATIONS);
            return;
        }

        const filtered = DESTINATIONS.filter(d => 
            d.region.toLowerCase() === cat.toLowerCase() || 
            d.categories.toLowerCase().includes(cat.toLowerCase())
        );

        renderDestinationsDirectory(filtered);
    };

    // Full Screen Destination Detail View Modal
    window.openDestModal = function(destId) {
        const dest = DESTINATIONS.find(d => d.id === destId);
        if (!dest) return;

        // Track recently viewed
        if (!recentlyViewed.includes(destId)) {
            recentlyViewed.unshift(destId);
            if (recentlyViewed.length > 6) recentlyViewed.pop();
            saveData('wanderly_recent', recentlyViewed);
        }

        const backdrop = document.getElementById('destModalBackdrop');
        const body = document.getElementById('destModalBody');
        if (!backdrop || !body) return;

        body.innerHTML = `
            <div style="height:280px; border-radius:var(--radius-md); overflow:hidden; margin-bottom:20px; position:relative;">
                <img src="${dest.image}" alt="${dest.name}" style="width:100%; height:100%; object-fit:cover;">
                <div style="position:absolute; top:16px; right:16px; display:flex; gap:10px;">
                    <span class="match-badge high" style="padding:6px 14px; font-size:13px;">${dest.match}% MATCH</span>
                </div>
            </div>
            
            <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:12px;">
                <div>
                    <span class="country-tag">${dest.country}</span>
                    <h2 style="font-family:var(--font-heading); font-size:32px; color:var(--text-white); margin-top:4px;">${dest.name}</h2>
                </div>
                <div style="text-align:right;">
                    <span style="color:var(--accent-gold); font-weight:700; font-size:18px;">★ ${dest.rating}</span>
                    <small style="display:block; color:var(--text-muted); font-size:12px;">OVERALL RATING</small>
                </div>
            </div>

            <p style="color:var(--text-muted); font-size:14px; margin-bottom:20px; line-height:1.6;">${dest.bestFor}</p>

            <!-- METRIC GRID -->
            <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(140px, 1fr)); gap:12px; margin-bottom:24px; background:var(--bg-midnight); padding:16px; border-radius:var(--radius-md); border:1px solid var(--border-subtle);">
                <div>
                    <small style="color:var(--text-muted); font-size:10px; font-weight:700; letter-spacing:1px; display:block;">BEST TIME</small>
                    <strong style="display:block; font-size:13px; margin-top:4px; color:var(--text-white); font-family:var(--font-heading);">${dest.bestTime}</strong>
                </div>
                <div>
                    <small style="color:var(--text-muted); font-size:10px; font-weight:700; letter-spacing:1px; display:block;">ESTIMATED COST</small>
                    <strong style="display:block; font-size:13px; margin-top:4px; color:var(--accent-orange); font-family:var(--font-heading);">${dest.budgetRange}</strong>
                </div>
                <div>
                    <small style="color:var(--text-muted); font-size:10px; font-weight:700; letter-spacing:1px; display:block;">TRIP LENGTH</small>
                    <strong style="display:block; font-size:13px; margin-top:4px; color:var(--accent-cyan); font-family:var(--font-heading);">${dest.recommendedDays} Days</strong>
                </div>
            </div>

            <!-- GOOD FOR CHIPS -->
            <div style="margin-bottom:20px;">
                <h4 style="font-family:var(--font-heading); color:var(--accent-cyan); font-size:12px; letter-spacing:1px; margin-bottom:10px;">GOOD FOR</h4>
                <div style="display:flex; flex-wrap:wrap; gap:8px;">
                    ${dest.goodFor.map(chip => `<span style="background:rgba(77,231,255,0.1); color:var(--accent-cyan); border:1px solid rgba(77,231,255,0.2); padding:4px 12px; border-radius:var(--radius-full); font-size:12px; font-weight:500;">✓ ${chip}</span>`).join('')}
                </div>
            </div>

            <!-- TOP EXPERIENCES & FOOD -->
            <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px; margin-bottom:24px;">
                <div>
                    <h4 style="font-family:var(--font-heading); color:var(--text-white); font-size:13px; margin-bottom:8px;">TOP EXPERIENCES</h4>
                    <ul style="list-style:none; padding:0; display:flex; flex-direction:column; gap:6px;">
                        ${dest.topExperiences.map(exp => `<li style="font-size:12px; color:var(--text-muted);">✦ ${exp}</li>`).join('')}
                    </ul>
                </div>
                <div>
                    <h4 style="font-family:var(--font-heading); color:var(--text-white); font-size:13px; margin-bottom:8px;">FOOD HIGHLIGHTS</h4>
                    <ul style="list-style:none; padding:0; display:flex; flex-direction:column; gap:6px;">
                        ${dest.foodHighlights.map(f => `<li style="font-size:12px; color:var(--text-muted);">🍜 ${f}</li>`).join('')}
                    </ul>
                </div>
            </div>

            <!-- FOOTER BUTTONS -->
            <div style="display:flex; justify-content:space-between; align-items:center; border-top:1px solid var(--border-subtle); padding-top:16px;">
                <button type="button" class="fav-btn ${favorites.includes(dest.id) ? 'active' : ''}" onclick="toggleFavorite('${dest.id}', this)">♥ Save Destination</button>
                <div style="display:flex; gap:10px;">
                    <button type="button" class="outline-btn" style="font-size:12px;" onclick="addDestinationToCompare('${dest.id}')">Compare</button>
                    <button type="button" class="primary-btn" style="font-size:12px;" onclick="closeDestModal(); planDestination('${dest.id}')">Plan This Trip ↗</button>
                </div>
            </div>
        `;

        backdrop.classList.add('open');
    };

    window.closeDestModal = function() {
        const backdrop = document.getElementById('destModalBackdrop');
        if (backdrop) backdrop.classList.remove('open');
    };

    // Destination Comparison Workspace
    window.addDestinationToCompare = function(destId) {
        if (!compareList.includes(destId)) {
            if (compareList.length >= 3) compareList.shift();
            compareList.push(destId);
            saveData('wanderly_compare', compareList);
            showToast(`Added to comparison workspace`);
        }
        closeDestModal();
        navigateTo('destinations');
        renderComparisonWorkspace();
        const section = document.getElementById('comparisonSection');
        if (section) section.scrollIntoView({ behavior: 'smooth' });
    };

    function renderComparisonWorkspace() {
        const container = document.getElementById('comparisonContainer');
        if (!container) return;

        const compareDests = DESTINATIONS.filter(d => compareList.includes(d.id));

        if (compareDests.length === 0) {
            container.innerHTML = `<div style="padding:20px; text-align:center; color:var(--text-muted);">Select up to 3 destinations to compare metrics.</div>`;
            return;
        }

        container.innerHTML = `
            <div class="comparison-table-wrapper">
                <table class="comparison-table">
                    <thead>
                        <tr>
                            <th>METRIC</th>
                            ${compareDests.map(d => `
                                <th>
                                    <div style="display:flex; justify-content:space-between; align-items:center;">
                                        <span>${d.name} (${d.country})</span>
                                        <button type="button" style="color:var(--accent-orange); font-size:14px;" onclick="removeCompareDest('${d.id}')">✕</button>
                                    </div>
                                </th>
                            `).join('')}
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>Estimated Cost</strong></td>
                            ${compareDests.map(d => `<td style="color:var(--accent-orange); font-family:var(--font-heading); font-weight:700;">${d.budgetRange}</td>`).join('')}
                        </tr>
                        <tr>
                            <td><strong>Best Season</strong></td>
                            ${compareDests.map(d => `<td>${d.bestTime}</td>`).join('')}
                        </tr>
                        <tr>
                            <td><strong>Recommended Days</strong></td>
                            ${compareDests.map(d => `<td>${d.recommendedDays} Days</td>`).join('')}
                        </tr>
                        <tr>
                            <td><strong>Food Score</strong></td>
                            ${compareDests.map(d => `
                                <td>
                                    <div style="display:flex; align-items:center; gap:8px;">
                                        <div style="flex:1; height:6px; background:rgba(255,255,255,0.1); border-radius:3px; overflow:hidden;">
                                            <div style="width:${d.scores.food}%; height:100%; background:var(--accent-cyan);"></div>
                                        </div>
                                        <small>${d.scores.food}%</small>
                                    </div>
                                </td>
                            `).join('')}
                        </tr>
                        <tr>
                            <td><strong>Nature & Scenery</strong></td>
                            ${compareDests.map(d => `
                                <td>
                                    <div style="display:flex; align-items:center; gap:8px;">
                                        <div style="flex:1; height:6px; background:rgba(255,255,255,0.1); border-radius:3px; overflow:hidden;">
                                            <div style="width:${d.scores.nature}%; height:100%; background:var(--accent-orange);"></div>
                                        </div>
                                        <small>${d.scores.nature}%</small>
                                    </div>
                                </td>
                            `).join('')}
                        </tr>
                        <tr>
                            <td><strong>Value Score</strong></td>
                            ${compareDests.map(d => `
                                <td>
                                    <div style="display:flex; align-items:center; gap:8px;">
                                        <div style="flex:1; height:6px; background:rgba(255,255,255,0.1); border-radius:3px; overflow:hidden;">
                                            <div style="width:${d.scores.value}%; height:100%; background:var(--accent-gold);"></div>
                                        </div>
                                        <small>${d.scores.value}%</small>
                                    </div>
                                </td>
                            `).join('')}
                        </tr>
                        <tr>
                            <td><strong>Action</strong></td>
                            ${compareDests.map(d => `
                                <td>
                                    <button type="button" class="primary-btn" style="padding:6px 12px; font-size:12px; width:100%;" onclick="planDestination('${d.id}')">Plan ${d.name} ↗</button>
                                </td>
                            `).join('')}
                        </tr>
                    </tbody>
                </table>
            </div>
        `;
    }

    window.removeCompareDest = function(destId) {
        compareList = compareList.filter(id => id !== destId);
        saveData('wanderly_compare', compareList);
        renderComparisonWorkspace();
    };

    /* ---------------------------------------------------------
       12. TRIP PLANNER PAGE (#page-planner) & GENERATED ITINERARY
    --------------------------------------------------------- */
    let activePlanCalculation = null;

    window.planDestination = function(destId, budgetVal = null, daysVal = null, styleVal = null) {
        navigateTo('planner');

        const destSelect = document.getElementById('plannerDest');
        if (destSelect && destId) {
            destSelect.value = destId;
        }

        if (budgetVal) {
            const bInput = document.getElementById('plannerBudget');
            if (bInput) bInput.value = budgetVal;
        }

        if (daysVal) {
            const dInput = document.getElementById('plannerDays');
            if (dInput) dInput.value = daysVal;
        }

        if (styleVal) {
            const sSelect = document.getElementById('plannerStyle');
            if (sSelect) sSelect.value = styleVal;
        }

        calculateTrip(false);
    };

    window.toggleInterestChip = function(btn) {
        btn.classList.toggle('active');
        calculateTrip(false);
    };

    window.calculateTrip = function(showToastNotice = true) {
        const destSelect = document.getElementById('plannerDest');
        if (!destSelect) return;

        const travellers = parseInt(document.getElementById('plannerTravellers')?.value, 10) || 2;
        const days = parseInt(document.getElementById('plannerDays')?.value, 10) || 5;
        const budgetInput = parseInt(document.getElementById('plannerBudget')?.value, 10) || 50000;
        const styleSelect = document.getElementById('plannerStyle')?.value || 'balanced';

        const styleMultipliers = { budget: 0.78, balanced: 1.0, comfort: 1.3, premium: 1.8 };
        const multiplier = styleMultipliers[styleSelect] || 1.0;

        const activeInterests = Array.from(document.querySelectorAll('.interest-chip.active')).map(b => b.getAttribute('data-interest'));

        let destObj = DESTINATIONS.find(d => d.id === destSelect.value) || DESTINATIONS[0];

        const transportTotal = destObj.transportCost * travellers;
        const stayTotal = Math.round(destObj.stayCostPerDay * days * travellers * multiplier);
        
        const foodMult = activeInterests.includes('food') ? 1.2 : 1.0;
        const foodTotal = Math.round(destObj.foodCostPerDay * days * travellers * multiplier * foodMult);

        const actMult = activeInterests.includes('adventure') || activeInterests.includes('culture') ? 1.2 : 1.0;
        const activityTotal = Math.round(destObj.activityCostPerDay * days * travellers * multiplier * actMult);

        const bufferTotal = Math.round((stayTotal + foodTotal + activityTotal) * 0.08);

        const totalEstimatedCost = transportTotal + stayTotal + foodTotal + activityTotal + bufferTotal;
        const perPersonCost = Math.round(totalEstimatedCost / travellers);
        const perDayCost = Math.round(totalEstimatedCost / days);
        const budgetPercentage = Math.round((totalEstimatedCost / budgetInput) * 100);
        const isWithin = totalEstimatedCost <= budgetInput;

        activePlanCalculation = {
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
            bufferCost: bufferTotal,
            budgetPercentage,
            isWithin
        };

        // Update Results UI
        const resultSection = document.getElementById('plannerResultSection');
        if (resultSection) resultSection.classList.remove('hidden');

        document.getElementById('planResultTitle').textContent = `${destObj.name}, ${destObj.country}`;
        document.getElementById('planResultMeta').textContent = `${days} DAYS · ${travellers} TRAVELLERS · ${activePlanCalculation.style} STYLE`;

        const matchBadge = document.getElementById('planMatchBadge');
        if (matchBadge) matchBadge.textContent = `${destObj.match}% MATCH`;

        const healthBadge = document.getElementById('planHealthStatus');
        if (healthBadge) {
            if (isWithin) {
                healthBadge.className = 'health-status within';
                healthBadge.textContent = '✓ HEALTHY BUDGET';
            } else {
                healthBadge.className = 'health-status over';
                healthBadge.textContent = `⚠ OVER BUDGET (+${formatINR(totalEstimatedCost - budgetInput)})`;
            }
        }

        document.getElementById('planTotalCost').textContent = formatINR(totalEstimatedCost);
        document.getElementById('planPerPerson').textContent = `${formatINR(perPersonCost)} / person`;
        document.getElementById('planPerDay').textContent = `${formatINR(perDayCost)} / day`;

        document.getElementById('planTransportCost').textContent = formatINR(transportTotal);
        document.getElementById('planStayCost').textContent = formatINR(stayTotal);
        document.getElementById('planFoodCost').textContent = formatINR(foodTotal);
        document.getElementById('planActivityCost').textContent = formatINR(activityTotal);
        document.getElementById('planBufferCost').textContent = formatINR(bufferTotal);

        const progressFill = document.getElementById('planProgressFill');
        if (progressFill) {
            progressFill.style.width = `${Math.min(100, budgetPercentage)}%`;
            progressFill.style.background = isWithin ? 'linear-gradient(90deg, var(--accent-cyan), var(--accent-orange))' : '#FF4444';
        }

        // Render Budget Optimizer Suggestions
        renderCostOptimizer(totalEstimatedCost, budgetInput, days);

        // Render Interactive Day-by-Day Itinerary Builder
        renderItineraryTimeline(days, destObj);

        if (showToastNotice) {
            showToast(`Calculated itinerary for ${destObj.name}!`);
        }
    };

    function renderCostOptimizer(currentTotal, budgetInput, days) {
        const box = document.getElementById('costOptimizerBox');
        if (!box) return;

        if (currentTotal <= budgetInput) {
            box.style.display = 'none';
            return;
        }

        box.style.display = 'block';
        const excess = currentTotal - budgetInput;

        box.innerHTML = `
            <div class="optimizer-card">
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
                    <h4 style="font-family:var(--font-heading); color:var(--accent-gold); font-size:14px;">💡 MAKE MY TRIP CHEAPER (SAVE ~${formatINR(excess)})</h4>
                </div>
                <p style="color:var(--text-muted); font-size:12px; margin-bottom:12px;">Your trip exceeds target budget by ${formatINR(excess)}. Try these instant smart adjustments:</p>
                
                <div class="opt-row">
                    <span>Switch accommodation style to Budget</span>
                    <strong style="color:var(--accent-gold);">Save ~${formatINR(Math.round(currentTotal * 0.18))}</strong>
                    <button type="button" class="opt-btn" onclick="applyOptimizerAction('style', 'budget')">Apply</button>
                </div>
                ${days > 2 ? `
                    <div class="opt-row">
                        <span>Reduce trip duration by 1 day (${days - 1} days)</span>
                        <strong style="color:var(--accent-gold);">Save ~${formatINR(Math.round(currentTotal / days))}</strong>
                        <button type="button" class="opt-btn" onclick="applyOptimizerAction('days', ${days - 1})">Apply</button>
                    </div>
                ` : ''}
            </div>
        `;
    }

    window.applyOptimizerAction = function(type, val) {
        if (type === 'style') {
            const styleSelect = document.getElementById('plannerStyle');
            if (styleSelect) styleSelect.value = val;
        } else if (type === 'days') {
            const daysInput = document.getElementById('plannerDays');
            if (daysInput) daysInput.value = val;
        }
        calculateTrip(true);
    };

    function renderItineraryTimeline(days, dest) {
        const container = document.getElementById('itineraryTimelineContainer');
        if (!container) return;

        let html = `
            <div style="margin-top:28px;">
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:16px;">
                    <h3 style="font-family:var(--font-heading); font-size:20px; color:var(--text-white);">DAY-BY-DAY ITINERARY TIMELINE</h3>
                    <span style="font-size:12px; color:var(--accent-cyan); font-weight:600;">ROUTE PREVIEW GENERATED</span>
                </div>
        `;

        for (let d = 1; d <= days; d++) {
            html += `
                <div class="itinerary-day-card">
                    <div class="itinerary-day-header">
                        <span class="day-num-badge">DAY 0${d}</span>
                        <h4 style="font-family:var(--font-heading); font-size:16px; color:var(--text-white);">
                            ${d === 1 ? 'Arrival & Neighborhood Orientation' : d === 2 ? 'Cultural Landmarks & Heritage Walk' : d === 3 ? 'Nature Excursion & Scenic Views' : 'Local Markets & Culinary Sunset'}
                        </h4>
                    </div>

                    <div class="timeline-flow">
                        <div class="timeline-item">
                            <span class="timeline-time">09:00 AM</span>
                            <div class="timeline-content">
                                <strong>Arrival & Hotel Check-in</strong>
                                <small>Hotel / Resort check-in and breakfast</small>
                            </div>
                        </div>

                        <div class="timeline-item">
                            <span class="timeline-time">12:30 PM</span>
                            <div class="timeline-content">
                                <strong>Authentic Local Lunch</strong>
                                <small>${dest.foodHighlights[d % dest.foodHighlights.length] || 'Regional Specialities'}</small>
                            </div>
                        </div>

                        <div class="timeline-item">
                            <span class="timeline-time">03:30 PM</span>
                            <div class="timeline-content">
                                <strong>${dest.topExperiences[(d - 1) % dest.topExperiences.length] || 'Sightseeing Tour'}</strong>
                                <small>Guided exploration & photography</small>
                            </div>
                        </div>

                        <div class="timeline-item">
                            <span class="timeline-time">07:30 PM</span>
                            <div class="timeline-content">
                                <strong>Sunset Lounge & Dinner</strong>
                                <small>Relaxation and evening atmosphere</small>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        html += `</div>`;
        container.innerHTML = html;
    }

    window.saveTripFromPlanner = function() {
        if (!activePlanCalculation) {
            showToast('Please calculate a trip first!');
            return;
        }

        const newTrip = {
            id: 'trip_' + Date.now(),
            ...activePlanCalculation,
            status: 'PLANNING',
            travelDate: '2026-11-20',
            dateSaved: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
            readiness: 70
        };

        savedTrips.unshift(newTrip);
        saveData('wanderly_saved_trips', savedTrips);
        showToast(`Trip saved to My Trips Command Center! ♡`);
        navigateTo('trips');
    };

    /* ---------------------------------------------------------
       13. BUDGET PAGE (#page-budget) FINANCIAL DASHBOARD
    --------------------------------------------------------- */
    function renderBudgetDashboard() {
        const totalBudgetVal = parseInt(document.getElementById('budgetsTotalInput')?.value, 10) || 50000;
        const estCostVal = activePlanCalculation ? activePlanCalculation.totalCost : 42800;
        const remainingVal = totalBudgetVal - estCostVal;
        const isHealthy = remainingVal >= 0;

        document.getElementById('budgetTotalDisplay').textContent = formatINR(totalBudgetVal);
        document.getElementById('budgetEstDisplay').textContent = formatINR(estCostVal);
        document.getElementById('budgetRemainingDisplay').textContent = formatINR(remainingVal);

        const healthTag = document.getElementById('budgetHealthBadge');
        if (healthTag) {
            healthTag.className = isHealthy ? 'health-tag healthy' : 'health-tag pressure';
            healthTag.textContent = isHealthy ? '✓ HEALTHY' : '⚠ OVER BUDGET';
        }

        // SVG / CSS Visual Allocation Breakdown
        const allocStay = Math.round(totalBudgetVal * 0.35);
        const allocTransport = Math.round(totalBudgetVal * 0.25);
        const allocFood = Math.round(totalBudgetVal * 0.20);
        const allocAct = Math.round(totalBudgetVal * 0.12);
        const allocBuffer = Math.round(totalBudgetVal * 0.08);

        document.getElementById('allocStayVal').textContent = formatINR(allocStay);
        document.getElementById('allocTransportVal').textContent = formatINR(allocTransport);
        document.getElementById('allocFoodVal').textContent = formatINR(allocFood);
        document.getElementById('allocActVal').textContent = formatINR(allocAct);
        document.getElementById('allocBufferVal').textContent = formatINR(allocBuffer);

        renderExpenseTrackerList();
    }

    window.updateBudgetRecalculation = function() {
        renderBudgetDashboard();
    };

    window.addExpenseItem = function() {
        const title = document.getElementById('expTitleInput')?.value.trim();
        const cat = document.getElementById('expCatSelect')?.value || 'Food';
        const amount = parseInt(document.getElementById('expAmountInput')?.value, 10) || 0;
        const note = document.getElementById('expNoteInput')?.value.trim() || '';

        if (!title || amount <= 0) {
            showToast('Please enter valid expense title and amount!');
            return;
        }

        const newExp = {
            id: Date.now(),
            title,
            category: cat,
            amount,
            date: new Date().toISOString().split('T')[0],
            note
        };

        expenses.unshift(newExp);
        saveData('wanderly_expenses', expenses);

        // Clear inputs
        document.getElementById('expTitleInput').value = '';
        document.getElementById('expAmountInput').value = '';
        if (document.getElementById('expNoteInput')) document.getElementById('expNoteInput').value = '';

        showToast(`Added expense: ${title} (${formatINR(amount)})`);
        renderExpenseTrackerList();
    };

    window.removeExpenseItem = function(id) {
        expenses = expenses.filter(e => e.id !== id);
        saveData('wanderly_expenses', expenses);
        renderExpenseTrackerList();
        showToast('Expense removed');
    };

    function renderExpenseTrackerList() {
        const container = document.getElementById('expenseListContainer');
        const totalSpentEl = document.getElementById('expenseTotalSpentDisplay');
        if (!container) return;

        const totalSpent = expenses.reduce((acc, e) => acc + e.amount, 0);
        if (totalSpentEl) totalSpentEl.textContent = formatINR(totalSpent);

        if (expenses.length === 0) {
            container.innerHTML = `<div style="padding:20px; color:var(--text-muted); text-align:center;">No expenses added yet.</div>`;
            return;
        }

        container.innerHTML = expenses.map(exp => `
            <div class="expense-row">
                <div>
                    <strong style="font-family:var(--font-heading); color:var(--text-white); font-size:14px; display:block;">${exp.title}</strong>
                    <small style="color:var(--text-muted); font-size:11px;">${exp.category} · ${exp.date} ${exp.note ? '· ' + exp.note : ''}</small>
                </div>
                <div style="display:flex; align-items:center; gap:12px;">
                    <strong style="color:var(--accent-orange); font-family:var(--font-heading);">${formatINR(exp.amount)}</strong>
                    <button type="button" style="color:var(--text-muted); font-size:14px;" onclick="removeExpenseItem(${exp.id})">✕</button>
                </div>
            </div>
        `).join('');
    }

    /* ---------------------------------------------------------
       14. MY TRIPS PAGE (#page-trips) PERSONAL COMMAND CENTER
    --------------------------------------------------------- */
    function renderMyTripsPage() {
        // Nav Badge
        const navBadge = document.getElementById('navTripBadge');
        if (navBadge) navBadge.textContent = savedTrips.length;

        // Stats
        document.getElementById('statTotalTrips').textContent = savedTrips.length;
        document.getElementById('statUpcomingTrips').textContent = savedTrips.filter(t => t.status === 'READY' || t.status === 'PLANNING').length;
        document.getElementById('statCompletedTrips').textContent = savedTrips.filter(t => t.status === 'COMPLETED').length;

        const totalPlannedCost = savedTrips.reduce((acc, t) => acc + (t.totalCost || 0), 0);
        document.getElementById('statTotalSpend').textContent = formatINR(totalPlannedCost);

        // Saved Trip Postcards Grid
        const grid = document.getElementById('savedTripsGrid');
        if (!grid) return;

        if (savedTrips.length === 0) {
            grid.innerHTML = `
                <div class="no-trips-card">
                    <div style="font-size:36px; margin-bottom:12px;">✈</div>
                    <h3 style="font-family:var(--font-heading); color:var(--text-white); margin-bottom:8px;">Your next adventure belongs here.</h3>
                    <p style="color:var(--text-muted); font-size:14px; margin-bottom:20px;">Use our smart planner to build realistic itineraries and save them to your command center.</p>
                    <button type="button" class="primary-btn" onclick="navigateTo('planner')">Plan My First Trip ↗</button>
                </div>
            `;
        } else {
            grid.innerHTML = savedTrips.map(trip => `
                <article class="trip-postcard">
                    <div class="postcard-img">
                        <span class="trip-status-tag ${trip.status.toLowerCase()}">${trip.status}</span>
                        <img src="${trip.image}" alt="${trip.destinationName}">
                    </div>
                    <div class="postcard-body">
                        <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:6px;">
                            <h3 style="font-family:var(--font-heading); font-size:18px; color:var(--text-white);">${trip.destinationName}</h3>
                            <span style="font-size:11px; background:rgba(77,231,255,0.1); color:var(--accent-cyan); padding:2px 8px; border-radius:var(--radius-sm); font-weight:700;">${trip.style}</span>
                        </div>
                        <p style="color:var(--text-muted); font-size:12px; margin-bottom:12px;">${trip.days} Days · ${trip.travellers} Travellers · Saved ${trip.dateSaved}</p>
                        
                        <div style="display:flex; justify-content:space-between; align-items:center; border-top:1px solid var(--border-subtle); padding-top:12px; margin-top:12px;">
                            <div>
                                <small style="font-size:10px; color:var(--text-muted); display:block; font-weight:700;">EST. TOTAL</small>
                                <strong style="color:var(--accent-cyan); font-family:var(--font-heading); font-size:16px;">${formatINR(trip.totalCost)}</strong>
                            </div>
                            <div style="display:flex; gap:8px;">
                                <button type="button" class="outline-btn" style="padding:6px 12px; font-size:12px;" onclick="openTripDetailDashboard('${trip.id}')">OPEN</button>
                                <button type="button" class="remove-btn" onclick="deleteSavedTrip('${trip.id}')">DELETE</button>
                            </div>
                        </div>
                    </div>
                </article>
            `).join('');
        }

        renderChecklistAndPackingLists();
        renderFavoritesAndRecent();
    }

    window.openTripDetailDashboard = function(tripId) {
        const trip = savedTrips.find(t => t.id === tripId);
        if (!trip) return;

        const backdrop = document.getElementById('universalModalBackdrop');
        const body = document.getElementById('universalModalBody');
        if (!backdrop || !body) return;

        body.innerHTML = `
            <span class="country-tag">TRIP COMMAND CENTER DASHBOARD</span>
            <h2 style="font-family:var(--font-heading); font-size:30px; color:var(--text-white); margin-top:4px; margin-bottom:6px;">${trip.destinationName}</h2>
            <p style="color:var(--text-muted); font-size:13px; margin-bottom:20px;">${trip.days} Days · ${trip.travellers} Travellers · ${trip.style} Style</p>

            <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:12px; margin-bottom:20px; background:var(--bg-midnight); padding:16px; border-radius:var(--radius-md); border:1px solid var(--border-subtle); text-align:center;">
                <div><small style="color:var(--text-muted); font-size:10px; display:block;">EST. COST</small><strong style="color:var(--accent-cyan); font-family:var(--font-heading); font-size:16px;">${formatINR(trip.totalCost)}</strong></div>
                <div><small style="color:var(--text-muted); font-size:10px; display:block;">PER PERSON</small><strong style="color:var(--accent-orange); font-family:var(--font-heading); font-size:16px;">${formatINR(trip.perPerson)}</strong></div>
                <div><small style="color:var(--text-muted); font-size:10px; display:block;">PER DAY</small><strong style="color:var(--text-white); font-family:var(--font-heading); font-size:16px;">${formatINR(trip.perDay)}</strong></div>
            </div>

            <!-- LIVE COUNTDOWN TIMER -->
            <div style="background:var(--bg-deep-ocean); border:1px solid var(--border-glow); padding:16px; border-radius:var(--radius-md); text-align:center; margin-bottom:24px;">
                <small style="color:var(--accent-gold); font-weight:700; letter-spacing:1px; font-size:11px; display:block; margin-bottom:6px;">COUNTDOWN UNTIL DEPARTURE</small>
                <div style="font-family:var(--font-heading); font-size:24px; color:var(--text-white); font-weight:700;">
                    12 <span style="font-size:13px; color:var(--text-muted);">DAYS</span> 
                    08 <span style="font-size:13px; color:var(--text-muted);">HOURS</span> 
                    34 <span style="font-size:13px; color:var(--text-muted);">MINS</span>
                </div>
            </div>

            <div style="display:flex; justify-content:flex-end; gap:10px;">
                <button type="button" class="outline-btn" onclick="closeUniversalModal()">Close</button>
                <button type="button" class="primary-btn" onclick="closeUniversalModal(); planDestination('${trip.destId}')">Edit Itinerary ↗</button>
            </div>
        `;

        backdrop.classList.add('open');
    };

    window.deleteSavedTrip = function(tripId) {
        savedTrips = savedTrips.filter(t => t.id !== tripId);
        saveData('wanderly_saved_trips', savedTrips);
        renderMyTripsPage();
        showToast('Trip removed');
    };

    // Checklist & Packing List Rendering
    function renderChecklistAndPackingLists() {
        const container = document.getElementById('checklistContainer');
        if (!container) return;

        const doneCheck = checklist.filter(c => c.done).length;
        const totalCheck = checklist.length || 1;
        const readinessScore = Math.round((doneCheck / totalCheck) * 100);

        container.innerHTML = `
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:16px;">
                <h3 style="font-family:var(--font-heading); font-size:18px; color:var(--text-white);">PRE-DEPARTURE CHECKLIST</h3>
                <span class="match-badge high">${readinessScore}% READINESS</span>
            </div>

            ${checklist.map(item => `
                <div class="check-item ${item.done ? 'done' : ''}">
                    <input type="checkbox" ${item.done ? 'checked' : ''} onchange="toggleChecklistItem(${item.id})">
                    <span>[${item.category}] ${item.title}</span>
                </div>
            `).join('')}

            <div style="display:flex; justify-content:space-between; align-items:center; margin:24px 0 16px;">
                <h3 style="font-family:var(--font-heading); font-size:18px; color:var(--text-white);">SMART PACKING LIST</h3>
                <button type="button" class="text-btn" onclick="addCustomPackingItem()">+ Add Item</button>
            </div>

            ${packingList.map(item => `
                <div class="check-item ${item.done ? 'done' : ''}">
                    <input type="checkbox" ${item.done ? 'checked' : ''} onchange="togglePackingListItem(${item.id})">
                    <span>${item.title}</span>
                </div>
            `).join('')}
        `;
    }

    window.toggleChecklistItem = function(id) {
        checklist = checklist.map(c => c.id === id ? { ...c, done: !c.done } : c);
        saveData('wanderly_checklist', checklist);
        renderMyTripsPage();
    };

    window.togglePackingListItem = function(id) {
        packingList = packingList.map(p => p.id === id ? { ...p, done: !p.done } : p);
        saveData('wanderly_packing', packingList);
        renderMyTripsPage();
    };

    window.addCustomPackingItem = function() {
        const title = prompt("Enter new packing item title:");
        if (title && title.trim()) {
            packingList.push({ id: Date.now(), title: title.trim(), done: false });
            saveData('wanderly_packing', packingList);
            renderMyTripsPage();
            showToast('Packing item added!');
        }
    };

    // Favorites & Recently Viewed render
    function renderFavoritesAndRecent() {
        const favContainer = document.getElementById('favoritesContainer');
        if (favContainer) {
            const favDests = DESTINATIONS.filter(d => favorites.includes(d.id));
            if (favDests.length === 0) {
                favContainer.innerHTML = `<div style="padding:16px; color:var(--text-muted); font-size:13px;">No saved favorites yet. Click ♥ on any destination card to save it here.</div>`;
            } else {
                favContainer.innerHTML = favDests.map(d => `
                    <div style="background:var(--bg-deep-ocean); border:1px solid var(--border-subtle); padding:12px; border-radius:var(--radius-md); display:flex; justify-content:space-between; align-items:center;">
                        <div style="display:flex; gap:12px; align-items:center;">
                            <img src="${d.image}" style="width:48px; height:48px; border-radius:8px; object-fit:cover;" alt="${d.name}">
                            <div>
                                <strong style="font-family:var(--font-heading); color:var(--text-white); font-size:14px; display:block;">${d.name}, ${d.country}</strong>
                                <small style="color:var(--text-muted); font-size:11px;">${d.budgetRange}</small>
                            </div>
                        </div>
                        <button type="button" class="primary-btn" style="padding:6px 12px; font-size:12px;" onclick="planDestination('${d.id}')">Plan ↗</button>
                    </div>
                `).join('');
            }
        }
    }

    /* ---------------------------------------------------------
       15. GUIDES PAGE (#page-guides) EDITORIAL KNOWLEDGE CENTER
    --------------------------------------------------------- */
    function renderGuidesPage() {
        const grid = document.getElementById('guidesGrid');
        if (!grid) return;

        filterAndRenderGuides('All');
    }

    window.filterAndRenderGuides = function(cat, btn = null) {
        if (btn) {
            document.querySelectorAll('#page-guides .filter-pill').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        }

        const grid = document.getElementById('guidesGrid');
        if (!grid) return;

        let list = GUIDES_DATA;
        if (cat !== 'All') {
            list = GUIDES_DATA.filter(g => g.category.toLowerCase() === cat.toLowerCase());
        }

        grid.innerHTML = list.map(g => `
            <article class="guide-card" onclick="openGuideModal('${g.key}')">
                <div class="guide-img-wrapper">
                    <span class="guide-badge">${g.badge}</span>
                    <img src="${g.image}" alt="${g.title}">
                </div>
                <div class="guide-body">
                    <small style="color:var(--accent-cyan); font-size:12px; font-weight:700;">${g.category.toUpperCase()} · ${g.readTime}</small>
                    <h3>${g.title}</h3>
                    <p>${g.desc}</p>
                    <button type="button" class="text-btn" style="margin-top:12px;">Read full journal entry →</button>
                </div>
            </article>
        `).join('');
    };

    window.openGuideModal = function(key) {
        const guide = GUIDES_DATA.find(g => g.key === key);
        if (!guide) return;

        const backdrop = document.getElementById('universalModalBackdrop');
        const body = document.getElementById('universalModalBody');
        if (!backdrop || !body) return;

        body.innerHTML = `
            <span class="guide-badge" style="display:inline-block; margin-bottom:12px;">${guide.badge}</span>
            <small style="display:block; color:var(--accent-cyan); font-weight:700; font-size:12px; margin-bottom:8px;">${guide.category.toUpperCase()} · ${guide.readTime}</small>
            <h2 style="font-family:var(--font-heading); font-size:26px; line-height:1.3; margin-bottom:16px; color:var(--text-white);">${guide.title}</h2>
            
            <div style="height:220px; border-radius:var(--radius-md); overflow:hidden; margin-bottom:20px;">
                <img src="${guide.image}" alt="${guide.title}" style="width:100%; height:100%; object-fit:cover;">
            </div>

            <div style="font-size:14px; color:var(--text-muted); line-height:1.8;">
                ${guide.content}
            </div>

            <div style="display:flex; justify-content:flex-end; margin-top:24px;">
                <button type="button" class="outline-btn" onclick="closeUniversalModal()">Close Article</button>
            </div>
        `;

        backdrop.classList.add('open');
    };

    window.closeUniversalModal = function() {
        const backdrop = document.getElementById('universalModalBackdrop');
        if (backdrop) backdrop.classList.remove('open');
    };

    /* ---------------------------------------------------------
       16. KEYBOARD EVENT LISTENERS (ESC TO CLOSE MODALS & SEARCH)
    --------------------------------------------------------- */
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeDestModal();
            closeUniversalModal();
            const overlay = document.getElementById('globalSearchOverlay');
            if (overlay) overlay.classList.remove('open');
        }
        if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
            e.preventDefault();
            toggleSearchOverlay();
        }
    });

    /* ---------------------------------------------------------
       17. INITIAL BOOTSTRAP ENGINE
    --------------------------------------------------------- */
    renderHomePage();
    renderDiscoverPage();
    renderDestinationsPage();
    renderBudgetDashboard();
    renderMyTripsPage();
    renderGuidesPage();

    // Check initial route hash
    const initialHash = window.location.hash.replace('#', '').trim();
    if (initialHash && VALID_PAGES.includes(initialHash)) {
        navigateTo(initialHash, false);
    } else {
        navigateTo('home', false);
    }

});
