import Link from 'next/link';
import Image from 'next/image';
import { products } from '../../data/products';
import styles from '../../components/LandingPage.module.css';

export default function AgingPage() {
    const recommendedProducts = [
        products.find(p => p.slug === 'advanced-repair-serum'),
        products.find(p => p.slug === 'midnight-recovery-oil'),
        products.find(p => p.slug === 'renewal-face-oil'),
        products.find(p => p.slug === 'vitality-barrier-cream'),
    ].filter(Boolean);

    return (
        <main>
            <section className={styles.hero}>
                <h1 className={styles.heroTitle}>Signs of Aging Solutions</h1>
                <p className={styles.heroSubtitle}>
                    Turn back the clock with powerful anti-aging formulas that target fine lines, wrinkles, and loss of firmness.
                </p>
            </section>

            <section className={styles.contentSection}>
                <p className={styles.sectionLabel}>UNDERSTANDING AGING SKIN</p>
                <h2 className={styles.sectionTitle}>The Problem</h2>
                <p className={styles.sectionText}>
                    As we age, collagen and elastin production slow, leading to fine lines, wrinkles, and sagging. Environmental damage accelerates these visible signs.
                </p>
            </section>

            <section className={styles.stepsSection}>
                <div className={styles.contentSection}>
                    <h2 className={styles.sectionTitle}>Our Solution</h2>
                    <ul className={styles.stepsList}>
                        <li className={styles.stepItem}>
                            <div className={styles.stepNumber}>1</div>
                            <div className={styles.stepContent}>
                                <h3>Boost Collagen</h3>
                                <p>Retinol and peptides stimulate collagen production to firm and plump skin.</p>
                            </div>
                        </li>
                        <li className={styles.stepItem}>
                            <div className={styles.stepNumber}>2</div>
                            <div className={styles.stepContent}>
                                <h3>Antioxidant Protection</h3>
                                <p>Vitamins C and E neutralize free radicals that accelerate aging.</p>
                            </div>
                        </li>
                        <li className={styles.stepItem}>
                            <div className={styles.stepNumber}>3</div>
                            <div className={styles.stepContent}>
                                <h3>Deep Nourishment</h3>
                                <p>Rich oils and butters provide intensive hydration for smoother, plumper skin.</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>

            <section className={styles.contentSection}>
                <h2 className={styles.sectionTitle}>Products for Ageless Skin</h2>
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
