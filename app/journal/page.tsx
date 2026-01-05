import Link from 'next/link';
import { journalArticles } from '../data/journal';

export default function JournalPage() {
    return (
        <main>
            <div style={{ padding: '4rem 0', textAlign: 'center' }}>
                <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '3rem', color: 'var(--color-primary)', marginBottom: '3rem' }}>The Journal</h1>

                <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
                    {journalArticles.map((article) => (
                        <div key={article.slug} style={{ textAlign: 'left' }}>
                            <Link href={`/journal/${article.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                                <div style={{
                                    backgroundColor: '#eee',
                                    aspectRatio: '16/9',
                                    marginBottom: '1rem',
                                    backgroundImage: `url(${article.image})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    borderRadius: '4px'
                                }}></div>
                                <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--color-text-muted)', letterSpacing: '1px' }}>
                                    {article.date}
                                </span>
                                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', margin: '0.5rem 0', color: 'var(--color-primary)' }}>
                                    {article.title}
                                </h2>
                            </Link>
                            <p style={{ color: 'var(--color-text-muted)', marginBottom: '1rem' }}>
                                {article.content.substring(0, 100).replace(/<[^>]*>?/gm, '')}...
                            </p>
                            <Link href={`/journal/${article.slug}`} style={{ textDecoration: 'underline', color: 'var(--color-primary)' }}>
                                Read More
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
