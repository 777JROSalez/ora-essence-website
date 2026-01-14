import ProductListingPage from '../../components/ProductListingPage';
import { Product } from '../../data/products';

export default function CleansersPage() {
    return (
        <ProductListingPage
            title="Cleansers"
            subtitle="Begin every ritual with a perfect cleanse. Our gentle yet effective cleansers remove impurities while preserving your skin's natural moisture barrier."
            filterFn={(product: Product) => product.category === 'Cleanser'}
            sectionLabel="DAILY ESSENTIALS"
            sectionTitle="Purifying Cleansers"
            sectionText="The foundation of any effective skincare routine starts with proper cleansing. Our botanical cleansers are formulated to deeply purify without stripping, leaving your skin perfectly prepped for the steps that follow."
        />
    );
}
