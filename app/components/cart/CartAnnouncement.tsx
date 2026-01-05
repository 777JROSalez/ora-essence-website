'use client';

import { useState, useEffect } from 'react';
import styles from './CartAnnouncement.module.css';

export default function CartAnnouncement() {
    const [timeLeft, setTimeLeft] = useState(15 * 60); // 15 minutes

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    return (
        <div className={styles.announcement}>
            <p>
                🔥 Your items are reserved for <strong>{minutes}:{seconds.toString().padStart(2, '0')}</strong>
            </p>
        </div>
    );
}
