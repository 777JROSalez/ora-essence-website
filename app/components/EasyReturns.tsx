import styles from './EasyReturns.module.css';
import Link from 'next/link';

export default function EasyReturns() {
    return (
        <div className={styles.banner}>
            <div className={styles.content}>
                <div className={styles.icon}>↩️</div>
                <div className={styles.text}>
                    <h3 className={styles.title}>90-Day Money-Back Guarantee</h3>
                    <p className={styles.description}>
                        Not completely satisfied? Return it within 90 days for a full refund—no questions asked.
                    </p>
                </div>
                <Link href="/pages/returns" className={styles.learnMore}>
                    Learn More →
                </Link>
            </div>
        </div>
    );
}
