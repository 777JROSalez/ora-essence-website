'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import { useCart } from '../../context/CartContext';

export default function SuccessPage() {
    const { clearCart } = useCart();

    useEffect(() => {
        // Clear the cart on successful checkout
        // Note: In a real app, verify the order ID first
        clearCart();
    }, [clearCart]);

    return (
        <div style={{
            maxWidth: '800px',
            margin: '4rem auto',
            textAlign: 'center',
            padding: '2rem',
            fontFamily: "'Inter', sans-serif"
        }}>
            <div style={{
                width: '80px',
                height: '80px',
                background: '#5d8e6a',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 2rem'
            }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
            </div>

            <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', fontFamily: "'Playfair Display', serif", color: '#333' }}>
                Order Confirmed!
            </h1>
            <p style={{ fontSize: '1.2rem', color: '#666', marginBottom: '2rem' }}>
                Thank you for your purchase. You will receive an email confirmation shortly.
            </p>

            <div style={{ background: '#f9f9f9', padding: '2rem', borderRadius: '8px', marginBottom: '3rem' }}>
                <p style={{ fontWeight: '600', marginBottom: '0.5rem' }}>Order #ON-28492</p>
                <p>Estimated Delivery: 3-5 Business Days</p>
            </div>

            <Link href="/" style={{
                background: '#000',
                color: 'white',
                padding: '1rem 2.5rem',
                textDecoration: 'none',
                borderRadius: '5px',
                fontSize: '1rem'
            }}>
                Continue Shopping
            </Link>
        </div>
    );
}
