// types/error.ts
export type ErrorPriority = 'low' | 'medium' | 'high' | 'critical';
export type ErrorStatus = 'open' | 'investigating' | 'resolved' | 'closed';

export interface ErrorReport {
  id: string;
  title: string;
  description: string;
  priority: ErrorPriority;
  status: ErrorStatus;
  createdAt: Date;
  updatedAt: Date;
  submittedBy: string;
  component?: string;
  stackTrace?: string;
  reproductionSteps?: string[];
}