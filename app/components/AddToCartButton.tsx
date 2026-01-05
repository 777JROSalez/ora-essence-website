'use client';

import { useCart } from '../context/CartContext';
import styles from './AddToCartButton.module.css';
import { Product } from '../data/products';

export default function AddToCartButton({ product }: { product: Product }) {
    const { addToCart } = useCart();

    return (
        <button className={styles.addToBag} onClick={() => addToCart(product)}>
            Add to Bag - ${product.price}
        </button>
    );
}
