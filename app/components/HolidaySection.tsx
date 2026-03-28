import Image from 'next/image';
import Link from 'next/link';
import styles from './HolidaySection.module.css';

export default function HolidaySection() {
    return (
        <section className={`container ${styles.section}`}>
            <h2 className={styles.title}>Our Ultimate Holiday Treasures</h2>
            <p className={styles.subtitle}>
                Discover our Holiday Sets that help deliver luminous skin and leave a lasting impression.
            </p>

            <div className={styles.grid}>
                <div className={styles.imageWrapper}>
                    <Image
                        src="/images/holiday-set.png"
                        alt="Holiday Lip & Blush Kit"
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        style={{ objectFit: 'contain' }}
                    />
                </div>
                <div className={styles.details}>
                    <span style={{ color: '#4A6E4D', fontWeight: 'bold', fontSize: '0.8rem', textTransform: 'uppercase', marginBottom: '0.5rem', display: 'block' }}>New</span>
                    <h3 className={styles.productName}>Holiday Lip & Blush Kit</h3>
                    <p className={styles.productPrice}>A $129 Value For $115</p>
                    <div className={styles.rating}>★ 4.9 (120 Reviews)</div>
                    <Link href="/products/holiday-lip-blush-kit" className="btn-primary" style={{ display: 'inline-block', textDecoration: 'none', textAlign: 'center' }}>Shop Now</Link>
                </div>
            </div>
            {/* Duplicate for demo if needed, or just one feature */}
        </section>
    );
}
