import { getJournalPosts } from '../../lib/mdx';
import JournalList from '../components/journal/JournalList';

export default function JournalPage() {
    const posts = getJournalPosts();

    return (
        <main>
            <JournalList posts={posts} />
        </main>
    );
}

