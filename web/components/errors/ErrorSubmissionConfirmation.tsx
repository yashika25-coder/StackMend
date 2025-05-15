import React from 'react';

interface ErrorSubmissionConfirmationProps {
    errorId: string | null;
    onReturnHome: () => void;
}

export const ErrorSubmissionConfirmation: React.FC<ErrorSubmissionConfirmationProps> = ({ 
    errorId, 
    onReturnHome 
}) => {
    return (
        <div className="confirmation-message">
            <h2>Thank You for Your Report!</h2>
            <p>We've received your error submission and our team will review it shortly.</p>
            
            {errorId && (
                <div className="error-id">
                    <strong>Reference ID:</strong> {errorId}
                </div>
            )}
            
            <p>
                Please keep this reference ID if you need to follow up about this issue.
            </p>
            
            <button onClick={onReturnHome} className="return-home-button">
                Return to Home Page
            </button>
        </div>
    );
};