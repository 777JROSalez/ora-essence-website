'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookieConsent() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Check if user has already consented
        const consented = localStorage.getItem('cookieConsent');
        if (!consented) {
            // Small delay for smooth entrance
            const timer = setTimeout(() => setIsVisible(true), 1500);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        setIsVisible(false);
        localStorage.setItem('cookieConsent', 'true');
    };

    if (!isVisible) return null;

    return (
        <div style={{
            position: 'fixed',
            bottom: '2rem',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '90%',
            maxWidth: '600px',
            backgroundColor: 'rgba(15, 40, 30, 0.95)', // Forest Green
            backdropFilter: 'blur(12px)',
            color: '#F5F1E6', // Cream
            padding: '1.5rem',
            borderRadius: '8px',
            boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
            zIndex: 9999,
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            border: '1px solid rgba(212, 175, 55, 0.2)' // Gold border
        }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <span style={{ fontSize: '1.5rem' }}>🍪</span>
                <div>
                    <h4 style={{ color: '#D4AF37', margin: '0 0 0.5rem 0', fontFamily: 'var(--font-serif)' }}>Cookie Consent</h4>
                    <p style={{ margin: 0, fontSize: '0.9rem', lineHeight: '1.4' }}>
                        We use cookies to enhance your botanical experience. By continuing to visit this site, you agree to our use of cookies.
                        <Link href="/pages/privacy-policy" style={{ color: '#D4AF37', textDecoration: 'underline', marginLeft: '0.5rem' }}>
                            Learn more
                        </Link>
                    </p>
                </div>
            </div>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end', marginTop: '0.5rem' }}>
                <button
                    onClick={() => setIsVisible(false)}
                    style={{
                        padding: '0.5rem 1.5rem',
                        border: '1px solid #A3B5AE',
                        color: '#A3B5AE',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        fontSize: '0.8rem',
                        textTransform: 'uppercase',
                        letterSpacing: '1px'
                    }}
                >
                    Decline
                </button>
                <button
                    onClick={handleAccept}
                    style={{
                        padding: '0.5rem 2rem',
                        backgroundColor: '#D4AF37',
                        color: '#0F281E',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        fontWeight: 'bold',
                        fontSize: '0.8rem',
                        textTransform: 'uppercase',
                        letterSpacing: '1px'
                    }}
                >
                    Accept
                </button>
            </div>
        </div>
    );
}
