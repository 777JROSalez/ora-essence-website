import Link from 'next/link';
import styles from './ShopByConcern.module.css';

interface Concern {
    slug: string;
    label: string;
    icon: string;
    description: string;
}

const concerns: Concern[] = [
    {
        slug: 'dryness',
        label: 'Dryness',
        icon: '💧',
        description: 'Hydrating formulas for parched skin'
    },
    {
        slug: 'aging',
        label: 'Signs of Aging',
        icon: '✨',
        description: 'Age-defying treatments'
    },
    {
        slug: 'sensitivity',
        label: 'Sensitivity',
        icon: '🌸',
        description: 'Gentle care for reactive skin'
    },
    {
        slug: 'blemishes',
        label: 'Blemishes',
        icon: '🎯',
        description: 'Clarifying solutions'
    },
    {
        slug: 'uneven-skin-tone',
        label: 'Uneven Tone',
        icon: '🌟',
        description: 'Brightening & evening treatments'
    },
    {
        slug: 'pores-texture',
        label: 'Pores & Texture',
        icon: '⚜️',
        description: 'Refining & smoothing formulas'
    },
    {
        slug: 'dullness',
        label: 'Dullness',
        icon: '💎',
        description: 'Radiance-restoring essentials'
    },
    {
        slug: 'redness',
        label: 'Redness',
        icon: '🌿',
        description: 'Calming & soothing care'
    }
];

export default function ShopByConcern() {
    return (
        <section className={styles.section}>
            <div className={styles.header}>
                <h2 className={styles.title}>Shop By Concern</h2>
                <p className={styles.subtitle}>
                    Find your targeted solution. Every product is formulated to address specific skin needs.
                </p>
            </div>

            <div className={styles.concernGrid}>
                {concerns.map((concern) => (
                    <Link
                        key={concern.slug}
                        href={`/concerns/${concern.slug}`}
                        className={styles.concernCard}
                    >
                        <span className={styles.icon}>{concern.icon}</span>
                        <h3 className={styles.concernLabel}>{concern.label}</h3>
                        <p className={styles.description}>{concern.description}</p>
                        <span className={styles.arrow}>→</span>
                    </Link>
                ))}
            </div>
        </section>
    );
}
