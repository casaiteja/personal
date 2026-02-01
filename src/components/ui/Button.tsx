import { Link } from 'react-router-dom';
import type { ButtonHTMLAttributes, ReactNode } from 'react';
import './Button.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline';
    size?: 'sm' | 'md' | 'lg';
    children: ReactNode;
    to?: string;
}

const Button = ({
    variant = 'primary',
    size = 'md',
    children,
    className = '',
    to,
    ...props
}: ButtonProps) => {
    const btnClass = `btn btn-${variant} btn-${size} ${className}`;

    if (to) {
        return (
            <Link to={to} className={btnClass}>
                {children}
            </Link>
        );
    }

    return (
        <button className={btnClass} {...props}>
            {children}
        </button>
    );
};

export default Button;
