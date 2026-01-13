'use client';

import { products } from '../../data/products';
import { useCart } from '../../context/CartContext';
import styles from './CartUpsell.module.css';

export default function CartUpsell() {
    const { addToCart, items } = useCart();

    // Logic to find the best upsell
    const getUpsellProducts = () => {
        const cartIds = new Set(items.map(i => i.id));
        const cartCategories = new Set(items.map(i => i.category));

        // Define potential recommendations
        let recommendations = products.filter(p => !cartIds.has(p.id));

        // Specific Logic
        if (cartCategories.has('Cleansers')) {
            // Suggest Toner if they have a cleanser but no toner
            const toner = recommendations.find(p => p.category === 'Toners');
            if (toner) return [toner];
        }

        if (cartCategories.has('Toners')) {
            // Suggest Serum or Oil
            const serum = recommendations.find(p => p.category === 'Serums' || p.category === 'Oils');
            if (serum) return [serum];
        }

        if (cartCategories.has('Serums')) {
            // Suggest Moisturizer
            const moisturizer = recommendations.find(p => p.category === 'Moisturizers');
            if (moisturizer) return [moisturizer];
        }

        // Default: Return top rated or best sellers not in cart
        return recommendations.filter(p => p.bestSeller).slice(0, 1);
    };

    const upsellProducts = getUpsellProducts();

    if (upsellProducts.length === 0) return null;

    const product = upsellProducts[0]; // Focus on ONE single best upsell for a cleaner UI

    return (
        <div className={styles.container}>
            <h3 className={styles.title}>Complete Your Ritual</h3>
            <div className={styles.card}>
                <div className={styles.imagePlaceholder}>
                    <img src={product.image} alt={product.name} className={styles.image} />
                </div>
                <div className={styles.info}>
                    <p className={styles.recommendationLabel}>Recommended for you</p>
                    <p className={styles.name}>{product.name}</p>
                    <p className={styles.price}>${product.price}</p>
                    <button className={styles.addBtn} onClick={() => addToCart(product)}>Add to Bag</button>
                </div>
            </div>
        </div>
    );
}
