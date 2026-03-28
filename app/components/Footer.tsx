import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                {/* Column 1: Shop */}
                <div className={styles.column}>
                    <h3>Shop</h3>
                    <ul className={styles.linkList}>
                        <li><Link href="/products">All Products</Link></li>
                        <li><Link href="/products/best-sellers">Best Sellers</Link></li>
                        <li><Link href="/rituals/morning">Morning Rituals</Link></li>
                        <li><Link href="/rituals/evening">Evening Rituals</Link></li>
                        <li><Link href="/rituals/discovery-kits">Discovery Kits</Link></li>
                        <li><Link href="/rituals/travel-minis">Travel Minis</Link></li>
                    </ul>
                </div>

                {/* Column 2: Concerns */}
                <div className={styles.column}>
                    <h3>Shop By Concern</h3>
                    <ul className={styles.linkList}>
                        <li><Link href="/concerns/dryness">Dryness</Link></li>
                        <li><Link href="/concerns/aging">Anti-Aging</Link></li>
                        <li><Link href="/concerns/sensitivity">Sensitivity</Link></li>
                        <li><Link href="/concerns/blemishes">Blemishes</Link></li>
                        <li><Link href="/concerns/uneven-skin-tone">Uneven Tone</Link></li>
                        <li><Link href="/concerns/pores-texture">Pores & Texture</Link></li>
                        <li><Link href="/concerns/dullness">Dullness</Link></li>
                    </ul>
                </div>

                {/* Column 3: Company */}
                <div className={styles.column}>
                    <h3>Company</h3>
                    <ul className={styles.linkList}>
                        <li><Link href="/about">Our Story</Link></li>
                        <li><Link href="/quiz">Skin Quiz</Link></li>
                        <li><Link href="/rewards">Rewards Program</Link></li>
                        <li><Link href="/subscribe">Subscribe & Save</Link></li>
                        <li><Link href="/consultation">Book Consultation</Link></li>
                        <li><Link href="/journal">Journal</Link></li>
                    </ul>
                </div>

                {/* Column 3: Legal */}
                <div className={styles.column}>
                    <h3>Legal</h3>
                    <ul className={styles.linkList}>
                        <li><Link href="/pages/terms-of-service">Terms of Service</Link></li>
                        <li><Link href="/pages/privacy-policy">Privacy Policy</Link></li>
                        <li><Link href="/pages/cookie-policy">Cookie Policy</Link></li>
                        <li><Link href="/pages/security-policy">Security Policy</Link></li>
                        <li><Link href="/pages/returns">Returns & Exchanges</Link></li>
                        <li><Link href="/pages/shipping-returns">Shipping Info</Link></li>
                        <li><Link href="/pages/accessibility">Accessibility</Link></li>
                    </ul>
                </div>

                {/* Column 4: Support + Newsletter */}
                <div className={styles.column}>
                    <h3>Support</h3>
                    <ul className={styles.linkList}>
                        <li><Link href="/pages/contact">Contact Us</Link></li>
                        <li><Link href="/pages/shipping-returns">Shipping & Returns</Link></li>
                        <li><Link href="/pages/privacy-policy">Privacy Policy</Link></li>
                        <li><Link href="/account">My Account</Link></li>
                        <li><Link href="/account/orders">Order History</Link></li>
                    </ul>

                    {/* Newsletter */}
                    <div className={styles.newsletter}>
                        <h4>Get 10% Off Your First Order</h4>
                        <p>Join our community for exclusive offers and skincare tips.</p>
                        <div className={styles.inputGroup}>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className={styles.input}
                            />
                            <button className={styles.submitButton}>Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Social Media */}
            <div className={styles.socialSection}>
                <h4>Follow Us</h4>
                <div className={styles.socialLinks}>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                        📸 Instagram
                    </a>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                        👍 Facebook
                    </a>
                    <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                        🎵 TikTok
                    </a>
                    <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" aria-label="Pinterest">
                        📌 Pinterest
                    </a>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className={styles.footerBottom}>
                <div className={styles.bottomLeft}>
                    <p>&copy; {new Date().getFullYear()} ORA ESSENCE. All rights reserved.</p>
                    <div className={styles.legalLinks}>
                        <Link href="/pages/privacy-policy">Privacy</Link>
                        <Link href="/pages/terms-of-service">Terms</Link>
                        <Link href="/pages/returns">Returns</Link>
                    </div>
                </div>
                <div className={styles.securityBadges}>
                    <span className={styles.securityItem}>🔒 SSL Secured</span>
                    <span className={styles.securityItem}>✓ PCI Compliant</span>
                    <span className={styles.securityItem}>🛡️ We Don't Sell Your Data</span>
                </div>
            </div>

            {/* Payment Methods */}
            <div className={styles.paymentMethods}>
                <span>We Accept:</span>
                <span className={styles.paymentIcon}>💳 Visa</span>
                <span className={styles.paymentIcon}>💳 Mastercard</span>
                <span className={styles.paymentIcon}>💳 American Express</span>
                <span className={styles.paymentIcon}>💵 PayPal</span>
                <span className={styles.paymentIcon}>🔒 Stripe</span>
            </div>
        </footer>
    );
}
