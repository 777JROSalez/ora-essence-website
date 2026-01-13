'use client';

import { UIProvider } from '../context/UIContext';
import { CartProvider } from '../context/CartContext';
import Header from './Header';
import Footer from './Footer';
import AnnouncementBar from './AnnouncementBar';
import Sidebar from './Sidebar';
import CartDrawer from './CartDrawer';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    return (
        <CartProvider>
            <UIProvider>
                <AnnouncementBar />
                <Header />
                <Sidebar />
                <CartDrawer />
                {/* <AnimatePresence mode="wait">
                    <motion.main
                        key={pathname}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.5, ease: 'easeOut' }}
                        style={{ minHeight: '80vh' }}
                    > */}
                <main style={{ minHeight: '80vh' }}>
                    {children}
                </main>
                {/* </motion.main>
                </AnimatePresence> */}
                <Footer />
            </UIProvider>
        </CartProvider>
    );
}
