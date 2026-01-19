'use client';

import { useEffect } from 'react';
import styles from './AccessibilityNav.module.css';

export default function AccessibilityNav() {
    useEffect(() => {
        // Add keyboard shortcuts listener
        const handleKeyPress = (e: KeyboardEvent) => {
            // Alt + M = Skip to main content
            if (e.altKey && e.key === 'm') {
                e.preventDefault();
                const main = document.querySelector('main');
                if (main) {
                    (main as HTMLElement).focus();
                    main.scrollIntoView({ behavior: 'smooth' });
                }
            }
            // Alt + N = Skip to navigation
            if (e.altKey && e.key === 'n') {
                e.preventDefault();
                const nav = document.querySelector('nav') || document.querySelector('header');
                if (nav) {
                    (nav as HTMLElement).focus();
                    nav.scrollIntoView({ behavior: 'smooth' });
                }
            }
        };

        window.addEventListener('keydown', handleKeyPress);
        return () => window.removeEventListener('keydown', handleKeyPress);
    }, []);

    const skipToMain = (e: React.MouseEvent) => {
        e.preventDefault();
        const main = document.querySelector('main');
        if (main) {
            (main as HTMLElement).focus();
            main.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const skipToNav = (e: React.MouseEvent) => {
        e.preventDefault();
        const nav = document.querySelector('nav') || document.querySelector('header');
        if (nav) {
            (nav as HTMLElement).focus();
            nav.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className={styles.skipLinks}>
            <a href="#main-content" onClick={skipToMain} className={styles.skipLink}>
                Skip to main content
            </a>
            <a href="#navigation" onClick={skipToNav} className={styles.skipLink}>
                Skip to navigation
            </a>
            <div className={styles.keyboardHints}>
                <span>Keyboard shortcuts: Alt+M (Main) | Alt+N (Navigation)</span>
            </div>
        </div>
    );
}
