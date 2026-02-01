import type { ReactNode } from 'react';
import './Card.css';

interface CardProps {
    children: ReactNode;
    className?: string;
    hover?: boolean;
}

const Card = ({ children, className = '', hover = false }: CardProps) => {
    return (
        <div className={`card ${hover ? 'card-hover' : ''} ${className}`}>
            {children}
        </div>
    );
};

export default Card;
