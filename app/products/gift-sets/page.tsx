import ProductListingPage from '../../components/ProductListingPage';
import { Product } from '../../data/products';

export default function GiftSetsPage() {
    return (
        <ProductListingPage
            title="Gift Sets"
            subtitle="Beautifully curated collections for the perfect gift or the ultimate self-care treat. Luxurious sets delivered in elegant packaging."
            filterFn={(product: Product) =>
                product.category === 'Sets' ||
                product.name.toLowerCase().includes('set') ||
                product.name.toLowerCase().includes('kit')
            }
            sectionLabel="LUXURIOUS GIFTING"
            sectionTitle="Curated Gift Collections"
            sectionText="Our gift sets combine complementary products for a complete skincare experience. Each set is thoughtfully curated and beautifully packaged, making them perfect for gifting or treating yourself."
        />
    );
}
