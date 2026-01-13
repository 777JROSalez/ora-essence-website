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

// Simple logic to recommend a routine based on answers
// Returns an array of Product slugs
export const getRecommendation = (answers: Record<number, string>): string[] => {
    const skinType = answers[1];
    const concern = answers[2];
    const texture = answers[3];

    let routine = ['regenerating-cleanser', 'revitalizing-toner']; // Base routine

    // Serum Recommendation
    if (concern === 'aging' || skinType === 'dry') {
        routine.push('advanced-repair-serum');
    } else if (concern === 'dullness') {
        routine.push('renewal-face-oil'); // Vitamin C oil
    } else {
        routine.push('advanced-repair-serum'); // Default high-end serum
    }

    // Moisturizer Recommendation
    if (texture === 'oil') {
        routine.push('midnight-recovery-oil');
    } else if (texture === 'rich' || skinType === 'dry') {
        routine.push('vitality-barrier-cream');
    } else {
        routine.push('vitality-barrier-cream'); // Default for now
    }

    // Add specific treatments
    if (concern === 'acne') {
        routine.unshift('purifying-cleanser'); // Replace or add cleansing step
        // Remove generating cleanser if purifying is added? Let's just swap for simplicity in this logic
        routine = routine.filter(s => s !== 'regenerating-cleanser');
    } else if (concern === 'dullness') {
        // Maybe add exfoliator
        routine.push('diamond-dust-exfoliator');
    }

    return Array.from(new Set(routine)); // Dedup
};
