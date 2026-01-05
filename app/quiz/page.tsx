import Quiz from '../components/Quiz';

export default function QuizPage() {
    return (
        <main style={{ padding: '4rem 0', background: '#f4f4f4', minHeight: '80vh' }}>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '3rem', color: 'var(--color-primary)', textAlign: 'center', marginBottom: '2rem' }}>Find Your Ritual</h1>
            <Quiz />
        </main>
    );
}
