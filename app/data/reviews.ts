export interface Review {
    id: string;
    productId: string;
    author: string;
    rating: number; // 1-5
    date: string;
    title: string;
    content: string;
    verified: boolean;
    videoUrl?: string;
    videoThumbnail?: string;
}

export const reviews: Review[] = [
    {
        id: '101',
        productId: '1',
        author: 'Sarah M.',
        rating: 5,
        date: 'Oct 12, 2024',
        title: 'Great for sensitive skin!',
        content: 'I have very reactive skin and this cleanser is a lifesaver. It cleans deep without stripping.',
        verified: true,
        videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
        videoThumbnail: '/images/review_lifestyle_silk_robe.png'
    },
    {
        id: '102',
        productId: '1',
        author: 'Jessica K.',
        rating: 5,
        date: 'Nov 04, 2024',
        title: 'Luxury in a bottle',
        content: 'Expensive, but worth every penny. My skin glows after just one use.',
        verified: true
    },
    {
        id: 'r3',
        productId: '4', // Rejuvenating Serum
        author: 'Emily R.',
        rating: 5,
        date: '2025-11-02',
        title: 'Liquid Gold',
        content: 'Worth every penny. Fine lines are vanishing.',
        verified: true
    },
    {
        id: 'r4',
        productId: '7', // Holiday Kit
        author: 'Chloe',
        rating: 5,
        date: '2025-12-01',
        title: 'Perfect Gift',
        content: 'Got this for my mom and she loves it. The blush is super pigmented.',
        verified: false
    },
    {
        id: 'r5',
        productId: '8', // Aurum Sculpting Wand
        author: 'J Jasmine',
        rating: 5,
        date: '2025-12-15',
        title: 'My nightly ritual',
        content: 'I honestly look forward to using this every night. It feels so luxurious and my jawline is definitely more defined.',
        verified: true,
        videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
        videoThumbnail: '/images/review_lifestyle_wand_lounge.png'
    }
];

export const getReviewsByProductId = (id: string) => {
    return reviews.filter(r => r.productId === id);
};

export const getAverageRating = (id: string) => {
    const productReviews = getReviewsByProductId(id);
    if (productReviews.length === 0) return 0;
    const sum = productReviews.reduce((acc, r) => acc + r.rating, 0);
    return (sum / productReviews.length).toFixed(1);
};
