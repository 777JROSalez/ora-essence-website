'use client';

import { useRouter } from 'next/navigation';

export default function LoginPage() {
    const router = useRouter();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        // Mock login - just redirect to dashboard
        router.push('/account');
    };

    return (
        <div style={{ maxWidth: '400px', margin: '4rem auto', padding: '2rem', textAlign: 'center' }}>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem', color: 'var(--color-primary)', marginBottom: '2rem' }}>Login</h1>
            <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <input
                    type="email"
                    placeholder="Email Address"
                    defaultValue="sarah@example.com"
                    style={{ padding: '1rem', border: '1px solid #ddd', borderRadius: '4px' }}
                />
                <input
                    type="password"
                    placeholder="Password"
                    defaultValue="password123"
                    style={{ padding: '1rem', border: '1px solid #ddd', borderRadius: '4px' }}
                />
                <button type="submit" className="btn-primary" style={{ width: '100%', marginTop: '1rem' }}>Sign In</button>
            </form>
            <p style={{ marginTop: '1.5rem', fontSize: '0.9rem', color: '#666' }}>
                New here? <a href="#" style={{ textDecoration: 'underline' }}>Create an account</a>
            </p>
        </div>
    );
}
