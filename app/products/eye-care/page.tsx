import Link from 'next/link';
import Image from 'next/image';
import { products } from '../../data/products';
import styles from '../../components/LandingPage.module.css';

export default function EyeCarePage() {
    // Show face oils and serums as related products since no dedicated eye care products exist yet
    const relatedProducts = products.filter(p =>
        p.category === 'Face Oil' ||
        p.category === 'Serum' ||
        p.slug === 'vitality-barrier-cream'
    ).slice(0, 4);

    return (
        <main>
            <section className={styles.hero}>
                <h1 className={styles.heroTitle}>Eye Care</h1>
                <p className={styles.heroSubtitle}>
                    Dedication to the delicate eye area. Specialized treatments coming soon.
                </p>
            </section>

            <section className={styles.contentSection}>
                <p className={styles.sectionLabel}>COMING SOON</p>
                <h2 className={styles.sectionTitle}>Dedicated Eye Care Collection</h2>
                <p className={styles.sectionText}>
                    We're currently developing a comprehensive eye care line featuring targeted treatments
                    for fine lines, dark circles, and puffiness. In the meantime, many of our facial serums
                    and oils are gentle enough for the delicate eye area.
                </p>
            </section>

            <section className={styles.contentSection}>
                <p className={styles.sectionLabel}>GENTLE FORMULAS</p>
                <h2 className={styles.sectionTitle}>Safe for Delicate Skin</h2>
                <div className={styles.productsGrid}>
                    {relatedProducts.map((product) => (
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
                <h2 className={styles.ctaTitle}>Get Notified</h2>
                <p className={styles.ctaText}>
                    Be the first to know when our dedicated eye care collection launches.
                </p>
                <Link href="/subscribe" className={styles.ctaButton}>
                    Subscribe for Updates
                </Link>
            </section>
        </main>
    );
}
