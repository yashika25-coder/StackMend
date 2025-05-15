import React, { useState } from 'react';
import { ErrorFormData } from '@/lib/ErrorTypes';

interface ErrorFormProps {
    onSuccess: (id: string) => void;
}

export const ErrorForm: React.FC<ErrorFormProps> = ({ onSuccess }) => {
    const [formData, setFormData] = useState<ErrorFormData>({
        title: '',
        description: '',
        stepsToReproduce: '',
        severity: 'medium',
        contactEmail: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);

        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            // In a real app, you would call your backend here
            // const response = await api.submitError(formData);
            const mockId = `ERR-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
            
            onSuccess(mockId);
        } catch (err) {
            setError('Failed to submit error. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form className="error-form" onSubmit={handleSubmit}>
            <h2>Report an Error</h2>
            {error && <div className="error-message">{error}</div>}
            
            <div className="form-group">
                <label htmlFor="title">Error Title*</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                />
            </div>
            
            <div className="form-group">
                <label htmlFor="description">Description*</label>
                <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                    rows={5}
                />
            </div>
            
            <div className="form-group">
                <label htmlFor="stepsToReproduce">Steps to Reproduce</label>
                <textarea
                    id="stepsToReproduce"
                    name="stepsToReproduce"
                    value={formData.stepsToReproduce}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Please describe how to reproduce the error (if applicable)"
                />
            </div>
            
            <div className="form-group">
                <label htmlFor="severity">Severity*</label>
                <select
                    id="severity"
                    name="severity"
                    value={formData.severity}
                    onChange={handleChange}
                    required
                >
                    <option value="low">Low (Minor inconvenience)</option>
                    <option value="medium">Medium (Affects functionality)</option>
                    <option value="high">High (Critical issue)</option>
                </select>
            </div>
            
            <div className="form-group">
                <label htmlFor="contactEmail">Your Email (Optional)</label>
                <input
                    type="email"
                    id="contactEmail"
                    name="contactEmail"
                    value={formData.contactEmail}
                    onChange={handleChange}
                    placeholder="If you'd like us to follow up with you"
                />
            </div>
            
            <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Submit Error Report'}
            </button>
        </form>
    );
};