import { Link } from 'react-router-dom';
import type { ReactNode } from 'react';
import './Card.css';

interface CardProps {
    children: ReactNode;
    className?: string;
    hover?: boolean;
    to?: string;
}

const Card = ({ children, className = '', hover = false, to }: CardProps) => {
    const cardContent = (
        <div className={`card ${hover ? 'card-hover' : ''} ${className}`}>
            {children}
        </div>
    );

    if (to) {
        return <Link to={to} className="card-wrapper-link">{cardContent}</Link>;
    }

    return cardContent;
};

export default Card;
