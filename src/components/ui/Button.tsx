import React, { forwardRef } from 'react';
import { cn } from '../../utils/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'icon';
  size?: 'sm' | 'md' | 'lg';
  as?: React.ElementType;
  to?: string;
  href?: string;
  children: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', as: Component = 'button', children, ...props }, ref) => {
    const baseClasses = 'inline-flex items-center justify-center font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
    
    const variants = {
      primary: 'bg-primary text-white hover:bg-red-700 active:bg-red-800',
      secondary: 'text-primary hover:text-red-700 font-bold',
      icon: 'rounded-full text-white shadow-lg hover:shadow-xl transform hover:scale-105',
    };

    const sizes = {
      sm: 'px-6 py-2 text-sm rounded-full',
      md: 'px-8 py-3 text-base rounded-lg',
      lg: 'px-10 py-4 text-lg rounded-lg',
    };

    const iconSizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
    };

    const sizeClasses = variant === 'icon' ? iconSizes[size] : sizes[size];

    return (
      <Component
        className={cn(baseClasses, variants[variant], sizeClasses, className)}
        ref={ref}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Button.displayName = 'Button';

export default Button;