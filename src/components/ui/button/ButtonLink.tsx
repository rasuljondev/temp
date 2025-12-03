import { Link, LinkProps } from 'react-router-dom'
import { Button, ButtonProps } from './Button'

export interface ButtonLinkProps extends Omit<ButtonProps, 'onClick' | 'type'>, Omit<LinkProps, 'className'> {
  to: string
}

/**
 * A Button component styled as a Link for navigation
 * Combines the Button styling with React Router's Link functionality
 */
export const ButtonLink = ({ 
  to, 
  children, 
  variant = 'primary', 
  size = 'md',
  color,
  fullWidth, 
  className,
  customClassName,
  isLoading,
  leftIcon,
  rightIcon,
  label,
  ...linkProps 
}: ButtonLinkProps) => {
  return (
    <Link 
      to={to} 
      {...linkProps} 
      className={fullWidth ? 'block w-full' : 'inline-block'}
      style={{ textDecoration: 'none' }}
    >
      <Button 
        variant={variant} 
        size={size}
        color={color}
        fullWidth={fullWidth} 
        className={className}
        customClassName={customClassName}
        isLoading={isLoading}
        leftIcon={leftIcon}
        rightIcon={rightIcon}
        label={label}
      >
        {children}
      </Button>
    </Link>
  )
}

