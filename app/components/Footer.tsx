import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.column}>
                    <h3>Customer Care</h3>
                    <ul className={styles.linkList}>
                        <li><a href="/pages/contact">Contact Us</a></li>
                        <li><a href="/pages/shipping-returns">Shipping & Returns</a></li>
                        <li><a href="/pages/privacy-policy">Privacy Policy</a></li>
                    </ul>
                </div>
                <div className={styles.column}>
                    <h3>About Us</h3>
                    <ul className={styles.linkList}>
                        <li><a href="/about">Our Story</a></li>
                        <li><a href="/rituals">Skincare Rituals</a></li>
                        <li><a href="/journal">Journal</a></li>
                    </ul>
                </div>
                <div className={styles.column}>
                    <h3>My Account</h3>
                    <ul className={styles.linkList}>
                        <li><a href="/account/login">Login</a></li>
                        <li><a href="/account/login">Register</a></li>
                        <li><a href="/account/orders">Order History</a></li>
                    </ul>
                </div>
                <div className={`${styles.column} ${styles.newsletter}`}>
                    <h3>Join the Farm Family</h3>
                    <p style={{ fontSize: '0.9rem', marginBottom: '1rem', color: '#e0e0e0' }}>
                        Receive exclusive offers and skincare tips.
                    </p>
                    <div className={styles.inputGroup}>
                        <input type="email" placeholder="Enter your email" className={styles.input} />
                        <button className={styles.submit}>JOIN</button>
                    </div>

                    <div className={styles.socials} style={{ marginTop: '2rem' }}>
                        <a href="https://instagram.com" target="_blank" style={{ marginRight: '1rem', fontSize: '1.2rem' }}>📸</a>
                        <a href="https://tiktok.com" target="_blank" style={{ marginRight: '1rem', fontSize: '1.2rem' }}>🎵</a>
                        <a href="https://facebook.com" target="_blank" style={{ fontSize: '1.2rem' }}>👍</a>
                    </div>
                </div>
            </div>
            <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '2rem 1rem 0', borderTop: '1px solid #222', marginTop: '3rem', display: 'flex', justifyContent: 'space-between', color: '#666', fontSize: '0.8rem' }}>
                <p>&copy; 2025 Jeff Skincare. All rights reserved.</p>
                <div>
                    <a href="/pages/privacy-policy" style={{ marginRight: '1rem' }}>Privacy</a>
                    <a href="/pages/terms">Terms</a>
                </div>
            </div>
            {/* Trust Signals: Payment Methods */}
            <div style={{ maxWidth: '1400px', margin: '1rem auto 0', padding: '0 1rem 2rem', display: 'flex', justifyContent: 'center', gap: '1rem', opacity: 0.5 }}>
                <span title="Visa">💳 VISA</span>
                <span title="Mastercard">💳 Mastercard</span>
                <span title="Amex">💳 Amex</span>
                <span title="PayPal">💳 PayPal</span>
                <span title="Apple Pay"> Pay</span>
            </div>
        </footer>
    );
}
