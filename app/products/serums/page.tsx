import ProductListingPage from '../../components/ProductListingPage';
import { Product } from '../../data/products';

export default function SerumsPage() {
    return (
        <ProductListingPage
            title="Serums & Essences"
            subtitle="Concentrated power in every drop. Our high-performance serums deliver targeted active ingredients deep into your skin for transformative results."
            filterFn={(product: Product) => product.category === 'Serum' || product.category === 'Toner'}
            sectionLabel="TARGETED TREATMENT"
            sectionTitle="Power Serums"
            sectionText="Serums are the hardest-working step in your routine. These lightweight yet potent formulas are packed with active ingredients that penetrate deeply to address specific concerns like aging, dullness, and uneven texture."
        />
    );
}
