import Link from 'next/link';
import Image from 'next/image';
import { products, Product } from '../data/products';
import styles from './LandingPage.module.css';

interface ProductListingPageProps {
    title: string;
    subtitle: string;
    filterFn: (product: Product) => boolean;
    sectionLabel?: string;
    sectionTitle?: string;
    sectionText?: string;
    showQuizCTA?: boolean;
}

export default function ProductListingPage({
    title,
    subtitle,
    filterFn,
    sectionLabel = 'CURATED FOR YOU',
    sectionTitle = 'Our Collection',
    sectionText,
    showQuizCTA = true
}: ProductListingPageProps) {
    const filteredProducts = products.filter(filterFn);

    return (
        <main>
            <section className={styles.hero}>
                <h1 className={styles.heroTitle}>{title}</h1>
                <p className={styles.heroSubtitle}>
                    {subtitle}
                </p>
            </section>

            {sectionText && (
                <section className={styles.contentSection}>
                    <p className={styles.sectionLabel}>{sectionLabel}</p>
                    <h2 className={styles.sectionTitle}>{sectionTitle}</h2>
                    <p className={styles.sectionText}>
                        {sectionText}
                    </p>
                </section>
            )}

            <section className={styles.contentSection}>
                <p className={styles.sectionLabel}>SHOP THE COLLECTION</p>
                <h2 className={styles.sectionTitle}>
                    {filteredProducts.length} {filteredProducts.length === 1 ? 'Product' : 'Products'}
                </h2>
                <div className={styles.productsGrid}>
                    {filteredProducts.map((product) => (
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

            {showQuizCTA && (
                <section className={styles.ctaSection}>
                    <h2 className={styles.ctaTitle}>Find Your Perfect Match</h2>
                    <p className={styles.ctaText}>
                        Not sure which products are right for you? Take our personalized skin quiz.
                    </p>
                    <Link href="/quiz" className={styles.ctaButton}>
                        Take the Quiz
                    </Link>
                </section>
            )}
        </main>
    );
}
