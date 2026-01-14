import ProductListingPage from '../../components/ProductListingPage';
import { Product } from '../../data/products';

export default function LimitedEditionsPage() {
    return (
        <ProductListingPage
            title="Limited Editions"
            subtitle="Exclusive formulations available for a limited time only. Collect these rare treasures before they're gone forever."
            filterFn={(product: Product) =>
                product.slug === 'holiday-lip-blush-kit' ||
                product.name.toLowerCase().includes('limited') ||
                product.name.toLowerCase().includes('holiday')
            }
            sectionLabel="EXCLUSIVE COLLECTION"
            sectionTitle="Limited Edition Treasures"
            sectionText="These special formulations are crafted in small batches and won't be available forever. Each limited edition piece is a collector's item, designed to bring luxury to your everyday ritual."
        />
    );
}
