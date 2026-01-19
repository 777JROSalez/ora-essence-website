import Hero from './components/Hero';
import ShopByConcern from './components/ShopByConcern';
import FounderStory from './components/FounderStory';
import FeaturedSection from './components/FeaturedSection';
import AsSeenIn from './components/AsSeenIn';
import TrustBadges from './components/TrustBadges';
import ProductCarousel from './components/ProductCarousel';
import ClinicalProof from './components/ClinicalProof';
import SecondaryHero from './components/SecondaryHero';
import ServiceGrid from './components/ServiceGrid';
import GuaranteeBar from './components/GuaranteeBar';
import { products } from './data/products';

export default function Home() {
    // Select featured products for the FeaturedSection
    const featuredProducts = products.slice(0, 2);

    return (
        <main>
            {/* Primary Hero Section with Urgency Messaging */}
            <Hero />

            {/* Shop By Concern - Low-Friction Self-Segmentation */}
            <ShopByConcern />

            {/* Founder Story - Trust Building & Personal Guarantee */}
            <FounderStory />

            {/* Featured Product Section - Split layout */}
            <FeaturedSection
                title="Radiant Skin Awaits"
                description="Refresh the delicate eye-area skin with one of our targeted treatments. Intensive age defense for reactive skin."
                imageSrc="/images/featured-radiant-skin.jpg"
                imageAlt="Radiant glowing skin close-up"
                imagePosition="left"
                products={featuredProducts}
            />

            {/* Third-Party Validation - As Featured In */}
            <AsSeenIn />

            {/* Certification Trust Badges */}
            <TrustBadges />

            {/* Product Carousel with Category Tabs */}
            <ProductCarousel
                title="Routine Favorites"
                categories={['Best Sellers', 'Cleansers', 'Serums', 'Moisturizers']}
            />

            {/* Clinical Proof - Quantifiable Efficacy */}
            <ClinicalProof />

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

            {/* Sticky Guarantee Bar - Risk Reversal */}
            <GuaranteeBar />
        </main>
    );
}
