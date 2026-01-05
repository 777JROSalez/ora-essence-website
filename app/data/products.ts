export interface Product {
    id: string;
    slug: string;
    name: string;
    price: number;
    description: string;
    image: string;
    category: string;
    howToUse: { step: string; instruction: string }[];
    ingredients: { name: string; origin: string }[];
    howToVideo?: string;
}

export const products: Product[] = [
    {
        id: '1',
        slug: 'regenerating-cleanser',
        name: 'Regenerating Cleanser',
        price: 88,
        description: 'Our daily exfoliating treatment that polishes and buffs to reveal healthy-looking, radiant skin. 100% natural and non-toxic.',
        image: '/images/ora_cleanser.png',
        category: 'Cleanser',
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
            { name: 'Aloe Vera', origin: 'Mexico' }
        ]
    },
    // ... (Products 2-7 skipped for brevity, assuming they get mock video too if needed, but focusing on new products first)
    {
        id: '7',
        slug: 'holiday-lip-blush-kit',
        name: 'Holiday Lip & Blush Kit',
        price: 115,
        description: 'A limited edition set featuring our best-selling volumetric lip tint and cream blush for a festive, radiant look. Includes a $129 value.',
        image: '/images/ora_holiday_kit.png',
        category: 'Sets',
        howToVideo: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
        howToUse: [
            { step: 'Blush', instruction: 'Dab onto cheeks and blend upwards for a lifted look.' },
            { step: 'Lips', instruction: 'Apply directly to lips for a sheer tint or build for more color.' }
        ],
        ingredients: [
            { name: 'Beet Root Extract', origin: 'Germany' },
            { name: 'Green Tea', origin: 'China' },
            { name: 'Acai Oil', origin: 'Brazil' }
        ]
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
        ingredients: [
            { name: '24K Gold Plating', origin: 'Japan' },
            { name: 'Sonic Motor', origin: 'Germany' },
            { name: 'Zinc Alloy Core', origin: 'USA' }
        ]
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
        ingredients: [
            { name: 'Medical Grade LEDs', origin: 'Korea' },
            { name: 'Medical Silicone', origin: 'USA' },
            { name: 'Lithium Battery', origin: 'Japan' }
        ]
    },
    {
        id: '10',
        slug: 'midnight-recovery-oil',
        name: 'Midnight Recovery Oil',
        price: 110,
        description: 'A potent overnight treatment rich in omega fatty acids and antioxidants to repair and regenerate skin while you sleep.',
        image: '/images/ora_recovery_oil.png',
        category: 'Face Oil',
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
    }
];
