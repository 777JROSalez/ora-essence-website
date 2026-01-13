'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function AboutPage() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    return (
        <main ref={containerRef} style={{ background: '#fff' }}>
            {/* Hero Section with Parallax */}
            <div style={{ height: '80vh', overflow: 'hidden', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <motion.div
                    style={{
                        position: 'absolute',
                        inset: 0,
                        backgroundImage: 'url(/images/farm_luxury_landscape.png)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        y: useTransform(scrollYProgress, [0, 1], ['0%', '20%']),
                        scale: 1.1
                    }}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.3)' }} />

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    style={{ position: 'relative', zIndex: 1, textAlign: 'center', color: 'white', padding: '0 2rem' }}
                >
                    <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '4rem', marginBottom: '1rem' }}>The Science of Nature</h1>
                    <p style={{ fontSize: '1.2rem', letterSpacing: '2px', textTransform: 'uppercase' }}>Uncompromising Purity since 2020</p>
                </motion.div>
            </div>

            {/* Our Story Timeline */}
            <section style={{ padding: '8rem 2rem', background: '#fcfcfc' }}>
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        style={{ fontFamily: 'var(--font-serif)', fontSize: '3rem', color: 'var(--color-primary)', textAlign: 'center', marginBottom: '5rem' }}
                    >
                        Our Journey
                    </motion.h2>

                    <div style={{ position: 'relative', paddingLeft: '20px', borderLeft: '1px solid #e0e0e0' }}>
                        {[
                            { year: '2020', title: 'The Inception', text: 'Born from a desire for purity in a chaotic world. We started with a single seed and a vision.' },
                            { year: '2021', title: 'The Discovery', text: 'After traveling across 4 continents, we sourced our signature rare bio-actives.' },
                            { year: '2023', title: 'The Launch', text: 'Ora Essence touches the world, redefining what natural luxury means.' },
                            { year: 'Today', title: 'The Standard', text: 'We continue to push the boundaries of green science, focusing on microbiome health.' }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                viewport={{ once: true, margin: "-100px" }}
                                style={{ marginBottom: '4rem', position: 'relative' }}
                            >
                                <div style={{
                                    position: 'absolute',
                                    left: '-26px',
                                    top: '5px',
                                    width: '12px',
                                    height: '12px',
                                    background: '#D4AF37',
                                    borderRadius: '50%',
                                    boxShadow: '0 0 0 4px #fcfcfc'
                                }} />
                                <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', color: '#D4AF37', display: 'block', marginBottom: '0.5rem' }}>{item.year}</span>
                                <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>{item.title}</h3>
                                <p style={{ lineHeight: '1.8', color: '#666', fontSize: '1.1rem' }}>{item.text}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section style={{ padding: '8rem 2rem', background: '#fff' }}>
                <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
                        {[
                            { title: 'Potency', icon: '🧪', text: 'High-performance actives. No fillers.' },
                            { title: 'Purity', icon: '🌿', text: 'Zero toxins. 100% efficacy from nature.' },
                            { title: 'Transparency', icon: '🔍', text: 'Traceable ingredients from farm to face.' }
                        ].map((value, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.2 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -10 }}
                                style={{
                                    padding: '3rem',
                                    textAlign: 'center',
                                    background: '#fff',
                                    border: '1px solid #f0f0f0',
                                    borderRadius: '8px',
                                    boxShadow: '0 10px 40px rgba(0,0,0,0.03)'
                                }}
                            >
                                <div style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>{value.icon}</div>
                                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>{value.title}</h3>
                                <p style={{ color: '#666', lineHeight: '1.6' }}>{value.text}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Founder Section */}
            <section style={{ padding: '8rem 2rem', background: '#f9f9f9', borderTop: '1px solid #eee' }}>
                <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', display: 'flex', alignItems: 'center', gap: '5rem', flexWrap: 'wrap' }}>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        style={{ flex: '1 1 400px' }}
                    >
                        <div style={{ position: 'relative' }}>
                            <div style={{ position: 'absolute', top: '-20px', left: '-20px', width: '100%', height: '100%', border: '2px solid #D4AF37', zIndex: 0 }}></div>
                            <img src="/images/ora_founder.png" alt="Marcus Sterling, Founder" style={{ width: '100%', position: 'relative', zIndex: 1, display: 'block' }} />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        style={{ flex: '1 1 400px' }}
                    >
                        <span style={{ display: 'block', color: '#D4AF37', fontWeight: 'bold', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '1rem', fontSize: '0.9rem' }}>The Visionary</span>
                        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '3rem', marginBottom: '2rem', color: 'var(--color-primary)' }}>Meet Marcus</h2>
                        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#666', marginBottom: '2rem' }}>
                            "I created Ora Essence because I was tired of choosing between clinical results and natural ingredients. I wanted something that felt like a ritual but worked like a prescription."
                        </p>
                        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#666', marginBottom: '3rem' }}>
                            With a background in botanical chemistry and a passion for holistic health, Marcus spent 4 years formulating the perfect balance of raw bio-actives and delivery systems.
                        </p>

                        <div>
                            <img src="/images/signature.png" alt="Signature" style={{ height: '50px', opacity: 0.6 }} />
                            {/* Placeholder signature or text */}
                            <div style={{ fontFamily: 'cursive', fontSize: '2rem', color: '#444' }}>Marcus Sterling</div>
                            <div style={{ fontSize: '0.9rem', color: '#999', marginTop: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Founder & Formulator</div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
