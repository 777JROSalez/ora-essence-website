export interface User {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    skinType: string;
    points: number;
    tier: 'Green' | 'Gold' | 'Platinum';
    nextTierPoints: number;
}

export const mockUser: User = {
    id: 'usr_123',
    email: 'sarah@example.com',
    firstName: 'Sarah',
    lastName: 'Mitchell',
    skinType: 'Combination',
    points: 1250,
    tier: 'Gold',
    nextTierPoints: 250
};
