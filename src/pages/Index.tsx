import React from 'react';
import LoginForm from '../components/UserAuthentication/LoginForm';
import { toast } from 'sonner';

// Interface for login data, matching LoginForm's onLogin prop
interface LoginData {
  username: string;
  password: string;
}

const LoginPage: React.FC = () => {
  const handleLogin = async (data: LoginData): Promise<void> => {
    console.log('Login attempt with:', data);
    // Simulate API call
    // In a real application, replace this with an actual API call.
    return new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        // Dummy credentials for demonstration
        if (data.username === 'testuser' && data.password === 'password123') {
          console.log('Login successful');
          toast.success('Login Successful!', {
            description: `Welcome back, ${data.username}. You will be redirected shortly.`,
          });
          // Simulate redirection or further action after successful login
          // For example: setTimeout(() => window.location.href = '/dashboard', 1500);
          resolve();
        } else {
          const errorMessage = 'Invalid username or password. Please try again.';
          console.log('Login failed:', errorMessage);
          toast.error('Login Failed', {
            description: errorMessage,
          });
          reject(new Error(errorMessage));
        }
      }, 1000);
    });
  };

  const handleSignUpClick = (): void => {
    console.log('Sign up link clicked');
    toast.info('Navigating to Sign Up', {
      description: 'You would be redirected to the sign-up page in a real application.',
    });
    // In a real app, you would typically navigate using a router.
    // For example, if using react-router-dom:
    // import { useNavigate } from 'react-router-dom';
    // const navigate = useNavigate();
    // navigate('/signup');
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-background text-foreground p-4">
      {/* 
        The LoginForm component includes its own card styling (width, padding, background color, shadow, etc.)
        which aligns with the 'overall.sizing.container' specified in the Layout Requirements.
        This parent div fulfills the 'overall.definition' for a full-screen centered layout.
      */}
      <LoginForm
        onLogin={handleLogin}
        onSignUpClick={handleSignUpClick}
        // Optionally, provide initial values or other props as needed by LoginForm
        // initialUsername="contact@example.com"
      />
    </div>
  );
};

export default LoginPage;
