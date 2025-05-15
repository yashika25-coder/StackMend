// src/App.tsx
import { Routes, Route } from 'react-router-dom';
import { ErrorSubmissionPage } from '@/components/errors/ErrorSubmissionPage';
import HomePage from '@/app/page';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/report-error" element={<ErrorSubmissionPage />} />
    </Routes>
  );
}