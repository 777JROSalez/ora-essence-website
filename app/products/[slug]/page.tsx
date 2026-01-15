import Image from 'next/image';
import { notFound } from 'next/navigation';
import { products } from '../../data/products';
import styles from './ProductDetail.module.css';
import ProductImageGallery from '../../components/ProductImageGallery';
import ProductPurchaseSection from '../../components/ProductPurchaseSection';
import CollapsibleSection from '../../components/CollapsibleSection';
import ProductBenefits from '../../components/ProductBenefits';
import RelatedProductsCarousel from '../../components/RelatedProductsCarousel';
import InteractiveIngredients from '../../components/ingredients/InteractiveIngredients';
import ReviewSystem from '../../components/reviews/ReviewSystem';

export function generateStaticParams() {
    return products.map((product) => ({
        slug: product.slug,
    }));
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const product = products.find((p) => p.slug === slug);

    if (!product) {
        notFound();
    }

    // Use images array if available, otherwise fall back to single image
    const productImages = product.images && product.images.length > 0
        ? product.images
        : [product.image];

    return (
        <main className={styles.container}>
            {/* Hero Section - Image Gallery + Purchase Info */}
            <div className={styles.heroSection}>
                <div className={styles.galleryWrapper}>
                    <ProductImageGallery
                        images={productImages}
                        productName={product.name}
                    />
                </div>

                <div className={styles.purchaseWrapper}>
                    <ProductPurchaseSection product={product} />
                </div>
            </div>

            {/* Related Products Carousel */}
            {product.relatedProducts && product.relatedProducts.length > 0 && (
                <RelatedProductsCarousel relatedProductIds={product.relatedProducts} />
            )}

            {/* Key Benefits Section */}
            {product.keyBenefits && product.keyBenefits.length > 0 && (
                <ProductBenefits
                    benefits={product.keyBenefits}
                    benefitImage={product.benefitImage}
                    productName={product.name}
                />
            )}

            {/* Collapsible Sections */}
            <div className={styles.collapsibleSections}>
                {/* Suited For */}
                {product.suitedFor && product.suitedFor.length > 0 && (
                    <CollapsibleSection title="Suited For" defaultOpen={false}>
                        <ul className={styles.suitedForList}>
                            {product.suitedFor.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </CollapsibleSection>
                )}

                {/* Ingredients */}
                {(product.ingredientsImage || (product.ingredients && product.ingredients.length > 0)) && (
                    <CollapsibleSection title="Ingredients" defaultOpen={false}>
                        {product.ingredientsImage ? (
                            <div className={styles.ingredientsImage}>
                                <Image
                                    src={product.ingredientsImage}
                                    alt={`${product.name} ingredients`}
                                    width={800}
                                    height={600}
                                    style={{ width: '100%', height: 'auto' }}
                                />
                            </div>
                        ) : product.ingredients && product.ingredients.length > 0 ? (
                            <InteractiveIngredients ingredients={product.ingredients} />
                        ) : null}
                        <p className={styles.ingredientsDisclaimer}>
                            *Full ingredient list available on packaging.
                        </p>
                    </CollapsibleSection>
                )}

                {/* How to Use */}
                <CollapsibleSection title="How to Use" defaultOpen={false}>
                    {product.howToVideo && (
                        <div className={styles.howToVideo}>
                            <video
                                src={product.howToVideo}
                                controls
                                style={{ width: '100%', borderRadius: '8px' }}
                                poster={product.image}
                            />
                        </div>
                    )}
                    {product.howToImage && (
                        <div className={styles.howToImage}>
                            <Image
                                src={product.howToImage}
                                alt={`How to use ${product.name}`}
                                width={800}
                                height={600}
                                style={{ width: '100%', height: 'auto' }}
                            />
                        </div>
                    )}
                    <div className={styles.howToSteps}>
                        {product.howToUse.map((step, index) => (
                            <div key={index} className={styles.step}>
                                <strong>Step {index + 1}: {step.step}</strong>
                                <p>{step.instruction}</p>
                            </div>
                        ))}
                    </div>
                </CollapsibleSection>
            </div>

            {/* Reviews */}
            <div className={styles.reviewsSection}>
                <ReviewSystem productId={product.id} />
            </div>
        </main>
    );
}
