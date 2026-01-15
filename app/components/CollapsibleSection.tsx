'use client';

import { useState, ReactNode } from 'react';
import styles from './CollapsibleSection.module.css';

interface CollapsibleSectionProps {
    title: string;
    children: ReactNode;
    defaultOpen?: boolean;
}

export default function CollapsibleSection({ title, children, defaultOpen = false }: CollapsibleSectionProps) {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    return (
        <div className={styles.section}>
            <button
                className={styles.header}
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
            >
                <h3 className={styles.title}>{title}</h3>
                <span className={`${styles.icon} ${isOpen ? styles.iconOpen : ''}`}>
                    +
                </span>
            </button>

            <div className={`${styles.content} ${isOpen ? styles.contentOpen : ''}`}>
                <div className={styles.contentInner}>
                    {children}
                </div>
            </div>
        </div>
    );
}
