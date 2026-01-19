import { Product } from '../data/products';

export interface Question {
    id: number;
    text: string;
    options: {
        text: string;
        value: string;
        icon?: string;
    }[];
}

export const questions: Question[] = [
    {
        id: 1,
        text: "How would you describe your skin type?",
        options: [
            { text: "Dry & Tight", value: "dry", icon: "🌵" },
            { text: "Oily & Shiny", value: "oily", icon: "✨" },
            { text: "Combination", value: "combination", icon: "⚖️" },
            { text: "Normal / Balanced", value: "normal", icon: "🌸" }
        ]
    },
    {
        id: 2,
        text: "What is your primary skin concern?",
        options: [
            { text: "Fine Lines & Aging", value: "aging", icon: "⏳" },
            { text: "Acne & Blemishes", value: "acne", icon: "🔴" },
            { text: "Dullness & Uneven Tone", value: "dullness", icon: "💡" },
            { text: "Sensitivity & Redness", value: "sensitivity", icon: "🛡️" }
        ]
    },
    {
        id: 3,
        text: "What texture do you prefer in a moisturizer?",
        options: [
            { text: "Rich & Creamy", value: "rich", icon: "🥛" },
            { text: "Lightweight Gel", value: "gel", icon: "💧" },
            { text: "Facial Oil", value: "oil", icon: "🍯" }
        ]
    }
];

// Enhanced logic to recommend a personalized routine based on answers
// Returns an array of Product slugs
export const getRecommendation = (answers: Record<number, string>): string[] => {
    const skinType = answers[1];
    const concern = answers[2];
    const texture = answers[3];

    let routine: string[] = [];

    // Step 1: Cleanser Selection
    if (concern === 'acne' || skinType === 'oily') {
        routine.push('purifying-cleanser'); // For acne-prone or oily skin
    } else {
        routine.push('regenerating-cleanser'); // For all other skin types
    }

    // Step 2: Toner (universal step)
    routine.push('revitalizing-toner');

    // Step 3: Serum Selection
    if (concern === 'dullness') {
        routine.push('renewal-face-oil'); // Vitamin C oil for brightening
    } else if (concern === 'aging' || skinType === 'dry') {
        routine.push('advanced-repair-serum'); // Anti-aging peptides
    } else if (concern === 'sensitivity') {
        // For sensitive skin, use a gentler option
        routine.push('renewal-face-oil'); // Lightweight oil is gentler
    } else {
        // For normal or combination skin with acne concern
        routine.push('advanced-repair-serum'); // Default high-performance serum
    }

    // Step 4: Moisturizer Selection
    if (texture === 'oil') {
        routine.push('midnight-recovery-oil'); // User prefers facial oil texture
    } else if (skinType === 'dry' || concern === 'sensitivity') {
        routine.push('vitality-barrier-cream'); // Rich barrier support
    } else if (texture === 'gel' || skinType === 'oily' || skinType === 'combination') {
        // For those preferring lightweight textures or oily/combo skin
        routine.push('vitality-barrier-cream'); // Still use barrier cream but could add lighter option in future
    } else {
        routine.push('vitality-barrier-cream'); // Default moisturizer
    }

    // Step 5: Add Targeted Treatments
    if (concern === 'dullness') {
        routine.push('diamond-dust-exfoliator'); // Physical exfoliant for brightness
    }

    return Array.from(new Set(routine)); // Remove duplicates
};
