'use client';

import Link from 'next/link';
import { blogPosts } from './posts';
import { motion } from 'framer-motion';

export default function JournalPage() {
    const featuredPost = blogPosts.find(p => p.featured) || blogPosts[0];
    const otherPosts = blogPosts.filter(p => p.slug !== featuredPost.slug);

    return (
        <main>
            <div style={{ padding: '6rem 0', textAlign: 'center' }}>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    style={{ fontFamily: 'var(--font-serif)', fontSize: '3.5rem', color: 'var(--color-primary)', marginBottom: '4rem' }}
                >
                    The Journal
                </motion.h1>

                {/* Featured Post */}
                <div className="container" style={{ marginBottom: '6rem' }}>
                    <Link href={`/journal/${featuredPost.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.6 }}
                            style={{
                                display: 'grid',
                                gridTemplateColumns: '1.5fr 1fr',
                                gap: '3rem',
                                alignItems: 'center',
                                background: '#f9f9f9',
                                padding: '2rem',
                                borderRadius: '8px'
                            }}
                        >
                            <div style={{
                                height: '400px',
                                backgroundImage: `url(${featuredPost.image})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                borderRadius: '4px'
                            }}></div>
                            <div style={{ textAlign: 'left', padding: '1rem' }}>
                                <span style={{ fontSize: '0.9rem', textTransform: 'uppercase', color: '#D4AF37', letterSpacing: '2px', fontWeight: 'bold' }}>Featured Article</span>
                                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem', margin: '1rem 0', color: 'var(--color-primary)', lineHeight: '1.2' }}>
                                    {featuredPost.title}
                                </h2>
                                <p style={{ fontSize: '1.1rem', color: '#666', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                                    {featuredPost.excerpt}
                                </p>
                                <span style={{ textDecoration: 'underline', color: 'var(--color-primary)', fontSize: '1rem' }}>Read Article &rarr;</span>
                            </div>
                        </motion.div>
                    </Link>
                </div>

                {/* Post Grid */}
                <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '4rem' }}>
                    {otherPosts.map((article, index) => (
                        <motion.div
                            key={article.slug}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            style={{ textAlign: 'left' }}
                        >
                            <Link href={`/journal/${article.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                                <div style={{
                                    backgroundColor: '#eee',
                                    aspectRatio: '16/9',
                                    marginBottom: '1.5rem',
                                    backgroundImage: `url(${article.image})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    borderRadius: '4px',
                                    boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
                                    transition: 'transform 0.3s ease'
                                }} className="hover-scale"></div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: '#999', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                                    <span>{article.date}</span>
                                    <span>{article.readingTime}</span>
                                </div>
                                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', margin: '0.5rem 0 1rem', color: 'var(--color-primary)', lineHeight: '1.3' }}>
                                    {article.title}
                                </h2>
                                <p style={{ color: '#666', lineHeight: '1.6', marginBottom: '1rem' }}>
                                    {article.excerpt}
                                </p>
                                <span style={{ textDecoration: 'underline', color: 'var(--color-primary)' }}>Read More</span>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </main>
    );
}
