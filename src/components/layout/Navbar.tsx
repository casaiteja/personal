import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, TrendingUp } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About Me', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Why Choose Me', path: '/why-us' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav className="navbar">
            <div className="container navbar-container">
                <Link to="/" className="navbar-logo">
                    <TrendingUp className="logo-icon" />
                    <div className="logo-text">
                        <span className="name">Sai Teja</span>
                        <span className="title">CA & CMA</span>
                    </div>
                </Link>

                {/* Desktop Menu */}
                <div className="navbar-links desktop-only">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.name}
                            to={link.path}
                            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                        >
                            {link.name}
                        </NavLink>
                    ))}
                    <Link to="/booking" className="btn btn-primary nav-cta">
                        Book Consultation
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <div className="mobile-toggle" onClick={toggleMenu}>
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="mobile-menu">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.name}
                            to={link.path}
                            className={({ isActive }) => (isActive ? 'mobile-link active' : 'mobile-link')}
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </NavLink>
                    ))}
                    <div className="mobile-contact">
                        <Link to="/contact" className="btn btn-primary full-width" onClick={() => setIsOpen(false)}>
                            Contact Now
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
