'use client';

import { useState } from 'react';
import styles from '../Dashboard.module.css';

export default function CMSPage() {
    const [activeTab, setActiveTab] = useState('articles'); // articles | create

    const articles = [
        { id: 1, title: 'The Art of Double Cleansing', status: 'Published', date: 'Oct 12, 2025' },
        { id: 2, title: 'Why Natural Ingredients Matter', status: 'Draft', date: 'Oct 15, 2025' },
        { id: 3, title: 'Morning Rituals for Glowing Skin', status: 'Published', date: 'Oct 01, 2025' },
    ];

    return (
        <div className={styles.dashboard}>
            <div className={styles.section}>
                <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1rem' }}>
                    <button
                        onClick={() => setActiveTab('articles')}
                        style={{
                            color: activeTab === 'articles' ? '#D4AF37' : '#A3B5AE',
                            fontWeight: activeTab === 'articles' ? 'bold' : 'normal',
                            fontSize: '1rem'
                        }}
                    >
                        All Articles
                    </button>
                    <button
                        onClick={() => setActiveTab('create')}
                        style={{
                            color: activeTab === 'create' ? '#D4AF37' : '#A3B5AE',
                            fontWeight: activeTab === 'create' ? 'bold' : 'normal',
                            fontSize: '1rem'
                        }}
                    >
                        Create New
                    </button>
                </div>

                {activeTab === 'articles' ? (
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Status</th>
                                <th>Date Modified</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {articles.map((article) => (
                                <tr key={article.id}>
                                    <td>{article.title}</td>
                                    <td>
                                        <span className={`${styles.statusBadge} ${article.status === 'Published' ? styles.delivered : styles.processing}`}>
                                            {article.status}
                                        </span>
                                    </td>
                                    <td className={styles.muted}>{article.date}</td>
                                    <td>
                                        <button style={{ color: '#D4AF37', marginRight: '0.5rem' }}>Edit</button>
                                        <button style={{ color: '#FF5252' }}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <form className={styles.alertList} onSubmit={(e) => e.preventDefault()}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <label style={{ color: '#A3B5AE', fontSize: '0.9rem' }}>Article Title</label>
                            <input
                                type="text"
                                placeholder="Enter title..."
                                style={{
                                    padding: '0.8rem',
                                    background: 'rgba(0,0,0,0.2)',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    color: '#fff',
                                    borderRadius: '4px'
                                }}
                            />
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <label style={{ color: '#A3B5AE', fontSize: '0.9rem' }}>Cover Image URL</label>
                            <input
                                type="text"
                                placeholder="/images/journal/..."
                                style={{
                                    padding: '0.8rem',
                                    background: 'rgba(0,0,0,0.2)',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    color: '#fff',
                                    borderRadius: '4px'
                                }}
                            />
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <label style={{ color: '#A3B5AE', fontSize: '0.9rem' }}>Content (Markdown)</label>
                            <textarea
                                rows={10}
                                placeholder="Write your article here..."
                                style={{
                                    padding: '0.8rem',
                                    background: 'rgba(0,0,0,0.2)',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    color: '#fff',
                                    borderRadius: '4px',
                                    fontFamily: 'monospace'
                                }}
                            />
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '1rem' }}>
                            <button
                                className={styles.statusBadge}
                                style={{
                                    backgroundColor: '#D4AF37',
                                    color: 'var(--color-text-dark)',
                                    padding: '0.8rem 2rem',
                                    fontSize: '1rem',
                                    cursor: 'pointer'
                                }}
                            >
                                Publish Article
                            </button>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
}
