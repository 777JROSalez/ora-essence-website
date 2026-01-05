import { notFound } from 'next/navigation';
import { batches } from '../../data/batches';
import Link from 'next/link';

export function generateStaticParams() {
    return batches.map((batch) => ({
        batchId: batch.batchId,
    }));
}

export default async function BatchResultPage({ params }: { params: Promise<{ batchId: string }> }) {
    const { batchId } = await params;

    // Simple lookup, in real app this would be more robust or API call
    const batch = batches.find(b => b.batchId === batchId) || batches.find(b => b.batchId === 'DEMO-BATCH');

    if (!batch) {
        return (
            <main className="container" style={{ padding: '4rem 0', textAlign: 'center' }}>
                <h1>Batch Not Found</h1>
                <p>We couldn't find details for batch {batchId}.</p>
                <Link href="/batch" style={{ textDecoration: 'underline', color: 'var(--color-primary)' }}>Try another</Link>
            </main>
        );
    }

    return (
        <main className="container" style={{ padding: '4rem 0' }}>
            <div style={{ maxWidth: '800px', margin: '0 auto', background: '#f9f9f9', padding: '2rem', borderRadius: '8px' }}>
                <Link href="/batch" style={{ fontSize: '0.9rem', color: '#666', marginBottom: '1rem', display: 'inline-block' }}>← Trace Another</Link>

                <div style={{ borderBottom: '1px solid #ddd', paddingBottom: '1rem', marginBottom: '2rem' }}>
                    <h1 style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', fontSize: '2.5rem' }}>{batch.productName}</h1>
                    <p style={{ color: '#4A6E4D', fontWeight: 'bold' }}>Batch: {batch.batchId}</p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '2rem' }}>
                    <div>
                        <h3 style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '0.5rem' }}>Manufactured</h3>
                        <p>{batch.manufacturedDate}</p>
                        <p style={{ fontSize: '0.9rem', color: '#666' }}>Expires: {batch.expirationDate}</p>
                    </div>
                    <div>
                        <h3 style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '0.5rem' }}>Handcrafted By</h3>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <div style={{ width: '50px', height: '50px', background: '#ddd', borderRadius: '50%' }}></div> {/* Placeholder for photo */}
                            <div>
                                <p style={{ fontWeight: 'bold' }}>{batch.maker.name}</p>
                                <p style={{ fontSize: '0.8rem' }}>{batch.maker.role} ({batch.maker.yearsAtCompany} years)</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div style={{ marginBottom: '2rem' }}>
                    <h3 style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '1rem' }}>Ingredient Sourcing</h3>
                    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
                        <thead>
                            <tr style={{ textAlign: 'left', borderBottom: '2px solid #ddd' }}>
                                <th style={{ padding: '0.5rem' }}>Ingredient</th>
                                <th style={{ padding: '0.5rem' }}>Source</th>
                                <th style={{ padding: '0.5rem' }}>Location</th>
                            </tr>
                        </thead>
                        <tbody>
                            {batch.ingredients.map((ing, i) => (
                                <tr key={i} style={{ borderBottom: '1px solid #eee' }}>
                                    <td style={{ padding: '0.8rem 0.5rem' }}>{ing.name}</td>
                                    <td style={{ padding: '0.8rem 0.5rem' }}>{ing.sourceType}</td>
                                    <td style={{ padding: '0.8rem 0.5rem' }}>{ing.location}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div>
                    <h3 style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '1rem' }}>Quality Assurance</h3>
                    <div style={{ display: 'grid', gap: '1rem' }}>
                        {batch.qualityChecks.map((check, i) => (
                            <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem', background: 'white', border: '1px solid #eee', borderRadius: '4px' }}>
                                <span>{check.name}</span>
                                <span style={{ color: 'green', fontWeight: 'bold' }}>✓ {check.result}</span>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </main>
    );
}
