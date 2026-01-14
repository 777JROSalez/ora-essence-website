import Image from 'next/image';
import styles from './Ingredients.module.css';

const ingredients = [
    {
        name: "African Wild Grape",
        origin: "South Africa",
        description: "Known for its incredible resilience and antioxidant properties, helping to protect skin from environmental stressors.",
        image: "/images/botanical_hands.png" // Using existing image as placeholder
    },
    {
        name: "Inca Inchi",
        origin: "Peru",
        description: "One of the richest plant sources of Omega 3, helping to restore skin elasticity and hydration.",
        image: "/images/flower_basket.png" // Using existing image as placeholder
    },
    {
        name: "Narcissus Bulb",
        origin: "Israel",
        description: "Dormant bulbs that awaken skin's natural defense mechanisms to blur fine lines and boost radiance.",
        image: "/images/lavender_harvest.png" // Using existing image as placeholder
    },
    {
        name: "Edelweiss Stem Cells",
        origin: "Switzerland",
        description: "A powerful antioxidant that strengthens the skin barrier and smooths the appearance of wrinkles.",
        image: "/images/oil_droplets.png" // Using existing image as placeholder
    },
    {
        name: "Prickly Pear Cactus",
        origin: "Galapagos Islands",
        description: "A desert superfood for the skin, packed with Vitamin K and E to brighten and calm inflammation.",
        image: "/images/hands_serum.png" // Using existing image as placeholder
    },
    {
        name: "Rose Otto",
        origin: "Bulgaria",
        description: "The queen of oils, requiring thousands of petals for a single drop. Profoundly hydrating and soothing.",
        image: "/images/hero_botanicals.png" // Using existing image as placeholder
    }
];

export default function IngredientsPage() {
    return (
        <main className={styles.container}>
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.heroBackground}>
                    <Image
                        src="/images/nature_bokeh.png"
                        alt="Background of lush nature"
                        fill
                        style={{ objectFit: 'cover' }}
                        priority
                    />
                    <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.3)' }} />
                </div>
                <div className={styles.heroContent}>
                    <h1 className={styles.title}>Our Ingredients</h1>
                    <p className={styles.subtitle}>
                        We travel the globe to source the highest performing natural ingredients.
                        No fillers. No synthetics. Just pure, potent nature.
                    </p>
                </div>
            </section>

            {/* Philosophy Section */}
            <section className={styles.philosophySection}>
                <div className={styles.philosophyContent}>
                    <h2 className={styles.philosophyTitle}>More matters</h2>
                    <p className={styles.philosophyText}>
                        We believe that more ingredients equal more results. That's why our formulas are complex, containing up to 43 active ingredients working in synergy. While others focus on one "hero" ingredient, we pack our bottles with a symphony of bio-actives.
                    </p>
                    <p className={styles.philosophyText}>
                        We source from over 68 countries, building relationships with small farms that share our dedication to quality and sustainability.
                    </p>
                </div>
            </section>

            {/* Grid Section */}
            <section className={styles.gridSection}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>Meet Our Stars</h2>
                </div>
                <div className={styles.grid}>
                    {ingredients.map((item, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.cardImageWrapper}>
                                <Image
                                    src={item.image}
                                    alt={item.name}
                                    fill
                                    className={styles.cardImage}
                                />
                            </div>
                            <h3 className={styles.cardTitle}>{item.name}</h3>
                            <p className={styles.cardOrigin}>{item.origin}</p>
                            <p className={styles.cardDescription}>{item.description}</p>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}
