import Link from 'next/link';
import Image from 'next/image';
import styles from '../../components/LandingPage.module.css';

export default function DiscoveryKitsPage() {
    const kits = [
        {
            name: 'Morning Ritual Kit',
            price: 198,
            image: '/images/advanced_repair_serum.png',
            description: 'Complete AM routine with cleanser, toner, serum, and moisturizer',
            saves: '$45'
        },
        {
            name: 'Evening Ritual Kit',
            price: 225,
            image: '/images/midnight_recovery_oil.png',
            description: 'Complete PM routine with double cleanse, exfoliator, and recovery oils',
            saves: '$52'
        },
        {
            name: 'Complete Ritual Collection',
            price: 385,
            image: '/images/vitality_barrier_cream.png',
            description: 'Full morning + evening routine for total skin transformation',
            saves: '$112'
        },
    ];

    return (
        <main>
            <section className={styles.hero}>
                <h1 className={styles.heroTitle}>Discovery Kits</h1>
                <p className={styles.heroSubtitle}>
                    Start your journey with our expertly curated ritual kits. Each collection is designed
                    to work synergistically for maximum results.
                </p>
            </section>

            <section className={styles.contentSection}>
                <p className={styles.sectionLabel}>CURATED COLLECTIONS</p>
                <h2 className={styles.sectionTitle}>Why Choose a Kit?</h2>
                <p className={styles.sectionText}>
                    Our discovery kits take the guesswork out of building your ritual. Each product is carefully
                    selected to complement the others, ensuring optimal results. Plus, you save significantly
                    compared to buying individual products.
                </p>

                <div className={styles.productsGrid}>
                    {kits.map((kit, index) => (
                        <div key={index} className={styles.productCard}>
                            <Image
                                src={kit.image}
                                alt={kit.name}
                                width={250}
                                height={300}
                                className={styles.productImage}
                            />
                            <h3 className={styles.productName}>{kit.name}</h3>
                            <p className={styles.productPrice}>${kit.price}</p>
                            <p style={{ color: '#28a745', fontWeight: '600', marginBottom: '1rem' }}>
                                Save {kit.saves}
                            </p>
                            <p style={{ fontSize: '0.95rem', color: '#666', marginBottom: '1.5rem', lineHeight: '1.5' }}>
                                {kit.description}
                            </p>
                            <Link href="/products" className={styles.productButton}>
                                Shop Now
                            </Link>
                        </div>
                    ))}
                </div>
            </section>

            <section className={styles.stepsSection}>
                <div className={styles.contentSection}>
                    <h2 className={styles.sectionTitle}>Kit Benefits</h2>
                    <ul className={styles.stepsList}>
                        <li className={styles.stepItem}>
                            <div className={styles.stepNumber}>✓</div>
                            <div className={styles.stepContent}>
                                <h3>Maximum Savings</h3>
                                <p>Save up to $112 compared to purchasing products individually.</p>
                            </div>
                        </li>
                        <li className={styles.stepItem}>
                            <div className={styles.stepNumber}>✓</div>
                            <div className={styles.stepContent}>
                                <h3>Expertly Curated</h3>
                                <p>Each kit is formulated by our botanical chemists for synergistic results.</p>
                            </div>
                        </li>
                        <li className={styles.stepItem}>
                            <div className={styles.stepNumber}>✓</div>
                            <div className={styles.stepContent}>
                                <h3>Complete Routine</h3>
                                <p>Everything you need in one purchase—no guesswork required.</p>
                            </div>
                        </li>
                        <li className={styles.stepItem}>
                            <div className={styles.stepNumber}>✓</div>
                            <div className={styles.stepContent}>
                                <h3>Free Shipping</h3>
                                <p>All discovery kits qualify for complimentary shipping.</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>

            <section className={styles.ctaSection}>
                <h2 className={styles.ctaTitle}>Not Sure Which Kit?</h2>
                <p className={styles.ctaText}>
                    Take our personalized skin quiz and we'll recommend the perfect discovery kit for your needs.
                </p>
                <Link href="/quiz" className={styles.ctaButton}>
                    Take the Quiz
                </Link>
            </section>
        </main>
    );
}
