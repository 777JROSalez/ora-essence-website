import Link from 'next/link';
import Image from 'next/image';
import { products } from '../../data/products';
import styles from '../../components/LandingPage.module.css';

export default function DrynessPage() {
    const recommendedProducts = [
        products.find(p => p.slug === 'revitalizing-toner'),
        products.find(p => p.slug === 'vitality-barrier-cream'),
        products.find(p => p.slug === 'radiant-glow-body-butter'),
        products.find(p => p.slug === 'renewal-face-oil'),
    ].filter(Boolean);

    return (
        <main>
            <section className={styles.hero}>
                <h1 className={styles.heroTitle}>Dryness Solutions</h1>
                <p className={styles.heroSubtitle}>
                    Restore your skin's moisture barrier with deeply hydrating formulas that lock in
                    lasting comfort and suppleness.
                </p>
            </section>

            <section className={styles.contentSection}>
                <p className={styles.sectionLabel}>UNDERSTANDING DRYNESS</p>
                <h2 className={styles.sectionTitle}>The Problem</h2>
                <p className={styles.sectionText}>
                    Dry skin occurs when your moisture barrier is compromised, allowing water to escape.
                    This leads to tightness, flaking, and sensitivity. Environmental factors, harsh products,
                    and aging all contribute to moisture loss.
                </p>
            </section>

            <section className={styles.stepsSection}>
                <div className={styles.contentSection}>
                    <p className={styles.sectionLabel}>ORA ESSENCE APPROACH</p>
                    <h2 className={styles.sectionTitle}>Our Solution</h2>
                    <ul className={styles.stepsList}>
                        <li className={styles.stepItem}>
                            <div className={styles.stepNumber}>1</div>
                            <div className={styles.stepContent}>
                                <h3>Barrier Repair</h3>
                                <p>
                                    Ceramides and fatty acids strengthen your skin's natural barrier, preventing
                                    moisture loss and protecting against environmental damage.
                                </p>
                            </div>
                        </li>
                        <li className={styles.stepItem}>
                            <div className={styles.stepNumber}>2</div>
                            <div className={styles.stepContent}>
                                <h3>Deep Hydration</h3>
                                <p>
                                    Hyaluronic acid and glycerin draw moisture deep into skin layers, providing
                                    long-lasting hydration that plumps and smooths.
                                </p>
                            </div>
                        </li>
                        <li className={styles.stepItem}>
                            <div className={styles.stepNumber}>3</div>
                            <div className={styles.stepContent}>
                                <h3>Moisture Locking</h3>
                                <p>
                                    Nourishing oils and butters seal in hydration,creating a protective layer
                                    that keeps skin comfortable all day.
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>

            <section className={styles.contentSection}>
                <p className={styles.sectionLabel}>RECOMMENDED FOR YOU</p>
                <h2 className={styles.sectionTitle}>Products for Dry Skin</h2>
                <div className={styles.productsGrid}>
                    {recommendedProducts.map((product) => product && (
                        <div key={product.id} className={styles.productCard}>
                            <Image
                                src={product.image}
                                alt={product.name}
                                width={250}
                                height={300}
                                className={styles.productImage}
                            />
                            <h3 className={styles.productName}>{product.name}</h3>
                            <p className={styles.productPrice}>${product.price}</p>
                            <Link href={`/products/${product.slug}`} className={styles.productButton}>
                                View Product
                            </Link>
                        </div>
                    ))}
                </div>
            </section>

            <section className={styles.ctaSection}>
                <h2 className={styles.ctaTitle}>Get Personalized Recommendations</h2>
                <p className={styles.ctaText}>
                    Take our skin quiz to discover the perfect routine for your specific dryness concerns.
                </p>
                <Link href="/quiz" className={styles.ctaButton}>
                    Take the Quiz
                </Link>
            </section>
        </main>
    );
}
