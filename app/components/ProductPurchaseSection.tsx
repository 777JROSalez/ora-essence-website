'use client';

import { useState } from 'react';
import { useCart } from '../context/CartContext';
import styles from './ProductPurchaseSection.module.css';
import { Product, ProductSize } from '../data/products';

interface ProductPurchaseSectionProps {
    product: Product;
}

export default function ProductPurchaseSection({ product }: ProductPurchaseSectionProps) {
    const { addToCart } = useCart();
    const [selectedSize, setSelectedSize] = useState<ProductSize>(
        product.sizes?.[0] || { label: 'One Size', value: 'one-size', price: product.price }
    );
    const [purchaseType, setPurchaseType] = useState<'one-time' | 'subscribe'>('one-time');
    const [deliveryFrequency, setDeliveryFrequency] = useState('2');

    // Calculate Subscribe & Save price as 20% off the selected size price
    const subscribeDiscountRate = 0.20;
    const currentPrice = purchaseType === 'subscribe'
        ? selectedSize.price * (1 - subscribeDiscountRate)
        : selectedSize.price;

    const savings = purchaseType === 'subscribe'
        ? selectedSize.price * subscribeDiscountRate
        : 0;

    return (
        <div className={styles.container}>
            {/* Category & Title */}
            <span className={styles.category}>{product.category}</span>
            <h1 className={styles.title}>{product.name}</h1>

            {/* Rating */}
            {product.rating && product.reviewCount && (
                <div className={styles.rating}>
                    <div className={styles.stars}>
                        {'★'.repeat(Math.floor(product.rating))}
                        {product.rating % 1 >= 0.5 && '☆'}
                    </div>
                    <span className={styles.ratingText}>
                        {product.rating} | {product.reviewCount} reviews
                    </span>
                </div>
            )}

            {/* Description */}
            <p className={styles.description}>{product.description}</p>

            {/* Size Selector */}
            {product.sizes && product.sizes.length > 1 && (
                <div className={styles.sizeSelector}>
                    <label className={styles.selectorLabel}>Size</label>
                    <div className={styles.sizeButtons}>
                        {product.sizes.map((size) => (
                            <button
                                key={size.value}
                                className={`${styles.sizeButton} ${selectedSize.value === size.value ? styles.sizeButtonActive : ''
                                    }`}
                                onClick={() => setSelectedSize(size)}
                            >
                                <span className={styles.sizeLabel}>{size.label}</span>
                                <span className={styles.sizeValue}>{size.value}</span>
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {/* Purchase Type */}
            <div className={styles.purchaseType}>
                <label className={styles.purchaseOption}>
                    <input
                        type="radio"
                        name="purchase-type"
                        value="one-time"
                        checked={purchaseType === 'one-time'}
                        onChange={() => setPurchaseType('one-time')}
                    />
                    <span className={styles.optionContent}>
                        <span className={styles.optionTitle}>One-Time Purchase</span>
                        <span className={styles.optionPrice}>${selectedSize.price.toFixed(2)}</span>
                    </span>
                </label>

                <label className={styles.purchaseOption}>
                    <input
                        type="radio"
                        name="purchase-type"
                        value="subscribe"
                        checked={purchaseType === 'subscribe'}
                        onChange={() => setPurchaseType('subscribe')}
                    />
                    <span className={styles.optionContent}>
                        <span className={styles.optionTitle}>Subscribe & Save</span>
                        <span className={styles.optionPrice}>
                            ${currentPrice.toFixed(2)}
                            {savings > 0 && (
                                <span className={styles.originalPrice}>${selectedSize.price.toFixed(2)}</span>
                            )}
                        </span>
                    </span>
                </label>
            </div>

            {/* Subscription Benefits */}
            {purchaseType === 'subscribe' && (
                <div className={styles.subscriptionBenefits}>
                    <div className={styles.deliveryFrequency}>
                        <label className={styles.frequencyLabel}>Deliver Every:</label>
                        <select
                            className={styles.frequencySelect}
                            value={deliveryFrequency}
                            onChange={(e) => setDeliveryFrequency(e.target.value)}
                        >
                            <option value="1">1 month (Most Popular)</option>
                            <option value="2">2 months</option>
                            <option value="3">3 months</option>
                        </select>
                    </div>

                    <ul className={styles.benefits}>
                        <li>Unlock 15% off your first order</li>
                        <li>Save 20% on all recurring orders</li>
                        <li>Free gift with every recurring subscription</li>
                        <li>Pause, update or cancel anytime</li>
                        <li>Free shipping on every subscription</li>
                    </ul>
                </div>
            )}

            {/* Add to Bag Button */}
            <button
                className={styles.addToBag}
                onClick={() => {
                    // Create a product variant with selected size and type
                    const productToAdd = {
                        ...product,
                        id: `${product.id}-${selectedSize.value}-${purchaseType}`,
                        name: purchaseType === 'subscribe'
                            ? `${product.name} (${selectedSize.label}) - Subscribe & Save`
                            : `${product.name} (${selectedSize.label})`,
                        price: currentPrice
                    };
                    addToCart(productToAdd);
                }}
            >
                ADD TO BAG - ${currentPrice.toFixed(2)}
            </button>

            {/* Product Perks */}
            <div className={styles.perks}>
                <div className={styles.perk}>
                    <span>🌿 100% Natural</span>
                </div>
                <div className={styles.perk}>
                    <span>🐰 Cruelty Free</span>
                </div>
            </div>
        </div>
    );
}
