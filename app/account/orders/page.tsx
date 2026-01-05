import { mockOrders } from '../../data/orders';

export default function OrdersPage() {
    return (
        <div>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', color: 'var(--color-primary)', marginBottom: '2rem' }}>Order History</h1>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {mockOrders.map((order) => (
                    <div key={order.id} style={{ border: '1px solid #eee', borderRadius: '8px', padding: '1.5rem' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #eee', paddingBottom: '1rem', marginBottom: '1rem' }}>
                            <div>
                                <span style={{ fontWeight: 'bold', display: 'block' }}>{order.id}</span>
                                <span style={{ fontSize: '0.9rem', color: '#666' }}>{order.date}</span>
                            </div>
                            <div style={{ textAlign: 'right' }}>
                                <span style={{ fontWeight: 'bold', display: 'block' }}>${order.total.toFixed(2)}</span>
                                <span style={{ color: 'green', fontSize: '0.9rem' }}>{order.status}</span>
                            </div>
                        </div>
                        <div style={{ marginBottom: '1rem' }}>
                            {order.items.map((item, i) => (
                                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.9rem' }}>
                                    <span>{item.name} x{item.quantity}</span>
                                    <span>${item.price}</span>
                                </div>
                            ))}
                        </div>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <button className="btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.8rem' }}>Reorder</button>
                            <button style={{ padding: '0.5rem 1rem', fontSize: '0.8rem', background: 'transparent', border: '1px solid #ddd' }}>Track Package</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
