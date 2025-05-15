
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ErrorForm } from '@/components/errors/ErrorForm';
import { ErrorSubmissionConfirmation } from '@/components/errors/ErrorSubmissionConfirmation';
import { ErrorHeader } from '@/components/errors/ErrorHeader';
import { ErrorFooter } from '@/components/errors/ErrorFooter';
import './ErrorSubmissionPage.css';

export const ErrorSubmissionPage: React.FC = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [errorId, setErrorId] = useState<string | null>(null);
    const navigate = useNavigate();

    const handleSubmitSuccess = (id: string) => {
        setErrorId(id);
        setIsSubmitted(true);
    };

    const handleReturnHome = () => {
        navigate('/');
    };

    return (
        <div className="error-submission-page">
            <ErrorHeader />
            
            <main className="error-submission-content">
                {!isSubmitted ? (
                    <ErrorForm onSuccess={handleSubmitSuccess} />
                ) : (
                    <ErrorSubmissionConfirmation 
                        errorId={errorId} 
                        onReturnHome={handleReturnHome} 
                    />
                )}
            </main>
            
            <ErrorFooter />
        </div>
    );
};