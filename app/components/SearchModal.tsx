'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

// Limited mock data for search - ideally improved to reuse products.ts properly or fetch
const searchProducts = [
    { name: 'Regenerating Cleanser', category: 'Cleanser', price: 88, slug: 'regenerating-cleanser' },
    { name: 'Resurfacing Mask', category: 'Mask', price: 68, slug: 'resurfacing-mask' },
    { name: 'Restorative Eye Crème', category: 'Eye Care', price: 105, slug: 'restorative-eye-creme' },
    { name: 'Rejuvenating Serum', category: 'Serum', price: 98, slug: 'rejuvenating-serum' },
    { name: 'Retinoic Nutrient Face Oil', category: 'Face Oil', price: 132, slug: 'retinoic-nutrient-face-oil' },
    { name: 'Hydrating Floral Essence', category: 'Essence', price: 76, slug: 'hydrating-floral-essence' }
];

interface SearchModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState(searchProducts);
    const router = useRouter();

    useEffect(() => {
        if (query.trim() === '') {
            setResults(searchProducts);
        } else {
            const lowerQuery = query.toLowerCase();
            const filtered = searchProducts.filter(p =>
                p.name.toLowerCase().includes(lowerQuery) ||
                p.category.toLowerCase().includes(lowerQuery)
            );
            setResults(filtered);
        }
    }, [query]);

    if (!isOpen) return null;

    return (
        <div style={{
            position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
            background: 'rgba(255, 255, 255, 0.98)', zIndex: 2000,
            display: 'flex', flexDirection: 'column', padding: '2rem'
        }}>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <button onClick={onClose} style={{ background: 'none', border: 'none', fontSize: '2rem', cursor: 'pointer' }}>&times;</button>
            </div>

            <div style={{ maxWidth: '800px', width: '100%', margin: '0 auto' }}>
                <input
                    type="text"
                    placeholder="Search products, ingredients, concerns..."
                    autoFocus
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    style={{
                        width: '100%', fontSize: '2rem', fontFamily: 'var(--font-serif)',
                        border: 'none', borderBottom: '2px solid var(--color-primary)',
                        padding: '1rem 0', background: 'transparent', outline: 'none',
                        color: 'var(--color-primary)'
                    }}
                />

                <div style={{ marginTop: '3rem', maxHeight: '60vh', overflowY: 'auto' }}>
                    <h3 style={{ fontSize: '0.9rem', color: '#999', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
                        {query ? `${results.length} Results` : 'Popular Products'}
                    </h3>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem' }}>
                        {results.map((product) => (
                            <div key={product.slug} onClick={onClose}>
                                <Link href={`/products/${product.slug}`} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem', borderBottom: '1px solid #eee', textDecoration: 'none', color: 'inherit' }}>
                                    <div>
                                        <p style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>{product.name}</p>
                                        <p style={{ color: '#666', fontSize: '0.9rem' }}>{product.category}</p>
                                    </div>
                                    <span style={{ fontWeight: 'bold' }}>${product.price}</span>
                                </Link>
                            </div>
                        ))}
                    </div>

                    {results.length === 0 && (
                        <p style={{ textAlign: 'center', marginTop: '2rem', color: '#666' }}>No results found for "{query}"</p>
                    )}
                </div>
            </div>
        </div>
    );
}
