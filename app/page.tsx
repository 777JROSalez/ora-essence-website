import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import HolidaySection from './components/HolidaySection';
import { products } from './data/products';

export default function Home() {
    return (
        <main>
            <Hero />
            <HolidaySection />
            <div style={{ padding: '4rem 0', textAlign: 'center' }}>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)' }}>Best-Selling Skincare</h2>

                <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '2rem', padding: '0 2rem', marginTop: '3rem' }}>
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </main>
    );
}
