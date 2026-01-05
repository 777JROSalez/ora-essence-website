'use client';

import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { Product } from '../data/products';
import styles from './PurchaseOptions.module.css';

export default function PurchaseOptions({ product }: { product: Product }) {
    const { addToCart } = useCart();
    const [purchaseType, setPurchaseType] = useState<'onetime' | 'subscribe'>('onetime');

    const handleAdd = () => {
        if (purchaseType === 'subscribe') {
            // Create a subscription variant
            const subProduct = {
                ...product,
                id: `${product.id}-sub`,
                name: `${product.name} (Subscribe & Save)`,
                price: Math.round(product.price * 0.9) // 10% off
            };
            addToCart(subProduct);
        } else {
            addToCart(product);
        }
    };

    return (
        <div className={styles.container}>
            <div
                className={`${styles.option} ${purchaseType === 'onetime' ? styles.selected : ''}`}
                onClick={() => setPurchaseType('onetime')}
            >
                <div className={styles.radio}>
                    <div className={styles.dot} />
                </div>
                <div className={styles.label}>
                    <span>One-time purchase</span>
                    <span className={styles.price}>${product.price}</span>
                </div>
            </div>

            <div
                className={`${styles.option} ${purchaseType === 'subscribe' ? styles.selected : ''}`}
                onClick={() => setPurchaseType('subscribe')}
            >
                <div className={styles.radio}>
                    <div className={styles.dot} />
                </div>
                <div className={styles.label}>
                    <span>Subscribe & Save 10%</span>
                    <span className={styles.price}>${Math.round(product.price * 0.9)}</span>
                </div>
            </div>

            <button className="btn-primary" style={{ width: '100%', marginTop: '1rem' }} onClick={handleAdd}>
                {purchaseType === 'subscribe' ? 'Add Subscription to Bag' : 'Add to Bag'}
            </button>

            {purchaseType === 'subscribe' && (
                <p className={styles.subNote}>Auto-delivered every 4 weeks. Cancel anytime.</p>
            )}
        </div>
    );
}
