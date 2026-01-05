'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useUI } from '../context/UIContext';
import { useCart } from '../context/CartContext';
import styles from './Header.module.css';
import SearchModal from './SearchModal';

export default function Header() {
    const { openSidebar } = useUI();
    const { cartCount, openCart } = useCart();
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    return (
        <>
            <header className={styles.header}>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <button onClick={openSidebar} className={styles.iconBtn} aria-label="Menu" style={{ fontSize: '1rem', fontWeight: 'bold' }}>Menu</button>
                    <button onClick={() => setIsSearchOpen(true)} className={styles.iconBtn} aria-label="Search">🔍</button>
                </div>

                <div className={styles.logoContainer}>
                    <Link href="/" className={styles.logo}>
                        ORA ESSENCE
                        <span className={styles.subLogo}>PURE · CALM · TIMELESS</span>
                    </Link>
                </div>

                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <nav className={styles.nav} style={{ display: 'flex', gap: '1.5rem', marginRight: '1rem' }}>
                        <Link href="/products" className={styles.navLink}>Shop</Link>
                        <Link href="/rituals" className={styles.navLink}>Skincare Rituals</Link>
                        <Link href="/about" className={styles.navLink}>About Jeff</Link>
                        <Link href="/quiz" className={styles.navLink}>Skin Quiz</Link>
                    </nav>
                    <Link href="/account" className={styles.iconBtn} aria-label="Account">👤</Link>
                    <button onClick={openCart} className={styles.iconBtn} aria-label="Cart">
                        Bag ({cartCount})
                    </button>
                </div>
            </header>
            <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
        </>
    );
}
