export default function CookiePolicy() {
    return (
        <main className="container" style={{ padding: '4rem 2rem', maxWidth: '900px', margin: '0 auto' }}>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>
                Cookie Policy
            </h1>
            <p style={{ fontSize: '0.9rem', color: '#999', marginBottom: '3rem' }}>
                Last Updated: January 15, 2026
            </p>

            <div style={{ lineHeight: '1.8', color: '#555' }}>
                <section style={{ marginBottom: '3rem' }}>
                    <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>What Are Cookies?</h2>
                    <p style={{ marginBottom: '1rem' }}>
                        Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to website owners.
                    </p>
                </section>

                <section style={{ marginBottom: '3rem' }}>
                    <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>How We Use Cookies</h2>
                    <p style={{ marginBottom: '1rem' }}>
                        Ora Essence uses cookies to enhance your browsing experience, analyze site traffic, personalize content, and serve targeted advertisements. By using our website, you consent to our use of cookies in accordance with this policy.
                    </p>
                </section>

                <section style={{ marginBottom: '3rem' }}>
                    <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>Types of Cookies We Use</h2>

                    <h3 style={{ fontSize: '1.25rem', marginTop: '2rem', marginBottom: '1rem', fontWeight: '600' }}>1. Strictly Necessary Cookies</h3>
                    <p style={{ marginBottom: '1rem' }}>
                        These cookies are essential for the website to function properly. They enable core functionality such as security, network management, and accessibility.
                    </p>
                    <ul style={{ marginLeft: '2rem', marginBottom: '1rem' }}>
                        <li><strong>Session ID:</strong> Maintains your shopping cart and login session</li>
                        <li><strong>Cookie Consent:</strong> Remembers your cookie preferences</li>
                        <li><strong>Security:</strong> Prevents fraudulent activity and protects user data</li>
                    </ul>
                    <p style={{ marginBottom: '1rem', fontSize: '0.875rem', fontStyle: 'italic' }}>
                        These cookies cannot be disabled as they are necessary for the website to function.
                    </p>

                    <h3 style={{ fontSize: '1.25rem', marginTop: '2rem', marginBottom: '1rem', fontWeight: '600' }}>2. Performance & Analytics Cookies</h3>
                    <p style={{ marginBottom: '1rem' }}>
                        These cookies collect information about how visitors use our website, such as which pages are visited most often and if error messages are received.
                    </p>
                    <ul style={{ marginLeft: '2rem', marginBottom: '1rem' }}>
                        <li><strong>Google Analytics:</strong> Tracks website usage and visitor behavior</li>
                        <li><strong>Page Load Time:</strong> Monitors site performance</li>
                        <li><strong>Error Tracking:</strong> Identifies and fixes technical issues</li>
                    </ul>

                    <h3 style={{ fontSize: '1.25rem', marginTop: '2rem', marginBottom: '1rem', fontWeight: '600' }}>3. Functionality Cookies</h3>
                    <p style={{ marginBottom: '1rem' }}>
                        These cookies allow the website to remember choices you make (such as your language preference or region) and provide enhanced features.
                    </p>
                    <ul style={{ marginLeft: '2rem', marginBottom: '1rem' }}>
                        <li><strong>Language Preference:</strong> Remembers your preferred language</li>
                        <li><strong>Recently Viewed:</strong> Shows products you've recently looked at</li>
                        <li><strong>Wishlist:</strong> Saves items you've added to your wishlist</li>
                    </ul>

                    <h3 style={{ fontSize: '1.25rem', marginTop: '2rem', marginBottom: '1rem', fontWeight: '600' }}>4. Targeting & Advertising Cookies</h3>
                    <p style={{ marginBottom: '1rem' }}>
                        These cookies are used to deliver advertisements more relevant to you and your interests. They also limit the number of times you see an advertisement and help measure the effectiveness of advertising campaigns.
                    </p>
                    <ul style={{ marginLeft: '2rem', marginBottom: '1rem' }}>
                        <li><strong>Facebook Pixel:</strong> Tracks conversions from Facebook ads</li>
                        <li><strong>Google Ads:</strong> Delivers personalized advertisements</li>
                        <li><strong>Retargeting:</strong> Shows relevant ads on other websites</li>
                    </ul>
                </section>

                <section style={{ marginBottom: '3rem' }}>
                    <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>Third-Party Cookies</h2>
                    <p style={{ marginBottom: '1rem' }}>
                        Some cookies are placed by third-party services that appear on our pages. We do not control these cookies, and you should check the third-party websites for more information:
                    </p>
                    <ul style={{ marginLeft: '2rem', marginBottom: '1rem' }}>
                        <li><strong>Google Analytics:</strong> <a href="https://policies.google.com/privacy" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>Privacy Policy</a></li>
                        <li><strong>Stripe (Payment Processing):</strong> <a href="https://stripe.com/privacy" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>Privacy Policy</a></li>
                        <li><strong>Facebook:</strong> <a href="https://www.facebook.com/privacy/explanation" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>Privacy Policy</a></li>
                    </ul>
                </section>

                <section style={{ marginBottom: '3rem' }}>
                    <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>Cookie Duration</h2>
                    <p style={{ marginBottom: '1rem' }}>
                        Cookies may be either "session" cookies or "persistent" cookies:
                    </p>
                    <ul style={{ marginLeft: '2rem', marginBottom: '1rem' }}>
                        <li><strong>Session Cookies:</strong> Temporary cookies that are deleted when you close your browser</li>
                        <li><strong>Persistent Cookies:</strong> Remain on your device until deleted or expired (typically 1-2 years)</li>
                    </ul>
                </section>

                <section style={{ marginBottom: '3rem' }}>
                    <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>How to Control Cookies</h2>
                    <p style={{ marginBottom: '1rem' }}>
                        You can control and manage cookies in several ways:
                    </p>

                    <h3 style={{ fontSize: '1.125rem', marginTop: '1.5rem', marginBottom: '0.75rem', fontWeight: '600' }}>Browser Settings</h3>
                    <p style={{ marginBottom: '1rem' }}>
                        Most browsers allow you to refuse or accept cookies through their settings. Here's how to manage cookies in popular browsers:
                    </p>
                    <ul style={{ marginLeft: '2rem', marginBottom: '1rem' }}>
                        <li><strong>Chrome:</strong> Settings → Privacy and security → Cookies and other site data</li>
                        <li><strong>Firefox:</strong> Options → Privacy & Security → Cookies and Site Data</li>
                        <li><strong>Safari:</strong> Preferences → Privacy → Cookies and website data</li>
                        <li><strong>Edge:</strong> Settings → Privacy, search, and services → Cookies</li>
                    </ul>

                    <h3 style={{ fontSize: '1.125rem', marginTop: '1.5rem', marginBottom: '0.75rem', fontWeight: '600' }}>Opt-Out Tools</h3>
                    <p style={{ marginBottom: '1rem' }}>
                        You can opt out of specific tracking services:
                    </p>
                    <ul style={{ marginLeft: '2rem', marginBottom: '1rem' }}>
                        <li><strong>Google Analytics:</strong> <a href="https://tools.google.com/dlpage/gaoptout" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>Opt-out Add-on</a></li>
                        <li><strong>Network Advertising:</strong> <a href="http://www.networkadvertising.org/choices/" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>NAI Opt-Out</a></li>
                        <li><strong>Digital Advertising:</strong> <a href="http://www.aboutads.info/choices/" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>DAA Opt-Out</a></li>
                    </ul>

                    <p style={{ marginTop: '1rem', padding: '1rem', background: 'rgba(212, 175, 55, 0.1)', borderLeft: '4px solid var(--color-primary)', fontSize: '0.9375rem' }}>
                        <strong>Note:</strong> Disabling cookies may affect the functionality of our website. Some features may not work properly without cookies enabled.
                    </p>
                </section>

                <section style={{ marginBottom: '3rem' }}>
                    <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>Updates to This Policy</h2>
                    <p style={{ marginBottom: '1rem' }}>
                        We may update this Cookie Policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically.
                    </p>
                </section>

                <section>
                    <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>Contact Us</h2>
                    <p style={{ marginBottom: '0.5rem' }}>
                        If you have questions about our use of cookies, please contact us:
                    </p>
                    <p style={{ marginBottom: '0.25rem' }}><strong>Email:</strong> <a href="mailto:privacy@oraessence.com" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>privacy@oraessence.com</a></p>
                    <p style={{ marginBottom: '0.25rem' }}><strong>Phone:</strong> 1-800-ORA-SKIN</p>
                    <p><strong>Address:</strong> 500 Botanical Lane, Vermont, USA</p>
                </section>
            </div>
        </main>
    );
}
