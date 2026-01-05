'use client';

import { products, Product } from '../data/products';
import { useCart } from '../context/CartContext';
import styles from './BundleSection.module.css';

export default function BundleSection({ currentProduct }: { currentProduct: Product }) {
    const { addToCart, openCart } = useCart();

    // Simple logic: Pick the next 2 products in the list, wrapping around
    const currentIndex = products.findIndex(p => p.id === currentProduct.id);
    const bundleProduct1 = products[(currentIndex + 1) % products.length];
    const bundleProduct2 = products[(currentIndex + 2) % products.length];

    const bundleTotal = currentProduct.price + bundleProduct1.price + bundleProduct2.price;
    const bundlePrice = Math.round(bundleTotal * 0.85); // 15% off for bundle

    const handleAddBundle = () => {
        addToCart(currentProduct);
        addToCart(bundleProduct1);
        addToCart(bundleProduct2);
        // openCart invoked by addToCart
    };

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Frequently Bought Together</h2>
            <div className={styles.bundleWrapper}>
                <div className={styles.items}>
                    <div className={styles.item}>
                        <img src={currentProduct.image} alt={currentProduct.name} />
                    </div>
                    <span className={styles.plus}>+</span>
                    <div className={styles.item}>
                        <img src={bundleProduct1.image} alt={bundleProduct1.name} />
                    </div>
                    <span className={styles.plus}>+</span>
                    <div className={styles.item}>
                        <img src={bundleProduct2.image} alt={bundleProduct2.name} />
                    </div>
                </div>

                <div className={styles.summary}>
                    <p className={styles.totalPrice}>
                        <span className={styles.strike}>${bundleTotal}</span>
                        <span className={styles.final}>${bundlePrice}</span>
                    </p>
                    <p className={styles.savings}>Save 15%</p>
                    <button className="btn-primary" onClick={handleAddBundle}>
                        Add Bundle to Bag
                    </button>
                    <p className={styles.names}>
                        Includes: {currentProduct.name}, {bundleProduct1.name}, {bundleProduct2.name}
                    </p>
                </div>
            </div>
        </div>
    );
}
