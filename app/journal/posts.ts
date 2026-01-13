export interface BlogPost {
    slug: string;
    title: string;
    excerpt: string;
    content: string;
    date: string;
    readingTime: string;
    image: string;
    featured?: boolean;
}

export const blogPosts: BlogPost[] = [
    {
        slug: 'science-of-botanicals',
        title: 'The Science Behind Bioactive Botanicals',
        excerpt: 'Discover how we harness the power of nature through cold-press extraction to preserve nutrient potency.',
        content: `
# The Power of Nature

At Ora Essence, we believe that nature holds the key to radiant skin. But it's not just about using natural ingredients; it's about how those ingredients are harvested and processed.

## Cold-Press Extraction

Unlike heat processing, which can degrade delicate vitamins and enzymes, our cold-press extraction method ensures that every drop of oil retains its full spectrum of benefits.

## Bioavailability

Our formulas are designed to be biocompatible, meaning your skin recognizes and absorbs them easily.
        `,
        date: 'October 12, 2025',
        readingTime: '5 min read',
        image: '/images/journal_botanicals.jpg',
        featured: true
    },
    {
        slug: 'evening-ritual-guide',
        title: 'Guiding Your Skin Through the Night',
        excerpt: 'Why your evening routine is the most critical time for skin repair and regeneration.',
        content: `
# Nighttime Repair

While you sleep, your skin goes into repair mode. This is the optimal time to deliver potent actives.

## Double Cleansing

Start by removing the day's grime.
        `,
        date: 'November 05, 2025',
        readingTime: '4 min read',
        image: '/images/journal_evening.jpg',
        featured: false
    },
    {
        slug: 'sustainability-commitment',
        title: 'Our Commitment to the Earth',
        excerpt: 'From seed to bottle, learn about our zero-waste initiatives and regenerative farming partners.',
        content: `
# Conscious Beauty

Beauty shouldn't come at a cost to the planet.
        `,
        date: 'December 01, 2025',
        readingTime: '6 min read',
        image: '/images/journal_sustainability.jpg',
        featured: false
    }
];
