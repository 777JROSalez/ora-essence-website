'use client';

import Link from 'next/link';
import styles from './Sidebar.module.css';
import { useEffect } from 'react';
import { useUI } from '../context/UIContext';

export default function Sidebar() {
    const { isSidebarOpen, closeSidebar } = useUI();
    const isOpen = isSidebarOpen;

    // Prevent scrolling when open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }, [isOpen]);

    return (
        <>
            <div
                className={`${styles.overlay} ${isOpen ? styles.visible : ''}`}
                onClick={closeSidebar}
            />
            <div className={`${styles.sidebar} ${isOpen ? styles.visible : ''}`}>
                <div className={styles.header}>
                    <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', color: 'var(--color-primary)' }}>Menu</span>
                    <button onClick={closeSidebar} className={styles.closeBtn} aria-label="Close menu">&times;</button>
                </div>
                <nav className={styles.nav}>
                    <Link href="/" onClick={closeSidebar} className={styles.link}>Home</Link>
                    <Link href="/products" onClick={closeSidebar} className={styles.link}>Shop All</Link>
                    <Link href="/collections/best-sellers" onClick={closeSidebar} className={styles.link}>Best Sellers</Link>
                    <Link href="/about" onClick={closeSidebar} className={styles.link}>Our Story</Link>
                    <Link href="/journal" onClick={closeSidebar} className={styles.link}>Journal</Link>
                </nav>
            </div>
        </>
    );
}
