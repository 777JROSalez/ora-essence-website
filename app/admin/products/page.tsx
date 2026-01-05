'use client';

import { useState } from 'react';
import { products as initialProducts } from '../../data/products';
import styles from '../Dashboard.module.css'; // Reusing dashboard styles for consistency

export default function InventoryPage() {
    const [products, setProducts] = useState(initialProducts);

    // Mock function to simulate stock change
    const updateStock = (id: string, newStock: number) => {
        // In a real app, this would call an API
        console.log(`Updated stock for ${id} to ${newStock}`);
        alert(`Stock updated! (This is a demo)`);
    };

    return (
        <div className={styles.dashboard}>
            <div className={styles.section}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                    <h3 className={styles.sectionTitle} style={{ margin: 0, border: 'none' }}>Product Inventory</h3>
                    <button className={styles.actionBtn} style={{ width: 'auto', borderRadius: '4px', padding: '0 1rem', fontSize: '0.9rem' }}>
                        + Add Product
                    </button>
                </div>

                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Stock Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product) => (
                            <tr key={product.id}>
                                <td style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        style={{ width: '40px', height: '40px', objectFit: 'cover', borderRadius: '4px' }}
                                    />
                                    {product.name}
                                </td>
                                <td>{product.category || 'Skincare'}</td>
                                <td>${product.price}</td>
                                <td>
                                    <span className={`${styles.statusBadge} ${styles.delivered}`}>In Stock</span>
                                </td>
                                <td>
                                    <button
                                        style={{
                                            color: '#D4AF37',
                                            marginRight: '1rem',
                                            cursor: 'pointer',
                                            fontSize: '0.9rem'
                                        }}
                                        onClick={() => updateStock(product.id, 100)}
                                    >
                                        Edit
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
