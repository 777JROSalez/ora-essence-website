'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function RitualsPage() {
    return (
        <main>
            {/* Hero */}
            <div style={{
                backgroundColor: '#f5f5f5',
                padding: '8rem 2rem 6rem', // Increased top padding
                textAlign: 'center',
                marginBottom: '4rem'
            }}>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    style={{ fontFamily: "'Playfair Display', serif", fontSize: '3.5rem', color: '#333', marginBottom: '1rem' }}
                >
                    Find Your Ritual
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto', color: '#666', lineHeight: '1.6' }}
                >
                    Skincare is not a chore, it's a ritual. Discover the transformative power of a consistent naturally derived regimen.
                </motion.p>
            </div>

            <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 2rem 6rem' }}>

                {/* Morning Ritual */}
                <motion.section
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    style={{
                        marginBottom: '6rem',
                        background: 'linear-gradient(135deg, #111 0%, #222 100%)',
                        padding: '4rem 3rem', // Increased padding
                        borderRadius: '16px', // Softer corners
                        border: '1px solid #333',
                        boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
                    }}
                >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '3rem', justifyContent: 'center' }}>
                        <span style={{ fontSize: '2.5rem' }}>☀️</span>
                        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '2.5rem', margin: 0, color: '#f0f0f0' }}>Morning Glow</h2>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem' }}>
                        {[
                            { step: 1, title: 'Cleanse', text: 'Remove sleep impurities with Regenerating Cleanser.' },
                            { step: 2, title: 'Prep', text: 'Hydrate with Floral Essence.' },
                            { step: 3, title: 'Treat', text: 'Apply Rejuvenating Serum.' },
                            { step: 4, title: 'Glow', text: 'Finish with Repairative Moisturizer.' }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                style={{ textAlign: 'center' }}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 + 0.3 }}
                            >
                                <motion.div
                                    whileHover={{ scale: 1.1, borderColor: '#D4AF37', color: '#D4AF37' }}
                                    style={{
                                        width: '80px',
                                        height: '80px',
                                        background: '#333',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        margin: '0 auto 1.5rem',
                                        fontSize: '1.5rem',
                                        fontWeight: 'bold',
                                        color: 'var(--color-primary)',
                                        border: '1px solid var(--color-primary)',
                                        cursor: 'default',
                                        transition: 'background-color 0.3s'
                                    }}
                                >
                                    {item.step}
                                </motion.div>
                                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: '#fff', fontFamily: 'var(--font-serif)' }}>{item.title}</h3>
                                <p style={{ fontSize: '0.95rem', color: '#aaa', lineHeight: '1.5' }}>{item.text}</p>
                            </motion.div>
                        ))}
                    </div>

                    <div style={{ textAlign: 'center', marginTop: '4rem' }}>
                        <Link href="/collections/best-sellers" className="btn-primary" style={{ display: 'inline-block', textDecoration: 'none', padding: '1rem 2.5rem' }}>
                            Shop Morning Essentials
                        </Link>
                    </div>
                </motion.section>

                {/* Evening Ritual */}
                <motion.section
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem', justifyContent: 'center' }}>
                        <span style={{ fontSize: '2.5rem' }}>🌙</span>
                        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '2.5rem', margin: 0 }}>Evening Repair</h2>
                    </div>

                    <div style={{
                        background: '#333',
                        color: 'white',
                        padding: '4rem',
                        borderRadius: '16px',
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: '4rem',
                        alignItems: 'center',
                        boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
                    }}>
                        <div>
                            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '2.5rem', marginBottom: '1.5rem', color: '#D4AF37' }}>Double Cleanse</h3>
                            <p style={{ lineHeight: '1.8', marginBottom: '2rem', color: '#ddd', fontSize: '1.1rem' }}>
                                The most important step of the night. Start with an oil cleanser to break down makeup and SPF, then follow with your treatment cleanser to purify the pores.
                            </p>
                            <Link href="/products/regenerating-cleanser" style={{ color: 'white', textDecoration: 'underline', textUnderlineOffset: '4px', fontSize: '1.1rem' }}>
                                Shop Cleansers
                            </Link>
                        </div>
                        <div style={{ textAlign: 'center', borderLeft: '1px solid #555', paddingLeft: '4rem' }}>
                            <motion.div
                                whileHover={{ scale: 1.05, rotate: 2 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <img src="/images/ritual_texture_macro.png" alt="Rich texture" style={{ width: '150px', height: '150px', borderRadius: '50%', objectFit: 'cover', border: '3px solid #5d8e6a', marginBottom: '2rem', boxShadow: '0 10px 20px rgba(0,0,0,0.3)' }} />
                            </motion.div>
                            <p style={{ fontSize: '1.4rem', fontStyle: 'italic', marginBottom: '1rem', fontFamily: 'var(--font-serif)' }}>"Consistency is the secret to real results."</p>
                            <p style={{ color: '#888', letterSpacing: '1px', textTransform: 'uppercase', fontSize: '0.8rem' }}>- Ora Essence Founder</p>
                        </div>
                    </div>
                </motion.section>

            </div>
        </main>
    );
}
