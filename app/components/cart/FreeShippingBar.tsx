'use client';

import { useMemo } from 'react';
import styles from './FreeShippingBar.module.css';
import { SHIPPING_CONFIG } from '../../config/shipping';

interface FreeShippingBarProps {
    currentAmount: number;
    threshold?: number;
}

export default function FreeShippingBar({ currentAmount, threshold = SHIPPING_CONFIG.freeShippingThreshold }: FreeShippingBarProps) {
    const progress = Math.min((currentAmount / threshold) * 100, 100);
    const remaining = Math.max(threshold - currentAmount, 0);

    return (
        <div className={styles.container}>
            <p className={styles.message}>
                {remaining > 0 ? (
                    <>You are <strong>${remaining.toFixed(2)}</strong> away from <strong>Free Shipping</strong></>
                ) : (
                    <>🎉 You've unlocked <strong>Free Shipping!</strong></>
                )}
            </p>
            <div className={styles.track}>
                <div className={styles.bar} style={{ width: `${progress}%` }} />
            </div>
        </div>
    );
}
