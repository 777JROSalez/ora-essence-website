import ProductListingPage from '../../components/ProductListingPage';
import { Product } from '../../data/products';

export default function MoisturizersPage() {
    return (
        <ProductListingPage
            title="Moisturizers"
            subtitle="Lock in hydration and strengthen your skin's natural barrier. Our moisturizers deliver lasting comfort and protection throughout the day and night."
            filterFn={(product: Product) => product.category === 'Moisturizer'}
            sectionLabel="HYDRATION HEROES"
            sectionTitle="Barrier Protection"
            sectionText="A great moisturizer does more than hydrate—it strengthens your skin's protective barrier, locks in all the goodness from previous steps, and shields against environmental stressors. Our formulas are rich yet fast-absorbing, leaving skin plump and resilient."
        />
    );
}
