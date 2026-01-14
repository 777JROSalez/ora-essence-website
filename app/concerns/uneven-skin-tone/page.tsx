import Link from 'next/link';
import Image from 'next/image';
import { products } from '../../data/products';
import styles from '../../components/LandingPage.module.css';

export default function UnevenSkinTonePage() {
    const recommendedProducts = [
        products.find(p => p.slug === 'advanced-repair-serum'),
        products.find(p => p.slug === 'diamond-dust-exfoliator'),
        products.find(p => p.slug === 'revitalizing-toner'),
        products.find(p => p.slug === 'renewal-face-oil'),
    ].filter(Boolean);

    return (
        <main>
            <section className={styles.hero}>
                <h1 className={styles.heroTitle}>Uneven Skin Tone Solutions</h1>
                <p className={styles.heroSubtitle}>
                    Achieve a luminous, even complexion with brightening actives that fade dark spots
                    and reveal your skin's natural radiance.
                </p>
            </section>

            <section className={styles.contentSection}>
                <p className={styles.sectionLabel}>UNDERSTANDING HYPERPIGMENTATION</p>
                <h2 className={styles.sectionTitle}>The Problem</h2>
                <p className={styles.sectionText}>
                    Uneven skin tone, dark spots, and hyperpigmentation occur when melanin production becomes
                    irregular. Sun exposure, inflammation, and hormonal changes all contribute to discoloration.
                </p>
            </section>

            <section className={styles.stepsSection}>
                <div className={styles.contentSection}>
                    <h2 className={styles.sectionTitle}>Our Solution</h2>
                    <ul className={styles.stepsList}>
                        <li className={styles.stepItem}>
                            <div className={styles.stepNumber}>1</div>
                            <div className={styles.stepContent}>
                                <h3>Brightening Actives</h3>
                                <p>Vitamin C and niacinamide work to inhibit melanin production and fade existing dark spots.</p>
                            </div>
                        </li>
                        <li className={styles.stepItem}>
                            <div className={styles.stepNumber}>2</div>
                            <div className={styles.stepContent}>
                                <h3>Gentle Exfoliation</h3>
                                <p>AHAs accelerate cell turnover, revealing fresh skin and fading hyperpigmentation over time.</p>
                            </div>
                        </li>
                        <li className={styles.stepItem}>
                            <div className={styles.stepNumber}>3</div>
                            <div className={styles.stepContent}>
                                <h3>Protection</h3>
                                <p>Antioxidants protect against future damage and prevent new dark spots from forming.</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>

            <section className={styles.contentSection}>
                <h2 className={styles.sectionTitle}>Products for Even Tone</h2>
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
