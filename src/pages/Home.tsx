import { ArrowRight, Calculator, FileText, Shield, TrendingUp, Users, CheckCircle } from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import './Home.css';

const Home = () => {
    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-bg"></div>
                <div className="container">
                    <div className="hero-content fade-in-up">
                        <div className="hero-badge">
                            <CheckCircle size={14} />
                            Trusted by 1000+ Clients
                        </div>
                        <h1 className="hero-title">
                            Professional Tax & Financial Solutions for Businesses
                        </h1>
                        <p className="hero-subtitle">
                            We simplify complex tax laws and financial regulations so you can focus on growing your business with confidence.
                        </p>
                        <div className="hero-actions">
                            <Button variant="primary" size="lg" to="/booking">
                                Get Started <ArrowRight size={18} />
                            </Button>
                            <Button variant="secondary" size="lg" to="/services">
                                View Our Services
                            </Button>
                        </div>

                        {/* Stats Bar */}
                        <div className="hero-stats">
                            <div className="stat">
                                <span className="stat-number">10+</span>
                                <span className="stat-label">Years of Experience</span>
                            </div>
                            <div className="stat">
                                <span className="stat-number">5k+</span>
                                <span className="stat-label">Tax Filings</span>
                            </div>
                            <div className="stat">
                                <span className="stat-number">99%</span>
                                <span className="stat-label">Success Rate</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Grid Section */}
            <section className="services-section section">
                <div className="container">
                    <div className="section-header">
                        <h2>Reliable Expertise in Every Sector</h2>
                        <p>Comprehensive solutions tailored to your unique financial needs</p>
                    </div>

                    <div className="services-grid">
                        <Card hover className="service-card" to="/services">
                            <div className="icon-box">
                                <FileText size={24} />
                            </div>
                            <h3>Income Tax Filing</h3>
                            <p>End-to-end tax planning and filing for individuals and corporate entities with precision.</p>
                            <div className="card-link">
                                Explore Service <ArrowRight size={16} />
                            </div>
                        </Card>

                        <Card hover className="service-card" to="/services">
                            <div className="icon-box">
                                <Calculator size={24} />
                            </div>
                            <h3>GST Compliance</h3>
                            <p>Hassle-free GST registration, returns, and advisory services to keep your business compliant.</p>
                            <div className="card-link">
                                Explore Service <ArrowRight size={16} />
                            </div>
                        </Card>

                        <Card hover className="service-card" to="/services">
                            <div className="icon-box">
                                <TrendingUp size={24} />
                            </div>
                            <h3>Audit & Assurance</h3>
                            <p>Thorough financial auditing services to ensure transparency and regulatory compliance.</p>
                            <div className="card-link">
                                Explore Service <ArrowRight size={16} />
                            </div>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="why-section section">
                <div className="container">
                    <div className="section-header">
                        <h2>Why Business Owners Trust Us</h2>
                        <p>We combine deep expertise with a personalized approach </p>
                    </div>

                    <div className="features-grid">
                        <div className="feature fade-in-up">
                            <div className="feature-icon"><Shield size={20} /></div>
                            <h4>100% Data Security</h4>
                            <p>Your financial data is encrypted and handled with utmost confidentiality.</p>
                        </div>
                        <div className="feature fade-in-up">
                            <div className="feature-icon"><TrendingUp size={20} /></div>
                            <h4>Strategic Planning</h4>
                            <p>We don't just file taxes; we help you plan for future growth.</p>
                        </div>
                        <div className="feature fade-in-up">
                            <div className="feature-icon"><Users size={20} /></div>
                            <h4>Dedicated Support</h4>
                            <p>Get direct access to experts who understand your business context.</p>
                        </div>
                        <div className="feature fade-in-up">
                            <div className="feature-icon"><CheckCircle size={20} /></div>
                            <h4>On-time Delivery</h4>
                            <p>We ensure all filings and audits are completed well before deadlines.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* How it Works Section */}
            <section className="section how-it-works">
                <div className="container">
                    <div className="section-header">
                        <h2>Three Simple Steps to Compliance</h2>
                        <p>Our streamlined process ensures you stay ahead of all deadlines</p>
                    </div>

                    <div className="steps-grid">
                        <div className="step">
                            <div className="step-number">1</div>
                            <h4>Consultation</h4>
                            <p>Schedule a quick call to discuss your business needs and financial goals.</p>
                        </div>
                        <div className="step">
                            <div className="step-number">2</div>
                            <h4>Execution</h4>
                            <p>Our experts handle all the paperwork, filings, and regulatory requirements.</p>
                        </div>
                        <div className="step">
                            <div className="step-number">3</div>
                            <h4>Compliance</h4>
                            <p>Receive your filing confirmations and certificates on time, every time.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section">
                <div className="container">
                    <div className="cta-content">
                        <h2>Ready to Simplify Your Finances?</h2>
                        <p>Join thousands of businesses that trust us for their tax and growth needs.</p>
                        <Button variant="primary" size="lg" to="/booking">
                            Schedule a Consultation
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
