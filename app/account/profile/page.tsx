import { mockUser } from '../../data/user';

export default function ProfilePage() {
    return (
        <div>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', color: 'var(--color-primary)', marginBottom: '2rem' }}>My Profile</h1>

            <form style={{ maxWidth: '600px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem' }}>First Name</label>
                        <input type="text" defaultValue={mockUser.firstName} style={{ width: '100%', padding: '0.8rem', border: '1px solid #ddd', borderRadius: '4px' }} />
                    </div>
                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Last Name</label>
                        <input type="text" defaultValue={mockUser.lastName} style={{ width: '100%', padding: '0.8rem', border: '1px solid #ddd', borderRadius: '4px' }} />
                    </div>
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Email Address</label>
                    <input type="email" defaultValue={mockUser.email} style={{ width: '100%', padding: '0.8rem', border: '1px solid #ddd', borderRadius: '4px' }} />
                </div>

                <div style={{ marginBottom: '2rem' }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Skin Type</label>
                    <select defaultValue={mockUser.skinType} style={{ width: '100%', padding: '0.8rem', border: '1px solid #ddd', borderRadius: '4px' }}>
                        <option>Dry</option>
                        <option>Oily</option>
                        <option>Combination</option>
                        <option>Sensitive</option>
                    </select>
                </div>

                <button type="submit" className="btn-primary">Save Changes</button>
            </form>
        </div>
    );
}
