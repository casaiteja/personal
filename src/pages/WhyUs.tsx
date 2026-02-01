import { CheckCircle, Shield, Clock, Award, Headphones, TrendingUp } from 'lucide-react';
import './WhyUs.css';

const WhyUs = () => {
    const features = [
        {
            icon: <Award size={28} />,
            title: 'Dual Qualification',
            description: 'Both CA and CMA certified, bringing comprehensive financial expertise.'
        },
        {
            icon: <Shield size={28} />,
            title: '100% Compliance',
            description: 'Impeccable track record with zero penalties or compliance issues.'
        },
        {
            icon: <Clock size={28} />,
            title: 'Quick Turnaround',
            description: 'Fast and efficient service delivery without compromising quality.'
        },
        {
            icon: <Headphones size={28} />,
            title: 'Personal Attention',
            description: 'Direct access to your accountant, not an assistant or junior.'
        },
        {
            icon: <CheckCircle size={28} />,
            title: 'Transparent Pricing',
            description: 'No hidden fees. Clear and upfront pricing for all services.'
        },
        {
            icon: <TrendingUp size={28} />,
            title: 'Growth Focused',
            description: 'Strategic advice to help your business grow, not just compliance.'
        }
    ];

    return (
        <div className="why-page">
            <section className="page-hero">
                <div className="page-hero-bg"></div>
                <div className="container">
                    <h1>Why Choose Me</h1>
                    <p>Experience the difference with a professional who truly cares</p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="features-grid">
                        {features.map((feature, index) => (
                            <div key={index} className="feature-card">
                                <div className="feature-icon">{feature.icon}</div>
                                <h3>{feature.title}</h3>
                                <p>{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default WhyUs;
