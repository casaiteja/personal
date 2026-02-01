import { FileText, PieChart, Briefcase, TrendingUp, DollarSign, Calculator } from 'lucide-react';
import Card from '../components/ui/Card';
import './Services.css';

const Services = () => {
    const services = [
        {
            icon: <DollarSign size={28} />,
            title: 'Income Tax',
            description: 'Comprehensive tax filing for individuals, professionals, and corporations. Tax planning to minimize liabilities legally.'
        },
        {
            icon: <Calculator size={28} />,
            title: 'GST Services',
            description: 'GST Registration, monthly/quarterly returns filing, annual returns, and audit assistance.'
        },
        {
            icon: <Briefcase size={28} />,
            title: 'Accounting & Bookkeeping',
            description: 'Maintaining day-to-day accounts, ledger management, and financial statement preparation.'
        },
        {
            icon: <PieChart size={28} />,
            title: 'Audit & Assurance',
            description: 'Statutory Audit, Tax Audit, Internal Audit, and Bank Audits ensuring transparency and compliance.'
        },
        {
            icon: <FileText size={28} />,
            title: 'Company Compliance',
            description: 'ROC filings, company incorporation, annual compliance, and secretarial services.'
        },
        {
            icon: <TrendingUp size={28} />,
            title: 'Cost Management',
            description: 'Cost audit, budgeting, variance analysis, and cost optimization strategies for manufacturing units.'
        }
    ];

    return (
        <div className="services-page">
            <section className="page-hero">
                <div className="page-hero-bg"></div>
                <div className="container">
                    <h1>Our Services</h1>
                    <p>Expert financial solutions tailored to your business growth</p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="services-grid">
                        {services.map((service, index) => (
                            <Card key={index} hover className="service-card">
                                <div className="icon-box">{service.icon}</div>
                                <h3>{service.title}</h3>
                                <p>{service.description}</p>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;
