import Image from 'next/image';
import Link from 'next/link';
import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.imageWrapper}>
                <Image
                    src="/images/ora_essence_hero_enhanced.png"
                    alt="ORA ESSENCE - Luxury Botanical Skincare Collection"
                    fill
                    priority
                    style={{ objectFit: 'cover' }}
                />
            </div>

            <div className={styles.content}>
                <h1 className={styles.title}>Pure · Calm · Timeless</h1>
                <p className={styles.subtitle}>
                    Experience the healing power of nature with our new botanical collection.
                </p>
                <Link href="/products" className={styles.cta}>Shop The Collection</Link>
            </div>
        </section>
    );
}
