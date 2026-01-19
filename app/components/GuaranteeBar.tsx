'use client';

import { useState, useEffect } from 'react';
import styles from './GuaranteeBar.module.css';

export default function GuaranteeBar() {
    const [isVisible, setIsVisible] = useState(false);
    const [isDismissed, setIsDismissed] = useState(false);

    useEffect(() => {
        // Check if previously dismissed
        const dismissed = localStorage.getItem('ora-guarantee-dismissed');
        if (dismissed) {
            setIsDismissed(true);
            return;
        }

        // Show bar after scrolling past hero (800px)
        const handleScroll = () => {
            if (window.scrollY > 800) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleDismiss = () => {
        setIsDismissed(true);
        localStorage.setItem('ora-guarantee-dismissed', 'true');
    };

    if (isDismissed || !isVisible) return null;

    return (
        <div className={styles.bar}>
            <div className={styles.content}>
                <div className={styles.guarantees}>
                    <div className={styles.guaranteeItem}>
                        <span className={styles.icon}>📦</span>
                        <span className={styles.text}>Free Shipping & Returns</span>
                    </div>
                    <div className={styles.guaranteeItem}>
                        <span className={styles.icon}>💯</span>
                        <span className={styles.text}>90-Day Money Back</span>
                    </div>
                    <div className={styles.guaranteeItem}>
                        <span className={styles.icon}>💬</span>
                        <span className={styles.text}>Free Consultation</span>
                    </div>
                </div>
                <button
                    onClick={handleDismiss}
                    className={styles.closeButton}
                    aria-label="Dismiss guarantee bar"
                >
                    ×
                </button>
            </div>
        </div>
    );
}
