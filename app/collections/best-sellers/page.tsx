import Link from 'next/link';
import Image from 'next/image';
import ProductCard from '../../components/ProductCard';
import { products } from '../../data/products';

export default function BestSellersPage() {
    const bestSellers = products.filter(p => p.bestSeller);

    return (
        <main>
            <div style={{
                backgroundColor: 'var(--color-background)',
                padding: '4rem 2rem',
                textAlign: 'center',
                marginBottom: '2rem'
            }}>
                <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: '3rem', color: 'var(--color-primary)', marginBottom: '1rem' }}>
                    Best Sellers
                </h1>
                <p style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto', color: 'var(--color-text-main)' }}>
                    Our most-loved formulas, trusted by thousands for radiant, healthy skin.
                </p>
            </div>

            <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '2rem', padding: '0 2rem 4rem' }}>
                {bestSellers.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>

            <div style={{ textAlign: 'center', padding: '2rem' }}>
                <Link href="/products" style={{ textDecoration: 'underline', color: 'var(--color-primary)' }}>
                    View All Products
                </Link>
            </div>
        </main>
    );
}
