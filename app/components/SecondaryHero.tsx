import Image from 'next/image';
import Link from 'next/link';
import styles from './SecondaryHero.module.css';

interface SecondaryHeroProps {
    title: string;
    description?: string;
    imageSrc: string;
    imageAlt: string;
    ctaText?: string;
    ctaLink?: string;
    textPosition?: 'left' | 'center' | 'right';
}

export default function SecondaryHero({
    title,
    description,
    imageSrc,
    imageAlt,
    ctaText,
    ctaLink,
    textPosition = 'left'
}: SecondaryHeroProps) {
    return (
        <section className={styles.secondaryHero}>
            <div className={styles.imageWrapper}>
                <Image
                    src={imageSrc}
                    alt={imageAlt}
                    fill
                    sizes="100vw"
                    style={{ objectFit: 'cover' }}
                />
                <div className={styles.overlay} />
            </div>

            <div className={`${styles.content} ${styles[textPosition]}`}>
                <h2 className={styles.title}>{title}</h2>
                {description && (
                    <p className={styles.description}>{description}</p>
                )}
                {ctaText && ctaLink && (
                    <Link href={ctaLink} className={styles.cta}>
                        {ctaText}
                    </Link>
                )}
            </div>
        </section>
    );
}
