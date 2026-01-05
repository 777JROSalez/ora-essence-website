import Image from 'next/image';
import { notFound } from 'next/navigation';
import { products } from '../../data/products';
import styles from './ProductDetail.module.css';
import PurchaseOptions from '../../components/PurchaseOptions';
import BundleSection from '../../components/BundleSection';
import ProductTabs from '../../components/ProductTabs';
import ReviewSystem from '../../components/reviews/ReviewSystem';

export function generateStaticParams() {
    return products.map((product) => ({
        slug: product.slug,
    }));
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const product = products.find((p) => p.slug === slug);

    if (!product) {
        notFound();
    }

    return (
        <main className={styles.container}>
            <div className={styles.gallery}>
                <div className={styles.mainImage}>
                    <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        priority
                    />
                </div>
            </div>

            <div className={styles.info}>
                <span className={styles.category}>{product.category}</span>
                <h1 className={styles.title}>{product.name}</h1>
                <span className={styles.price}>${product.price}</span>

                <p className={styles.description}>
                    {product.description}
                </p>

                <div className={styles.perks}>
                    <div className={styles.perk}>
                        <span>🌿 100% Natural</span>
                    </div>
                    <div className={styles.perk}>
                        <span>🐰 Cruelty Free</span>
                    </div>
                </div>

                <div className={styles.actions}>
                    <PurchaseOptions product={product} />
                </div>

                <BundleSection currentProduct={product} />
            </div>

            <ProductTabs product={product} />

            <ReviewSystem productId={product.id} />

        </main>
    );
}
