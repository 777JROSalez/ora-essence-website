'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useUI } from '../context/UIContext';
import { useCart } from '../context/CartContext';
import styles from './Header.module.css';
import SearchModal from './SearchModal';

export default function Header() {
    const { openSidebar } = useUI();
    const { cartCount, openCart } = useCart();
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [showRitualsMenu, setShowRitualsMenu] = useState(false);
    const [showShopMenu, setShowShopMenu] = useState(false);
    const [showAboutMenu, setShowAboutMenu] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <button onClick={openSidebar} className={styles.iconBtn} aria-label="Menu" style={{ fontSize: '1rem', fontWeight: 'bold' }}>Menu</button>
                    <button onClick={() => setIsSearchOpen(true)} className={styles.iconBtn} aria-label="Search">🔍</button>
                </div>

                <div className={styles.logoContainer}>
                    <Link href="/" className={styles.logo}>
                        ORA ESSENCE
                    </Link>
                </div>

                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <nav className={styles.nav} style={{ display: 'flex', gap: '1.5rem', marginRight: '1rem' }}>
                        {/* Shop with Mega Menu */}
                        <div
                            className={styles.megaMenuWrapper}
                            onMouseEnter={() => setShowShopMenu(true)}
                            onMouseLeave={() => setShowShopMenu(false)}
                        >
                            <Link href="/products" className={styles.navLink}>
                                Shop
                            </Link>

                            {showShopMenu && (
                                <div className={styles.megaMenu}>
                                    <div className={styles.megaMenuContent}>
                                        {/* Shop All Section */}
                                        <div className={styles.megaMenuColumn}>
                                            <h3 className={styles.megaMenuTitle}>Shop All</h3>
                                            <ul className={styles.megaMenuList}>
                                                <li><Link href="/products">All Products</Link></li>
                                                <li><Link href="/products/best-sellers">Best Sellers</Link></li>
                                                <li><Link href="/products/new-arrivals">New Arrivals</Link></li>
                                                <li><Link href="/products/limited-editions">Limited Editions</Link></li>
                                                <li><Link href="/rituals/discovery-kits">Discovery Kits</Link></li>
                                                <li><Link href="/rituals/travel-minis">Travel Minis</Link></li>
                                                <li><Link href="/products/gift-sets">Gift Sets</Link></li>
                                            </ul>
                                        </div>

                                        {/* Shop By Category Section */}
                                        <div className={styles.megaMenuColumn}>
                                            <h3 className={styles.megaMenuTitle}>Shop By Category</h3>
                                            <ul className={styles.megaMenuList}>
                                                <li><Link href="/products/cleansers">Cleansers</Link></li>
                                                <li><Link href="/products/serums">Serums & Essences</Link></li>
                                                <li><Link href="/products/moisturizers">Moisturizers</Link></li>
                                                <li><Link href="/products/face-oils">Face Oils</Link></li>
                                                <li><Link href="/products/eye-care">Eye Care</Link></li>
                                                <li><Link href="/products/masks">Masks</Link></li>
                                                <li><Link href="/products/body-care">Body Care</Link></li>
                                                <li><Link href="/products/accessories">Accessories & Tools</Link></li>
                                            </ul>
                                        </div>

                                        {/* Shop By Concern Section */}
                                        <div className={styles.megaMenuColumn}>
                                            <h3 className={styles.megaMenuTitle}>Shop By Concern</h3>
                                            <ul className={styles.megaMenuList}>
                                                <li><Link href="/concerns/dryness">Dryness</Link></li>
                                                <li><Link href="/concerns/uneven-skin-tone">Uneven Skin Tone</Link></li>
                                                <li><Link href="/concerns/pores-texture">Pores & Texture</Link></li>
                                                <li><Link href="/concerns/blemishes">Blemishes & Breakouts</Link></li>
                                                <li><Link href="/concerns/sensitivity">Sensitivity & Redness</Link></li>
                                                <li><Link href="/concerns/aging">Signs of Aging</Link></li>
                                                <li><Link href="/concerns/dullness">Dullness</Link></li>
                                            </ul>
                                        </div>

                                        {/* Visual CTA Section */}
                                        <div className={styles.megaMenuVisual}>
                                            <div className={styles.megaMenuImage}>
                                                <Image
                                                    src="/images/lip_blush_kit.png"
                                                    alt="Featured Product"
                                                    width={300}
                                                    height={350}
                                                    style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                                                />
                                                <div className={styles.megaMenuImageOverlay}>
                                                    <p className={styles.megaMenuImageText}>Holiday Lip & Blush Kit</p>
                                                    <Link href="/products/holiday-kit" className={styles.megaMenuCTA}>
                                                        SHOP NOW
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Skincare Rituals with Mega Menu */}
                        <div
                            className={styles.megaMenuWrapper}
                            onMouseEnter={() => setShowRitualsMenu(true)}
                            onMouseLeave={() => setShowRitualsMenu(false)}
                        >
                            <Link href="/rituals" className={styles.navLink}>
                                Skincare Rituals
                            </Link>

                            {showRitualsMenu && (
                                <div className={styles.megaMenu}>
                                    <div className={styles.megaMenuContent}>
                                        {/* Find Your Ritual Section */}
                                        <div className={styles.megaMenuColumn}>
                                            <h3 className={styles.megaMenuTitle}>Find Your Ritual</h3>
                                            <ul className={styles.megaMenuList}>
                                                <li><Link href="/rituals/morning">Morning</Link></li>
                                                <li><Link href="/rituals/evening">Evening</Link></li>
                                                <li><Link href="/rituals/discovery-kits">Ritual Discovery Kits</Link></li>
                                                <li><Link href="/rituals/travel-minis">Travel Minis</Link></li>
                                            </ul>

                                            <div className={styles.megaMenuLinks}>
                                                <Link href="/rewards">Rewards</Link>
                                                <Link href="/subscribe">Subscribe & Save</Link>
                                                <Link href="/consultation">Schedule a Consultation</Link>
                                            </div>
                                        </div>

                                        {/* Shop By Concern Section */}
                                        <div className={styles.megaMenuColumn}>
                                            <h3 className={styles.megaMenuTitle}>Shop By Concern</h3>
                                            <ul className={styles.megaMenuList}>
                                                <li><Link href="/concerns/dryness">Dryness</Link></li>
                                                <li><Link href="/concerns/uneven-skin-tone">Uneven Skin Tone</Link></li>
                                                <li><Link href="/concerns/pores-texture">Pores & Texture</Link></li>
                                                <li><Link href="/concerns/blemishes">Blemishes & Breakouts</Link></li>
                                                <li><Link href="/concerns/sensitivity">Sensitivity & Redness</Link></li>
                                                <li><Link href="/concerns/aging">Signs of Aging</Link></li>
                                                <li><Link href="/concerns/dullness">Dullness</Link></li>
                                            </ul>
                                        </div>

                                        {/* Visual CTA Section */}
                                        <div className={styles.megaMenuVisual}>
                                            <div className={styles.megaMenuImage}>
                                                <Image
                                                    src="/images/founder_portrait.png"
                                                    alt="Find Your Perfect Ritual"
                                                    width={300}
                                                    height={350}
                                                    style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                                                />
                                                <div className={styles.megaMenuImageOverlay}>
                                                    <p className={styles.megaMenuImageText}>Find Your Ritual</p>
                                                    <Link href="/quiz" className={styles.megaMenuCTA}>
                                                        TAKE THE QUIZ
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* About Ora with Mega Menu */}
                        <div
                            className={styles.megaMenuWrapper}
                            onMouseEnter={() => setShowAboutMenu(true)}
                            onMouseLeave={() => setShowAboutMenu(false)}
                        >
                            <Link href="/about" className={styles.navLink}>
                                About Ora
                            </Link>

                            {showAboutMenu && (
                                <div className={styles.megaMenu}>
                                    <div className={styles.megaMenuContent}>
                                        {/* Discover Section */}
                                        <div className={styles.megaMenuColumn}>
                                            <h3 className={styles.megaMenuTitle}>Discover</h3>
                                            <ul className={styles.megaMenuList}>
                                                <li><Link href="/about">Our Story</Link></li>
                                                <li><Link href="/about/ingredients">Our Ingredients</Link></li>
                                                <li><Link href="/about/certifications">Our Certifications</Link></li>
                                            </ul>
                                        </div>

                                        {/* Visual CTA Section */}
                                        <div className={styles.megaMenuVisual}>
                                            <div className={styles.megaMenuImage}>
                                                <Image
                                                    src="/images/farm_landscape.png"
                                                    alt="Our Farm"
                                                    width={300}
                                                    height={350}
                                                    style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                                                />
                                                <div className={styles.megaMenuImageOverlay}>
                                                    <p className={styles.megaMenuImageText}>Farm to Face</p>
                                                    <Link href="/about" className={styles.megaMenuCTA}>
                                                        DISCOVER OUR STORY
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

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
