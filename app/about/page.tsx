import Image from 'next/image';
import Link from 'next/link';
import styles from './About.module.css';

export default function AboutPage() {
    return (
        <main>
            {/* Hero Section - Founder Portrait */}
            <section className={styles.heroSection}>
                <Image
                    src="/images/founder_portrait.png"
                    alt="Founder of Ora Essence"
                    width={800}
                    height={1000}
                    className={styles.heroImage}
                    priority
                />
                <div className={styles.heroContent}>
                    <p className={styles.heroLabel}>About Ora Essence</p>
                    <h1 className={styles.heroTitle}>A pioneer in natural luxury skincare</h1>
                    <p className={styles.heroText}>
                        At Ora Essence, we couldn&apos;t find 100% natural products that were up to our
                        impeccable standards of efficacy, quality, and purity. So we started Ora Essence
                        to make them - for ourselves, and for those like us who refuse to risk their
                        health for beauty. If we don&apos;t feel that a product is perfect, we won&apos;t launch it.
                    </p>
                </div>
            </section>

            {/* Quote Banner */}
            <section className={styles.quoteBanner}>
                <blockquote className={styles.quoteText}>
                    &quot;I couldn&apos;t find anything that was effective, made of high-quality ingredients,
                    and pleasant to use. I knew if I was looking for results without worrying about
                    my safety, other women must be too, so I decided to create my own.&quot; – Sophia
                </blockquote>
            </section>

            {/* Our Founders Section */}
            <section className={styles.foundersSection}>
                <div className={styles.foundersContent}>
                    <h2 className={styles.sectionTitle}>Our Founders</h2>
                    <p className={styles.foundersText}>
                        Sophia and Marcus founded Ora Essence on a 500-acre organic farm nestled in the
                        pristine valleys. Both born with a deep connection to nature, they met during
                        their studies in botanical chemistry. After years in the beauty industry, they
                        realized that many so-called &quot;natural&quot; products were anything but.
                    </p>
                    <p className={styles.foundersText}>
                        Shortly after their move to the countryside, Sophia&apos;s grandmother was diagnosed
                        with a chronic illness. The news devastated them, but it also ignited a mission.
                        They worked together to help her change her lifestyle following her diagnosis.
                        In doing so, they learned that many toxic and harmful ingredients were lurking
                        in everyday products – even those that were luxury and claimed to be natural.
                    </p>
                    <p className={styles.foundersText}>
                        The two struck out on a journey to solve this problem and spent 5 years researching
                        and developing what would become the very first Ora Essence product, one that delivered
                        efficacious results in a luxury experience without having to compromise your health.
                        Since inception, Sophia and Marcus have never wavered from their mission: to create
                        a brand that epitomizes beauty made without compromise. From their unique approach to
                        formulation, grounded in the philosophy that completely equals efficacy and more
                        ingredients equal more results, to the completely vertical integration with zero
                        shortcuts or outsourcing that now defines the farm-to-face movement, the two have
                        pioneered what truly is the next generation of beauty. One that is not just natural
                        and non-toxic, but one that delivers exponentially more results than ever before.
                    </p>
                </div>
            </section>

            {/* Powered by Nature - Full Width Hero */}
            <section
                className={styles.fullWidthHero}
                style={{ backgroundImage: 'url(/images/nature_bokeh.png)' }}
            >
                <div className={styles.fullWidthOverlay}></div>
                <div className={styles.fullWidthContent}>
                    <h2 className={styles.fullWidthTitle}>Crafted by Nature</h2>
                    <p className={styles.fullWidthSubtitle}>
                        Our high-performance formulas are born from the most powerful ingredients nature has to offer
                    </p>
                </div>
            </section>

            {/* Ingredients Link Section */}
            <section className={styles.splitSection}>
                <div className={styles.splitContent}>
                    <p className={styles.heroLabel}>MORE INGREDIENTS. MORE RESULTS.</p>
                    <h2 className={styles.splitTitle}>100+ Pure Ingredients</h2>
                    <p className={styles.splitText}>
                        African Wild Grape. Inca Inchi. Narcissus Bulb Extract. Fermented Giant
                        Bamboo. Edelweiss Stem Cells. Not your everyday botanicals. We&apos;re always
                        sourcing radical new revelations in botanical beauty from over 68 countries worldwide.
                    </p>
                    <Link href="/about/ingredients" className={styles.ctaLink}>
                        Explore Our Ingredients →
                    </Link>
                </div>
                <div className={styles.imageStack}>
                    <Image
                        src="/images/botanical_hands.png"
                        alt="Hands holding botanical ingredients"
                        width={800}
                        height={600}
                        className={styles.splitImage}
                    />
                    <Image
                        src="/images/farm_landscape.png"
                        alt="Our organic farm"
                        width={800}
                        height={600}
                        className={styles.splitImage}
                    />
                </div>
            </section>

            {/* We Believe That More Matters */}
            <section className={styles.splitSection}>
                <Image
                    src="/images/hands_serum.png"
                    alt="Applying Ora Essence serum"
                    width={800}
                    height={800}
                    className={styles.splitImage}
                />
                <div className={styles.splitContent}>
                    <p className={styles.moreMattersLabel}>WHAT WE DO BEST</p>
                    <h2 className={styles.splitTitle}>We Believe That More Matters</h2>
                    <p className={styles.splitText}>
                        We pack the most ingredients at the highest levels of concentration to deliver maximum results—
                        without a single drop of artificial chemicals.
                    </p>
                    <p className={styles.splitText}>
                        Our products are made for those who expect the best and want the most results from their skincare.
                    </p>
                    <p className={styles.splitText}>
                        Our non-toxic products will never make you choose between health and results or between natural
                        and high-performance. You shouldn&apos;t have to compromise your ideals when it comes to beauty. That&apos;s
                        why every product we make is formulated without compromise. Period.
                    </p>
                    <p className={styles.splitText}>
                        Look for the High Performing Ingredients icon on your box and on our site to see just how many
                        ingredients are working to make your skin beautiful.
                    </p>
                </div>
            </section>

            {/* Why Should You Invest in Our Products */}
            <section className={styles.splitSection}>
                <div className={styles.splitContent}>
                    <h2 className={styles.splitTitle}>Why Should You Invest in Our Products?</h2>
                    <ul className={styles.numberedList}>
                        <li className={styles.numberedItem}>
                            <span className={styles.itemNumber}>01.</span>
                            <h3 className={styles.itemTitle}>Quality Sources</h3>
                            <p className={styles.itemText}>
                                We source more than 300 different ingredients from over 68 countries. The best
                                organic ingredients come from all over the globe – and Ora leaves no stone unturned
                                to find the best. We believe in quality over quantity – that means no mass-produced
                                ingredients. When we need Prickly Pear Cactus, we know the best place to get it is
                                the Galapagos Islands, because they love the sun (and they also help feed the iguana
                                population there too). So, we go there. And if it&apos;s not available due to a tropical
                                storm, you may notice we are out of stock, because we make zero compromises on our
                                sourcing.
                            </p>
                        </li>
                        <li className={styles.numberedItem}>
                            <span className={styles.itemNumber}>02.</span>
                            <h3 className={styles.itemTitle}>Intense Concentrations</h3>
                            <p className={styles.itemText}>
                                In fact, we spend up to 75% of our costs on raw ingredients for certain formulations—
                                so you aren&apos;t just paying for a pretty bottle, you&apos;re paying for what&apos;s inside.
                            </p>
                        </li>
                        <li className={styles.numberedItem}>
                            <span className={styles.itemNumber}>03.</span>
                            <h3 className={styles.itemTitle}>More Ingredients</h3>
                            <p className={styles.itemText}>
                                More ingredients mean more benefits, more results, and exponentially more value.
                                We don&apos;t believe in single-ingredient solutions. We believe in comprehensive,
                                multi-faceted formulations.
                            </p>
                        </li>
                        <li className={styles.numberedItem}>
                            <span className={styles.itemNumber}>04.</span>
                            <h3 className={styles.itemTitle}>Complex Chemistry</h3>
                            <p className={styles.itemText}>
                                Our formulations undergo rigorous testing and refinement. Each ingredient is chosen
                                not just for its individual benefits, but for how it works synergistically with others
                                to deliver unprecedented results.
                            </p>
                        </li>
                    </ul>
                </div>
                <Image
                    src="/images/oil_droplets.png"
                    alt="Luxury oil formulation"
                    width={800}
                    height={1000}
                    className={styles.splitImage}
                />
            </section>

            {/* Certifications Section */}
            <section
                className={styles.certificationsSection}
                style={{ backgroundImage: 'url(/images/green_leaf.png)' }}
            >
                <div className={styles.certificationsOverlay}></div>
                <div className={styles.certificationsContent}>
                    <h2 className={styles.certificationsTitle}>Certified Excellence</h2>
                    <p className={styles.certificationsText}>
                        We are absolutely natural and committed to eco-friendly practices, but don&apos;t just take our word for it.
                        We&apos;ve voluntarily taken steps to ensure that our products are third-party certified for purity,
                        sustainability, and ethical standards.
                    </p>
                    <Link href="/about/certifications" className={styles.readMoreButton}>
                        VIEW OUR CERTIFICATIONS
                    </Link>
                </div>
            </section>

            {/* Final Quote */}
            <section className={styles.closingSection}>
                <blockquote className={styles.quoteText} style={{ color: '#333', maxWidth: '900px', margin: '0 auto' }}>
                    &quot;I love doing this. I feel very happy creating a product that not only makes
                    your skin beautiful but also keeps people healthy and improves quality of life.
                    That is extremely rewarding.&quot;
                </blockquote>
                <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', color: '#666', marginTop: '1rem' }}>– Sophia</p>
            </section>
        </main>
    );
}
