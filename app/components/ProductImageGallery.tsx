'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './ProductImageGallery.module.css';

interface ProductImageGalleryProps {
    images: string[];
    productName: string;
}

export default function ProductImageGallery({ images, productName }: ProductImageGalleryProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const goToNext = () => {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };

    return (
        <div className={styles.gallery}>
            {/* Main Image */}
            <div className={styles.mainImageContainer}>
                <div className={styles.mainImage}>
                    <Image
                        src={images[currentIndex]}
                        alt={`${productName} - Image ${currentIndex + 1}`}
                        fill
                        priority
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className={styles.image}
                    />
                </div>

                {/* Navigation Arrows */}
                {images.length > 1 && (
                    <>
                        <button
                            className={`${styles.arrow} ${styles.arrowLeft}`}
                            onClick={goToPrevious}
                            aria-label="Previous image"
                        >
                            ‹
                        </button>
                        <button
                            className={`${styles.arrow} ${styles.arrowRight}`}
                            onClick={goToNext}
                            aria-label="Next image"
                        >
                            ›
                        </button>
                    </>
                )}
            </div>

            {/* Thumbnails */}
            {images.length > 1 && (
                <div className={styles.thumbnailContainer}>
                    {images.map((image, index) => (
                        <button
                            key={index}
                            className={`${styles.thumbnail} ${index === currentIndex ? styles.thumbnailActive : ''
                                }`}
                            onClick={() => goToSlide(index)}
                            aria-label={`View image ${index + 1}`}
                        >
                            <Image
                                src={image}
                                alt={`${productName} thumbnail ${index + 1}`}
                                fill
                                sizes="100px"
                                className={styles.thumbnailImage}
                            />
                        </button>
                    ))}
                </div>
            )}

            {/* Pagination Dots */}
            {images.length > 1 && (
                <div className={styles.dots}>
                    {images.map((_, index) => (
                        <button
                            key={index}
                            className={`${styles.dot} ${index === currentIndex ? styles.dotActive : ''
                                }`}
                            onClick={() => goToSlide(index)}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
