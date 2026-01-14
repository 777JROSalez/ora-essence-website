import Hero from './components/Hero';
import FeaturedSection from './components/FeaturedSection';
import ProductCarousel from './components/ProductCarousel';
import SecondaryHero from './components/SecondaryHero';
import ServiceGrid from './components/ServiceGrid';
import { products } from './data/products';

export default function Home() {
    // Select featured products for the FeaturedSection
    const featuredProducts = products.slice(0, 2);

    return (
        <main>
            {/* Primary Hero Section */}
            <Hero />

            {/* Featured Product Section - Split layout */}
            <FeaturedSection
                title="Radiant Skin Awaits"
                description="Refresh the delicate eye-area skin with one of our targeted treatments. Intensive age defense for reactive skin."
                imageSrc="/images/featured-radiant-skin.jpg"
                imageAlt="Radiant glowing skin close-up"
                imagePosition="left"
                products={featuredProducts}
            />

            {/* Product Carousel with Category Tabs */}
            <ProductCarousel
                title="Routine Favorites"
                categories={['Best Sellers', 'Cleansers', 'Serums', 'Moisturizers']}
            />

            {/* Secondary Hero / Campaign Section */}
            <SecondaryHero
                title="Skin Resolutions"
                description="Start the new year with a routine tailored to your skin's unique concerns. Each 3-step ritual is designed to bring lasting results through consistency—helping you maintain optimum skin health all year long."
                imageSrc="/images/skin-resolutions.jpg"
                imageAlt="Botanical skincare collection"
                ctaText="SHOP NOW"
                ctaLink="/products"
                textPosition="left"
            />

            {/* Service Features Grid */}
            <ServiceGrid />
        </main>
    );
}
