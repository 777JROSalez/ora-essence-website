import Link from 'next/link';
import styles from '../components/LandingPage.module.css';

export default function RewardsPage() {
    return (
        <main>
            <section className={styles.hero}>
                <h1 className={styles.heroTitle}>Ora Essence Rewards</h1>
                <p className={styles.heroSubtitle}>
                    Earn points with every purchase and unlock exclusive benefits, early access, and special rewards.
                </p>
            </section>

            <section className={styles.contentSection}>
                <h2 className={styles.sectionTitle}>How It Works</h2>
                <div className={styles.stepsSection} style={{ background: '#fff', padding: '2rem 0' }}>
                    <ul className={styles.stepsList}>
                        <li className={styles.stepItem}>
                            <div className={styles.stepNumber}>1</div>
                            <div className={styles.stepContent}>
                                <h3>Join Free</h3>
                                <p>Sign up for rewards instantly when you create an account. No fees, no catches.</p>
                            </div>
                        </li>
                        <li className={styles.stepItem}>
                            <div className={styles.stepNumber}>2</div>
                            <div className={styles.stepContent}>
                                <h3>Earn Points</h3>
                                <p>Earn 1 point for every $1 spent. Bonus points for reviews, referrals, and social follows.</p>
                            </div>
                        </li>
                        <li className={styles.stepItem}>
                            <div className={styles.stepNumber}>3</div>
                            <div className={styles.stepContent}>
                                <h3>Redeem Rewards</h3>
                                <p>Use points for discounts, free products, exclusive gifts, and VIP experiences.</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>

            <section className={styles.stepsSection}>
                <div className={styles.contentSection}>
                    <h2 className={styles.sectionTitle}>Member Tiers</h2>
                    <div className={styles.productsGrid}>
                        <div className={styles.productCard} style={{ padding: '2rem' }}>
                            <h3 className={styles.productName}>🌿 Green</h3>
                            <p className={styles.productPrice}>$0 - $249</p>
                            <p style={{ fontSize: '0.95rem', color: '#666', lineHeight: '1.6' }}>
                                • 1 point per $1<br />
                                • Birthday gift<br />
                                • Early sale access
                            </p>
                        </div>
                        <div className={styles.productCard} style={{ padding: '2rem', border: '2px solid #D4AF37' }}>
                            <h3 className={styles.productName}>✨ Gold</h3>
                            <p className={styles.productPrice}>$250 - $499</p>
                            <p style={{ fontSize: '0.95rem', color: '#666', lineHeight: '1.6' }}>
                                • 1.5 points per $1<br />
                                • Free shipping<br />
                                • Exclusive products<br />
                                • Priority support
                            </p>
                        </div>
                        <div className={styles.productCard} style={{ padding: '2rem' }}>
                            <h3 className={styles.productName}>💎 Platinum</h3>
                            <p className={styles.productPrice}>$500+</p>
                            <p style={{ fontSize: '0.95rem', color: '#666', lineHeight: '1.6' }}>
                                • 2 points per $1<br />
                                • VIP concierge<br />
                                • Private events<br />
                                • Custom formulations
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.ctaSection}>
                <h2 className={styles.ctaTitle}>Ready to Start Earning?</h2>
                <p className={styles.ctaText}>
                    Join Ora Essence Rewards today and start earning points on your next purchase.
                </p>
                <Link href="/account" className={styles.ctaButton}>
                    Join Now
                </Link>
            </section>
        </main>
    );
}
