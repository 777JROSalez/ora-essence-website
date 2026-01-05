export interface OrderItem {
    name: string;
    quantity: number;
    price: number;
}

export interface Order {
    id: string;
    date: string;
    status: 'Delivered' | 'Shipped' | 'Processing';
    total: number;
    items: OrderItem[];
    trackingUrl?: string;
}

export const mockOrders: Order[] = [
    {
        id: '#10001',
        date: 'December 15, 2024',
        status: 'Delivered',
        total: 255.00,
        items: [
            { name: 'Regenerating Cleanser', quantity: 1, price: 88 },
            { name: 'Resurfacing Mask', quantity: 1, price: 68 },
            { name: 'Rejuvenating Serum', quantity: 1, price: 98 } // Adjusted slightly for total match
        ],
        trackingUrl: '#'
    },
    {
        id: '#9982',
        date: 'November 2, 2024',
        status: 'Delivered',
        total: 132.00,
        items: [
            { name: 'Retinoic Nutrient Face Oil', quantity: 1, price: 132 }
        ]
    }
];
