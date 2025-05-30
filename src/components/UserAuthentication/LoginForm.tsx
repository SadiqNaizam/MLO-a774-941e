import React from 'react';
import { cn } from '@/lib/utils';
import InputField from './InputField';
import SubmitButton from './SubmitButton';
import SignUpLink from './SignUpLink';

interface LoginFormProps {
  className?: string;
  onLogin: (data: { username: string; password: string }) => Promise<void> | void;
  onSignUpClick: () => void;
  initialUsername?: string;
  initialPassword?: string;
}

const LoginForm: React.FC<LoginFormProps> = ({
  className,
  onLogin,
  onSignUpClick,
  initialUsername = '',
  initialPassword = '',
}) => {
  const [username, setUsername] = React.useState<string>(initialUsername);
  const [password, setPassword] = React.useState<string>(initialPassword);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const handleSubmit = React.useCallback(async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      await onLogin({ username, password });
    } catch (error) {
      console.error("Login failed:", error);
      // Optionally, display an error message to the user here
    } finally {
      setIsLoading(false);
    }
  }, [username, password, onLogin]);

  return (
    <div
      className={cn(
        "w-[400px] max-w-full px-6 py-8 bg-card text-card-foreground rounded-md shadow-md",
        className
      )}
    >
      <h1 className="text-2xl font-bold text-center mb-6 text-card-foreground">
        Log in
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <InputField
          id="username"
          name="username"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          disabled={isLoading}
          autoComplete="username"
        />
        <InputField
          id="password"
          name="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={isLoading}
          autoComplete="current-password"
        />
        <SubmitButton type="submit" isLoading={isLoading} disabled={isLoading}>
          Log in
        </SubmitButton>
      </form>
      <SignUpLink onSignUpClick={onSignUpClick} className="mt-6" />
    </div>
  );
};

export default LoginForm;
