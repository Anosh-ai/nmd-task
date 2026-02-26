import { forwardRef } from 'react';
import { cn } from '../../utils/cn';

const Input = forwardRef(({ 
  className, 
  type = 'text', 
  label, 
  error, 
  helperText,
  ...props 
}, ref) => {
  return (
    <div className="space-y-2">
      {label && (
        <label className="text-sm font-medium text-secondary-700">
          {label}
        </label>
      )}
      <input
        type={type}
        className={cn(
          'input',
          error && 'border-red-500 focus-visible:ring-red-500',
          className
        )}
        ref={ref}
        {...props}
      />
      {error && (
        <p className="text-sm text-red-600">{error}</p>
      )}
      {helperText && !error && (
        <p className="text-sm text-secondary-500">{helperText}</p>
      )}
    </div>
  );
});

Input.displayName = 'Input';

export default Input;