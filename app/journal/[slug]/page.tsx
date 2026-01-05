import Link from 'next/link';
import { notFound } from 'next/navigation';
import { journalArticles } from '../../data/journal';

export default async function JournalArticlePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const article = journalArticles.find((a) => a.slug === slug);

    if (!article) {
        notFound();
    }

    return (
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '4rem 2rem' }}>
            <Link href="/journal" style={{ color: '#5d8e6a', textDecoration: 'none', marginBottom: '2rem', display: 'inline-block' }}>
                ← Back to Journal
            </Link>
            <p style={{ color: '#777', fontSize: '0.9rem', marginBottom: '0.5rem' }}>{article.date}</p>
            <h1 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '2.5rem',
                marginBottom: '2rem',
                color: '#333'
            }}>
                {article.title}
            </h1>
            <div
                style={{
                    width: '100%',
                    height: '400px',
                    backgroundColor: '#eee',
                    marginBottom: '2rem',
                    backgroundImage: `url(${article.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    borderRadius: '8px'
                }}
            />
            <div
                dangerouslySetInnerHTML={{ __html: article.content }}
                style={{
                    fontFamily: "'Inter', sans-serif",
                    lineHeight: '1.8',
                    color: '#555'
                }}
            />
        </div>
    );
}
