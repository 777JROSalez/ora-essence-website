import Link from 'next/link';
import styles from '../components/LandingPage.module.css';

export default function SubscribePage() {
    return (
        <main>
            <section className={styles.hero}>
                <h1 className={styles.heroTitle}>Subscribe & Save</h1>
                <p className={styles.heroSubtitle}>
                    Never run out of your favorites. Save 20% and get free shipping on automatic deliveries.
                </p>
            </section>

            <section className={styles.contentSection}>
                <h2 className={styles.sectionTitle}>How Subscription Works</h2>
                <div className={styles.stepsSection} style={{ background: '#fff', padding: '2rem 0' }}>
                    <ul className={styles.stepsList}>
                        <li className={styles.stepItem}>
                            <div className={styles.stepNumber}>1</div>
                            <div className={styles.stepContent}>
                                <h3>Choose Your Products</h3>
                                <p>Select any products and choose "Subscribe & Save" at checkout.</p>
                            </div>
                        </li>
                        <li className={styles.stepItem}>
                            <div className={styles.stepNumber}>2</div>
                            <div className={styles.stepContent}>
                                <h3>Select Frequency</h3>
                                <p>Choose delivery every 30, 60, or 90 days based on your needs.</p>
                            </div>
                        </li>
                        <li className={styles.stepItem}>
                            <div className={styles.stepNumber}>3</div>
                            <div className={styles.stepContent}>
                                <h3>Save Automatically</h3>
                                <p>Get 20% off every delivery, plus free shipping. Modify or cancel anytime.</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>

            <section className={styles.stepsSection}>
                <div className={styles.contentSection}>
                    <h2 className={styles.sectionTitle}>Subscription Benefits</h2>
                    <div className={styles.productsGrid} style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
                        <div style={{ textAlign: 'center', padding: '2rem' }}>
                            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>20%</div>
                            <h3 style={{ fontSize: '1.25rem', color: 'var(--color-primary)', marginBottom: '0.5rem' }}>Off Every Order</h3>
                            <p style={{ color: '#666' }}>Save on all subscription products</p>
                        </div>
                        <div style={{ textAlign: 'center', padding: '2rem' }}>
                            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📦</div>
                            <h3 style={{ fontSize: '1.25rem', color: 'var(--color-primary)', marginBottom: '0.5rem' }}>Free Shipping</h3>
                            <p style={{ color: '#666' }}>On every subscription delivery</p>
                        </div>
                        <div style={{ textAlign: 'center', padding: '2rem' }}>
                            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>⚙️</div>
                            <h3 style={{ fontSize: '1.25rem', color: 'var(--color-primary)', marginBottom: '0.5rem' }}>Total Flexibility</h3>
                            <p style={{ color: '#666' }}>Skip, modify, or cancel anytime</p>
                        </div>
                        <div style={{ textAlign: 'center', padding: '2rem' }}>
                            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎁</div>
                            <h3 style={{ fontSize: '1.25rem', color: 'var(--color-primary)', marginBottom: '0.5rem' }}>Exclusive Gifts</h3>
                            <p style={{ color: '#666' }}>Surprise bonuses for subscribers</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.contentSection} style={{ background: '#f9f9f9', padding: '4rem 2rem' }}>
                <h2 className={styles.sectionTitle}>FAQ</h2>
                <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'left' }}>
                    <div style={{ marginBottom: '2rem' }}>
                        <h3 style={{ fontSize: '1.25rem', color: 'var(--color-primary)', marginBottom: '0.75rem' }}>Can I change my delivery frequency?</h3>
                        <p style={{ color: '#666', lineHeight: '1.6' }}>Yes! Modify your delivery schedule anytime from your account dashboard.</p>
                    </div>
                    <div style={{ marginBottom: '2rem' }}>
                        <h3 style={{ fontSize: '1.25rem', color: 'var(--color-primary)', marginBottom: '0.75rem' }}>What if I need to skip a delivery?</h3>
                        <p style={{ color: '#666', lineHeight: '1.6' }}>Simply skip your next delivery from your account. No penalties or fees.</p>
                    </div>
                    <div style={{ marginBottom: '2rem' }}>
                        <h3 style={{ fontSize: '1.25rem', color: 'var(--color-primary)', marginBottom: '0.75rem' }}>Can I cancel my subscription?</h3>
                        <p style={{ color: '#666', lineHeight: '1.6' }}>Absolutely. Cancel anytime with no commitment or cancellation fees.</p>
                    </div>
                </div>
            </section>

            <section className={styles.ctaSection}>
                <h2 className={styles.ctaTitle}>Start Saving Today</h2>
                <p className={styles.ctaText}>
                    Subscribe now and save 20% on your favorite Ora Essence products.
                </p>
                <Link href="/products" className={styles.ctaButton}>
                    Browse Products
                </Link>
            </section>
        </main>
    );
}
