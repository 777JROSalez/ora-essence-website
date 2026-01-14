export default function ContactUs() {
    return (
        <main className="container" style={{ padding: '4rem 2rem', maxWidth: '800px', margin: '0 auto' }}>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem', marginBottom: '2rem', color: 'var(--color-primary)' }}>Contact Us</h1>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', marginBottom: '4rem' }}>
                <div>
                    <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#fff' }}>Client Services</h2>
                    <p style={{ lineHeight: '1.8', color: '#ccc', marginBottom: '1.5rem' }}>
                        Our dedicated team is here to assist you with product recommendations, order inquiries, and skincare advice.
                    </p>
                    <p style={{ color: 'var(--color-primary)', fontSize: '1.2rem' }}>care@jeffskincare.com</p>
                    <p style={{ color: '#ccc', marginTop: '0.5rem' }}>Mon-Fri, 9am - 5pm EST</p>
                </div>

                <div>
                    <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#fff' }}>Public Relations</h2>
                    <p style={{ lineHeight: '1.8', color: '#ccc', marginBottom: '1.5rem' }}>
                        For press, partnership, and affiliate inquiries.
                    </p>
                    <p style={{ color: 'var(--color-primary)', fontSize: '1.2rem' }}>press@jeffskincare.com</p>
                </div>
            </div>

            <div style={{ background: '#111', padding: '2rem', borderRadius: '8px', border: '1px solid #333' }}>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Send us a message</h3>
                <form>
                    <div style={{ marginBottom: '1rem' }}>
                        <label style={{ display: 'block', marginBottom: '0.5rem', color: '#888' }}>Name</label>
                        <input type="text" style={{ width: '100%', padding: '0.8rem', background: '#222', border: '1px solid #444', color: 'white' }} />
                    </div>
                    <div style={{ marginBottom: '1rem' }}>
                        <label style={{ display: 'block', marginBottom: '0.5rem', color: '#888' }}>Email</label>
                        <input type="email" style={{ width: '100%', padding: '0.8rem', background: '#222', border: '1px solid #444', color: 'white' }} />
                    </div>
                    <div style={{ marginBottom: '1rem' }}>
                        <label style={{ display: 'block', marginBottom: '0.5rem', color: '#888' }}>Message</label>
                        <textarea style={{ width: '100%', padding: '0.8rem', background: '#222', border: '1px solid #444', color: 'white', minHeight: '100px' }} />
                    </div>
                    <button className="btn-primary">Send Message</button>
                </form>
            </div>
        </main>
    );
}
