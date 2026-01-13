export interface Product {
    id: string;
    slug: string;
    name: string;
    price: number;
    description: string;
    image: string;
    category: string;
    howToUse: { step: string; instruction: string }[];
    ingredients?: { name: string; origin: string }[];
    howToVideo?: string;
    howToImage?: string;
    ingredientsImage?: string;
    value?: number; // The original value of the items in the bundle
    bestSeller?: boolean;
}

export const products: Product[] = [
    {
        id: '1',
        slug: 'regenerating-cleanser',
        name: 'Regenerating Cleanser',
        price: 88,
        description: 'Our daily exfoliating treatment that polishes and buffs to reveal healthy-looking, radiant skin. 100% natural and non-toxic.',
        image: '/images/ora_regenerating_cleanser_v2.png',
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
        image: '/images/ora_holiday_kit_v2.png',
        category: 'Sets',
        howToVideo: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
        howToUse: [
            { step: 'Blush', instruction: 'Dab onto cheeks and blend upwards for a lifted look.' },
            { step: 'Lips', instruction: 'Apply directly to lips for a sheer tint or build for more color.' }
        ],
        // Ingredients removed for Holiday Kit as requested
        bestSeller: true
    },
    {
        id: '8',
        slug: 'aurum-sculpting-wand',
        name: 'Aurum Sculpting Wand',
        price: 185,
        description: 'A 24K gold-plated facial sculpting tool that uses sonic vibration to lift, tone, and contour the face for a defined appearance.',
        image: '/images/ora_sculpting_wand.png',
        category: 'Tools',
        howToVideo: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
        howToUse: [
            { step: 'Prep', instruction: 'Apply a facial oil to provide slip.' },
            { step: 'Sculpt', instruction: 'Glide the wand upwards along the jawline and cheekbones.' },
            { step: 'Define', instruction: 'Use the curved edge to contour the brow bone and neck.' }
        ],
        // Ingredients removed for Sculpting Wand as requested
    },
    {
        id: '9',
        slug: 'lumina-led-mask',
        name: 'Lumina LED Mask',
        price: 295,
        description: 'A medical-grade LED light therapy mask with 3 modes (Red, Blue, Amber) to target wrinkles, acne, and dullness.',
        image: '/images/ora_led_mask.png',
        category: 'Tools',
        howToVideo: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
        howToUse: [
            { step: 'Cleanse', instruction: 'Start with clean, dry skin.' },
            { step: 'Treat', instruction: 'Wear mask for 10 minutes. Select mode based on skin concern.' },
            { step: 'Finish', instruction: 'Follow with your favorite serum and moisturizer.' }
        ],
        // Ingredients removed for LED Mask as requested
    },
    {
        id: '10',
        slug: 'midnight-recovery-oil',
        name: 'Midnight Recovery Oil',
        price: 110,
        description: 'A potent overnight treatment rich in omega fatty acids and antioxidants to repair and regenerate skin while you sleep.',
        image: '/images/ora_recovery_oil.png',
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
        ]
    },
    {
        id: '11',
        slug: 'diamond-dust-exfoliator',
        name: 'Diamond Dust Exfoliator',
        price: 92,
        description: 'A physical exfoliant infused with micronized diamond powder to gently polish away dead skin cells for unparalleled smoothness.',
        image: '/images/ora_exfoliator.png',
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
        ]
    },
    {
        id: '12',
        slug: 'gold-infused-sheet-masks',
        name: 'Gold-Infused Sheet Masks',
        price: 45,
        description: 'A set of 5 hydrogel masks infused with colloidal gold and collagen to instantly plump, hydrate, and brighten the complexion.',
        image: '/images/ora_sheet_masks.png',
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
        ]
    },
    {
        id: '13',
        slug: 'renewal-face-oil',
        name: 'Renewal Face Oil',
        price: 95,
        description: 'A lightweight, fast-absorbing oil that delivers instant hydration and a dewy glow. Packed with antioxidants to protect against environmental stressors.',
        image: '/images/ora_renewal_face_oil_v2.png',
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
        bestSeller: true
    },
    {
        id: '14',
        slug: 'radiant-glow-body-butter',
        name: 'Radiant Glow Body Butter',
        price: 65,
        description: 'A rich, whipped body butter that melts into skin, leaving it deeply nourished and subtly illuminated with a golden sheen.',
        image: '/images/ora_body_butter_studio.png',
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
        ]
    },
    {
        id: '15',
        slug: 'purifying-cleanser',
        name: 'Purifying Cleanser',
        price: 58,
        description: 'A gentle gel cleanser that removes makeup and impurities while balancing oil production. Leaves skin feeling fresh, not stripped.',
        image: '/images/ora_purifying_cleanser_studio.png',
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
        ]
    },
    {
        id: '16',
        slug: 'revitalizing-toner',
        name: 'Revitalizing Toner',
        price: 48,
        description: 'A hydrating essence-toner that preps, plumps, and restores the skin\'s pH balance. Infused with soothing botanicals.',
        image: '/images/ora_revitalizing_toner_v2.png',
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
        ]
    },
    {
        id: '17',
        slug: 'advanced-repair-serum',
        name: 'Advanced Repair Serum',
        price: 125,
        description: 'A concentrated anti-aging serum that targets fine lines and loss of elasticity. Powered by bioactive peptides and rare botanical extracts.',
        image: '/images/ora_advanced_repair_serum_v2.png',
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
        bestSeller: true
    },
    {
        id: '18',
        slug: 'vitality-barrier-cream',
        name: 'Vitality Barrier Cream',
        price: 75,
        description: 'A restorative daily moisturizer that strengthens the skin barrier and locks in hydration. Leaves skin soft, plump, and resilient.',
        image: '/images/ora_vitality_barrier_cream_v2.png',
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
        ]
    },
    {
        id: '19',
        slug: 'vitality-barrier-cream-set',
        name: 'Vitality Barrier Cream Set',
        price: 85,
        value: 110,
        description: 'A combined set featuring our Vitality Barrier Cream, presented in a luxurious gift box. The perfect introduction to our barrier-supporting ritual.',
        image: '/images/ora_vitality_barrier_cream_v2.png',
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
        bestSeller: true
    }
];
