'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Product } from '../data/products';
import styles from './ProductCard.module.css';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
    product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
    const { addToCart } = useCart();

    const handleAdd = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        addToCart(product);
    };

    return (
        <Link href={`/products/${product.slug}`} className={styles.card}>
            <div className={styles.imageContainer}>
                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </div>
            <span className={styles.category}>{product.category}</span>
            <h3 className={styles.name}>{product.name}</h3>
            <span className={styles.price}>${product.price}</span>
            <button className={styles.btn} onClick={handleAdd}>Add to Bag</button>
        </Link>
    );
}
