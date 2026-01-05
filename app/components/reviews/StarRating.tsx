import React from 'react';

interface StarRatingProps {
    rating: number; // 0-5
    size?: number;
    editable?: boolean;
    onChange?: (rating: number) => void;
}

export default function StarRating({ rating, size = 16, editable = false, onChange }: StarRatingProps) {
    const stars = [1, 2, 3, 4, 5];

    return (
        <div style={{ display: 'flex', gap: '2px' }}>
            {stars.map((star) => (
                <span
                    key={star}
                    style={{
                        color: star <= rating ? 'var(--color-primary)' : '#444',
                        fontSize: `${size}px`,
                        cursor: editable ? 'pointer' : 'default'
                    }}
                    onClick={() => editable && onChange && onChange(star)}
                >
                    ★
                </span>
            ))}
        </div>
    );
}
