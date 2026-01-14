import Image from 'next/image';
import styles from './Certifications.module.css';

const certifications = [
    {
        icon: "🌿",
        title: "100% Natural",
        description: "Every single ingredient is derived from nature. We never use synthetic chemicals, artificial fragrances, or petrochemicals."
    },
    {
        icon: "🐰",
        title: "Cruelty-Free",
        description: "We never test on animals at any stage of product development. Our commitment to ethical beauty is unwavering."
    },
    {
        icon: "♻️",
        title: "Sustainable Sourcing",
        description: "We work directly with small farms and cooperatives, ensuring fair wages and regenerative agricultural practices."
    },
    {
        icon: "🌍",
        title: "Carbon Neutral",
        description: "Our production facility runs on renewable energy, and we offset 100% of our carbon footprint."
    },
    {
        icon: "🚫",
        title: "Zero Toxins",
        description: "We've banned over 2,000 potentially harmful ingredients, far exceeding industry standards."
    },
    {
        icon: "✨",
        title: "Third-Party Verified",
        description: "Our products are independently tested and certified by leading organic and natural beauty organizations."
    }
];

const commitments = [
    {
        number: "01",
        title: "Transparency",
        description: "We list every single ingredient, their origin, and their purpose. No secrets, no hidden fillers."
    },
    {
        number: "02",
        title: "Purity",
        description: "From seed to bottle, we control every step to ensure the highest quality and purity standards."
    },
    {
        number: "03",
        title: "Efficacy",
        description: "Natural doesn't mean weak. Our formulas are clinically proven to deliver measurable results."
    },
    {
        number: "04",
        title: "Sustainability",
        description: "We believe in leaving the earth better than we found it, through regenerative practices and minimal waste."
    }
];

export default function CertificationsPage() {
    return (
        <main className={styles.container}>
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.heroBackground}>
                    <Image
                        src="/images/green_leaf.png"
                        alt="Green leaf background"
                        fill
                        style={{ objectFit: 'cover' }}
                        priority
                    />
                    <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(26, 60, 52, 0.7)' }} />
                </div>
                <div className={styles.heroContent}>
                    <h1 className={styles.title}>Our Certifications</h1>
                    <p className={styles.subtitle}>
                        We hold ourselves to the highest standards of purity, sustainability, and transparency.
                        But don't just take our word for it—we've been third-party certified.
                    </p>
                </div>
            </section>

            {/* Certifications Grid */}
            <section className={styles.certSection}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>What We Stand For</h2>
                    <p className={styles.sectionSubtitle}>
                        These certifications represent more than just badges—they're proof of our unwavering
                        commitment to creating products that are pure, effective, and ethical.
                    </p>
                </div>
                <div className={styles.certGrid}>
                    {certifications.map((cert, index) => (
                        <div key={index} className={styles.certCard}>
                            <div className={styles.certIconWrapper}>
                                <span>{cert.icon}</span>
                            </div>
                            <h3 className={styles.certTitle}>{cert.title}</h3>
                            <p className={styles.certDescription}>{cert.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Values Section */}
            <section className={styles.valuesSection}>
                <div className={styles.valuesContent}>
                    <h2 className={styles.valuesTitle}>Our Core Commitments</h2>
                    <div className={styles.valuesList}>
                        {commitments.map((item, index) => (
                            <div key={index} className={styles.valueItem}>
                                <span className={styles.valueNumber}>{item.number}</span>
                                <h3 className={styles.valueItemTitle}>{item.title}</h3>
                                <p className={styles.valueItemText}>{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Commitment Section */}
            <section className={styles.commitmentSection}>
                <h2 className={styles.commitmentTitle}>Our Promise to You</h2>
                <p className={styles.commitmentText}>
                    Every Ora Essence product is crafted with integrity, backed by science, and proven by results.
                    We believe you shouldn't have to compromise your health for beauty, your values for luxury,
                    or efficacy for purity.
                </p>
                <p className={styles.commitmentText}>
                    That's why we voluntarily submit to rigorous third-party testing and certification—because
                    your trust is everything to us, and we want to earn it every single day.
                </p>
            </section>
        </main>
    );
}
