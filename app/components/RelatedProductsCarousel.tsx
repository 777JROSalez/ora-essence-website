'use client';

import { useRef } from 'react';
import { products, Product } from '../data/products';
import ProductCard from './ProductCard';
import styles from './RelatedProductsCarousel.module.css';

interface RelatedProductsCarouselProps {
    relatedProductIds: string[];
}

export default function RelatedProductsCarousel({ relatedProductIds }: RelatedProductsCarouselProps) {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const relatedProducts = products.filter(p => relatedProductIds.includes(p.id));

    if (relatedProducts.length === 0) return null;

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const scrollAmount = 350;
            const newScrollPosition = scrollContainerRef.current.scrollLeft +
                (direction === 'right' ? scrollAmount : -scrollAmount);
            scrollContainerRef.current.scrollTo({
                left: newScrollPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.heading}>Use It With</h2>

                <div className={styles.carouselWrapper}>
                    <button
                        className={`${styles.arrow} ${styles.arrowLeft}`}
                        onClick={() => scroll('left')}
                        aria-label="Scroll left"
                    >
                        ‹
                    </button>

                    <div className={styles.carousel} ref={scrollContainerRef}>
                        {relatedProducts.map((product) => (
                            <div key={product.id} className={styles.cardWrapper}>
                                <ProductCard product={product} compact />
                            </div>
                        ))}
                    </div>

                    <button
                        className={`${styles.arrow} ${styles.arrowRight}`}
                        onClick={() => scroll('right')}
                        aria-label="Scroll right"
                    >
                        ›
                    </button>
                </div>
            </div>
        </section>
    );
}
