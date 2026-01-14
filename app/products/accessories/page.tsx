import ProductListingPage from '../../components/ProductListingPage';
import { Product } from '../../data/products';

export default function AccessoriesPage() {
    return (
        <ProductListingPage
            title="Accessories & Tools"
            subtitle="Elevate your skincare ritual with professional-grade tools. Advanced devices designed to maximize the benefits of your favorite products."
            filterFn={(product: Product) => product.category === 'Tools'}
            sectionLabel="PROFESSIONAL TOOLS"
            sectionTitle="Advanced Beauty Devices"
            sectionText="Take your skincare to the next level with our collection of professional-grade tools. From LED therapy to sonic sculpting, each device is designed to enhance absorption, boost circulation, and deliver visible anti-aging results."
        />
    );
}
