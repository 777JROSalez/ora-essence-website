'use client';

import { UIProvider } from '../context/UIContext';
import { CartProvider } from '../context/CartContext';
import Header from './Header';
import Footer from './Footer';
import AnnouncementBar from './AnnouncementBar';
import Sidebar from './Sidebar';
import CartDrawer from './CartDrawer';
import DiscountPopup from './DiscountPopup';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    return (
        <CartProvider>
            <UIProvider>
                {/* Sticky wrapper for announcement bar + header */}
                <div style={{
                    position: 'sticky',
                    top: 0,
                    zIndex: 1000,
                    backgroundColor: '#ffffff',
                    overflow: 'visible'
                }}>
                    <AnnouncementBar />
                    <Header />
                </div>

                <Sidebar />
                <CartDrawer />
                <DiscountPopup />

                <main style={{ minHeight: '80vh' }}>
                    {children}
                </main>

                <Footer />
            </UIProvider>
        </CartProvider>
    );
}
