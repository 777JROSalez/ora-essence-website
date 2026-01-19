import styles from './SecurityBadges.module.css';
import Image from 'next/image';

interface SecurityBadgesProps {
    variant?: 'full' | 'compact';
}

export default function SecurityBadges({ variant = 'full' }: SecurityBadgesProps) {
    const badges = [
        {
            name: 'SSL Secured',
            icon: '🔒',
            description: '256-bit encryption'
        },
        {
            name: 'PCI DSS',
            icon: '✓',
            description: 'Compliant'
        },
        {
            name: 'Norton Secured',
            icon: '🛡️',
            description: 'Protected'
        },
        {
            name: 'Secure Payments',
            icon: '💳',
            description: 'Stripe & PayPal'
        }
    ];

    if (variant === 'compact') {
        return (
            <div className={styles.compactBadges}>
                {badges.slice(0, 2).map((badge, index) => (
                    <div key={index} className={styles.compactBadge}>
                        <span className={styles.icon}>{badge.icon}</span>
                        <span className={styles.text}>{badge.name}</span>
                    </div>
                ))}
            </div>
        );
    }

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h3 className={styles.title}>Secure Shopping Guarantee</h3>
                <p className={styles.subtitle}>Your data is protected with industry-leading security</p>
            </div>

            <div className={styles.badgesGrid}>
                {badges.map((badge, index) => (
                    <div key={index} className={styles.badge}>
                        <div className={styles.badgeIcon}>{badge.icon}</div>
                        <div className={styles.badgeContent}>
                            <div className={styles.badgeName}>{badge.name}</div>
                            <div className={styles.badgeDescription}>{badge.description}</div>
                        </div>
                    </div>
                ))}
            </div>

            <div className={styles.footer}>
                <p className={styles.footerText}>
                    🔐 All transactions are encrypted and secure. We never store your full credit card details.
                </p>
            </div>
        </div>
    );
}
