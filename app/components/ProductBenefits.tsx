import { KeyBenefit } from '../data/products';
import Image from 'next/image';
import styles from './ProductBenefits.module.css';

interface ProductBenefitsProps {
    benefits: KeyBenefit[];
    benefitImage?: string;
    productName: string;
}

export default function ProductBenefits({ benefits, benefitImage, productName }: ProductBenefitsProps) {
    if (!benefits || benefits.length === 0) return null;

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.benefitsColumn}>
                    <h2 className={styles.heading}>Key Benefits</h2>
                    <div className={styles.benefitsList}>
                        {benefits.map((benefit) => (
                            <div key={benefit.number} className={styles.benefit}>
                                <span className={styles.benefitNumber}>0{benefit.number}</span>
                                <div className={styles.benefitContent}>
                                    <h3 className={styles.benefitTitle}>{benefit.title}</h3>
                                    <p className={styles.benefitDescription}>{benefit.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {benefitImage && (
                    <div className={styles.imageColumn}>
                        <div className={styles.imageContainer}>
                            <Image
                                src={benefitImage}
                                alt={`${productName} benefits`}
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className={styles.image}
                            />
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
