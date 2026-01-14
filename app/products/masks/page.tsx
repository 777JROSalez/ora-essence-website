import ProductListingPage from '../../components/ProductListingPage';
import { Product } from '../../data/products';

export default function MasksPage() {
    return (
        <ProductListingPage
            title="Masks"
            subtitle="Intensive treatment for instant transformation. Our luxurious masks deliver concentrated actives for visible results in just one use."
            filterFn={(product: Product) => product.category === 'Mask'}
            sectionLabel="WEEKLY RITUALS"
            sectionTitle="Treatment Masks"
            sectionText="Elevate your weekly ritual with our treatment masks. Each one is infused with potent actives to address specific concerns, from hydration to brightening. Use once or twice weekly for spa-level results at home."
        />
    );
}
