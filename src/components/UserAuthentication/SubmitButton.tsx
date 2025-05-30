import React from 'react';
import { cn } from '@/lib/utils';
import { Button, ButtonProps } from '@/components/ui/button'; // Import ButtonProps for better type extension
import { Loader2 } from 'lucide-react';

interface SubmitButtonProps extends ButtonProps { // Extend ButtonProps from Shadcn
  isLoading?: boolean;
  children: React.ReactNode;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({
  children,
  isLoading = false,
  className,
  type = 'submit',
  disabled,
  ...props
}) => {
  return (
    <Button
      type={type}
      disabled={isLoading || disabled} // Disable if loading or explicitly disabled
      className={cn('w-full', className)} // Default variant uses primary colors
      variant="default" // Explicitly set default, it uses bg-primary and text-primary-foreground
      {...props}
    >
      {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      {children}
    </Button>
  );
};

export default SubmitButton;
