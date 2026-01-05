import { notFound } from 'next/navigation';
import { pages } from '../../data/pages';

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const page = pages.find((p) => p.slug === slug);

    if (!page) {
        notFound();
    }

    return (
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '4rem 2rem' }}>
            <h1 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '2.5rem',
                marginBottom: '2rem',
                color: '#333'
            }}>
                {page.title}
            </h1>
            <div
                dangerouslySetInnerHTML={{ __html: page.content }}
                style={{
                    fontFamily: "'Inter', sans-serif",
                    lineHeight: '1.8',
                    color: '#555'
                }}
            />
        </div>
    );
}
