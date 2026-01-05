'use client';

import { products } from '../../data/products';
import { useCart } from '../../context/CartContext';
import styles from './CartUpsell.module.css';

export default function CartUpsell() {
    const { addToCart, items } = useCart();

    // Filter out items already in cart
    const upsellProducts = products
        .filter(p => !items.find(item => item.id === p.id))
        .slice(0, 3); // Show top 3 recommendations

    if (upsellProducts.length === 0) return null;

    return (
        <div className={styles.container}>
            <h3 className={styles.title}>You might also like</h3>
            <div className={styles.grid}>
                {upsellProducts.map(product => (
                    <div key={product.id} className={styles.card}>
                        <div className={styles.imagePlaceholder}>
                            {/* In real app use Image */}
                            <img src={product.image} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                        <div className={styles.info}>
                            <p className={styles.name}>{product.name}</p>
                            <p className={styles.price}>${product.price}</p>
                            <button className={styles.addBtn} onClick={() => addToCart(product)}>Add</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
