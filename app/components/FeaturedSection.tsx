'use client';

import Image from 'next/image';
import Link from 'next/link';
import styles from './FeaturedSection.module.css';
import ProductCard from './ProductCard';
import { Product } from '../data/products';

interface FeaturedSectionProps {
    title: string;
    description: string;
    imageSrc: string;
    imageAlt: string;
    imagePosition?: 'left' | 'right';
    products?: Product[];
    ctaText?: string;
    ctaLink?: string;
    badge?: string;
}

export default function FeaturedSection({
    title,
    description,
    imageSrc,
    imageAlt,
    imagePosition = 'left',
    products,
    ctaText,
    ctaLink,
    badge
}: FeaturedSectionProps) {
    const imageContent = (
        <div className={styles.imageWrapper}>
            <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: 'cover' }}
            />
        </div>
    );

    const textContent = (
        <div className={styles.content}>
            {badge && <div className={styles.badge}>{badge}</div>}
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.description}>{description}</p>

            {products && products.length > 0 && (
                <div className={styles.productsGrid}>
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            )}

            {ctaText && ctaLink && (
                <Link href={ctaLink} className={styles.cta}>
                    {ctaText}
                </Link>
            )}
        </div>
    );

    return (
        <section className={`${styles.featuredSection} ${imagePosition === 'right' ? styles.reverse : ''}`}>
            {imagePosition === 'left' ? (
                <>
                    {imageContent}
                    {textContent}
                </>
            ) : (
                <>
                    {textContent}
                    {imageContent}
                </>
            )}
        </section>
    );
}
