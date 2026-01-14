import ProductListingPage from '../../components/ProductListingPage';
import { Product } from '../../data/products';

export default function BestSellersPage() {
    return (
        <ProductListingPage
            title="Best Sellers"
            subtitle="Our most-loved products, chosen by customers like you. These cult favorites deliver transformative results you can see and feel."
            filterFn={(product: Product) => product.bestSeller === true}
            sectionLabel="CUSTOMER FAVORITES"
            sectionTitle="Most Popular Products"
            sectionText="These are the products our community can't live without. Each one has earned its place through proven results and glowing reviews."
        />
    );
}
