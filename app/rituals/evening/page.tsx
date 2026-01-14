import Link from 'next/link';
import Image from 'next/image';
import { products } from '../../data/products';
import styles from '../../components/LandingPage.module.css';

export default function EveningRitualPage() {
    const eveningProducts = [
        products.find(p => p.slug === 'purifying-cleanser'),
        products.find(p => p.slug === 'diamond-dust-exfoliator'),
        products.find(p => p.slug === 'renewal-face-oil'),
        products.find(p => p.slug === 'midnight-recovery-oil'),
    ].filter(Boolean);

    return (
        <main>
            <section className={styles.hero}>
                <h1 className={styles.heroTitle}>Evening Repair Ritual</h1>
                <p className={styles.heroSubtitle}>
                    Wind down with a restorative evening ritual that supports your skin's natural
                    overnight repair process for visible transformation by morning.
                </p>
            </section>

            <section className={styles.stepsSection}>
                <div className={styles.contentSection}>
                    <p className={styles.sectionLabel}>🌙 YOUR PM ROUTINE</p>
                    <h2 className={styles.sectionTitle}>The 4-Step Evening Ritual</h2>
                    <p className={styles.sectionText}>
                        Your skin repairs itself while you sleep. Our evening ritual maximizes this natural
                        process with potent actives that work overnight for transformative results.
                    </p>

                    <ul className={styles.stepsList}>
                        <li className={styles.stepItem}>
                            <div className={styles.stepNumber}>1</div>
                            <div className={styles.stepContent}>
                                <h3>Double Cleanse</h3>
                                <p>
                                    Remove makeup, SPF, and daily impurities with our Purifying Cleanser. The most
                                    important step of your evening routine removes everything that accumulated during
                                    the day, allowing your skin to breathe.
                                </p>
                            </div>
                        </li>
                        <li className={styles.stepItem}>
                            <div className={styles.stepNumber}>2</div>
                            <div className={styles.stepContent}>
                                <h3>Exfoliate (2-3x Weekly)</h3>
                                <p>
                                    Polish away dead skin cells with Diamond Dust Exfoliator. This gentle yet effective
                                    exfoliant reveals fresh, glowing skin and enhances the absorption of your treatment
                                    products. Use 2-3 times per week, not daily.
                                </p>
                            </div>
                        </li>
                        <li className={styles.stepItem}>
                            <div className={styles.stepNumber}>3</div>
                            <div className={styles.stepContent}>
                                <h3>Nourish</h3>
                                <p>
                                    Feed your skin with Renewal Face Oil. Rich in omega fatty acids and antioxidants,
                                    this luxurious oil deeply nourishes, repairs barrier damage, and provides essential
                                    nutrients for overnight regeneration.
                                </p>
                            </div>
                        </li>
                        <li className={styles.stepItem}>
                            <div className={styles.stepNumber}>4</div>
                            <div className={styles.stepContent}>
                                <h3>Overnight Recovery</h3>
                                <p>
                                    Seal everything in with Midnight Recovery Oil. This potent overnight treatment
                                    works while you sleep to repair, regenerate, and transform. Wake up to visibly
                                    refreshed, glowing skin.
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>

            <section className={styles.contentSection}>
                <p className={styles.sectionLabel}>SHOP THE RITUAL</p>
                <h2 className={styles.sectionTitle}>Evening Essentials</h2>
                <div className={styles.productsGrid}>
                    {eveningProducts.map((product) => product && (
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
                    Take our personalized skin quiz to discover the perfect evening routine for your unique skin needs.
                </p>
                <Link href="/quiz" className={styles.ctaButton}>
                    Take the Quiz
                </Link>
            </section>
        </main>
    );
}
