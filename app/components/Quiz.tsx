'use client';

import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';
import styles from './Quiz.module.css';
import Link from 'next/link';

interface Question {
    id: number;
    text: string;
    options: string[];
}

const questions: Question[] = [
    {
        id: 1,
        text: "What's your skin type?",
        options: ["Dry", "Oily", "Combination", "Sensitive"]
    },
    {
        id: 2,
        text: "What is your main concern?",
        options: ["Aging", "Acne", "Dullness", "Dehydration"]
    },
    {
        id: 3,
        text: "How complex is your current routine?",
        options: ["None", "Basic", "Advanced"]
    }
];

export default function Quiz() {
    const [currentStep, setCurrentStep] = useState(0);
    const [answers, setAnswers] = useState<Record<number, string>>({});
    const [showResults, setShowResults] = useState(false);
    const { addToCart, openCart } = useCart();

    const handleOptionSelect = (option: string) => {
        setAnswers({ ...answers, [currentStep]: option });
    };

    const nextStep = () => {
        if (currentStep < questions.length - 1) {
            setCurrentStep(currentStep + 1);
        } else {
            setShowResults(true);
        }
    };

    const prevStep = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
        }
    };

    // Dynamic Regimen Logic
    const getRegimen = () => {
        const skinType = answers[0]; // Dry, Oily...
        const concern = answers[1]; // Aging, Acne...

        // Default Recommendation
        let recommendedIds = ['1']; // Always start with Cleanser

        if (skinType === 'Dry' || concern === 'Dehydration') {
            recommendedIds.push('5', '6'); // Face Oil, Essence
        } else if (skinType === 'Oily' || concern === 'Acne') {
            recommendedIds.push('2', '6'); // Mask, Essence
        } else {
            recommendedIds.push('4', '3'); // Serum, Eye Creme
        }

        if (concern === 'Aging') {
            recommendedIds.push('3'); // Eye Creme
        }

        // De-duplicate
        recommendedIds = Array.from(new Set(recommendedIds));

        // Get full product objects
        return products.filter(p => recommendedIds.includes(p.id));
    };

    const recommendedProducts = showResults ? getRegimen() : [];

    // Calculate Bundle Pricing
    const totalValue = recommendedProducts.reduce((sum, p) => sum + p.price, 0);
    const bundlePrice = Math.round(totalValue * 0.85); // 15% off

    const addRegimenToCart = () => {
        // Create a single bundle item with a unique ID and group image
        const bundleItem = {
            id: `ritual-bundle-${Object.values(answers).join('-')}`,
            name: `Personalized ${answers[0] || 'Skin'} Ritual`,
            price: bundlePrice,
            image: '/images/bundle_group_luxury.png',
            category: 'Bundle',
            slug: 'personalized-ritual',
            description: `A complete regimen for your unique skin profile. Includes: ${recommendedProducts.map(p => p.name).join(', ')}.`
        };

        addToCart(bundleItem);
        // openCart handled by context
    };

    if (showResults) {
        return (
            <div className={styles.container}>
                <h2 className={styles.question}>Your Personalized Jeff Ritual</h2>
                <p style={{ marginBottom: '2rem', color: 'var(--color-text-muted)' }}>
                    Based on your profile (<strong>{answers[0]}</strong> & <strong>{answers[1]}</strong>), we curated this luxury regimen for you:
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                    {recommendedProducts.map((product) => (
                        <div key={product.id} style={{
                            textAlign: 'left',
                            background: '#111',
                            padding: '1rem',
                            borderRadius: '4px',
                            border: '1px solid #333',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '1rem'
                        }}>
                            <img src={product.image} alt={product.name} style={{ width: '50px', height: '50px', objectFit: 'contain' }} />
                            <div>
                                <strong style={{ color: 'var(--color-primary)', display: 'block' }}>{product.name}</strong>
                                <span style={{ color: '#888', fontSize: '0.9rem' }}>${product.price}</span>
                            </div>
                        </div>
                    ))}
                </div>

                <div style={{ borderTop: '1px solid #333', paddingTop: '1rem', marginBottom: '2rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '1.2rem', fontWeight: 'bold' }}>
                        <span style={{ color: 'var(--color-primary)' }}>Total Ritual Value</span>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                            <span style={{ textDecoration: 'line-through', color: '#666', fontSize: '1rem' }}>${totalValue}</span>
                            <span style={{ color: '#DC143C', fontSize: '1.4rem' }}>${bundlePrice}</span>
                        </div>
                    </div>
                </div>

                <button className="btn-primary" style={{ width: '100%', marginBottom: '1rem' }} onClick={addRegimenToCart}>
                    Add Full Ritual To Bag (Save 15%)
                </button>

                <button
                    style={{ background: 'transparent', border: 'none', color: '#666', textDecoration: 'underline', cursor: 'pointer' }}
                    onClick={() => {
                        setShowResults(false);
                        setCurrentStep(0);
                        setAnswers({});
                    }}
                >
                    Retake Quiz
                </button>
            </div>
        );
    }

    const question = questions[currentStep];
    const progress = ((currentStep + 1) / questions.length) * 100;

    return (
        <div className={styles.container}>
            <div className={styles.progress}>
                Question {currentStep + 1} of {questions.length}
                <div className={styles.progressBar}>
                    <div className={styles.progressFill} style={{ width: `${progress}%` }}></div>
                </div>
            </div>

            <h2 className={styles.question}>{question.text}</h2>

            <div className={styles.options}>
                {question.options.map((option) => (
                    <button
                        key={option}
                        className={`${styles.option} ${answers[currentStep] === option ? styles.selected : ''}`}
                        onClick={() => handleOptionSelect(option)}
                    >
                        {option}
                    </button>
                ))}
            </div>

            <div className={styles.actions}>
                <button
                    className={styles.btnBack}
                    onClick={prevStep}
                    disabled={currentStep === 0}
                    style={{ visibility: currentStep === 0 ? 'hidden' : 'visible' }}
                >
                    Back
                </button>
                <button
                    className={styles.btnNext}
                    onClick={nextStep}
                    disabled={!answers[currentStep]}
                    style={{ opacity: !answers[currentStep] ? 0.5 : 1 }}
                >
                    {currentStep === questions.length - 1 ? 'See Results' : 'Next'}
                </button>
            </div>
        </div>
    );
}
