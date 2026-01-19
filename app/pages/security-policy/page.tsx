export default function SecurityPolicy() {
    return (
        <main className="container" style={{ padding: '4rem 2rem', maxWidth: '900px', margin: '0 auto' }}>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>
                Security Policy
            </h1>
            <p style={{ fontSize: '0.9rem', color: '#999', marginBottom: '3rem' }}>
                Last Updated: January 15, 2026
            </p>

            <div style={{ lineHeight: '1.8', color: '#555' }}>
                <section style={{ marginBottom: '3rem' }}>
                    <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>Our Commitment to Security</h2>
                    <p style={{ marginBottom: '1rem' }}>
                        At Ora Essence, protecting your personal information is our highest priority. We implement industry-leading security measures to ensure your data remains safe and confidential at all times.
                    </p>
                </section>

                <section style={{ marginBottom: '3rem' }}>
                    <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>SSL/TLS Encryption</h2>
                    <p style={{ marginBottom: '1rem' }}>
                        All data transmitted between your browser and our servers is encrypted using 256-bit SSL (Secure Socket Layer) technology—the same encryption standard used by banks and financial institutions. This means your personal information, payment details, and order history are protected from unauthorized access.
                    </p>
                    <p style={{ marginBottom: '1rem' }}>
                        Look for the padlock icon 🔒 in your browser's address bar to confirm you're on a secure connection.
                    </p>
                </section>

                <section style={{ marginBottom: '3rem' }}>
                    <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>PCI DSS Compliance</h2>
                    <p style={{ marginBottom: '1rem' }}>
                        We are fully compliant with the Payment Card Industry Data Security Standard (PCI DSS), which governs how credit card information is handled. This certification requires annual audits and continuous monitoring of our security practices.
                    </p>
                    <p style={{ marginBottom: '1rem' }}>
                        <strong>Important:</strong> We do not store your full credit card numbers on our servers. Payment processing is handled securely through Stripe and PayPal, industry leaders in payment security.
                    </p>
                </section>

                <section style={{ marginBottom: '3rem' }}>
                    <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>Secure Payment Processing</h2>
                    <p style={{ marginBottom: '1rem' }}>
                        All payment transactions are processed through:
                    </p>
                    <ul style={{ marginLeft: '2rem', marginBottom: '1rem' }}>
                        <li><strong>Stripe:</strong> PCI Level 1 certified payment processor</li>
                        <li><strong>PayPal:</strong> Encrypted peer-to-peer transactions</li>
                    </ul>
                    <p style={{ marginBottom: '1rem' }}>
                        These providers tokenize your payment information, meaning we never have access to your full credit card details. Only encrypted tokens are stored for subscription and recurring order management.
                    </p>
                </section>

                <section style={{ marginBottom: '3rem' }}>
                    <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>Data Encryption at Rest</h2>
                    <p style={{ marginBottom: '1rem' }}>
                        All customer data stored in our databases is encrypted using AES-256 encryption. This includes your name, email address, shipping address, and order history. Even if our databases were compromised, your information would remain unreadable without the encryption keys.
                    </p>
                </section>

                <section style={{ marginBottom: '3rem' }}>
                    <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>Account Security</h2>
                    <p style={{ marginBottom: '1rem' }}>
                        Your account is protected by:
                    </p>
                    <ul style={{ marginLeft: '2rem', marginBottom: '1rem' }}>
                        <li>Password hashing using bcrypt (not stored in plain text)</li>
                        <li>Account lockout after multiple failed login attempts</li>
                        <li>Secure password reset process via email verification</li>
                        <li>Optional two-factor authentication (coming soon)</li>
                    </ul>
                </section>

                <section style={{ marginBottom: '3rem' }}>
                    <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>Third-Party Security Audits</h2>
                    <p style={{ marginBottom: '1rem' }}>
                        We undergo regular security audits conducted by independent third-party firms to identify and address potential vulnerabilities. Our infrastructure is continuously monitored for suspicious activity, and we maintain a 24/7 security operations center.
                    </p>
                </section>

                <section style={{ marginBottom: '3rem' }}>
                    <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>Data Privacy & Protection</h2>
                    <p style={{ marginBottom: '1rem' }}>
                        We adhere to data protection regulations including:
                    </p>
                    <ul style={{ marginLeft: '2rem', marginBottom: '1rem' }}>
                        <li><strong>GDPR</strong> (General Data Protection Regulation) for EU customers</li>
                        <li><strong>CCPA</strong> (California Consumer Privacy Act) for California residents</li>
                        <li><strong>U.S Privacy Laws</strong> for all domestic customers</li>
                    </ul>
                    <p style={{ marginBottom: '1rem' }}>
                        For details on how we collect, use, and protect your data, please see our <a href="/pages/privacy-policy" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>Privacy Policy</a>.
                    </p>
                </section>

                <section style={{ marginBottom: '3rem' }}>
                    <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>We Don't Sell Your Data</h2>
                    <p style={{ marginBottom: '1rem' }}>
                        We never sell, rent, or share your personal information with third parties for marketing purposes. Your data is used exclusively to process your orders, improve your shopping experience, and communicate with you about your purchases.
                    </p>
                </section>

                <section style={{ marginBottom: '3rem' }}>
                    <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>Incident Response</h2>
                    <p style={{ marginBottom: '1rem' }}>
                        In the unlikely event of a data breach, we maintain a comprehensive incident response plan:
                    </p>
                    <ul style={{ marginLeft: '2rem', marginBottom: '1rem' }}>
                        <li>Immediate investigation and containment</li>
                        <li>Notification to affected customers within 72 hours</li>
                        <li>Coordination with law enforcement and regulatory bodies</li>
                        <li>Remediation and security enhancement measures</li>
                    </ul>
                </section>

                <section style={{ marginBottom: '3rem' }}>
                    <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>Your Responsibility</h2>
                    <p style={{ marginBottom: '1rem' }}>
                        To keep your account secure:
                    </p>
                    <ul style={{ marginLeft: '2rem', marginBottom: '1rem' }}>
                        <li>Use a strong, unique password</li>
                        <li>Never share your password with anyone</li>
                        <li>Log out after using shared or public computers</li>
                        <li>Keep your email account secure</li>
                        <li>Report suspicious activity immediately</li>
                    </ul>
                </section>

                <section>
                    <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>Report a Security Concern</h2>
                    <p style={{ marginBottom: '0.5rem' }}>
                        If you notice suspicious activity or have security concerns:
                    </p>
                    <p style={{ marginBottom: '0.25rem' }}><strong>Security Team:</strong> <a href="mailto:security@oraessence.com" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>security@oraessence.com</a></p>
                    <p style={{ marginBottom: '0.25rem' }}><strong>Phone:</strong> 1-800-ORA-SECURE</p>
                    <p>We take all security reports seriously and will respond within 24 hours.</p>
                </section>
            </div>
        </main>
    );
}
