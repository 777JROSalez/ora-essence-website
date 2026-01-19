'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { useCart } from '../context/CartContext';
import styles from './CartDrawer.module.css';
import CartAnnouncement from './cart/CartAnnouncement';
import FreeShippingBar from './cart/FreeShippingBar';
import ShippingProtection from './cart/ShippingProtection';
import CartUpsell from './cart/CartUpsell';
import { SHIPPING_CONFIG, calculateShippingCost } from '../config/shipping';

export default function CartDrawer() {
    const { isCartOpen, closeCart, items, removeFromCart, updateQuantity, cartTotal } = useCart();

    // Calculate shipping cost (standard shipping for cart drawer)
    const shippingCost = calculateShippingCost(cartTotal, 'standard');
    const orderTotal = cartTotal + shippingCost;

    return (
        <>
            <div
                className={`${styles.overlay} ${isCartOpen ? styles.visible : ''}`}
                onClick={closeCart}
            />
            <div className={`${styles.drawer} ${isCartOpen ? styles.visible : ''}`}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Shopping Bag ({items.length})</h2>
                    <button onClick={closeCart} className={styles.closeBtn}>&times;</button>
                </div>

                <CartAnnouncement />
                <FreeShippingBar currentAmount={cartTotal} />

                <div className={styles.body}>
                    {items.length === 0 ? (
                        <div className={styles.emptyState}>
                            <p>Your bag is empty.</p>
                            <button
                                onClick={closeCart}
                                className="btn-primary"
                                style={{ marginTop: '1rem' }}
                            >
                                Continue Shopping
                            </button>
                        </div>
                    ) : (
                        <>
                            <div className={styles.items}>
                                {items.map((item) => (
                                    <div key={item.id} className={styles.item}>
                                        <div className={styles.imagePlaceholder}>
                                            {/* In a real app we would use NextImage. Using img for now as placeholder */}
                                            <img src={item.image} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                        </div>

                                        <div className={styles.itemInfo}>
                                            <div>
                                                <h3 className={styles.itemName}>{item.name}</h3>
                                                <p className={styles.itemPrice}>${item.price}</p>
                                            </div>
                                            <div className={styles.controls}>
                                                <div className={styles.quantity}>
                                                    <button className={styles.qtyBtn} onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                                                    <span>{item.quantity}</span>
                                                    <button className={styles.qtyBtn} onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                                                </div>
                                                <button className={styles.removeBtn} onClick={() => removeFromCart(item.id)}>Remove</button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <ShippingProtection />
                            <CartUpsell />
                        </>
                    )}
                </div>

                {items.length > 0 && (
                    <div className={styles.footer}>
                        <div className={styles.total}>
                            <span>Subtotal</span>
                            <span>${cartTotal.toFixed(2)}</span>
                        </div>
                        <div className={styles.total}>
                            <span>Shipping</span>
                            <span>{shippingCost === 0 ? 'FREE' : `$${shippingCost.toFixed(2)}`}</span>
                        </div>
                        <div className={styles.total} style={{ fontWeight: 'bold', fontSize: '1.1rem', marginTop: '0.5rem', paddingTop: '0.5rem', borderTop: '1px solid #e0e0e0' }}>
                            <span>Total</span>
                            <span>${orderTotal.toFixed(2)}</span>
                        </div>
                        <Link href="/checkout" onClick={closeCart} className="btn-primary" style={{ width: '100%', display: 'block', textAlign: 'center', textDecoration: 'none', marginTop: '1rem' }}>
                            Checkout
                        </Link>
                        <div style={{ textAlign: 'center', marginTop: '0.5rem', fontSize: '1.2rem' }}>
                            💳 💳 💳
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}
