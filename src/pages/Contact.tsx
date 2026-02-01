import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import Button from '../components/ui/Button';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact-page">
            <section className="page-hero">
                <div className="page-hero-bg"></div>
                <div className="container">
                    <h1>Contact</h1>
                    <p>Get in touch for any queries or consultation</p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="contact-grid">
                        <div className="contact-info">
                            <h2>Let's Connect</h2>
                            <p className="contact-intro">
                                Have questions? I'm here to help. Reach out through any of the channels below.
                            </p>

                            <div className="contact-cards">
                                <div className="contact-card">
                                    <Phone className="contact-icon" />
                                    <div>
                                        <h4>Phone</h4>
                                        <p>+91 98765 43210</p>
                                    </div>
                                </div>
                                <div className="contact-card">
                                    <Mail className="contact-icon" />
                                    <div>
                                        <h4>Email</h4>
                                        <p>contact@saiteja-ca.com</p>
                                    </div>
                                </div>
                                <div className="contact-card">
                                    <MapPin className="contact-icon" />
                                    <div>
                                        <h4>Location</h4>
                                        <p>Hyderabad, India</p>
                                    </div>
                                </div>
                                <div className="contact-card">
                                    <Clock className="contact-icon" />
                                    <div>
                                        <h4>Hours</h4>
                                        <p>Mon - Sat: 10AM - 7PM</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="contact-form-wrapper">
                            <form className="contact-form">
                                <div className="form-group">
                                    <label>Name</label>
                                    <input type="text" placeholder="Your name" />
                                </div>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="email" placeholder="your@email.com" />
                                </div>
                                <div className="form-group">
                                    <label>Phone</label>
                                    <input type="tel" placeholder="+91 ..." />
                                </div>
                                <div className="form-group">
                                    <label>Message</label>
                                    <textarea rows={4} placeholder="How can I help you?"></textarea>
                                </div>
                                <Button variant="primary" size="lg" className="submit-btn">
                                    Send Message
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
