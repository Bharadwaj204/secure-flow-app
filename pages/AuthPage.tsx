
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../components/Input';
import Button from '../components/Button';
import { useAuth } from '../hooks/useAuth';
import StackguardLogo from '../components/icons/StackguardLogo';

type Mode = 'signIn' | 'signUp';

const AuthPage: React.FC = () => {
  const [mode, setMode] = useState<Mode>('signUp');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  
  const { user, login, isConfigured } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate(isConfigured ? '/dashboard' : '/configure');
    }
  }, [user, isConfigured, navigate]);

  const clearForm = () => {
    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setErrors({});
  }

  const handleModeChange = (newMode: Mode) => {
    setMode(newMode);
    clearForm();
  }

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (mode === 'signUp') {
      if (!firstName) newErrors.firstName = 'First name is required';
      if (!lastName) newErrors.lastName = 'Last name is required';
    }

    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email address is invalid';
    }

    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (mode === 'signUp') {
      if (!confirmPassword) {
        newErrors.confirmPassword = 'Password confirmation is required';
      } else if (password !== confirmPassword) {
        newErrors.confirmPassword = 'Passwords do not match';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      login(email);
      navigate('/configure');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-primary-bg p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-[546px] bg-form-bg p-8 space-y-10">
        <div className="flex flex-col items-center gap-10">
            <div className="flex items-center gap-2">
                <StackguardLogo />
                <span className="text-[32px] font-normal text-text-primary">Stackguard</span>
            </div>

            <div className="text-center">
                <h1 className="text-3xl font-medium text-text-primary mb-4">
                    {mode === 'signIn' ? 'Welcome back to Stackguard' : 'Welcome to Stackguard'}
                </h1>
                {mode === 'signUp' && (
                    <p className="text-xl text-text-primary font-normal max-w-md">
                        Secure your codebase with advanced secret scanning security best practices
                    </p>
                )}
            </div>
        </div>
      
        <form onSubmit={handleSubmit} className="space-y-4">
          {mode === 'signUp' && (
              <div className="flex flex-col sm:flex-row gap-3">
                  <Input id="firstName" type="text" value={firstName} onChange={e => setFirstName(e.target.value)} error={errors.firstName} placeholder="Enter first name" />
                  <Input id="lastName" type="text" value={lastName} onChange={e => setLastName(e.target.value)} error={errors.lastName} placeholder="Enter last name" />
              </div>
          )}
          <Input id="email" type="email" value={email} onChange={e => setEmail(e.target.value)} error={errors.email} placeholder="Enter email ID" />
          <Input id="password" type="password" value={password} onChange={e => setPassword(e.target.value)} error={errors.password} placeholder="Enter password" />
          {mode === 'signUp' && (
            <Input id="confirmPassword" type="password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} error={errors.confirmPassword} placeholder="Confirm password" />
          )}
          <div className="pt-4">
            <Button type="submit" variant="primary">
              {mode === 'signIn' ? 'Sign in' : 'Create account'}
            </Button>
          </div>
        </form>

        <div className="flex flex-col items-center gap-6">
            <p className="text-[15px] leading-[22px] text-text-primary text-center max-w-sm">
              By continuing, you agree to our Terms of Service and Privacy Policy.
            </p>

            <p className="text-lg text-center text-text-primary">
              {mode === 'signIn' ? "Don't have an account?" : "Already have an account?"}{' '}
              <button onClick={() => handleModeChange(mode === 'signIn' ? 'signUp' : 'signIn')} className="font-semibold text-primary-purple hover:underline">
                  {mode === 'signIn' ? 'Create one' : 'Sign in'}
              </button>
            </p>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;