import React from 'react';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
}

const InputField: React.FC<InputFieldProps> = ({
  id,
  name,
  type = 'text',
  placeholder,
  value,
  onChange,
  className,
  disabled,
  ...props
}) => {
  return (
    <Input
      id={id}
      name={name || id}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={cn(className)} // Shadcn Input already has good base styles including rounded-md
      disabled={disabled}
      {...props}
    />
  );
};

export default InputField;
