import Image from 'next/image';
import Link from 'next/link';
import styles from './FounderStory.module.css';

export default function FounderStory() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.imageColumn}>
                    <div className={styles.imageWrapper}>
                        <Image
                            src="/images/founder_portrait.png"
                            alt="Sophia - Founder of Ora Essence"
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            style={{ objectFit: 'cover' }}
                            className={styles.founderImage}
                        />
                    </div>
                </div>

                <div className={styles.contentColumn}>
                    <span className={styles.label}>Our Founder</span>
                    <h2 className={styles.title}>Sophia's Promise</h2>
                    <blockquote className={styles.quote}>
                        "Every product we create is a personal promise from me to you. If I wouldn't use it on my own skin, we won't make it. Your trust is sacred, and I take that responsibility seriously."
                    </blockquote>
                    <p className={styles.description}>
                        After witnessing her grandmother's battle with illness caused by toxic beauty products,
                        Sophia dedicated her life to creating genuinely natural, high-performance skincare.
                        Every Ora Essence formula is personally vetted and tested by Sophia herself before
                        it ever reaches your hands.
                    </p>
                    <div className={styles.guaranteeBox}>
                        <h3 className={styles.guaranteeTitle}>The Ora Essence Guarantee</h3>
                        <ul className={styles.guaranteeList}>
                            <li>100% natural ingredients, no compromises</li>
                            <li>Farm-to-face transparency</li>
                            <li>90-day money-back promise</li>
                            <li>Personal consultation available</li>
                        </ul>
                    </div>
                    <Link href="/about" className={styles.cta}>
                        Read Our Full Story →
                    </Link>
                </div>
            </div>
        </section>
    );
}
