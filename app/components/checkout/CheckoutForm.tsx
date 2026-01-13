'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useCart } from '../../context/CartContext';
import styles from './CheckoutForm.module.css';

export default function CheckoutForm() {
    const [step, setStep] = useState(1); // 1: Info, 2: Shipping, 3: Payment
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const { items: cart, cartTotal } = useCart();

    const [ccNumber, setCcNumber] = useState('');

    const formatCardNumber = (value: string) => {
        const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
        const matches = v.match(/\d{4,16}/g);
        const match = matches && matches[0] || '';
        const parts = [];
        for (let i = 0, len = match.length; i < len; i += 4) {
            parts.push(match.substring(i, i + 4));
        }
        if (parts.length) {
            return parts.join(' ');
        } else {
            return value;
        }
    };

    const handleCcChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value;
        setCcNumber(formatCardNumber(val));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        if (step < 3) {
            // Simulate processing time
            setTimeout(() => {
                setStep(step + 1);
                setLoading(false);
            }, 800);
        } else {
            // Final step: Place Order
            setTimeout(() => {
                router.push('/checkout/success');
            }, 1500);
        }
    };

    return (
        <div className={styles.container}>
            {/* Steps Indicator */}
            <div className={styles.steps}>
                <div className={`${styles.step} ${step >= 1 ? styles.active : ''}`}>Information</div>
                <div className={styles.chevron}>›</div>
                <div className={`${styles.step} ${step >= 2 ? styles.active : ''}`}>Shipping</div>
                <div className={styles.chevron}>›</div>
                <div className={`${styles.step} ${step >= 3 ? styles.active : ''}`}>Payment</div>
            </div>

            <div className={styles.content}>
                <div className={styles.mainContent}>
                    <form onSubmit={handleSubmit} className={styles.form}>

                        {step === 1 && (
                            <div className={styles.stepContent}>
                                <h2>Contact Information</h2>
                                <input type="email" placeholder="Email" required className={styles.input} />

                                <h2>Shipping Address</h2>
                                <div className={styles.row}>
                                    <input type="text" placeholder="First name" required className={styles.input} />
                                    <input type="text" placeholder="Last name" required className={styles.input} />
                                </div>
                                <input type="text" placeholder="Address" required className={styles.input} />
                                <input type="text" placeholder="Apartment, suite, etc. (optional)" className={styles.input} />
                                <div className={styles.row}>
                                    <input type="text" placeholder="City" required className={styles.input} />
                                    <input type="text" placeholder="ZIP code" required className={styles.input} />
                                </div>
                            </div>
                        )}

                        {step === 2 && (
                            <div className={styles.stepContent}>
                                <h2>Shipping Method</h2>
                                <div className={styles.radioGroup}>
                                    <label className={styles.radioOption}>
                                        <input type="radio" name="shipping" defaultChecked />
                                        <div className={styles.radioDetails}>
                                            <span>Standard Shipping (3-5 business days)</span>
                                            <span>Free</span>
                                        </div>
                                    </label>
                                    <label className={styles.radioOption}>
                                        <input type="radio" name="shipping" />
                                        <div className={styles.radioDetails}>
                                            <span>Expedited Shipping (2 business days)</span>
                                            <span>$15.00</span>
                                        </div>
                                    </label>
                                </div>
                            </div>
                        )}

                        {step === 3 && (
                            <div className={styles.stepContent}>
                                <h2>Payment</h2>
                                <div className={styles.trustBadge}>
                                    <span>🔒</span>
                                    <span>SSL Encrypted & Secure Connection</span>
                                </div>
                                <p className={styles.secureText}>All transactions are backed by our <strong>30-Day Money-Back Guarantee</strong>.</p>
                                <div className={styles.paymentBox}>
                                    <div className={styles.creditCardInput}>
                                        <input
                                            type="text"
                                            placeholder="Card number"
                                            required
                                            className={styles.input}
                                            value={ccNumber}
                                            onChange={handleCcChange}
                                            maxLength={19}
                                        />
                                        <div className={styles.row}>
                                            <input type="text" placeholder="Expiration date (MM / YY)" required className={styles.input} />
                                            <input type="text" placeholder="Security code" required className={styles.input} />
                                        </div>
                                        <input type="text" placeholder="Name on card" required className={styles.input} />
                                    </div>
                                </div>
                            </div>
                        )}

                        <div className={styles.actions}>
                            {step > 1 && (
                                <button
                                    type="button"
                                    onClick={() => setStep(step - 1)}
                                    className={styles.backButton}
                                >
                                    Return to previous step
                                </button>
                            )}
                            <button
                                type="submit"
                                className={styles.submitButton}
                                disabled={loading}
                            >
                                {loading ? 'Processing...' : step === 3 ? 'Pay now' : 'Continue'}
                            </button>
                        </div>
                    </form>
                </div>

                <div className={styles.summaryContainer}>
                    <div className={styles.summary}>
                        <h2>Order Summary</h2>
                        <div className={styles.cartItems}>
                            {(!cart || cart.length === 0) ? (
                                <p className={styles.emptyCart}>Your cart is empty.</p>
                            ) : (
                                cart.map((item) => {
                                    // Use the product image
                                    const imgUrl = item.image || '/images/placeholder.jpg';

                                    return (
                                        <div key={item.id} className={styles.item}>
                                            <div className={styles.itemImage}>
                                                <img src={imgUrl} alt={item.name} />
                                                <span className={styles.quantity}>{item.quantity}</span>
                                            </div>
                                            <div className={styles.itemInfo}>
                                                <p>{item.name}</p>
                                            </div>
                                            <div className={styles.itemPrice}>
                                                ${(item.price * item.quantity).toFixed(2)}
                                            </div>
                                        </div>
                                    );
                                })
                            )}
                        </div>
                        <div className={styles.totals}>
                            <div className={styles.totalRow}>
                                <span>Subtotal</span>
                                <span>${cartTotal.toFixed(2)}</span>
                            </div>
                            <div className={styles.totalRow}>
                                <span>Shipping</span>
                                <span>Free</span>
                            </div>
                            <div className={`${styles.totalRow} ${styles.finalTotal}`}>
                                <span>Total</span>
                                <span>${cartTotal.toFixed(2)}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
