export type Policy = { id: string; name: string; status: 'in-scope' | 'not-relevant' };
export type RiskFlag = { id: string; label: string };
export type TrainingItem = {
  id: string;
  title: string;
  durationMinutes: number;
  type: 'complete' | 'review';
};

export type AnalysisResult = {
  severity: 'none' | 'info' | 'warning' | 'critical';
  headline: string;
  explanation: string[];
  recommendedActions: string[];
  policySources: string[];
};

export type ContextSelection = {
  project: string;
  role: string;
};
