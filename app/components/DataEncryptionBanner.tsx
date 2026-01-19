import styles from './DataEncryptionBanner.module.css';
import Link from 'next/link';

export default function DataEncryptionBanner() {
    return (
        <div className={styles.banner}>
            <div className={styles.content}>
                <span className={styles.icon}>🔒</span>
                <div className={styles.text}>
                    <span className={styles.mainText}>Your data is encrypted and secure</span>
                    <Link href="/pages/security-policy" className={styles.link}>
                        Learn about our security practices
                    </Link>
                </div>
            </div>
        </div>
    );
}
