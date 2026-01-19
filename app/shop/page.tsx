'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { products } from '../data/products';
import Footer from '../components/Footer';
import styles from './Shop.module.css';

export default function ShopPage() {
    const [selectedCategory, setSelectedCategory] = useState('All');

    // Get unique categories
    const categories = ['All', ...Array.from(new Set(products.map(p => p.category)))];

    // Filter products based on selected category
    const filteredProducts = selectedCategory === 'All'
        ? products
        : products.filter(p => p.category === selectedCategory);

    return (
        <div className={styles.container}>

            <div className={styles.hero}>
                <h1 className={styles.title}>Shop All Products</h1>
                <p className={styles.subtitle}>
                    Discover our complete collection of botanical luxury skincare.
                    <br />
                    Every product is crafted with pure, potent ingredients sourced from around the world.
                </p>
            </div>

            {/* Category Filter */}
            <div className={styles.filterContainer}>
                <div className={styles.filterInner}>
                    {categories.map(category => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`${styles.filterButton} ${selectedCategory === category ? styles.filterButtonActive : ''
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>

            {/* Products Grid */}
            <div className={styles.productsSection}>
                <div className={styles.productsGrid}>
                    {filteredProducts.map(product => (
                        <Link
                            href={`/products/${product.slug}`}
                            key={product.id}
                            className={styles.productCard}
                        >
                            {product.bestSeller && (
                                <div className={styles.badge}>Best Seller</div>
                            )}

                            <div className={styles.imageContainer}>
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className={styles.productImage}
                                />
                            </div>

                            <div className={styles.productInfo}>
                                <div className={styles.category}>{product.category}</div>
                                <h3 className={styles.productName}>{product.name}</h3>

                                {product.benefitLabel && (
                                    <p className={styles.benefitLabel}>{product.benefitLabel}</p>
                                )}

                                <p className={styles.description}>{product.description}</p>

                                <div className={styles.priceContainer}>
                                    <div className={styles.price}>${product.price}</div>
                                    {product.subscribePrice && (
                                        <div className={styles.subscribePrice}>
                                            or ${product.subscribePrice} with subscription
                                        </div>
                                    )}
                                </div>

                                {product.rating && (
                                    <div className={styles.rating}>
                                        <div className={styles.stars}>
                                            {'★'.repeat(Math.floor(product.rating))}
                                            {'☆'.repeat(5 - Math.floor(product.rating))}
                                        </div>
                                        <span className={styles.reviewCount}>
                                            ({product.reviewCount?.toLocaleString()} reviews)
                                        </span>
                                    </div>
                                )}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            <Footer />
        </div>
    );
}
