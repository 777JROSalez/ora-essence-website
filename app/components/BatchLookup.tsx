'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function BatchLookup() {
    const [batchId, setBatchId] = useState('');
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (batchId.trim()) {
            router.push(`/batch/${batchId}`);
        }
    };

    return (
        <div style={{ maxWidth: '500px', margin: '2rem auto', textAlign: 'center' }}>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', color: 'var(--color-primary)', marginBottom: '1rem' }}>Trace Your Product</h2>
            <p style={{ marginBottom: '1.5rem', color: 'var(--color-text-muted)' }}>
                Every bottle is etched with a batch number. Enter it below to discover your product's story.
            </p>
            <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '0.5rem' }}>
                <input
                    type="text"
                    value={batchId}
                    onChange={(e) => setBatchId(e.target.value)}
                    placeholder="e.g. BATCH-2024-0315"
                    style={{ flex: 1, padding: '0.8rem', border: '1px solid #ddd', borderRadius: '4px' }}
                />
                <button type="submit" className="btn-primary">Trace</button>
            </form>
            <p style={{ fontSize: '0.8rem', marginTop: '1rem', color: '#999' }}>Try: <strong>BATCH-2024-0315</strong></p>
        </div>
    );
}
