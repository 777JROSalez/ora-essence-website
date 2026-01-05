export default function AboutPage() {
    return (
        <main>
            <div style={{ backgroundColor: 'var(--color-background)', padding: '4rem 0', textAlign: 'center' }}>
                <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '3rem', color: 'var(--color-primary)', marginBottom: '2rem' }}>About Jeff</h1>

                <img src="/images/jeff-founder.png" alt="Jeff, Founder" style={{ width: '100%', maxWidth: '600px', borderRadius: '8px', marginBottom: '2rem', border: '1px solid var(--color-primary)' }} />

                <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'left', lineHeight: '1.8' }}>
                    <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>
                        Jeff Skincare was founded by Jeff, a visionary in the world of luxury botanicals.
                        We believe that true luxury lies in the purity of nature, enhanced by science.
                    </p>
                    <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>
                        Our products are crafted with the finest ingredients, housed in our signature black glass to preserve their potency.
                        Every bottle is a testament to our commitment to timeless elegance and radiant skin.
                    </p>
                    <p style={{ fontSize: '1.1rem' }}>
                        Uncompromising quality. Gold-standard results. That is the Jeff Skincare promise.
                    </p>
                </div>
            </div>
        </main>
    );
}
