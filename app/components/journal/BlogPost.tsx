'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import { JournalPost } from '../../../lib/mdx';

export default function BlogPost({ post }: { post: JournalPost }) {
    return (
        <article className="container" style={{ maxWidth: '800px', margin: '0 auto', padding: '5rem 2rem' }}>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                style={{
                    height: '60vh',
                    backgroundImage: `url(${post.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    textAlign: 'center',
                    width: '100vw',
                    marginLeft: 'calc(-50vw + 50%)',
                    marginBottom: '4rem'
                }}
            >
                <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.4)' }}></div>
                <div style={{ position: 'relative', zIndex: 1, padding: '2rem' }}>
                    <span style={{ textTransform: 'uppercase', letterSpacing: '3px', fontSize: '0.9rem', display: 'block', marginBottom: '1rem' }}>
                        {post.date} • {post.readingTime}
                    </span>
                    <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '4rem', maxWidth: '900px', lineHeight: '1.2' }}>{post.title}</h1>
                </div>
            </motion.div>

            <div style={{ fontSize: '1.2rem', lineHeight: '1.8', color: '#333' }}>
                <ReactMarkdown
                    components={{
                        h1: ({ ...props }: React.HTMLAttributes<HTMLHeadingElement>) => <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.2rem', color: 'var(--color-primary)', marginTop: '3rem', marginBottom: '1.5rem' }} {...props} />,
                        h2: ({ ...props }: React.HTMLAttributes<HTMLHeadingElement>) => <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', color: 'var(--color-primary)', marginTop: '2.5rem', marginBottom: '1rem' }} {...props} />,
                        p: ({ ...props }: React.HTMLAttributes<HTMLParagraphElement>) => <p style={{ marginBottom: '1.5rem' }} {...props} />,
                    }}
                >
                    {post.content}
                </ReactMarkdown>
            </div>

            <div style={{ marginTop: '5rem', paddingTop: '3rem', borderTop: '1px solid #eee', textAlign: 'center' }}>
                <Link href="/journal" style={{ textDecoration: 'none', color: 'var(--color-primary)', fontSize: '1.1rem', fontWeight: 'bold' }}>
                    &larr; Back to Journal
                </Link>
            </div>
        </article>
    );
}
