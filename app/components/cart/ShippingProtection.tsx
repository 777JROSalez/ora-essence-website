'use client';

import { useState } from 'react';
import { useCart } from '../../context/CartContext';
import styles from './ShippingProtection.module.css';

export default function ShippingProtection() {
    const { shippingProtection, toggleShippingProtection } = useCart();

    return (
        <div className={styles.container}>
            <div className={styles.toggleWrapper}>
                <label className={styles.switch}>
                    <input type="checkbox" checked={shippingProtection} onChange={toggleShippingProtection} />
                    <span className={styles.slider}></span>
                </label>
            </div>
            <div className={styles.info}>
                <div className={styles.header}>
                    <strong>Shipping Protection</strong>
                    <span>$2.99</span>
                </div>
                <p className={styles.description}>From damage, loss, & theft.</p>
            </div>
            <div className={styles.icon}>
                🛡️
            </div>
        </div>
    );
}
