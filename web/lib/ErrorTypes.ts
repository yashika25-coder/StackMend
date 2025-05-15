export interface ErrorFormData {
    title: string;
    description: string;
    stepsToReproduce: string;
    severity: 'low' | 'medium' | 'high';
    contactEmail: string;
}