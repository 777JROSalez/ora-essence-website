'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { questions, getRecommendation } from '../quiz/data';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import Link from 'next/link';

export default function Quiz() {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState<Record<number, string>>({});
    const [showResults, setShowResults] = useState(false);
    const [recommendedSlugs, setRecommendedSlugs] = useState<string[]>([]);
    const [loading, setLoading] = useState(false);

    const currentQuestion = questions[currentQuestionIndex];
    const progress = ((currentQuestionIndex) / questions.length) * 100;

    const handleAnswer = (value: string) => {
        const newAnswers = { ...answers, [currentQuestion.id]: value };
        setAnswers(newAnswers);

        if (currentQuestionIndex < questions.length - 1) {
            setTimeout(() => {
                setCurrentQuestionIndex(prev => prev + 1);
            }, 300); // Small delay for visual feedback
        } else {
            setLoading(true);
            setTimeout(() => {
                const results = getRecommendation(newAnswers);
                setRecommendedSlugs(results);
                setShowResults(true);
                setLoading(false);
            }, 1500); // Simulate "analyzing"
        }
    };

    const { addToCart, openCart } = useCart(); // Import cart context

    const recommendedProducts = products.filter(p => recommendedSlugs.includes(p.slug));

    // Calculate Totals
    const totalPrice = recommendedProducts.reduce((sum, p) => sum + p.price, 0);
    const discount = 0.15; // 15% off
    const discountedPrice = Math.round(totalPrice * (1 - discount));
    const savings = totalPrice - discountedPrice;

    const handleBundleAdd = () => {
        recommendedProducts.forEach(product => {
            // Apply discount to each item for this specific bundle add
            // Note: This relies on the cart treating these as normal items but we are overriding price slightly
            // Ideally we would add a 'discount' metadata, but simply adjusting price works for MVP
            addToCart({ ...product, price: Math.round(product.price * (1 - discount)) });
        });
        openCart();
    };

    if (loading) {
        return (
            <div style={{ textAlign: 'center', padding: '4rem' }}>
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    style={{ fontSize: '4rem', marginBottom: '2rem', display: 'inline-block' }}
                >
                    ✨
                </motion.div>
                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', color: 'var(--color-primary)' }}>Designing Your Ritual...</h2>
            </div>
        );
    }

    if (showResults) {
        return (
            <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 2rem' }}>
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem', color: 'var(--color-primary)', marginBottom: '1rem' }}>Your Curated Ritual</h2>
                    <p style={{ fontSize: '1.2rem', color: '#666' }}>Based on your skin profile, we've selected these essentials to restore balance and glow.</p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
                    {recommendedProducts.map((product, index) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            style={{ background: 'white', padding: '2rem', borderRadius: '8px', textAlign: 'center', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}
                        >
                            <div style={{ fontWeight: 'bold', color: '#D4AF37', marginBottom: '0.5rem', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '1px' }}>Step {index + 1}</div>
                            <img src={product.image} alt={product.name} style={{ width: '100%', height: '200px', objectFit: 'contain', marginBottom: '1rem' }} />
                            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', marginBottom: '0.5rem' }}>{product.name}</h3>
                            <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '1rem', height: '40px', overflow: 'hidden' }}>{product.category}</p>
                            <div style={{ marginBottom: '1rem', fontWeight: 'bold' }}>${product.price}</div>
                            <Link href={`/products/${product.slug}`} style={{ textDecoration: 'underline', color: 'var(--color-primary)' }}>View Details</Link>
                        </motion.div>
                    ))}
                </div>

                {/* Bundle Offer */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 }}
                    style={{
                        background: '#f9f9f9',
                        padding: '3rem',
                        borderRadius: '16px',
                        textAlign: 'center',
                        border: '1px solid #D4AF37',
                        position: 'relative',
                        overflow: 'hidden'
                    }}
                >
                    <div style={{ position: 'absolute', top: '20px', right: '-30px', background: '#D4AF37', color: 'white', padding: '5px 40px', transform: 'rotate(45deg)', fontSize: '0.8rem', fontWeight: 'bold' }}>LIMITED TIME</div>

                    <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', marginBottom: '0.5rem' }}>Complete Your Ritual</h3>
                    <p style={{ color: '#666', marginBottom: '2rem' }}>Purchase your personalized routine together and save.</p>

                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1.5rem', marginBottom: '2rem' }}>
                        <div style={{ fontSize: '1.5rem', textDecoration: 'line-through', color: '#999' }}>${totalPrice}</div>
                        <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--color-primary)' }}>${discountedPrice}</div>
                    </div>

                    <button
                        className="btn-primary"
                        onClick={handleBundleAdd}
                        style={{ padding: '1.2rem 3rem', fontSize: '1.1rem' }}
                    >
                        Add Routine to Bag (Save ${savings})
                    </button>
                </motion.div>

                <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                    <button className="btn-secondary" onClick={() => window.location.reload()} style={{ background: 'none', border: 'none', textDecoration: 'underline', cursor: 'pointer', color: '#666' }}>Retake Quiz</button>
                </div>
            </div>
        );
    }

    return (
        <div style={{ maxWidth: '600px', margin: '0 auto', background: 'white', padding: '3rem', borderRadius: '16px', boxShadow: '0 20px 60px rgba(0,0,0,0.05)' }}>
            {/* Progress Bar */}
            <div style={{ width: '100%', height: '4px', background: '#eee', marginBottom: '3rem', borderRadius: '2px', overflow: 'hidden' }}>
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    style={{ height: '100%', background: 'var(--color-primary)' }}
                />
            </div>

            <AnimatePresence mode="wait">
                <motion.div
                    key={currentQuestion.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                >
                    <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', color: 'var(--color-primary)', marginBottom: '2.5rem', textAlign: 'center' }}>
                        {currentQuestion.text}
                    </h2>

                    <div style={{ display: 'grid', gap: '1rem' }}>
                        {currentQuestion.options.map((option) => (
                            <motion.button
                                key={option.value}
                                whileHover={{ scale: 1.02, backgroundColor: '#f9f9f9' }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => handleAnswer(option.value)}
                                style={{
                                    padding: '1.5rem',
                                    border: '1px solid #e0e0e0',
                                    borderRadius: '8px',
                                    background: 'white',
                                    fontSize: '1.1rem',
                                    textAlign: 'left',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '1rem',
                                    transition: 'border-color 0.2s'
                                }}
                            >
                                <span style={{ fontSize: '1.5rem' }}>{option.icon}</span>
                                {option.text}
                            </motion.button>
                        ))}
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
    );
}
