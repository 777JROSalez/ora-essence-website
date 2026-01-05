'use client';

import { useState } from 'react';
import styles from './ProductTabs.module.css';
import { Product } from '../data/products';
import InteractiveIngredients from './ingredients/InteractiveIngredients';

interface ProductTabsProps {
    product: Product;
}

export default function ProductTabs({ product }: ProductTabsProps) {
    const [activeTab, setActiveTab] = useState('overview');

    const renderContent = () => {
        switch (activeTab) {
            case 'overview':
                return (
                    <div className={styles.tabContent}>
                        <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>Formula Overview</h3>
                        <p style={{ lineHeight: '1.6', marginBottom: '1rem' }}>
                            Our formulas are engineered with the highest possible concentration of high-performance ingredients.
                            We don't use fillers or synthetic chemicals. This {product.name.toLowerCase()} is crafted
                            to target your specific skin concerns with 100% natural efficacy.
                        </p>
                        <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', lineHeight: '1.8' }}>
                            <li>100% Natural & Non-Toxic</li>
                            <li>Made fresh in Vermont</li>
                            <li>Batch traceable</li>
                        </ul>
                    </div>
                );
            case 'how-to-use':
                return (
                    <div className={styles.tabContent}>
                        <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>Ritual Application</h3>
                        {product.howToVideo && (
                            <div style={{ marginBottom: '2rem', borderRadius: '8px', overflow: 'hidden', border: '1px solid #333' }}>
                                <video
                                    src={product.howToVideo}
                                    controls
                                    style={{ width: '100%', display: 'block' }}
                                    poster={product.image} /* Use product image as poster for now */
                                />
                                <p style={{ padding: '0.5rem', background: '#222', fontSize: '0.8rem', textAlign: 'center', color: '#888' }}>Watch the Full Ritual</p>
                            </div>
                        )}
                        <div style={{ display: 'grid', gap: '2rem' }}>
                            {product.howToUse.map((step, index) => (
                                <div key={index}>
                                    <strong style={{ display: 'block', color: 'var(--color-primary)', marginBottom: '0.25rem' }}>Step {index + 1}: {step.step}</strong>
                                    <p>{step.instruction}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            case 'ingredients':
                return (
                    <div className={styles.tabContent}>
                        <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>Key Ingredients</h3>
                        <InteractiveIngredients ingredients={product.ingredients} />
                        <p style={{ marginTop: '2rem', fontSize: '0.8rem', color: '#666' }}>*Full ingredient list available on packaging.</p>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <section className={styles.tabsContainer}>
            <div className={styles.tabHeader}>
                {['Overview', 'How to Use', 'Ingredients'].map((tab) => {
                    const value = tab.toLowerCase().replace(/ /g, '-');
                    return (
                        <button
                            key={value}
                            className={`${styles.tabButton} ${activeTab === value ? styles.activeTab : ''}`}
                            onClick={() => setActiveTab(value)}
                        >
                            {tab}
                        </button>
                    );
                })}
            </div>
            {renderContent()}
        </section>
    );
}
