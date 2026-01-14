import Link from 'next/link';
import Image from 'next/image';
import { products } from '../../data/products';
import styles from '../../components/LandingPage.module.css';

export default function BlemishesPage() {
    const recommendedProducts = [
        products.find(p => p.slug === 'purifying-cleanser'),
        products.find(p => p.slug === 'regenerating-cleanser'),
        products.find(p => p.slug === 'diamond-dust-exfoliator'),
        products.find(p => p.slug === 'advanced-repair-serum'),
    ].filter(Boolean);

    return (
        <main>
            <section className={styles.hero}>
                <h1 className={styles.heroTitle}>Blemishes & Breakouts Solutions</h1>
                <p className={styles.heroSubtitle}>
                    Clear and prevent breakouts with purifying formulas that balance oil production without over-drying.
                </p>
            </section>

            <section className={styles.contentSection}>
                <p className={styles.sectionLabel}>UNDERSTANDING BREAKOUTS</p>
                <h2 className={styles.sectionTitle}>The Problem</h2>
                <p className={styles.sectionText}>
                    Blemishes occur when pores become clogged with excess oil, dead skin cells, and bacteria.
                    Inflammation follows, creating painful, visible breakouts.
                </p>
            </section>

            <section className={styles.stepsSection}>
                <div className={styles.contentSection}>
                    <h2 className={styles.sectionTitle}>Our Solution</h2>
                    <ul className={styles.stepsList}>
                        <li className={styles.stepItem}>
                            <div className={styles.stepNumber}>1</div>
                            <div className={styles.stepContent}>
                                <h3>Purify</h3>
                                <p>Salicylic acid and tea tree oil penetrate pores to clear congestion.</p>
                            </div>
                        </li>
                        <li className={styles.stepItem}>
                            <div className={styles.stepNumber}>2</div>
                            <div className={styles.stepContent}>
                                <h3>Balance</h3>
                                <p>Niacinamide regulates sebum production without stripping skin.</p>
                            </div>
                        </li>
                        <li className={styles.stepItem}>
                            <div className={styles.stepNumber}>3</div>
                            <div className={styles.stepContent}>
                                <h3>Calm</h3>
                                <p>Anti-inflammatory botanicals soothe redness and prevent scarring.</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>

            <section className={styles.contentSection}>
                <h2 className={styles.sectionTitle}>Products for Clear Skin</h2>
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
