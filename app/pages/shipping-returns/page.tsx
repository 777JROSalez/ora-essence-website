export default function ShippingReturns() {
    return (
        <main className="container" style={{ padding: '4rem 2rem', maxWidth: '800px', margin: '0 auto' }}>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem', marginBottom: '2rem', color: 'var(--color-primary)' }}>Shipping & Returns</h1>

            <section style={{ marginBottom: '3rem' }}>
                <h2 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', color: '#fff' }}>Shipping Policy</h2>
                <div style={{ lineHeight: '1.8', color: '#ccc' }}>
                    <p style={{ marginBottom: '1rem' }}>
                        <strong>Complimentary Shipping:</strong> We are pleased to offer complimentary standard shipping on all orders over $50 within the United States.
                    </p>
                    <p style={{ marginBottom: '1rem' }}>
                        <strong>Processing Time:</strong> Creating fresh, high-performance skincare takes time. Please allow 1-2 business days for us to hand-pack your order at our Vermont facility.
                    </p>
                    <p>
                        <strong>Expedited Options:</strong> 2-Day and Overnight shipping options are available at checkout.
                    </p>
                </div>
            </section>

            <section>
                <h2 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', color: '#fff' }}>Returns & Exchanges</h2>
                <div style={{ lineHeight: '1.8', color: '#ccc' }}>
                    <p style={{ marginBottom: '1rem' }}>
                        We want you to love your Jeff Skincare experience. If you are not completely satisfied with your purchase, we accept returns within 30 days of delivery.
                    </p>
                    <p style={{ marginBottom: '1rem' }}>
                        To initiate a return, please contact our Customer Care team. Please note that return shipping fees are the responsibility of the customer unless the item was damaged upon arrival.
                    </p>
                </div>
            </section>
        </main>
    );
}
