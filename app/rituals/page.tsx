import Link from 'next/link';
import Image from 'next/image';

export default function RitualsPage() {
    return (
        <main>
            {/* Hero */}
            <div style={{
                backgroundColor: '#f5f5f5',
                padding: '6rem 2rem',
                textAlign: 'center',
                marginBottom: '4rem'
            }}>
                <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: '3.5rem', color: '#333', marginBottom: '1rem' }}>
                    Find Your Ritual
                </h1>
                <p style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto', color: '#666' }}>
                    Skincare is not a chore, it's a ritual. Discover the transformative power of a consistent naturally derived regimen.
                </p>
            </div>

            <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 2rem 6rem' }}>

                {/* Morning Ritual */}
                <section style={{
                    marginBottom: '6rem',
                    background: 'linear-gradient(135deg, #111 0%, #222 100%)', // Subtle dark gradient
                    padding: '3rem',
                    borderRadius: '8px',
                    border: '1px solid #333'
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                        <span style={{ fontSize: '2rem' }}>☀️</span>
                        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '2.5rem', margin: 0, color: '#f0f0f0' }}>Morning Glow</h2>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
                        <div style={{ textAlign: 'center' }}>
                            <div style={{ width: '80px', height: '80px', background: '#333', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem', fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--color-primary)', border: '1px solid var(--color-primary)' }}>1</div>
                            <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: '#fff' }}>Cleanse</h3>
                            <p style={{ fontSize: '0.9rem', color: '#aaa' }}>Remove sleep impurities with Regenerating Cleanser.</p>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <div style={{ width: '80px', height: '80px', background: '#333', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem', fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--color-primary)', border: '1px solid var(--color-primary)' }}>2</div>
                            <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: '#fff' }}>Prep</h3>
                            <p style={{ fontSize: '0.9rem', color: '#aaa' }}>Hydrate with Floral Essence.</p>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <div style={{ width: '80px', height: '80px', background: '#333', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem', fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--color-primary)', border: '1px solid var(--color-primary)' }}>3</div>
                            <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: '#fff' }}>Treat</h3>
                            <p style={{ fontSize: '0.9rem', color: '#aaa' }}>Apply Rejuvenating Serum.</p>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <div style={{ width: '80px', height: '80px', background: '#333', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem', fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--color-primary)', border: '1px solid var(--color-primary)' }}>4</div>
                            <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: '#fff' }}>Glow</h3>
                            <p style={{ fontSize: '0.9rem', color: '#aaa' }}>Finish with Repairative Moisturizer.</p>
                        </div>
                    </div>

                    <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                        <Link href="/collections/best-sellers" className="btn-primary" style={{ display: 'inline-block', textDecoration: 'none' }}>
                            Shop Morning Essentials
                        </Link>
                    </div>
                </section>

                {/* Evening Ritual */}
                <section>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                        <span style={{ fontSize: '2rem' }}>🌙</span>
                        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '2.5rem', margin: 0 }}>Evening Repair</h2>
                    </div>

                    <div style={{ background: '#333', color: 'white', padding: '3rem', borderRadius: '8px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
                        <div>
                            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '2rem', marginBottom: '1rem' }}>Double Cleanse</h3>
                            <p style={{ lineHeight: '1.6', marginBottom: '1.5rem', color: '#ddd' }}>
                                The most important step of the night. Start with an oil cleanser to break down makeup and SPF, then follow with your treatment cleanser.
                            </p>
                            <Link href="/products/regenerating-cleanser" style={{ color: 'white', textDecoration: 'underline' }}>
                                Shop Cleansers
                            </Link>
                        </div>
                        <div style={{ textAlign: 'center', borderLeft: '1px solid #555', paddingLeft: '2rem' }}>
                            <p style={{ fontSize: '1.2rem', fontStyle: 'italic', marginBottom: '1rem' }}>"Consistency is the secret to real results."</p>
                            <p>- Tata Harper</p>
                        </div>
                    </div>
                </section>

            </div>
        </main>
    );
}
