'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './ProductCarousel.module.css';
import ProductCard from './ProductCard';
import { products, Product } from '../data/products';

interface ProductCarouselProps {
    title: string;
    categories?: string[];
}

export default function ProductCarousel({
    title,
    categories = ['Best Sellers', 'Cleansers', 'Serums', 'Moisturizers']
}: ProductCarouselProps) {
    const [activeCategory, setActiveCategory] = useState(categories[0]);

    // Filter products by category (simplified - you'd want to add category field to products)
    const getFilteredProducts = (category: string): Product[] => {
        if (category === 'Best Sellers') {
            return products.slice(0, 4);
        }
        // For now, return first 4 products for all categories
        // In a real app, you'd filter by actual category
        return products.slice(0, 4);
    };

    const filteredProducts = getFilteredProducts(activeCategory);

    return (
        <section className={styles.carouselSection}>
            <div className={styles.header}>
                <h2 className={styles.title}>{title}</h2>

                <div className={styles.tabs}>
                    {categories.map((category) => (
                        <button
                            key={category}
                            className={`${styles.tab} ${activeCategory === category ? styles.active : ''}`}
                            onClick={() => setActiveCategory(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>

            <div className={styles.productsWrapper}>
                <div className={styles.productsGrid}>
                    {filteredProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>

            <div className={styles.footer}>
                <Link href="/products" className={styles.shopAll}>
                    SHOP ALL
                </Link>
            </div>
        </section>
    );
}
