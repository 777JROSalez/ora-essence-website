import { notFound } from 'next/navigation';
import { getJournalPost } from '../../../lib/mdx';
import BlogPost from '../../components/journal/BlogPost';

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = getJournalPost(slug);

    if (!post) {
        notFound();
    }

    return (
        <main>
            <BlogPost post={post} />
        </main>
    );
}

