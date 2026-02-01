import { Clock, Video, Calendar } from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import './Booking.css';

const Booking = () => {
    const sessions = [
        {
            title: 'Discovery Call',
            price: 'Free',
            isPaid: false,
            duration: '15 min',
            type: 'Video Call',
            description: 'Quick intro call to understand your needs and see if we\'re a good fit.'
        },
        {
            title: 'Consultation',
            price: '₹999',
            isPaid: true,
            duration: '30 min',
            type: 'Video Call',
            description: 'In-depth discussion about your specific tax or business query.'
        },
        {
            title: 'Tax Planning',
            price: '₹1,999',
            isPaid: true,
            duration: '60 min',
            type: 'Video / In-Person',
            description: 'Comprehensive tax planning session with actionable strategies.'
        }
    ];

    return (
        <div className="booking-page">
            <section className="page-hero">
                <div className="page-hero-bg"></div>
                <div className="container">
                    <h1>Book a Consultation</h1>
                    <p>Schedule a session at your convenience</p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="booking-grid">
                        {sessions.map((session, index) => (
                            <Card key={index} hover className="session-card">
                                <div className="session-header">
                                    <h3>{session.title}</h3>
                                    <span className={`price-badge ${session.isPaid ? 'paid' : 'free'}`}>
                                        {session.price}
                                    </span>
                                </div>
                                <p className="session-desc">{session.description}</p>
                                <div className="session-meta">
                                    <div className="meta-item">
                                        <Clock size={16} />
                                        <span>{session.duration}</span>
                                    </div>
                                    <div className="meta-item">
                                        <Video size={16} />
                                        <span>{session.type}</span>
                                    </div>
                                </div>
                                <Button variant="primary" className="book-btn">
                                    <Calendar size={16} />
                                    Select & Schedule
                                </Button>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Booking;
