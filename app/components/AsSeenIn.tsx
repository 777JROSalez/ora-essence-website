import Image from 'next/image';
import styles from './AsSeenIn.module.css';

interface Publication {
    name: string;
    image: string;
    alt: string;
}

const publications: Publication[] = [
    {
        name: 'Vogue',
        image: '/images/publications/vogue.png',
        alt: 'Featured in Vogue'
    },
    {
        name: "Harper's Bazaar",
        image: '/images/publications/harpers-bazaar.png',
        alt: "Featured in Harper's Bazaar"
    },
    {
        name: 'Elle',
        image: '/images/publications/elle.png',
        alt: 'Featured in Elle'
    },
    {
        name: 'Allure',
        image: '/images/publications/allure.png',
        alt: 'Featured in Allure'
    }
];

export default function AsSeenIn() {
    return (
        <section className={styles.section}>
            <h2 className={styles.title}>As Featured In</h2>
            <div className={styles.publicationsGrid}>
                {publications.map((pub) => (
                    <div key={pub.name} className={styles.publicationItem}>
                        <Image
                            src={pub.image}
                            alt={pub.alt}
                            width={180}
                            height={80}
                            className={styles.publicationLogo}
                        />
                    </div>
                ))}
            </div>
            <p className={styles.subtitle}>
                Trusted by beauty editors and featured in the world's most prestigious publications
            </p>
        </section>
    );
}
