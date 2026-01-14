'use client';

import { useState, useEffect } from 'react';
import styles from './DiscountPopup.module.css';

export default function DiscountPopup() {
    const [showPopup, setShowPopup] = useState(false);
    const [showTab, setShowTab] = useState(false);
    const [email, setEmail] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    useEffect(() => {
        // Check if user has seen the popup before
        const hasSeenPopup = localStorage.getItem('ora-discount-seen');
        const isPermanentlyDismissed = localStorage.getItem('ora-discount-dismissed');

        if (!hasSeenPopup && !isPermanentlyDismissed) {
            // Show popup after a brief delay for better UX
            const timer = setTimeout(() => setShowPopup(true), 1000);
            return () => clearTimeout(timer);
        } else if (hasSeenPopup && !isPermanentlyDismissed) {
            // Show tab if popup was seen but not permanently dismissed
            setShowTab(true);
        }
    }, []);

    const handleClose = () => {
        setShowPopup(false);
        setShowTab(true);
        localStorage.setItem('ora-discount-seen', 'true');
    };

    const handleDismissTab = (e: React.MouseEvent) => {
        e.stopPropagation();
        setShowTab(false);
        localStorage.setItem('ora-discount-dismissed', 'true');
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (email) {
            setIsSubmitted(true);
            localStorage.setItem('ora-discount-email', email);
            // In a real app, send email to backend
            setTimeout(() => {
                handleClose();
            }, 2000);
        }
    };

    const handleTabClick = () => {
        setShowTab(false);
        setShowPopup(true);
    };

    if (!showPopup && !showTab) return null;

    return (
        <>
            {/* Main Popup Modal */}
            {showPopup && (
                <div className={styles.overlay} onClick={handleClose}>
                    <div className={styles.popup} onClick={(e) => e.stopPropagation()}>
                        <button className={styles.closeButton} onClick={handleClose} aria-label="Close popup">
                            ×
                        </button>

                        <div className={styles.content}>
                            <div className={styles.imageSection}>
                                <div className={styles.imagePlaceholder}>
                                    {/* Placeholder for lifestyle image - replace with actual image */}
                                    <div style={{
                                        width: '100%',
                                        height: '100%',
                                        background: 'linear-gradient(135deg, var(--color-primary-light) 0%, var(--color-primary) 100%)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: 'white',
                                        fontSize: '1.5rem',
                                        fontFamily: 'var(--font-serif)'
                                    }}>
                                        ORA ESSENCE
                                    </div>
                                </div>
                            </div>

                            <div className={styles.formSection}>
                                <div className={styles.brandName}>ORA ESSENCE</div>

                                {!isSubmitted ? (
                                    <>
                                        <p className={styles.tagline}>
                                            Your journey to glowing,<br />radiant skin starts now.
                                        </p>

                                        <h2 className={styles.offer}>Enjoy 20% Off</h2>
                                        <p className={styles.offerDetails}>
                                            YOUR FIRST PURCHASE OF $50+<br />
                                            WHEN YOU SIGN UP FOR EMAILS*
                                        </p>

                                        <form onSubmit={handleSubmit} className={styles.form}>
                                            <input
                                                type="email"
                                                placeholder="Email Address"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                className={styles.emailInput}
                                                required
                                            />
                                            <button type="submit" className={styles.submitButton}>
                                                GET 20% OFF, ON US
                                            </button>
                                        </form>

                                        <p className={styles.disclaimer}>
                                            *Offer valid for new email subscribers only. Cannot be combined with other offers.
                                        </p>
                                    </>
                                ) : (
                                    <div className={styles.thankYou}>
                                        <h2>Thank You!</h2>
                                        <p>Check your email for your exclusive discount code.</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Sticky Side Tab */}
            {showTab && (
                <div className={styles.stickyTab} onClick={handleTabClick}>
                    <button
                        className={styles.tabClose}
                        onClick={handleDismissTab}
                        aria-label="Dismiss discount offer"
                    >
                        ×
                    </button>
                    <div className={styles.tabText}>GET 20% OFF</div>
                </div>
            )}
        </>
    );
}
