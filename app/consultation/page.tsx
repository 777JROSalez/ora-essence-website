import Link from 'next/link';
import styles from '../components/LandingPage.module.css';

export default function ConsultationPage() {
    return (
        <main>
            <section className={styles.hero}>
                <h1 className={styles.heroTitle}>Virtual Consultation</h1>
                <p className={styles.heroSubtitle}>
                    Book a complimentary 30-minute virtual consultation with our skincare experts to create your perfect ritual.
                </p>
            </section>

            <section className={styles.contentSection}>
                <h2 className={styles.sectionTitle}>What to Expect</h2>
                <div className={styles.stepsSection} style={{ background: '#fff', padding: '2rem 0' }}>
                    <ul className={styles.stepsList}>
                        <li className={styles.stepItem}>
                            <div className={styles.stepNumber}>1</div>
                            <div className={styles.stepContent}>
                                <h3>Skin Analysis</h3>
                                <p>We'll analyze your skin type, concerns, and goals to understand your unique needs.</p>
                            </div>
                        </li>
                        <li className={styles.stepItem}>
                            <div className={styles.stepNumber}>2</div>
                            <div className={styles.stepContent}>
                                <h3>Personalized Recommendations</h3>
                                <p>Receive custom product and routine recommendations based on your consultation.</p>
                            </div>
                        </li>
                        <li className={styles.stepItem}>
                            <div className={styles.stepNumber}>3</div>
                            <div className={styles.stepContent}>
                                <h3>Application Guidance</h3>
                                <p>Learn how to apply each product for maximum efficacy and results.</p>
                            </div>
                        </li>
                        <li className={styles.stepItem}>
                            <div className={styles.stepNumber}>4</div>
                            <div className={styles.stepContent}>
                                <h3>Ongoing Support</h3>
                                <p>Get follow-up support via email as your skin transforms and adapts.</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>

            <section className={styles.stepsSection}>
                <div className={styles.contentSection}>
                    <h2 className={styles.sectionTitle}>Meet Our Experts</h2>
                    <div className={styles.productsGrid}>
                        <div className={styles.productCard} style={{ padding: '2rem' }}>
                            <div style={{ width: '150px', height: '150px', borderRadius: '50%', background: 'linear-gradient(135deg, #1a4d3a 0%, #2d7a5a 100%)', margin: '0 auto 1rem' }}></div>
                            <h3 className={styles.productName}>Dr. Sarah Chen</h3>
                            <p style={{ color: '#D4AF37', marginBottom: '1rem' }}>Lead Aesthetician</p>
                            <p style={{ fontSize: '0.95rem', color: '#666', lineHeight: '1.6' }}>
                                15+ years in botanical skincare formulation and holistic skin health.
                            </p>
                        </div>
                        <div className={styles.productCard} style={{ padding: '2rem' }}>
                            <div style={{ width: '150px', height: '150px', borderRadius: '50%', background: 'linear-gradient(135deg, #1a4d3a 0%, #2d7a5a 100%)', margin: '0 auto 1rem' }}></div>
                            <h3 className={styles.productName}>Marcus Rivera</h3>
                            <p style={{ color: '#D4AF37', marginBottom: '1rem' }}>Skincare Specialist</p>
                            <p style={{ fontSize: '0.95rem', color: '#666', lineHeight: '1.6' }}>
                                Certified in dermatological science with expertise in sensitive skin.
                            </p>
                        </div>
                        <div className={styles.productCard} style={{ padding: '2rem' }}>
                            <div style={{ width: '150px', height: '150px', borderRadius: '50%', background: 'linear-gradient(135deg, #1a4d3a 0%, #2d7a5a 100%)', margin: '0 auto 1rem' }}></div>
                            <h3 className={styles.productName}>Emma Thompson</h3>
                            <p style={{ color: '#D4AF37', marginBottom: '1rem' }}>Wellness Advisor</p>
                            <p style={{ fontSize: '0.95rem', color: '#666', lineHeight: '1.6' }}>
                                Holistic approach combining nutrition, lifestyle, and skincare.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.contentSection} style={{ background: '#f9f9f9', padding: '4rem 2rem' }}>
                <h2 className={styles.sectionTitle}>Schedule Your Consultation</h2>
                <p className={styles.sectionText} style={{ marginBottom: '2rem' }}>
                    Consultations are complimentary and available Monday-Friday, 9am-6pm EST.
                </p>
                <div style={{ maxWidth: '600px', margin: '0 auto', background: '#fff', padding: '3rem', borderRadius: '8px', boxShadow: '0 4px 15px rgba(0,0,0,0.08)' }}>
                    <form>
                        <div style={{ marginBottom: '1.5rem' }}>
                            <label style={{ display: 'block', marginBottom: '0.5rem', color: '#333', fontWeight: '600' }}>Full Name</label>
                            <input type="text" style={{ width: '100%', padding: '0.75rem', border: '1px solid #ddd', borderRadius: '4px' }} />
                        </div>
                        <div style={{ marginBottom: '1.5rem' }}>
                            <label style={{ display: 'block', marginBottom: '0.5rem', color: '#333', fontWeight: '600' }}>Email</label>
                            <input type="email" style={{ width: '100%', padding: '0.75rem', border: '1px solid #ddd', borderRadius: '4px' }} />
                        </div>
                        <div style={{ marginBottom: '1.5rem' }}>
                            <label style={{ display: 'block', marginBottom: '0.5rem', color: '#333', fontWeight: '600' }}>Phone</label>
                            <input type="tel" style={{ width: '100%', padding: '0.75rem', border: '1px solid #ddd', borderRadius: '4px' }} />
                        </div>
                        <div style={{ marginBottom: '1.5rem' }}>
                            <label style={{ display: 'block', marginBottom: '0.5rem', color: '#333', fontWeight: '600' }}>Preferred Date/Time</label>
                            <input type="datetime-local" style={{ width: '100%', padding: '0.75rem', border: '1px solid #ddd', borderRadius: '4px' }} />
                        </div>
                        <div style={{ marginBottom: '2rem' }}>
                            <label style={{ display: 'block', marginBottom: '0.5rem', color: '#333', fontWeight: '600' }}>Main Skin Concerns</label>
                            <textarea rows={4} style={{ width: '100%', padding: '0.75rem', border: '1px solid #ddd', borderRadius: '4px' }}></textarea>
                        </div>
                        <button type="submit" style={{ width: '100%', background: 'var(--color-primary)', color: '#fff', padding: '1rem', borderRadius: '4px', fontSize: '1rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px', cursor: 'pointer' }}>
                            Request Consultation
                        </button>
                    </form>
                </div>
            </section>

            <section className={styles.ctaSection}>
                <h2 className={styles.ctaTitle}>Prefer to Start on Your Own?</h2>
                <p className={styles.ctaText}>
                    Take our 2-minute skin quiz to get instant personalized recommendations.
                </p>
                <Link href="/quiz" className={styles.ctaButton}>
                    Take the Quiz
                </Link>
            </section>
        </main>
    );
}
