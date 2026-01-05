import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

export default function ShopAllPage() {
    return (
        <main>
            <div style={{ backgroundColor: 'var(--color-primary)', color: 'white', padding: '4rem 0', textAlign: 'center', marginBottom: '2rem' }}>
                <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '3rem' }}>Shop All</h1>
                <p style={{ maxWidth: '600px', margin: '1rem auto 0', fontSize: '1.1rem' }}>
                    Discover our complete collection of 100% natural and non-toxic skincare.
                </p>
            </div>

            <div className="container" style={{ paddingBottom: '4rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '2rem' }}>
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </main>
    );
}
