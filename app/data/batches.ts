export interface IngredientSource {
    name: string;
    location: string;
    percentage: string;
    sourceType: 'Farm' | 'Lab' | 'Spring';
}

export interface QualityCheck {
    name: string;
    result: 'Pass';
    date: string;
    testedBy: string;
}

export interface Batch {
    batchId: string;
    productId: string;
    productName: string;
    manufacturedDate: string;
    expirationDate: string;
    maker: {
        name: string;
        role: string;
        yearsAtCompany: number;
    };
    ingredients: IngredientSource[];
    qualityChecks: QualityCheck[];
}

export const batches: Batch[] = [
    {
        batchId: 'BATCH-2024-0315',
        productId: '1', // Regenerating Cleanser
        productName: 'Regenerating Cleanser',
        manufacturedDate: 'March 15, 2024',
        expirationDate: 'March 15, 2025',
        maker: {
            name: 'Joe Smith',
            role: 'Senior Batch Master',
            yearsAtCompany: 8
        },
        ingredients: [
            { name: 'Water', location: 'Vermont Spring, VT', percentage: '15.5%', sourceType: 'Spring' },
            { name: 'Bamboo Powder', location: 'Kyoto, Japan', percentage: '3.2%', sourceType: 'Farm' },
            { name: 'Willow Bark', location: 'Vermont Farm, VT', percentage: '2.5%', sourceType: 'Farm' },
            { name: 'Aloe Leaf Juice', location: 'Mexico', percentage: '12%', sourceType: 'Farm' }
        ],
        qualityChecks: [
            { name: 'pH Balance Test', result: 'Pass', date: 'March 15, 2024', testedBy: 'Sara Johnson' },
            { name: 'Microbial Test', result: 'Pass', date: 'March 15, 2024', testedBy: 'Sara Johnson' },
            { name: 'Viscosity Check', result: 'Pass', date: 'March 15, 2024', testedBy: 'Labs Team' }
        ]
    },
    // Generic fallback for demo
    {
        batchId: 'DEMO-BATCH',
        productId: '2',
        productName: 'Resurfacing Mask',
        manufacturedDate: 'April 10, 2024',
        expirationDate: 'April 10, 2025',
        maker: {
            name: 'Maria Garcia',
            role: 'Formulation Specialist',
            yearsAtCompany: 5
        },
        ingredients: [
            { name: 'Pomegranate Enzymes', location: 'Turkey', percentage: '5%', sourceType: 'Farm' },
            { name: 'Pink Clay', location: 'France', percentage: '8%', sourceType: 'Earth' as any }
        ],
        qualityChecks: [
            { name: 'Purity Test', result: 'Pass', date: 'April 10, 2024', testedBy: 'QC Team' }
        ]
    }
];
