import Image from 'next/image';
import Link from 'next/link';
import styles from './ServiceGrid.module.css';

interface ServiceItem {
    image: string;
    imageAlt: string;
    title: string;
    description: string;
    link?: string;
}

const services: ServiceItem[] = [
    {
        image: '/images/service-personalized.jpg',
        imageAlt: 'Personalized skincare consultation',
        title: 'Get Personalized Recommendations',
        description: 'Take our skin quiz to discover products tailored to your unique skin concerns and goals.',
        link: '/quiz'
    },
    {
        image: '/images/service-match.jpg',
        imageAlt: 'Find your perfect match',
        title: 'Find Your Perfect Match',
        description: 'Explore our curated collections and find the perfect routine for your skin type.',
        link: '/products'
    },
    {
        image: '/images/service-subscribe.jpg',
        imageAlt: 'Subscribe and save',
        title: 'Subscribe & Save',
        description: 'Never miss a step in your routine with auto-delivery—plus, save on every order.',
        link: '/subscribe'
    },
    {
        image: '/images/service-rewards.jpg',
        imageAlt: 'Join rewards program',
        title: 'Join for Rewards',
        description: 'Sign up for our rewards program for early access to sales, free shipping, and exclusive perks.',
        link: '/rewards'
    }
];

export default function ServiceGrid() {
    return (
        <section className={styles.serviceGrid}>
            <div className={styles.grid}>
                {services.map((service, index) => (
                    <div key={index} className={styles.serviceItem}>
                        <div className={styles.imageWrapper}>
                            <Image
                                src={service.image}
                                alt={service.imageAlt}
                                fill
                                sizes="(max-width: 640px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                        <div className={styles.content}>
                            <h3 className={styles.title}>{service.title}</h3>
                            <p className={styles.description}>{service.description}</p>
                            {service.link && (
                                <Link href={service.link} className={styles.link}>
                                    Learn More →
                                </Link>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
