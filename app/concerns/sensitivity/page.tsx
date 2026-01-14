import Link from 'next/link';
import Image from 'next/image';
import { products } from '../../data/products';
import styles from '../../components/LandingPage.module.css';

export default function SensitivityPage() {
    const recommendedProducts = [
        products.find(p => p.slug === 'regenerating-cleanser'),
        products.find(p => p.slug === 'vitality-barrier-cream'),
        products.find(p => p.slug === 'renewal-face-oil'),
        products.find(p => p.slug === 'revitalizing-toner'),
    ].filter(Boolean);

    return (
        <main>
            <section className={styles.hero}>
                <h1 className={styles.heroTitle}>Sensitivity & Redness Solutions</h1>
                <p className={styles.heroSubtitle}>
                    Calm and strengthen reactive skin with gentle, soothing formulas that reduce redness and irritation.
                </p>
            </section>

            <section className={styles.contentSection}>
                <p className={styles.sectionLabel}>UNDERSTANDING SENSITIVE SKIN</p>
                <h2 className={styles.sectionTitle}>The Problem</h2>
                <p className={styles.sectionText}>
                    Sensitive skin has a compromised barrier that reacts to triggers like fragrances, weather, and harsh ingredients. This leads to redness, stinging, and discomfort.
                </p>
            </section>

            <section className={styles.stepsSection}>
                <div className={styles.contentSection}>
                    <h2 className={styles.sectionTitle}>Our Solution</h2>
                    <ul className={styles.stepsList}>
                        <li className={styles.stepItem}>
                            <div className={styles.stepNumber}>1</div>
                            <div className={styles.stepContent}>
                                <h3>Soothing Botanicals</h3>
                                <p>Centella asiatica, chamomile, and oat extract calm inflammation and reduce redness.</p>
                            </div>
                        </li>
                        <li className={styles.stepItem}>
                            <div className={styles.stepNumber}>2</div>
                            <div className={styles.stepContent}>
                                <h3>Barrier Repair</h3>
                                <p>Ceramides and fatty acids restore the protective barrier, preventing future reactivity.</p>
                            </div>
                        </li>
                        <li className={styles.stepItem}>
                            <div className={styles.stepNumber}>3</div>
                            <div className={styles.stepContent}>
                                <h3>Gentle Formulas</h3>
                                <p>Free from harsh irritants, our sensitive skin line uses only calming, proven ingredients.</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>

            <section className={styles.contentSection}>
                <h2 className={styles.sectionTitle}>Products for Sensitive Skin</h2>
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
