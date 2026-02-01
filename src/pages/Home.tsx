import { ArrowRight, CheckCircle, TrendingUp, Shield, BarChart, Calendar, Star, Users, Zap } from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-bg"></div>
                <div className="container">
                    <div className="hero-content">
                        <div className="hero-badge">
                            <Zap size={14} />
                            <span>CA & CMA Certified Professional</span>
                        </div>
                        <h1 className="hero-title">
                            Strategic Financial
                            <br />
                            <span className="text-gradient">Excellence</span>
                        </h1>
                        <p className="hero-subtitle">
                            Expert taxation, audit, and business advisory services tailored for your growth.
                            Partner with a professional who transforms numbers into success.
                        </p>
                        <div className="hero-actions">
                            <Link to="/booking">
                                <Button variant="primary" size="lg">
                                    Book Consultation
                                    <Calendar size={18} />
                                </Button>
                            </Link>
                            <Link to="/services">
                                <Button variant="secondary" size="lg">
                                    Explore Services
                                </Button>
                            </Link>
                        </div>

                        {/* Stats */}
                        <div className="hero-stats">
                            <div className="stat">
                                <span className="stat-number">10+</span>
                                <span className="stat-label">Years Experience</span>
                            </div>
                            <div className="stat-divider"></div>
                            <div className="stat">
                                <span className="stat-number">500+</span>
                                <span className="stat-label">Clients Served</span>
                            </div>
                            <div className="stat-divider"></div>
                            <div className="stat">
                                <span className="stat-number">100%</span>
                                <span className="stat-label">Compliance Rate</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="section">
                <div className="container">
                    <div className="section-header">
                        <h2>Expertise You Can Trust</h2>
                        <p>Comprehensive financial solutions for every stage of your journey.</p>
                    </div>

                    <div className="services-grid">
                        <Card hover className="service-card">
                            <div className="icon-box">
                                <BarChart size={24} />
                            </div>
                            <h3>Taxation</h3>
                            <p>Income Tax filing, planning, and advisory for individuals and corporates.</p>
                            <Link to="/services" className="card-link">
                                Learn more <ArrowRight size={16} />
                            </Link>
                        </Card>

                        <Card hover className="service-card">
                            <div className="icon-box">
                                <Shield size={24} />
                            </div>
                            <h3>Audit & Assurance</h3>
                            <p>Statutory audit, internal audit, and tax audit ensuring complete compliance.</p>
                            <Link to="/services" className="card-link">
                                Learn more <ArrowRight size={16} />
                            </Link>
                        </Card>

                        <Card hover className="service-card">
                            <div className="icon-box">
                                <TrendingUp size={24} />
                            </div>
                            <h3>Business Advisory</h3>
                            <p>Startup registration, ROC compliance, and strategic growth consulting.</p>
                            <Link to="/services" className="card-link">
                                Learn more <ArrowRight size={16} />
                            </Link>
                        </Card>
                    </div>

                    <div className="section-cta">
                        <Link to="/services">
                            <Button variant="secondary">View All Services</Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Why Choose Section */}
            <section className="section why-section">
                <div className="container">
                    <div className="section-header">
                        <h2>Why Choose Me</h2>
                        <p>Your trusted partner in financial excellence.</p>
                    </div>

                    <div className="features-grid">
                        <div className="feature">
                            <div className="feature-icon">
                                <Star size={20} />
                            </div>
                            <h4>Proven Expertise</h4>
                            <p>Dual qualified CA & CMA with specialized knowledge.</p>
                        </div>
                        <div className="feature">
                            <div className="feature-icon">
                                <Users size={20} />
                            </div>
                            <h4>Client First</h4>
                            <p>Personalized attention with tailored solutions.</p>
                        </div>
                        <div className="feature">
                            <div className="feature-icon">
                                <CheckCircle size={20} />
                            </div>
                            <h4>100% Compliance</h4>
                            <p>Impeccable track record with zero penalties.</p>
                        </div>
                        <div className="feature">
                            <div className="feature-icon">
                                <Zap size={20} />
                            </div>
                            <h4>Fast Turnaround</h4>
                            <p>Quick and efficient service delivery.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section">
                <div className="container">
                    <div className="cta-content">
                        <h2>Ready to Transform Your Finances?</h2>
                        <p>Get expert advice customized to your specific needs.</p>
                        <Link to="/booking">
                            <Button variant="primary" size="lg">Schedule Now</Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
