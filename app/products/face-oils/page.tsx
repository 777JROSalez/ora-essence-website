import ProductListingPage from '../../components/ProductListingPage';
import { Product } from '../../data/products';

export default function FaceOilsPage() {
    return (
        <ProductListingPage
            title="Face Oils"
            subtitle="Pure botanical luxury that nourishes, repairs, and illuminates. Our precious face oils are packed with antioxidants and essential fatty acids for radiant, healthy skin."
            filterFn={(product: Product) => product.category === 'Face Oil'}
            sectionLabel="BOTANICAL ELIXIRS"
            sectionTitle="Luxurious Face Oils"
            sectionText="Face oils are the secret to that coveted dewy glow. Our carefully curated blends absorb quickly without greasiness, delivering intense nourishment and antioxidant protection. Use alone or mix with your moisturizer for a custom treatment."
        />
    );
}
