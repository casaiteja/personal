import { Mail, Phone, MapPin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-content">
                <div className="footer-section">
                    <h3>Sai Teja <span className="text-light">CA & CMA</span></h3>
                    <p className="footer-bio">
                        Professional accounting, taxation, and compliance services tailored for individuals and businesses.
                        Building trust through accuracy and integrity.
                    </p>
                </div>

                <div className="footer-section">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About Me</a></li>
                        <li><a href="/services">Services</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4>Contact Info</h4>
                    <ul className="contact-list">
                        <li>
                            <Phone size={18} />
                            <span>+91 98765 43210</span>
                        </li>
                        <li>
                            <Mail size={18} />
                            <span>contact@saiteja-ca.com</span>
                        </li>
                        <li>
                            <MapPin size={18} />
                            <span>Hyderabad, India</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Sai Teja. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
