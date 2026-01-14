'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './Rituals.module.css';
import { products } from '../data/products';

export default function RitualsPage() {
    // Filter products for morning and evening rituals
    const morningProducts = [
        products.find(p => p.slug === 'regenerating-cleanser'),
        products.find(p => p.slug === 'revitalizing-toner'),
        products.find(p => p.slug === 'advanced-repair-serum'),
        products.find(p => p.slug === 'vitality-barrier-cream'),
    ].filter(Boolean);

    const eveningProducts = [
        products.find(p => p.slug === 'purifying-cleanser'),
        products.find(p => p.slug === 'renewal-face-oil'),
        products.find(p => p.slug === 'midnight-recovery-oil'),
        products.find(p => p.slug === 'diamond-dust-exfoliator'),
    ].filter(Boolean);

    const discoveryKits = [
        {
            title: 'Morning Ritual Kit',
            price: '$198',
            description: 'Everything you need for a radiant morning routine',
            image: '/images/advanced_repair_serum.png'
        },
        {
            title: 'Evening Ritual Kit',
            price: '$225',
            description: 'Complete overnight repair and rejuvenation',
            image: '/images/midnight_recovery_oil.png'
        },
        {
            title: 'Travel Minis Set',
            price: '$85',
            description: 'TSA-friendly sizes for rituals on the go',
            image: '/images/vitality_barrier_cream.png'
        },
    ];

    return (
        <main>
            {/* Hero Section */}
            <section className={styles.hero}>
                <motion.div
                    className={styles.heroContent}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className={styles.heroTitle}>Discover Your Perfect Ritual</h1>
                    <p className={styles.heroSubtitle}>
                        Skincare is not a chore, it's a ritual. Transform your skin with a personalized,
                        naturally-derived regimen that delivers real results.
                    </p>
                    <div className={styles.heroCTAs}>
                        <Link href="/quiz" className={styles.ctaPrimary}>
                            Take the Quiz
                        </Link>
                        <Link href="#rituals" className={styles.ctaSecondary}>
                            Explore Rituals
                        </Link>
                    </div>
                </motion.div>
            </section>

            {/* Philosophy Section */}
            <section className={styles.philosophySection}>
                <motion.div
                    className={styles.philosophyContent}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <p className={styles.sectionLabel}>The Ora Essence Philosophy</p>
                    <h2 className={styles.sectionTitle}>Why Rituals Matter</h2>
                    <p className={styles.sectionText}>
                        Consistency is the secret to transformative results. When you commit to a daily ritual,
                        you're not just applying products—you're investing in your skin's long-term health.
                        Our rituals are designed to work synergistically, with each step enhancing the next,
                        delivering compounding benefits over time.
                    </p>
                </motion.div>
            </section>

            {/* Morning Ritual Showcase */}
            <section id="rituals" className={styles.ritualShowcase}>
                <motion.div
                    className={styles.ritualContent}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div>
                        <Image
                            src="/images/founder_portrait.png"
                            alt="Morning Ritual"
                            width={600}
                            height={500}
                            className={styles.ritualImage}
                        />
                    </div>
                    <div className={styles.ritualDetails}>
                        <p className={styles.sectionLabel}>☀️ MORNING</p>
                        <h2>Morning Glow Ritual</h2>
                        <p>
                            Start your day with a refreshing ritual that prepares your skin for environmental
                            stressors while delivering lasting hydration and radiance.
                        </p>
                        <ul className={styles.ritualSteps}>
                            <li className={styles.ritualStep}>
                                <span className={styles.stepNumber}>1</span>
                                <div className={styles.stepContent}>
                                    <h4>Cleanse</h4>
                                    <p>Gently remove overnight impurities with our Regenerating Cleanser</p>
                                </div>
                            </li>
                            <li className={styles.ritualStep}>
                                <span className={styles.stepNumber}>2</span>
                                <div className={styles.stepContent}>
                                    <h4>Prep & Hydrate</h4>
                                    <p>Balance pH and prep skin with Revitalizing Toner</p>
                                </div>
                            </li>
                            <li className={styles.ritualStep}>
                                <span className={styles.stepNumber}>3</span>
                                <div className={styles.stepContent}>
                                    <h4>Treat</h4>
                                    <p>Target concerns with Advanced Repair Serum</p>
                                </div>
                            </li>
                            <li className={styles.ritualStep}>
                                <span className={styles.stepNumber}>4</span>
                                <div className={styles.stepContent}>
                                    <h4>Protect & Glow</h4>
                                    <p>Lock in moisture with Vitality Barrier Cream</p>
                                </div>
                            </li>
                        </ul>
                        <Link href="/rituals/morning" className={styles.ctaPrimary}>
                            Shop Morning Ritual
                        </Link>
                    </div>
                </motion.div>
            </section>

            {/* Morning Products Grid */}
            <section className={styles.productsGrid}>
                <div className={styles.productsGridContent}>
                    <h3 className={styles.productsGridTitle}>Morning Essentials</h3>
                    <div className={styles.productCards}>
                        {morningProducts.map((product) => product && (
                            <motion.div
                                key={product.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                style={{
                                    background: '#fff',
                                    padding: '1.5rem',
                                    borderRadius: '8px',
                                    boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
                                    textAlign: 'center'
                                }}
                            >
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    width={200}
                                    height={250}
                                    style={{ width: '100%', height: 'auto', marginBottom: '1rem' }}
                                />
                                <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', color: 'var(--color-primary)', marginBottom: '0.5rem' }}>
                                    {product.name}
                                </h4>
                                <p style={{ fontSize: '1.125rem', color: '#D4AF37', marginBottom: '1rem', fontWeight: '600' }}>
                                    ${product.price}
                                </p>
                                <Link
                                    href={`/products/${product.slug}`}
                                    style={{
                                        display: 'inline-block',
                                        background: 'var(--color-primary)',
                                        color: '#fff',
                                        padding: '0.75rem 2rem',
                                        borderRadius: '4px',
                                        fontSize: '0.875rem',
                                        textTransform: 'uppercase',
                                        letterSpacing: '1px'
                                    }}
                                >
                                    View Product
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Evening Ritual Showcase */}
            <section className={styles.ritualShowcaseAlt}>
                <motion.div
                    className={styles.ritualContent}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className={styles.ritualDetails}>
                        <p className={styles.sectionLabel}>🌙 EVENING</p>
                        <h2>Evening Repair Ritual</h2>
                        <p>
                            Wind down with a restorative evening ritual that supports your skin's natural
                            overnight repair process for visible transformation by morning.
                        </p>
                        <ul className={styles.ritualSteps}>
                            <li className={styles.ritualStep}>
                                <span className={styles.stepNumber}>1</span>
                                <div className={styles.stepContent}>
                                    <h4>Double Cleanse</h4>
                                    <p>Remove makeup and impurities with Purifying Cleanser</p>
                                </div>
                            </li>
                            <li className={styles.ritualStep}>
                                <span className={styles.stepNumber}>2</span>
                                <div className={styles.stepContent}>
                                    <h4>Exfoliate (2-3x weekly)</h4>
                                    <p>Polish and refine with Diamond Dust Exfoliator</p>
                                </div>
                            </li>
                            <li className={styles.ritualStep}>
                                <span className={styles.stepNumber}>3</span>
                                <div className={styles.stepContent}>
                                    <h4>Nourish</h4>
                                    <p>Apply Renewal Face Oil for deep hydration</p>
                                </div>
                            </li>
                            <li className={styles.ritualStep}>
                                <span className={styles.stepNumber}>4</span>
                                <div className={styles.stepContent}>
                                    <h4>Overnight Recovery</h4>
                                    <p>Seal everything in with Midnight Recovery Oil</p>
                                </div>
                            </li>
                        </ul>
                        <Link href="/rituals/evening" className={styles.ctaPrimary}>
                            Shop Evening Ritual
                        </Link>
                    </div>
                    <div>
                        <Image
                            src="/images/lavender_harvest.png"
                            alt="Evening Ritual"
                            width={600}
                            height={500}
                            className={styles.ritualImage}
                        />
                    </div>
                </motion.div>
            </section>

            {/* Evening Products Grid */}
            <section className={styles.productsGrid} style={{ background: '#f9f9f9' }}>
                <div className={styles.productsGridContent}>
                    <h3 className={styles.productsGridTitle}>Evening Essentials</h3>
                    <div className={styles.productCards}>
                        {eveningProducts.map((product) => product && (
                            <motion.div
                                key={product.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                style={{
                                    background: '#fff',
                                    padding: '1.5rem',
                                    borderRadius: '8px',
                                    boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
                                    textAlign: 'center'
                                }}
                            >
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    width={200}
                                    height={250}
                                    style={{ width: '100%', height: 'auto', marginBottom: '1rem' }}
                                />
                                <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', color: 'var(--color-primary)', marginBottom: '0.5rem' }}>
                                    {product.name}
                                </h4>
                                <p style={{ fontSize: '1.125rem', color: '#D4AF37', marginBottom: '1rem', fontWeight: '600' }}>
                                    ${product.price}
                                </p>
                                <Link
                                    href={`/products/${product.slug}`}
                                    style={{
                                        display: 'inline-block',
                                        background: 'var(--color-primary)',
                                        color: '#fff',
                                        padding: '0.75rem 2rem',
                                        borderRadius: '4px',
                                        fontSize: '0.875rem',
                                        textTransform: 'uppercase',
                                        letterSpacing: '1px'
                                    }}
                                >
                                    View Product
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Quiz CTA */}
            <section className={styles.quizCTA}>
                <motion.div
                    className={styles.quizCTAContent}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className={styles.quizCTATitle}>Not Sure Where to Start?</h2>
                    <p className={styles.quizCTAText}>
                        Take our personalized skin quiz to discover the perfect ritual for your unique skin needs.
                    </p>
                    <Link href="/quiz" className={styles.quizButton}>
                        Take the Skin Quiz
                    </Link>
                </motion.div>
            </section>

            {/* Discovery Kits */}
            <section className={styles.kitsSection}>
                <div className={styles.kitsContent}>
                    <p className={styles.sectionLabel}>Curated Collections</p>
                    <h2 className={styles.sectionTitle}>Discovery Kits</h2>
                    <p className={styles.sectionText} style={{ marginBottom: '0' }}>
                        Not ready to build your own? Start with our expertly curated ritual kits.
                    </p>
                    <div className={styles.kitsGrid}>
                        {discoveryKits.map((kit, index) => (
                            <motion.div
                                key={index}
                                className={styles.kitCard}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Image
                                    src={kit.image}
                                    alt={kit.title}
                                    width={300}
                                    height={250}
                                    className={styles.kitImage}
                                />
                                <h3 className={styles.kitTitle}>{kit.title}</h3>
                                <p className={styles.kitPrice}>{kit.price}</p>
                                <p className={styles.kitDescription}>{kit.description}</p>
                                <Link href="/products" className={styles.ctaPrimary}>
                                    Shop Now
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
