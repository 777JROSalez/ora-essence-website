export interface ProductSize {
    label: string;
    value: string;
    price: number;
}

export interface KeyBenefit {
    number: number;
    title: string;
    description: string;
}

export interface Product {
    id: string;
    slug: string;
    name: string;
    price: number;
    description: string;
    image: string;
    images?: string[]; // Multiple images for gallery
    category: string;
    howToUse: { step: string; instruction: string }[];
    ingredients?: { name: string; origin: string }[];
    howToVideo?: string;
    howToImage?: string;
    ingredientsImage?: string;
    value?: number; // The original value of the items in the bundle
    bestSeller?: boolean;
    benefitLabel?: string; // Marketing label like "The Glow-Getter"
    // New Tata Harper-style fields
    sizes?: ProductSize[]; // Different size options
    rating?: number; // Average rating (out of 5)
    reviewCount?: number; // Number of reviews
    subscribePrice?: number; // Subscribe & Save discounted price
    suitedFor?: string[]; // Skin types and concerns
    keyBenefits?: KeyBenefit[]; // Numbered benefits
    benefitImage?: string; // Hero image for benefits section
    relatedProducts?: string[]; // Product IDs for cross-selling
}


export const products: Product[] = [
    {
        id: '1',
        slug: 'regenerating-cleanser',
        name: 'Regenerating Cleanser',
        price: 88,
        description: 'Our daily exfoliating treatment that polishes and buffs to reveal healthy-looking, radiant skin. 100% natural and non-toxic.',
        benefitLabel: 'The Gentle Reset',
        image: '/images/regenerating_cleanser.png',
        images: [
            '/images/regenerating_cleanser.png',
            '/images/regenerating_cleanser.png',
            '/images/regenerating_cleanser.png',
            '/images/regenerating_cleanser.png'
        ],
        category: 'Cleanser',
        ingredientsImage: '/images/ora_regenerating_cleanser_ingredients.png',
        howToVideo: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
        howToUse: [
            { step: 'Apply', instruction: 'Apply 2-3 pumps onto dry skin. Massage thoroughly to dissolve impurities.' },
            { step: 'Activate', instruction: 'Add warm water to create a milky emulsion.' },
            { step: 'Rinse', instruction: 'Rinse thoroughly with warm water. Pat dry.' }
        ],
        ingredients: [
            { name: 'Pomegranate Enzymes', origin: 'Turkey' },
            { name: 'Pink Clay', origin: 'France' },
            { name: 'White Willow Bark', origin: 'Vermont, USA' },
        ],
        sizes: [
            { label: 'Full Size', value: '125ML', price: 88 },
            { label: 'Travel Size', value: '50ML', price: 38 }
        ],
        rating: 4.9,
        reviewCount: 1653,
        subscribePrice: 70.40, // 20% off
        suitedFor: [
            'All skin types',
            'Dull, tired skin',
            'Uneven texture',
            'Fine lines and wrinkles',
            'Environmentally stressed skin'
        ],
        keyBenefits: [
            {
                number: 1,
                title: 'Smoothing & Brightening',
                description: 'This gentle daily polish sweeps away dullness to reveal brighter, more radiant skin and optimize cell turnover. With each use, skin looks refreshed, smooth, and glowing.'
            },
            {
                number: 2,
                title: 'Hydrating & Replenishing',
                description: 'Nourishing botanicals protect against moisture loss while pink clay gently purifies without stripping essential oils.'
            },
            {
                number: 3,
                title: 'Pore & Texture Refining',
                description: 'Natural exfoliants work to minimize the appearance of pores and refine skin texture for a fresh, healthy-looking complexion.'
            }
        ],
        benefitImage: '/images/regenerating_cleanser.png',
        relatedProducts: ['16', '17', '18'], // Toner, Serum, Moisturizer
        bestSeller: true
    },
    // ... (Products 2-7 skipped for brevity, assuming they get mock video too if needed, but focusing on new products first)
    {
        id: '7',
        slug: 'holiday-lip-blush-kit',
        name: 'Holiday Lip & Blush Kit',
        price: 115,
        value: 148,
        description: 'A limited edition set featuring our best-selling volumetric lip tint and cream blush for a festive, radiant look. Includes a $129 value.',
        image: '/images/holiday_lip_blush_kit.png',
        images: [
            '/images/holiday_lip_blush_kit.png',
            '/images/holiday_lip_blush_kit.png',
            '/images/holiday_lip_blush_kit.png'
        ],
        category: 'Sets',
        howToVideo: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
        howToUse: [
            { step: 'Blush', instruction: 'Dab onto cheeks and blend upwards for a lifted look.' },
            { step: 'Lips', instruction: 'Apply directly to lips for a sheer tint or build for more color.' }
        ],
        rating: 4.8,
        reviewCount: 892,
        suitedFor: ['All skin tones', 'Natural makeup looks', 'Long-lasting color'],
        keyBenefits: [
            {
                number: 1,
                title: 'Multi-Use Formula',
                description: 'Versatile cream-to-powder formula works beautifully on both lips and cheeks for a cohesive, natural look.'
            },
            {
                number: 2,
                title: 'Buildable Color',
                description: 'Sheer tint builds to vibrant color, allowing you to customize your look from subtle to statement.'
            }
        ],
        benefitImage: '/images/holiday_lip_blush_kit.png',
        relatedProducts: ['13', '14'],
        bestSeller: true
    },
    {
        id: '8',
        slug: 'aurum-sculpting-wand',
        name: 'Aurum Sculpting Wand',
        price: 185,
        description: 'A 24K gold-plated facial sculpting tool that uses sonic vibration to lift, tone, and contour the face for a defined appearance.',
        image: '/images/aurum_sculpting_wand.png',
        images: [
            '/images/aurum_sculpting_wand.png',
            '/images/aurum_sculpting_wand.png',
            '/images/aurum_sculpting_wand.png'
        ],
        category: 'Tools',
        howToVideo: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
        howToUse: [
            { step: 'Prep', instruction: 'Apply a facial oil to provide slip.' },
            { step: 'Sculpt', instruction: 'Glide the wand upwards along the jawline and cheekbones.' },
            { step: 'Define', instruction: 'Use the curved edge to contour the brow bone and neck.' }
        ],
        rating: 4.7,
        reviewCount: 456,
        suitedFor: ['All skin types', 'Loss of firmness', 'Facial contouring'],
        keyBenefits: [
            {
                number: 1,
                title: 'Lift & Sculpt',
                description: 'Sonic vibration technology enhances facial massage to promote circulation and visibly lift facial contours.'
            },
            {
                number: 2,
                title: 'Luxury Design',
                description: '24K gold-plated finish provides a premium experience while conducting microcurrents for optimal results.'
            }
        ],
        benefitImage: '/images/aurum_sculpting_wand.png',
        relatedProducts: ['10', '17'],
        // Ingredients removed for Sculpting Wand as requested
    },
    {
        id: '9',
        slug: 'lumina-led-mask',
        name: 'Lumina LED Mask',
        price: 295,
        description: 'A medical-grade LED light therapy mask with 3 modes (Red, Blue, Amber) to target wrinkles, acne, and dullness.',
        image: '/images/lumina_led_mask_white.png',
        images: [
            '/images/lumina_led_mask_white.png',
            '/images/lumina_led_mask_white.png',
            '/images/lumina_led_mask_white.png'
        ],
        category: 'Tools',
        howToVideo: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
        howToUse: [
            { step: 'Cleanse', instruction: 'Start with clean, dry skin.' },
            { step: 'Treat', instruction: 'Wear mask for 10 minutes. Select mode based on skin concern.' },
            { step: 'Finish', instruction: 'Follow with your favorite serum and moisturizer.' }
        ],
        rating: 4.9,
        reviewCount: 1234,
        suitedFor: ['All skin types', 'Anti-aging', 'Acne-prone skin', 'Dull complexion'],
        keyBenefits: [
            {
                number: 1,
                title: 'Clinical Results',
                description: 'Red light stimulates collagen production to reduce fine lines. Blue light targets acne-causing bacteria. Amber light soothes and evens tone.'
            },
            {
                number: 2,
                title: 'Professional Grade',
                description: 'Medical-grade LED technology delivers spa-quality treatments in the comfort of your home.'
            }
        ],
        benefitImage: '/images/lumina_led_mask_white.png',
        relatedProducts: ['17', '18'],
        // Ingredients removed for LED Mask as requested
    },
    {
        id: '10',
        slug: 'midnight-recovery-oil',
        name: 'Midnight Recovery Oil',
        price: 110,
        description: 'A potent overnight treatment rich in omega fatty acids and antioxidants to repair and regenerate skin while you sleep.',
        benefitLabel: 'The Dream Worker',
        image: '/images/midnight_recovery_oil.png',
        images: [
            '/images/midnight_recovery_oil.png',
            '/images/midnight_recovery_oil.png',
            '/images/midnight_recovery_oil.png'
        ],
        category: 'Face Oil',
        ingredientsImage: '/images/ora_midnight_recovery_oil_ingredients_1767914941957.png',
        howToVideo: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
        howToUse: [
            { step: 'Warm', instruction: 'Warm 3-5 drops in palms.' },
            { step: 'Inhale', instruction: 'Inhale the calming lavender and chamomile scent.' },
            { step: 'Press', instruction: 'Gently press into face and neck before bed.' }
        ],
        ingredients: [
            { name: 'Evening Primrose', origin: 'USA' },
            { name: 'Squalane', origin: 'Spain' },
            { name: 'Lavender Oil', origin: 'France' }
        ],
        sizes: [
            { label: 'Full Size', value: '30ML', price: 110 },
            { label: 'Travel Size', value: '10ML', price: 42 }
        ],
        rating: 4.8,
        reviewCount: 2341,
        subscribePrice: 88,
        suitedFor: ['All skin types', 'Dry, dehydrated skin', 'Stressed skin', 'Night repair'],
        keyBenefits: [
            {
                number: 1,
                title: 'Overnight Repair',
                description: 'Potent omega-rich oils work while you sleep to restore skin\'s natural barrier and promote cellular renewal.'
            },
            {
                number: 2,
                title: 'Aromatic Ritual',
                description: 'Calming lavender and chamomile scent transforms your evening routine into a spa-like experience.'
            }
        ],
        benefitImage: '/images/midnight_recovery_oil.png',
        relatedProducts: ['17', '18']
    },
    {
        id: '11',
        slug: 'diamond-dust-exfoliator',
        name: 'Diamond Dust Exfoliator',
        price: 92,
        description: 'A physical exfoliant infused with micronized diamond powder to gently polish away dead skin cells for unparalleled smoothness.',
        benefitLabel: 'The Polish Master',
        image: '/images/diamond_dust_exfoliator_white.png',
        images: [
            '/images/diamond_dust_exfoliator_white.png',
            '/images/diamond_dust_exfoliator_application.jpg',
            '/images/diamond_dust_exfoliator_texture.jpg'
        ],
        category: 'Cleanser',
        ingredientsImage: '/images/ora_diamond_dust_exfoliator_ingredients_1767860722433.png',
        howToVideo: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
        howToUse: [
            { step: 'Massage', instruction: 'Massage a small amount onto damp skin using circular motions.' },
            { step: 'Refine', instruction: 'Focus on congested areas like the nose and chin.' },
            { step: 'Rinse', instruction: 'Rinse thoroughly with cool water.' }
        ],
        ingredients: [
            { name: 'Diamond Powder', origin: 'Canada' },
            { name: 'Pearl Extract', origin: 'Japan' },
            { name: 'Jojoba Beads', origin: 'Israel' }
        ],
        sizes: [
            { label: 'Full Size', value: '75ML', price: 92 }
        ],
        rating: 4.6,
        reviewCount: 678,
        subscribePrice: 73.60,
        suitedFor: ['All skin types except sensitive', 'Rough texture', 'Enlarged pores'],
        keyBenefits: [
            {
                number: 1,
                title: 'Diamond Precision',
                description: 'Micronized diamond powder provides the ultimate physical exfoliation for baby-soft, radiant skin.'
            },
            {
                number: 2,
                title: 'Pore Perfecting',
                description: 'Jojoba beads and pearl extract work together to refine pores and smooth texture without irritation.'
            }
        ],
        benefitImage: '/images/diamond_dust_exfoliator_white.png',
        relatedProducts: ['1', '15']
    },
    {
        id: '12',
        slug: 'gold-infused-sheet-masks',
        name: 'Gold-Infused Sheet Masks',
        price: 45,
        description: 'A set of 5 hydrogel masks infused with colloidal gold and collagen to instantly plump, hydrate, and brighten the complexion.',
        image: '/images/gold_sheet_masks.png',
        images: [
            '/images/gold_sheet_masks.png',
            '/images/gold_sheet_masks.png',
            '/images/gold_sheet_masks.png'
        ],
        category: 'Mask',
        ingredientsImage: '/images/ora_gold_sheet_mask_ingredients_1767860750834.png',
        howToVideo: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
        howToUse: [
            { step: 'Unfold', instruction: 'Carefully unfold mask and apply to clean face.' },
            { step: 'Relax', instruction: 'Leave on for 20 minutes.' },
            { step: 'Absorb', instruction: 'Remove mask and pat remaining essence into skin.' }
        ],
        ingredients: [
            { name: 'Colloidal Gold', origin: 'USA' },
            { name: 'Marine Collagen', origin: 'France' },
            { name: 'Niacinamide', origin: 'Switzerland' }
        ],
        rating: 4.7,
        reviewCount: 934,
        subscribePrice: 36,
        suitedFor: ['All skin types', 'Dull complexion', 'Special occasions'],
        keyBenefits: [
            {
                number: 1,
                title: 'Instant Radiance',
                description: 'Colloidal gold reflects light to instantly brighten and illuminate tired, dull skin.'
            },
            {
                number: 2,
                title: 'Deep Hydration',
                description: 'Marine collagen and niacinamide deeply hydrate and plump skin for a youthful, dewy glow.'
            }
        ],
        benefitImage: '/images/gold_sheet_masks.png',
        relatedProducts: ['17', '18']
    },
    {
        id: '13',
        slug: 'renewal-face-oil',
        name: 'Renewal Face Oil',
        price: 95,
        description: 'A lightweight, fast-absorbing oil that delivers instant hydration and a dewy glow. Packed with antioxidants to protect against environmental stressors.',
        benefitLabel: 'The Glow-Getter',
        image: '/images/renewal_face_oil.png',
        images: [
            '/images/renewal_face_oil.png',
            '/images/renewal_face_oil.png',
            '/images/renewal_face_oil.png'
        ],
        category: 'Face Oil',
        ingredientsImage: '/images/ora_renewal_face_oil_ingredients_1767860777238.png',
        howToVideo: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
        howToUse: [
            { step: 'Dispense', instruction: 'Warm 2-3 drops in hands.' },
            { step: 'Press', instruction: 'Press gently into skin after cleansing and toning.' },
            { step: 'Seal', instruction: 'Use as the last step in your routine to seal in moisture.' }
        ],
        ingredients: [
            { name: 'Vitamin C', origin: 'Japan' }
        ],
        sizes: [
            { label: 'Full Size', value: '30ML', price: 95 },
            { label: 'Travel Size', value: '15ML', price: 52 }
        ],
        rating: 4.9,
        reviewCount: 1876,
        subscribePrice: 76,
        suitedFor: ['All skin types', 'Dry skin', 'Environmental protection'],
        keyBenefits: [
            {
                number: 1,
                title: 'Lightweight Hydration',
                description: 'Fast-absorbing formula delivers intense moisture without heaviness or greasiness.'
            },
            {
                number: 2,
                title: 'Antioxidant Protection',
                description: 'Vitamin C and botanical antioxidants shield skin from environmental stressors and free radical damage.'
            }
        ],
        benefitImage: '/images/renewal_face_oil.png',
        relatedProducts: ['10', '17', '18'],
        bestSeller: true
    },
    {
        id: '14',
        slug: 'radiant-glow-body-butter',
        name: 'Radiant Glow Body Butter',
        price: 65,
        description: 'A rich, whipped body butter that melts into skin, leaving it deeply nourished and subtly illuminated with a golden sheen.',
        image: '/images/radiant_glow_body_butter.png',
        images: [
            '/images/radiant_glow_body_butter.png',
            '/images/radiant_glow_body_butter.png',
            '/images/radiant_glow_body_butter.png'
        ],
        category: 'Body',
        ingredientsImage: '/images/ora_body_butter_ingredients_1767860805512.png',
        howToVideo: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
        howToUse: [
            { step: 'Scoop', instruction: 'Take a generous amount.' },
            { step: 'Massage', instruction: 'Massage into damp skin after bathing.' },
            { step: 'Glow', instruction: 'Allow to absorb for a radiant, non-greasy finish.' }
        ],
        ingredients: [
            { name: 'Shea Butter', origin: 'Ghana' },
            { name: 'Cocoa Butter', origin: 'Ecuador' },
            { name: 'Mica Gold Dust', origin: 'India' }
        ],
        sizes: [
            { label: 'Full Size', value: '200ML', price: 65 }
        ],
        rating: 4.8,
        reviewCount: 1123,
        subscribePrice: 52,
        suitedFor: ['All skin types', 'Dry body skin', 'Special events'],
        keyBenefits: [
            {
                number: 1,
                title: 'Luxurious Nourishment',
                description: 'Rich shea and cocoa butter blend deeply nourishes and softens even the driest skin.'
            },
            {
                number: 2,
                title: 'Subtle Luminosity',
                description: 'Mica gold dust adds a subtle, natural-looking glow without glitter or shimmer.'
            }
        ],
        benefitImage: '/images/radiant_glow_body_butter.png',
        relatedProducts: ['13', '7']
    },
    {
        id: '15',
        slug: 'purifying-cleanser',
        name: 'Purifying Cleanser',
        price: 58,
        description: 'A gentle gel cleanser that removes makeup and impurities while balancing oil production. Leaves skin feeling fresh, not stripped.',
        image: '/images/purifying_cleanser_white.png',
        images: [
            '/images/purifying_cleanser_white.png',
            '/images/purifying_cleanser_white.png',
            '/images/purifying_cleanser_white.png'
        ],
        category: 'Cleanser',
        ingredientsImage: '/images/ora_purifying_cleanser_ingredients_1767860695112.png',
        howToVideo: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
        howToUse: [
            { step: 'Lather', instruction: 'Foam a small amount in wet hands.' },
            { step: 'Cleanse', instruction: 'Massage onto damp face in circular motions.' },
            { step: 'Refresh', instruction: 'Rinse with cool water.' }
        ],
        ingredients: [
            { name: 'Tea Tree Oil', origin: 'Australia' },
            { name: 'Green Tea Extract', origin: 'China' },
            { name: 'Salicylic Acid', origin: 'Germany' }
        ],
        sizes: [
            { label: 'Full Size', value: '150ML', price: 58 },
            { label: 'Travel Size', value: '50ML', price: 28 }
        ],
        rating: 4.6,
        reviewCount: 789,
        subscribePrice: 46.40,
        suitedFor: ['Oily skin', 'Combination skin', 'Acne-prone skin', 'Enlarged pores'],
        keyBenefits: [
            {
                number: 1,
                title: 'Deep Purification',
                description: 'Tea tree oil and salicylic acid work together to deeply cleanse pores and prevent breakouts.'
            },
            {
                number: 2,
                title: 'Balanced Skin',
                description: 'Green tea extract soothes and balances oil production without over-drying.'
            }
        ],
        benefitImage: '/images/purifying_cleanser_white.png',
        relatedProducts: ['1', '16', '17']
    },
    {
        id: '16',
        slug: 'revitalizing-toner',
        name: 'Revitalizing Toner',
        price: 48,
        description: 'A hydrating essence-toner that preps, plumps, and restores the skin\'s pH balance. Infused with soothing botanicals.',
        image: '/images/revitalizing_toner.png',
        images: [
            '/images/revitalizing_toner.png',
            '/images/revitalizing_toner.png',
            '/images/revitalizing_toner.png'
        ],
        category: 'Toner',
        howToImage: '/images/ora_revitalizing_toner_ritual.jpg',
        ingredientsImage: '/images/ora_revitalizing_toner_ingredients_infographic_v2.png',
        howToUse: [
            { step: 'Soak', instruction: 'Saturate a cotton pad or dispense into palms.' },
            { step: 'Apply', instruction: 'Swipe across face or press into skin.' },
            { step: 'Prep', instruction: 'Follow immediately with serum.' }
        ],
        ingredients: [
            { name: 'Rose Water', origin: 'Bulgaria' },
            { name: 'Witch Hazel', origin: 'USA' },
            { name: 'Hyaluronic Acid', origin: 'Korea' },
            { name: 'Aloe Vera', origin: 'Mexico' }
        ],
        sizes: [
            { label: 'Full Size', value: '120ML', price: 48 },
            { label: 'Travel Size', value: '50ML', price: 24 }
        ],
        rating: 4.7,
        reviewCount: 1456,
        subscribePrice: 38.40,
        suitedFor: ['All skin types', 'Dehydrated skin', 'Sensitive skin'],
        keyBenefits: [
            {
                number: 1,
                title: 'Hydration Boost',
                description: 'Hyaluronic acid and rose water deeply hydrate and plump skin while restoring pH balance.'
            },
            {
                number: 2,
                title: 'Soothing Botanicals',
                description: 'Witch hazel and aloe vera calm irritation and prep skin for better product absorption.'
            }
        ],
        benefitImage: '/images/revitalizing_toner.png',
        relatedProducts: ['1', '17', '18']
    },
    {
        id: '17',
        slug: 'advanced-repair-serum',
        name: 'Advanced Repair Serum',
        price: 125,
        description: 'A concentrated anti-aging serum that targets fine lines and loss of elasticity. Powered by bioactive peptides and rare botanical extracts.',
        benefitLabel: 'The Youth Restorer',
        image: '/images/advanced_repair_serum.png',
        images: [
            '/images/advanced_repair_serum.png',
            '/images/advanced_repair_serum.png',
            '/images/advanced_repair_serum.png'
        ],
        category: 'Serum',
        ingredientsImage: '/images/ora_advanced_repair_serum_ingredients_1767860834084.png',
        howToVideo: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
        howToUse: [
            { step: 'Press', instruction: 'Gently press 2 pumps into face and neck.' },
            { step: 'Wait', instruction: 'Allow to absorb fully before moisturizing.' },
            { step: 'Daily', instruction: 'Use morning and night for best results.' }
        ],
        ingredients: [
            { name: 'Frankincense', origin: 'Oman' }
        ],
        sizes: [
            { label: 'Full Size', value: '30ML', price: 125 },
            { label: 'Travel Size', value: '15ML', price: 68 }
        ],
        rating: 4.9,
        reviewCount: 2187,
        subscribePrice: 100,
        suitedFor: ['All skin types', 'Fine lines and wrinkles', 'Loss of firmness', 'Mature skin'],
        keyBenefits: [
            {
                number: 1,
                title: 'Visible Firming',
                description: 'Bioactive peptides work to visibly reduce fine lines and restore skin elasticity for a firmer, lifted appearance.'
            },
            {
                number: 2,
                title: 'Rare Botanicals',
                description: 'Frankincense and exotic plant extracts deliver powerful age-defying benefits while nourishing skin.'
            }
        ],
        benefitImage: '/images/advanced_repair_serum.png',
        relatedProducts: ['16', '18', '10'],
        bestSeller: true
    },
    {
        id: '18',
        slug: 'vitality-barrier-cream',
        name: 'Vitality Barrier Cream',
        price: 75,
        description: 'A restorative daily moisturizer that strengthens the skin barrier and locks in hydration. Leaves skin soft, plump, and resilient.',
        benefitLabel: 'The Fortifier',
        image: '/images/vitality_barrier_cream.png',
        images: [
            '/images/vitality_barrier_cream.png',
            '/images/vitality_barrier_cream.png',
            '/images/vitality_barrier_cream.png'
        ],
        category: 'Moisturizer',
        ingredientsImage: '/images/ora_vitality_barrier_cream_ingredients_1767860861517.png',
        howToVideo: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
        howToUse: [
            { step: 'Apply', instruction: 'Apply a pearl-sized amount to face.' },
            { step: 'Massage', instruction: 'Massage in upward, circular motions.' },
            { step: 'Protect', instruction: 'Use daily to protect against elements.' }
        ],
        ingredients: [
            { name: 'Ceramides', origin: 'Germany' },
            { name: 'Oat Kernel Oil', origin: 'Canada' },
            { name: 'Calendula', origin: 'Egypt' }
        ],
        sizes: [
            { label: 'Full Size', value: '50ML', price: 75 },
            { label: 'Travel Size', value: '15ML', price: 35 }
        ],
        rating: 4.8,
        reviewCount: 1987,
        subscribePrice: 60,
        suitedFor: ['All skin types', 'Sensitive skin', 'Compromised barrier', 'Dry skin'],
        keyBenefits: [
            {
                number: 1,
                title: 'Barrier Strengthening',
                description: 'Ceramides and oat kernel oil fortify the skin barrier to protect against environmental stressors.'
            },
            {
                number: 2,
                title: 'Deep Nourishment',
                description: 'Rich yet lightweight formula deeply moisturizes without heaviness, leaving skin soft and resilient.'
            }
        ],
        benefitImage: '/images/vitality_barrier_cream.png',
        relatedProducts: ['16', '17', '13']
    },
    {
        id: '19',
        slug: 'vitality-barrier-cream-set',
        name: 'Vitality Barrier Cream Set',
        price: 85,
        value: 110,
        description: 'A combined set featuring our Vitality Barrier Cream, presented in a luxurious gift box. The perfect introduction to our barrier-supporting ritual.',
        image: '/images/vitality_barrier_cream_set.png',
        images: [
            '/images/vitality_barrier_cream_set.png',
            '/images/vitality_barrier_cream_set.png',
            '/images/vitality_barrier_cream_set.png'
        ],
        category: 'Sets',
        ingredientsImage: '/images/ora_vitality_barrier_cream_ingredients_1767860861517.png',
        howToVideo: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
        howToUse: [
            { step: 'Gift', instruction: 'Perfect for gifting or treating yourself.' },
            { step: 'Apply', instruction: 'Follow standard application ritual.' },
            { step: 'Enjoy', instruction: 'Experience the luxury of ORA.' }
        ],
        ingredients: [
            { name: 'Ceramides', origin: 'Germany' },
            { name: 'Oat Kernel Oil', origin: 'Canada' },
            { name: 'Calendula', origin: 'Egypt' }
        ],
        rating: 4.8,
        reviewCount: 567,
        suitedFor: ['All skin types', 'Gift giving', 'Sensitive skin'],
        keyBenefits: [
            {
                number: 1,
                title: 'Complete Ritual',
                description: 'Everything you need for a complete barrier-repair routine in one luxurious set.'
            },
            {
                number: 2,
                title: 'Perfect Gift',
                description: 'Beautifully packaged set makes the ideal gift for skincare lovers.'
            }
        ],
        benefitImage: '/images/vitality_barrier_cream_set.png',
        relatedProducts: ['16', '17', '18'],
        bestSeller: true
    }
];
