import styles from './ClinicalProof.module.css';

interface Stat {
    value: string;
    label: string;
    description: string;
}

const stats: Stat[] = [
    {
        value: '97%',
        label: 'Saw Visible Results',
        description: 'In clinical trials within 28 days'
    },
    {
        value: '28',
        label: 'Days to Glowing Skin',
        description: 'Average time for visible transformation'
    },
    {
        value: '5.0',
        label: 'Clinical Rating',
        description: 'Based on dermatologist evaluations'
    }
];

export default function ClinicalProof() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.label}>Clinically Proven Results</span>
                    <h2 className={styles.title}>The Science of Beautiful Skin</h2>
                    <p className={styles.subtitle}>
                        Our formulations undergo rigorous third-party clinical testing to ensure
                        measurable, visible results you can trust.
                    </p>
                </div>

                <div className={styles.statsGrid}>
                    {stats.map((stat, index) => (
                        <div key={index} className={styles.statCard}>
                            <div className={styles.statValue}>{stat.value}</div>
                            <h3 className={styles.statLabel}>{stat.label}</h3>
                            <p className={styles.statDescription}>{stat.description}</p>
                        </div>
                    ))}
                </div>

                <div className={styles.footer}>
                    <p className={styles.disclaimer}>
                        *Results based on independent clinical studies conducted over 28 days
                        with 100+ participants. Individual results may vary.
                    </p>
                </div>
            </div>
        </section>
    );
}
