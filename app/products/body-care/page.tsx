import ProductListingPage from '../../components/ProductListingPage';
import { Product } from '../../data/products';

export default function BodyCarePage() {
    return (
        <ProductListingPage
            title="Body Care"
            subtitle="Extend your ritual from head to toe. Luxurious body treatments that nourish, illuminate, and transform your skin."
            filterFn={(product: Product) => product.category === 'Body'}
            sectionLabel="FULL BODY LUXURY"
            sectionTitle="Indulgent Body Care"
            sectionText="Your body deserves the same level of care as your face. Our body care collection features rich, nourishing formulas that hydrate deeply and leave skin with a subtle, radiant glow."
        />
    );
}
