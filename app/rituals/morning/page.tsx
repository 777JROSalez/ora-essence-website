import Link from 'next/link';
import Image from 'next/image';
import { products } from '../../data/products';
import styles from '../../components/LandingPage.module.css';

export default function MorningRitualPage() {
    const morningProducts = [
        products.find(p => p.slug === 'regenerating-cleanser'),
        products.find(p => p.slug === 'revitalizing-toner'),
        products.find(p => p.slug === 'advanced-repair-serum'),
        products.find(p => p.slug === 'vitality-barrier-cream'),
    ].filter(Boolean);

    return (
        <main>
            <section className={styles.hero}>
                <h1 className={styles.heroTitle}>Morning Glow Ritual</h1>
                <p className={styles.heroSubtitle}>
                    Start your day with a refreshing ritual that prepares your skin for environmental
                    stressors while delivering lasting hydration and radiance.
                </p>
            </section>

            <section className={styles.stepsSection}>
                <div className={styles.contentSection}>
                    <p className={styles.sectionLabel}>☀️ YOUR AM ROUTINE</p>
                    <h2 className={styles.sectionTitle}>The 4-Step Morning Ritual</h2>
                    <p className={styles.sectionText}>
                        Our morning ritual is designed to awaken, protect, and prep your skin for the day ahead.
                        Each step builds upon the last to deliver compounding benefits.
                    </p>

                    <ul className={styles.stepsList}>
                        <li className={styles.stepItem}>
                            <div className={styles.stepNumber}>1</div>
                            <div className={styles.stepContent}>
                                <h3>Cleanse</h3>
                                <p>
                                    Gently remove overnight impurities and excess oils with our Regenerating Cleanser.
                                    This pH-balanced formula cleanses without stripping, leaving skin fresh and ready
                                    to absorb active ingredients.
                                </p>
                            </div>
                        </li>
                        <li className={styles.stepItem}>
                            <div className={styles.stepNumber}>2</div>
                            <div className={styles.stepContent}>
                                <h3>Prep & Hydrate</h3>
                                <p>
                                    Balance skin's pH and deliver a first layer of hydration with Revitalizing Toner.
                                    This essential step preps skin to absorb serums more effectively while providing
                                    soothing botanicals.
                                </p>
                            </div>
                        </li>
                        <li className={styles.stepItem}>
                            <div className={styles.stepNumber}>3</div>
                            <div className={styles.stepContent}>
                                <h3>Treat</h3>
                                <p>
                                    Target specific concerns with our Advanced Repair Serum. Packed with high-performance
                                    actives, this lightweight serum penetrates deeply to address signs of aging, dullness,
                                    and uneven texture.
                                </p>
                            </div>
                        </li>
                        <li className={styles.stepItem}>
                            <div className={styles.stepNumber}>4</div>
                            <div className={styles.stepContent}>
                                <h3>Protect & Glow</h3>
                                <p>
                                    Lock in all previous layers with Vitality Barrier Cream. This protective moisturizer
                                    strengthens your skin's barrier, provides all-day hydration, and creates the perfect
                                    canvas for makeup application.
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>

            <section className={styles.contentSection}>
                <p className={styles.sectionLabel}>SHOP THE RITUAL</p>
                <h2 className={styles.sectionTitle}>Morning Essentials</h2>
                <div className={styles.productsGrid}>
                    {morningProducts.map((product) => product && (
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
                <h2 className={styles.ctaTitle}>Not Sure What You Need?</h2>
                <p className={styles.ctaText}>
                    Take our personalized skin quiz to discover the perfect morning routine for your unique skin needs.
                </p>
                <Link href="/quiz" className={styles.ctaButton}>
                    Take the Quiz
                </Link>
            </section>
        </main>
    );
}
