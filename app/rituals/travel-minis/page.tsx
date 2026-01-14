import Link from 'next/link';
import Image from 'next/image';
import { products } from '../../data/products';
import styles from '../../components/LandingPage.module.css';

export default function TravelMinisPage() {
    // Filter for smaller/travel products or create travel versions
    const travelProducts = [
        { ...products.find(p => p.slug === 'regenerating-cleanser'), name: 'Regenerating Cleanser Mini', price: 28 },
        { ...products.find(p => p.slug === 'advanced-repair-serum'), name: 'Advanced Repair Serum Mini', price: 45 },
        { ...products.find(p => p.slug === 'vitality-barrier-cream'), name: 'Vitality Barrier Cream Mini', price: 35 },
        { ...products.find(p => p.slug === 'midnight-recovery-oil'), name: 'Midnight Recovery Oil Mini', price: 48 },
    ].filter(p => p && p.slug);

    return (
        <main>
            <section className={styles.hero}>
                <h1 className={styles.heroTitle}>Travel Minis</h1>
                <p className={styles.heroSubtitle}>
                    Take your ritual on the go with TSA-friendly travel sizes. Perfect for trying
                    before committing to full size or maintaining your ritual while traveling.
                </p>
            </section>

            <section className={styles.contentSection}>
                <p className={styles.sectionLabel}>RITUALS ON THE GO</p>
                <h2 className={styles.sectionTitle}>Why Travel Minis?</h2>
                <p className={styles.sectionText}>
                    Don't compromise your skincare routine while traveling. Our travel minis deliver the same
                    potent formulas in TSA-friendly sizes, so your skin stays consistent no matter where you go.
                </p>

                <div className={styles.productsGrid}>
                    {travelProducts.map((product, index) => product && product.image && (
                        <div key={index} className={styles.productCard}>
                            <Image
                                src={product.image}
                                alt={product.name}
                                width={250}
                                height={300}
                                className={styles.productImage}
                            />
                            <h3 className={styles.productName}>{product.name}</h3>
                            <p className={styles.productPrice}>${product.price}</p>
                            <p style={{ fontSize: '0.875rem', color: '#666', marginBottom: '1.5rem' }}>
                                15ml • TSA Approved
                            </p>
                            <Link href={`/products/${product.slug}`} className={styles.productButton}>
                                Shop Mini
                            </Link>
                        </div>
                    ))}
                </div>
            </section>

            <section className={styles.stepsSection}>
                <div className={styles.contentSection}>
                    <h2 className={styles.sectionTitle}>Perfect For</h2>
                    <ul className={styles.stepsList}>
                        <li className={styles.stepItem}>
                            <div className={styles.stepNumber}>✈️</div>
                            <div className={styles.stepContent}>
                                <h3>Travel</h3>
                                <p>All minis are under 3.4oz (100ml) for hassle-free air travel.</p>
                            </div>
                        </li>
                        <li className={styles.stepItem}>
                            <div className={styles.stepNumber}>🎒</div>
                            <div className={styles.stepContent}>
                                <h3>Gym & On-the-Go</h3>
                                <p>Keep your ritual consistent even when you're out and about.</p>
                            </div>
                        </li>
                        <li className={styles.stepItem}>
                            <div className={styles.stepNumber}>🧪</div>
                            <div className={styles.stepContent}>
                                <h3>Try Before Full Size</h3>
                                <p>Test our formulas at a lower price point before investing in full sizes.</p>
                            </div>
                        </li>
                        <li className={styles.stepItem}>
                            <div className={styles.stepNumber}>🎁</div>
                            <div className={styles.stepContent}>
                                <h3>Perfect Gifts</h3>
                                <p>Introduce friends to Ora Essence with thoughtful mini collections.</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>

            <section className={styles.contentSection} style={{ background: '#f9f9f9', padding: '4rem 2rem', marginTop: 0 }}>
                <h2 className={styles.sectionTitle}>Travel Set</h2>
                <p className={styles.sectionText}>
                    Get all four essentials in one convenient travel set for $135 (save $21)
                </p>
                <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                    <Link href="/products" className={styles.productButton} style={{ fontSize: '1rem', padding: '1rem 2.5rem' }}>
                        Shop Travel Set
                    </Link>
                </div>
            </section>

            <section className={styles.ctaSection}>
                <h2 className={styles.ctaTitle}>Build Your Travel Kit</h2>
                <p className={styles.ctaText}>
                    Not sure which minis you need? Take our quiz to get personalized recommendations.
                </p>
                <Link href="/quiz" className={styles.ctaButton}>
                    Take the Quiz
                </Link>
            </section>
        </main>
    );
}
