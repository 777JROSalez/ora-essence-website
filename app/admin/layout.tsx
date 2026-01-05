'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './AdminLayout.module.css';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    const navItems = [
        { name: 'Dashboard', path: '/admin', icon: '📊' },
        { name: 'Inventory', path: '/admin/products', icon: '📦' },
        { name: 'Content (CMS)', path: '/admin/journal', icon: '✍️' },
        { name: 'Orders', path: '/admin/orders', icon: '🛍️' },
        { name: 'Settings', path: '/admin/settings', icon: '⚙️' },
    ];

    return (
        <div className={styles.adminContainer}>
            <aside className={styles.sidebar}>
                <div className={styles.brand}>
                    <h2>ORA <span className={styles.brandHighlight}>ADMIN</span></h2>
                </div>

                <nav className={styles.nav}>
                    {navItems.map((item) => (
                        <Link
                            key={item.path}
                            href={item.path}
                            className={`${styles.navItem} ${pathname === item.path ? styles.active : ''}`}
                        >
                            <span className={styles.icon}>{item.icon}</span>
                            {item.name}
                        </Link>
                    ))}
                </nav>

                <div className={styles.userProfile}>
                    <div className={styles.avatar}>JS</div>
                    <div className={styles.userInfo}>
                        <span className={styles.userName}>Jeff S.</span>
                        <span className={styles.userRole}>Store Owner</span>
                    </div>
                </div>

                <Link href="/" className={styles.exitLink}>
                    ← Back to Store
                </Link>
            </aside>

            <main className={styles.content}>
                <header className={styles.header}>
                    <h1 className={styles.pageTitle}>
                        {navItems.find(i => i.path === pathname)?.name || 'Admin'}
                    </h1>
                    <div className={styles.actions}>
                        <button className={styles.actionBtn}>🔔</button>
                    </div>
                </header>
                <div className={styles.scrollableContent}>
                    {children}
                </div>
            </main>
        </div>
    );
}
