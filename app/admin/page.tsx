'use client';

import styles from './Dashboard.module.css';

export default function AdminDashboard() {
    const stats = [
        { label: 'Total Revenue', value: '$124,592', change: '+12%', isPositive: true },
        { label: 'Active Orders', value: '48', change: '+5%', isPositive: true },
        { label: 'Total Customers', value: '1,294', change: '+18%', isPositive: true },
        { label: 'Low Stock Items', value: '3', change: '-2', isPositive: true }, // Negative number of low stock is good
    ];

    const recentOrders = [
        { id: '#ORD-7829', customer: 'Sarah M.', total: '$215.00', status: 'Processing', date: '2 mins ago' },
        { id: '#ORD-7828', customer: 'Emily R.', total: '$88.00', status: 'Shipped', date: '1 hour ago' },
        { id: '#ORD-7827', customer: 'Jessica K.', total: '$450.00', status: 'Shipped', date: '3 hours ago' },
        { id: '#ORD-7826', customer: 'Michael B.', total: '$125.00', status: 'Delivered', date: '1 day ago' },
    ];

    return (
        <div className={styles.dashboard}>
            {/* Stats Grid */}
            <div className={styles.statsGrid}>
                {stats.map((stat, i) => (
                    <div key={i} className={styles.statCard}>
                        <h3 className={styles.statLabel}>{stat.label}</h3>
                        <div className={styles.statValue}>{stat.value}</div>
                        <div className={`${styles.statChange} ${stat.isPositive ? styles.positive : styles.negative}`}>
                            {stat.change} from last month
                        </div>
                    </div>
                ))}
            </div>

            <div className={styles.contentGrid}>
                {/* Recent Activity */}
                <div className={styles.section}>
                    <h3 className={styles.sectionTitle}>Recent Orders</h3>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th>Order ID</th>
                                <th>Customer</th>
                                <th>Total</th>
                                <th>Status</th>
                                <th>Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            {recentOrders.map((order) => (
                                <tr key={order.id}>
                                    <td className={styles.orderId}>{order.id}</td>
                                    <td>{order.customer}</td>
                                    <td>{order.total}</td>
                                    <td>
                                        <span className={`${styles.statusBadge} ${styles[order.status.toLowerCase()]}`}>
                                            {order.status}
                                        </span>
                                    </td>
                                    <td className={styles.muted}>{order.date}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Quick Actions / Alerts */}
                <div className={styles.section}>
                    <h3 className={styles.sectionTitle}>System Alerts</h3>
                    <div className={styles.alertList}>
                        <div className={`${styles.alertItem} ${styles.warning}`}>
                            <span className={styles.alertIcon}>⚠️</span>
                            <div>
                                <strong>Low Inventory</strong>
                                <p>Regenerating Cleanser is below 10 units.</p>
                            </div>
                        </div>
                        <div className={`${styles.alertItem} ${styles.info}`}>
                            <span className={styles.alertIcon}>ℹ️</span>
                            <div>
                                <strong>New Review</strong>
                                <p>Sarah just left a 5-star video review.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
