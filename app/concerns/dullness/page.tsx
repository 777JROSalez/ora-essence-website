import Link from 'next/link';
import Image from 'next/image';
import { products } from '../../data/products';
import styles from '../../components/LandingPage.module.css';

export default function DullnessPage() {
    const recommendedProducts = [
        products.find(p => p.slug === 'diamond-dust-exfoliator'),
        products.find(p => p.slug === 'advanced-repair-serum'),
        products.find(p => p.slug === 'renewal-face-oil'),
        products.find(p => p.slug === 'revitalizing-toner'),
    ].filter(Boolean);

    return (
        <main>
            <section className={styles.hero}>
                <h1 className={styles.heroTitle}>Dullness Solutions</h1>
                <p className={styles.heroSubtitle}>
                    Revive your radiance with brightening formulas that reveal a glowing, luminous complexion.
                </p>
            </section>

            <section className={styles.contentSection}>
                <p className={styles.sectionLabel}>UNDERSTANDING DULL SKIN</p>
                <h2 className={styles.sectionTitle}>The Problem</h2>
                <p className={styles.sectionText}>
                    Dull skin lacks radiance due to dead cell buildup, dehydration, and sluggish circulation. This creates a tired, lackluster appearance.
                </p>
            </section>

            <section className={styles.stepsSection}>
                <div className={styles.contentSection}>
                    <h2 className={styles.sectionTitle}>Our Solution</h2>
                    <ul className={styles.stepsList}>
                        <li className={styles.stepItem}>
                            <div className={styles.stepNumber}>1</div>
                            <div className={styles.stepContent}>
                                <h3>Exfoliate</h3>
                                <p>AHAs dissolve dead cells to reveal the fresh, glowing skin beneath.</p>
                            </div>
                        </li>
                        <li className={styles.stepItem}>
                            <div className={styles.stepNumber}>2</div>
                            <div className={styles.stepContent}>
                                <h3>Brighten</h3>
                                <p>Vitamin C and botanical extracts illuminate and even out skin tone.</p>
                            </div>
                        </li>
                        <li className={styles.stepItem}>
                            <div className={styles.stepNumber}>3</div>
                            <div className={styles.stepContent}>
                                <h3>Hydrate</h3>
                                <p>Well-hydrated skin reflects light better, creating a natural glow.</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>

            <section className={styles.contentSection}>
                <h2 className={styles.sectionTitle}>Products for Radiant Skin</h2>
                <div className={styles.productsGrid}>
                    {recommendedProducts.map(product => product && (
                        <div key={product.id} className={styles.productCard}>
                            <Image src={product.image} alt={product.name} width={250} height={300} className={styles.productImage} />
                            <h3 className={styles.productName}>{product.name}</h3>
                            <p className={styles.productPrice}>${product.price}</p>
                            <Link href={`/products/${product.slug}`} className={styles.productButton}>View Product</Link>
                        </div>
                    ))}
                </div>
            </section>

            <section className={styles.ctaSection}>
                <h2 className={styles.ctaTitle}>Get Personalized Recommendations</h2>
                <Link href="/quiz" className={styles.ctaButton}>Take the Quiz</Link>
            </section>
        </main>
    );
}
