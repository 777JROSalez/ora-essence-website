'use client';

import { useState } from 'react';
import { Review, getReviewsByProductId } from '../../data/reviews';
import styles from './ReviewSystem.module.css';
import StarRating from './StarRating';

export default function ReviewSystem({ productId }: { productId: string }) {
    // Initial fetch from mock data
    const initialReviews = getReviewsByProductId(productId);
    const [reviews, setReviews] = useState<Review[]>(initialReviews);

    // Form state
    const [newRating, setNewRating] = useState(5);
    const [name, setName] = useState('');
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const average = reviews.length > 0
        ? (reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length).toFixed(1)
        : "0.0";

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newReview: Review = {
            id: Date.now().toString(),
            productId,
            author: name,
            rating: newRating,
            date: new Date().toLocaleDateString(),
            title,
            content,
            verified: true // Auto-verify for demo
        };
        setReviews([newReview, ...reviews]);

        // Reset form
        setName('');
        setTitle('');
        setContent('');
        setNewRating(5);
    };

    return (
        <section className={styles.container} id="reviews">
            <div className={styles.header}>
                <div>
                    <h2 className={styles.title}>Customer Reviews</h2>
                    <p style={{ color: '#888' }}>{reviews.length} Reviews</p>
                </div>
                <div className={styles.summary}>
                    <span className={styles.average}>{average}</span>
                    <div>
                        <StarRating rating={Number(average)} size={24} />
                        <span style={{ display: 'block', color: '#666', fontSize: '0.9rem' }}>Based on verified purchases</span>
                    </div>
                </div>
            </div>

            <div className={styles.reviewList}>
                {reviews.map((review) => (
                    <div key={review.id} className={styles.reviewItem}>
                        <div className={styles.reviewHeader}>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <StarRating rating={review.rating} />
                                <span className={styles.reviewTitle} style={{ marginLeft: '1rem', marginBottom: 0 }}>{review.title}</span>
                            </div>
                            <span className={styles.date}>{review.date}</span>
                        </div>

                        {review.videoUrl && (
                            <div style={{ marginTop: '0.5rem', marginBottom: '0.5rem', position: 'relative', borderRadius: '8px', overflow: 'hidden', border: '1px solid #333' }}>
                                <video
                                    src={review.videoUrl}
                                    poster={review.videoThumbnail}
                                    controls
                                    style={{ width: '100%', display: 'block', maxHeight: '350px', objectFit: 'cover' }}
                                />
                                <div className={styles.videoOverlay}>
                                    <div className={styles.playButton}>
                                        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
                                    </div>
                                    <div className={styles.quoteBubble}>
                                        "{review.title}"
                                    </div>
                                </div>
                            </div>
                        )}

                        <p className={styles.reviewContent}>{review.content}</p>

                        <div style={{ marginTop: '0.5rem' }}>
                            <span className={styles.author}>{review.author}</span>
                            {review.verified && <span className={styles.verified}>Verified Buyer</span>}
                        </div>
                    </div>
                ))}
            </div>

            {/* Write Review */}
            < form className={styles.form} onSubmit={handleSubmit} >
                <h3 className={styles.formTitle}>Write a Review</h3>

                <div className={styles.inputGroup}>
                    <label className={styles.label}>Rating</label>
                    <StarRating rating={newRating} size={28} editable onChange={setNewRating} />
                </div>

                <div className={styles.inputGroup}>
                    <label className={styles.label}>Name</label>
                    <input className={styles.input} value={name} onChange={e => setName(e.target.value)} required placeholder="Your Name" />
                </div>

                <div className={styles.inputGroup}>
                    <label className={styles.label}>Review Title</label>
                    <input className={styles.input} value={title} onChange={e => setTitle(e.target.value)} required placeholder="Summary of your experience" />
                </div>

                <div className={styles.inputGroup}>
                    <label className={styles.label}>Review</label>
                    <textarea className={styles.textarea} value={content} onChange={e => setContent(e.target.value)} required placeholder="Tell us what you liked or didn't like." />
                </div>

                <button type="submit" className={styles.submitBtn}>Submit Review</button>
            </form >
        </section >
    );
}
