import Image from 'next/image';
import styles from './TrustBadges.module.css';

interface Badge {
    name: string;
    image: string;
    alt: string;
    tooltip: string;
}

const badges: Badge[] = [
    {
        name: 'Ecocert',
        image: '/images/certifications/ecocert.png',
        alt: 'Ecocert Cosmos Organic Certified',
        tooltip: 'Certified organic by Ecocert'
    },
    {
        name: 'Leaping Bunny',
        image: '/images/certifications/leaping-bunny.png',
        alt: 'Leaping Bunny Certified Cruelty-Free',
        tooltip: 'Cruelty-free certified'
    },
    {
        name: 'USDA Organic',
        image: '/images/certifications/usda-organic.png',
        alt: 'USDA Organic Certified',
        tooltip: 'USDA certified organic'
    },
    {
        name: 'B Corp',
        image: '/images/certifications/bcorp.png',
        alt: 'Certified B Corporation',
        tooltip: 'Certified B Corporation'
    }
];

interface TrustBadgesProps {
    compact?: boolean;
}

export default function TrustBadges({ compact = false }: TrustBadgesProps) {
    return (
        <section className={styles.section}>
            {!compact && <h3 className={styles.title}>Certified Excellence</h3>}
            <div className={`${styles.badgeGrid} ${compact ? styles.compact : ''}`}>
                {badges.map((badge) => (
                    <div key={badge.name} className={styles.badgeItem} title={badge.tooltip}>
                        <div className={styles.badgeWrapper}>
                            <Image
                                src={badge.image}
                                alt={badge.alt}
                                width={compact ? 60 : 80}
                                height={compact ? 60 : 80}
                                className={styles.badgeImage}
                            />
                        </div>
                        {!compact && <span className={styles.badgeName}>{badge.name}</span>}
                    </div>
                ))}
            </div>
        </section>
    );
}
