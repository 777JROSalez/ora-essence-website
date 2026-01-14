import Link from 'next/link';
import Image from 'next/image';
import { products } from '../../data/products';
import styles from '../../components/LandingPage.module.css';

export default function PoresTexturePage() {
    const recommendedProducts = [
        products.find(p => p.slug === 'purifying-cleanser'),
        products.find(p => p.slug === 'diamond-dust-exfoliator'),
        products.find(p => p.slug === 'revitalizing-toner'),
        products.find(p => p.slug === 'advanced-repair-serum'),
    ].filter(Boolean);

    return (
        <main>
            <section className={styles.hero}>
                <h1 className={styles.heroTitle}>Pores & Texture Solutions</h1>
                <p className={styles.heroSubtitle}>
                    Refine and smooth your skin with pore-minimizing formulas that create a flawless,
                    airbrushed finish.
                </p>
            </section>

            <section className={styles.contentSection}>
                <p className={styles.sectionLabel}>UNDERSTANDING PORES & TEXTURE</p>
                <h2 className={styles.sectionTitle}>The Problem</h2>
                <p className={styles.sectionText}>
                    Enlarged pores and rough texture occur when pores become clogged with excess oil and
                    dead skin cells. This stretches pores and creates an uneven surface.
                </p>
            </section>

            <section className={styles.stepsSection}>
                <div className={styles.contentSection}>
                    <h2 className={styles.sectionTitle}>Our Solution</h2>
                    <ul className={styles.stepsList}>
                        <li className={styles.stepItem}>
                            <div className={styles.stepNumber}>1</div>
                            <div className={styles.stepContent}>
                                <h3>Deep Cleansing</h3>
                                <p>Remove impurities that stretch pores and cause congestion.</p>
                            </div>
                        </li>
                        <li className={styles.stepItem}>
                            <div className={styles.stepNumber}>2</div>
                            <div className={styles.stepContent}>
                                <h3>Exfoliation</h3>
                                <p>AHAs and BHAs smooth texture and keep pores clear.</p>
                            </div>
                        </li>
                        <li className={styles.stepItem}>
                            <div className={styles.stepNumber}>3</div>
                            <div className={styles.stepContent}>
                                <h3>Refining</h3>
                                <p>Niacinamide visibly minimizes pore appearance over time.</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>

            <section className={styles.contentSection}>
                <h2 className={styles.sectionTitle}>Products for Refined Skin</h2>
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
