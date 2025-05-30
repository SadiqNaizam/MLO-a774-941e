import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface SignUpLinkProps {
  onSignUpClick: () => void;
  className?: string;
}

const SignUpLink: React.FC<SignUpLinkProps> = ({
  onSignUpClick,
  className,
}) => {
  return (
    <p className={cn('text-center text-sm', className)}>
      <span className="text-muted-foreground">or, </span>
      <Button
        variant="link"
        className="p-0 h-auto text-sm text-primary hover:text-primary/90 font-medium"
        onClick={onSignUpClick}
      >
        sign up
      </Button>
    </p>
  );
};

export default SignUpLink;
