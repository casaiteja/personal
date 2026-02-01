import { Award, BookOpen, Target, Users } from 'lucide-react';
import './About.css';

const About = () => {
    return (
        <div className="about-page">
            <section className="page-hero">
                <div className="page-hero-bg"></div>
                <div className="container">
                    <h1>About Me</h1>
                    <p>Your trusted financial partner for over a decade</p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="about-grid">
                        <div className="about-content">
                            <h2>Sai Teja</h2>
                            <p className="credentials">CA & CMA</p>
                            <p className="bio">
                                With over 10 years of experience in taxation, audit, and business advisory,
                                I have helped hundreds of clients achieve their financial goals. My dual qualification
                                as a Chartered Accountant and Cost & Management Accountant gives me a unique perspective
                                on both financial compliance and cost optimization.
                            </p>
                            <p className="bio">
                                I believe in building long-term relationships with my clients, understanding their
                                unique needs, and providing personalized solutions that drive real results.
                            </p>
                        </div>

                        <div className="about-highlights">
                            <div className="highlight-card">
                                <Award className="highlight-icon" />
                                <div>
                                    <h4>Dual Qualified</h4>
                                    <p>CA & CMA Certified</p>
                                </div>
                            </div>
                            <div className="highlight-card">
                                <BookOpen className="highlight-icon" />
                                <div>
                                    <h4>10+ Years</h4>
                                    <p>Industry Experience</p>
                                </div>
                            </div>
                            <div className="highlight-card">
                                <Users className="highlight-icon" />
                                <div>
                                    <h4>500+ Clients</h4>
                                    <p>Successfully Served</p>
                                </div>
                            </div>
                            <div className="highlight-card">
                                <Target className="highlight-icon" />
                                <div>
                                    <h4>100% Focus</h4>
                                    <p>On Client Success</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
