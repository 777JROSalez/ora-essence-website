import ProductListingPage from '../../components/ProductListingPage';
import { Product } from '../../data/products';

export default function NewArrivalsPage() {
    return (
        <ProductListingPage
            title="New Arrivals"
            subtitle="Experience our latest innovations in botanical luxury. Fresh formulations crafted with the finest ingredients from around the world."
            filterFn={(product: Product) => {
                // Show the newest products (last 6 in the array)
                const allProducts = require('../../data/products').products;
                const productIndex = allProducts.findIndex((p: Product) => p.id === product.id);
                return productIndex >= allProducts.length - 6;
            }}
            sectionLabel="JUST LAUNCHED"
            sectionTitle="Latest Innovations"
            sectionText="Discover our newest additions, formulated with cutting-edge botanical science and luxurious ingredients to elevate your skincare ritual."
        />
    );
}
