import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import { useAuth } from '../hooks/useAuth';
import StackguardLogo from '../components/icons/StackguardLogo';

const ConfigurePage: React.FC = () => {
  const [configKey, setConfigKey] = useState('');
  const [error, setError] = useState('');
  const { user, isConfigured, saveConfig } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/');
    }
    if (user && isConfigured) {
      navigate('/dashboard');
    }
  }, [user, isConfigured, navigate]);

  const validate = () => {
    if (configKey.length < 100 || configKey.length > 1000) {
      setError('Public key must be between 100 and 1000 characters.');
      return false;
    }
    setError('');
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      saveConfig();
      navigate('/dashboard');
    }
  };

  return (
     <div className="min-h-screen flex items-center justify-center bg-primary-bg p-4 sm:p-6 lg:p-8">
        <div className="w-full max-w-[546px] bg-form-bg p-8 rounded-xl shadow-md flex flex-col items-center gap-[83px]">
            <div className="w-full flex flex-col items-center gap-[56px]">
                <div className="flex flex-col items-center gap-[64px] text-center">
                    <div className="flex items-center gap-2">
                        <StackguardLogo />
                        <span className="text-[32px] font-normal text-text-primary">Stackguard</span>
                    </div>
                    <div className="flex flex-col items-center gap-4">
                        <h1 className="text-[32px] font-medium text-text-primary">Verify your public key</h1>
                        <p className="text-[20px] font-normal text-text-primary max-w-[497px]">To get started provide your public key for verification</p>
                    </div>
                </div>
                
                <form onSubmit={handleSubmit} className="w-full space-y-4">
                  <div>
                    <textarea
                      value={configKey}
                      onChange={(e) => {
                        setConfigKey(e.target.value);
                        if (error) setError('');
                      }}
                      placeholder="Enter your public key"
                      className={`w-full h-32 bg-input-bg rounded-lg px-6 py-4 text-text-primary placeholder-text-secondary focus:outline-none text-[17px] leading-[26px] resize-none transition-shadow duration-200 ${error ? 'ring-2 ring-red-500' : ''}`}
                      aria-invalid={!!error}
                      aria-describedby="config-key-error"
                    />
                    {error && <p id="config-key-error" className="text-red-500 text-sm mt-2">{error}</p>}
                  </div>

                  <div className="pt-4">
                    <Button 
                      type="submit" 
                      variant="primary"
                      className="!bg-logo-primary hover:!bg-opacity-90 h-[58px] !text-[17px]"
                    >
                      Verify
                    </Button>
                  </div>
                </form>
            </div>
            
            <p className="text-[15px] leading-[22px] text-center text-text-primary">
               Don’t have a public key?{' '}
               <a href="#" className="font-normal text-text-primary hover:underline">
                   Contact your administrator
               </a>
            </p>
        </div>
    </div>
  );
};

export default ConfigurePage;