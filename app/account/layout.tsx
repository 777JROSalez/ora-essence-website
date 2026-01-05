'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function AccountLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();

    // Don't show sidebar on login page
    if (pathname === '/account/login') {
        return <>{children}</>;
    }

    const links = [
        { href: '/account', label: 'Dashboard' },
        { href: '/account/profile', label: 'Profile' },
        { href: '/account/orders', label: 'Order History' },
        { href: '/account/saved-items', label: 'Saved Items' },
        { href: '/account/subscriptions', label: 'Subscriptions' },
        { href: '/account/rewards', label: 'Rewards' },
    ];

    return (
        <div className="container" style={{ padding: '4rem 0', display: 'flex', gap: '4rem', minHeight: '60vh' }}>
            <aside style={{ width: '250px', flexShrink: 0 }}>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--color-primary)' }}>My Account</h3>
                <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            style={{
                                textDecoration: 'none',
                                color: pathname === link.href ? 'var(--color-primary)' : '#666',
                                fontWeight: pathname === link.href ? 'bold' : 'normal',
                                padding: '0.5rem 0',
                                borderBottom: '1px solid #eee'
                            }}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <button
                        style={{
                            textAlign: 'left',
                            background: 'none',
                            border: 'none',
                            padding: '0.5rem 0',
                            color: '#999',
                            cursor: 'pointer',
                            marginTop: '1rem'
                        }}
                        onClick={() => window.location.href = '/account/login'}
                    >
                        Log Out
                    </button>
                </nav>
            </aside>
            <main style={{ flex: 1 }}>
                {children}
            </main>
        </div>
    );
}
