'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './InteractiveIngredients.module.css';

interface Ingredient {
    name: string;
    origin: string;
}

interface Props {
    ingredients: Ingredient[];
}

// Map ingredients to their generated assets (fallback to pomegranate if missing for now)
const getIngredientImage = (name: string) => {
    const lowerName = name.toLowerCase();
    if (lowerName.includes('pomegranate')) return '/images/ingredient_pomegranate.png';
    if (lowerName.includes('rose')) return '/images/ingredient_rose.png';
    if (lowerName.includes('witch')) return '/images/ingredient_witch_hazel.png';
    if (lowerName.includes('hyaluronic')) return '/images/ingredient_hyaluronic_acid.png';
    if (lowerName.includes('aloe')) return '/images/ingredient_aloe_vera.png';
    if (lowerName.includes('clay')) return '/images/ingredient_pink_clay.png';
    if (lowerName.includes('willow')) return '/images/ingredient_willow_bark.png';
    // Fallback for others
    if (lowerName.includes('gold')) return '/images/ingredient_pomegranate.png';
    return '/images/ingredient_pomegranate.png';
};

export default function InteractiveIngredients({ ingredients }: Props) {
    const [activeIndex, setActiveIndex] = useState<number>(0);

    return (
        <div className={styles.container}>
            <div className={styles.tutorialText}>
                The Science of Beauty
            </div>

            {/* Orbit Ring Container */}
            <div className={styles.orbitRing} style={{ animationPlayState: 'running' }}>
                {ingredients.map((ing, i) => {
                    // Calculate position on the circle
                    // We distribute them evenly
                    const angle = (i / ingredients.length) * 2 * Math.PI;
                    const radius = 300; // Half of ring width (600px)
                    const x = Math.cos(angle) * radius;
                    const y = Math.sin(angle) * radius; // CSS will handle rotation, this is initial placement if using absolute?

                    // Better approach for CSS rotation: Place them using transforms
                    // Actually, to make them rotate with the ring, we just place them at specific angles relative to center
                    // left: 50%, top: 50% -> offset

                    return (
                        <div
                            key={i}
                            className={styles.orbitNode}
                            style={{
                                left: `50%`,
                                top: `50%`,
                                marginLeft: '-70px', // Half width of 140px
                                marginTop: '-70px',
                                transform: `rotate(${i * (360 / ingredients.length)}deg) translate(300px) rotate(-${i * (360 / ingredients.length)}deg)`
                            }}
                            onClick={() => setActiveIndex(i)}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' || e.key === ' ') {
                                    setActiveIndex(i);
                                }
                            }}
                            tabIndex={0}
                            role="button"
                            aria-label={`View details for ${ing.name}`}
                            aria-pressed={activeIndex === i}
                        >
                            <Image
                                src={getIngredientImage(ing.name)}
                                alt={ing.name}
                                width={80}
                                height={80}
                                className={styles.nodeImage}
                            />
                        </div>
                    );
                })}
            </div>

            {/* Center Node (Active) */}
            <div className={styles.centerNode}>
                <Image
                    src={getIngredientImage(ingredients[activeIndex].name)}
                    alt={ingredients[activeIndex].name}
                    width={200}
                    height={200}
                    className={styles.centerImage}
                />
            </div>

            {/* Info Overlay */}
            <div className={styles.infoOverlay}>
                <h3 className={styles.title}>{ingredients[activeIndex].name}</h3>
                <div className={styles.origin}>Sourced from {ingredients[activeIndex].origin}</div>
                <p className={styles.description}>
                    A powerful botanical active chosen for its exceptional ability to rejuvenate and restore skin health at a cellular level.
                </p>
            </div>
        </div>
    );
}
