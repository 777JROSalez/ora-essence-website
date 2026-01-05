import { mockUser } from '../data/user';
import { mockOrders } from '../data/orders';
import Link from 'next/link';

export default function AccountDashboard() {
    const latestOrder = mockOrders[0];

    return (
        <div>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem', color: 'var(--color-primary)', marginBottom: '1rem' }}>Welcome, {mockUser.firstName}</h1>
            <p style={{ color: '#666', marginBottom: '3rem' }}>Here's an overview of your skincare journey.</p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '3rem' }}>
                <div style={{ background: '#f5f7f5', padding: '2rem', borderRadius: '8px' }}>
                    <h3 style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '0.5rem' }}>Loyalty Points</h3>
                    <p style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--color-primary)' }}>{mockUser.points}</p>
                    <p style={{ color: '#666' }}>{mockUser.tier} Member</p>
                    <p style={{ fontSize: '0.8rem', marginTop: '1rem' }}>{mockUser.nextTierPoints} points to Platinum</p>
                    <button style={{ marginTop: '1rem', border: '1px solid var(--color-primary)', background: 'transparent', padding: '0.5rem 1rem', cursor: 'pointer' }}>Redeem Rewards</button>
                </div>
                <div style={{ background: '#f9f9f9', padding: '2rem', borderRadius: '8px' }}>
                    <h3 style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '0.5rem' }}>Skin Profile</h3>
                    <p><strong>Type:</strong> {mockUser.skinType}</p>
                    <p><strong>Concerns:</strong> Aging, Hydration</p>
                    <Link href="/quiz" style={{ display: 'inline-block', marginTop: '1rem', textDecoration: 'underline', color: 'var(--color-primary)' }}>Retake Quiz</Link>
                </div>
            </div>

            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--color-primary)' }}>Recent Order</h3>
            <div style={{ border: '1px solid #eee', padding: '1.5rem', borderRadius: '4px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                    <span style={{ fontWeight: 'bold' }}>{latestOrder.id}</span>
                    <span style={{ color: 'green' }}>{latestOrder.status}</span>
                </div>
                <p style={{ color: '#666', marginBottom: '0.5rem' }}>{latestOrder.items[0].name} + {latestOrder.items.length - 1} more</p>
                <Link href="/account/orders" style={{ textDecoration: 'underline', fontSize: '0.9rem' }}>View All Orders</Link>
            </div>
        </div>
    );
}
