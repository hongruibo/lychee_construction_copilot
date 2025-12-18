import { useEffect, useMemo, useState } from 'react';
import AppLayout from '../components/layout/AppLayout';
import Header from '../components/layout/Header';
import ContextBar from '../components/layout/ContextBar';
import SidebarNav from '../components/layout/SidebarNav';
import PolicySidebar from '../components/policy/PolicySidebar';
import MessageEditor from '../components/copilot/MessageEditor';
import CopilotPanel from '../components/copilot/CopilotPanel';
import {
  AnalysisResult,
  ContextSelection,
  Policy,
  RiskFlag,
  TrainingItem,
} from '../types';

const STORAGE_KEY = 'lychee-construction-copilot-demo';

const defaultBody =
  'Draft an email to the roofing contractor confirming the payment schedule for Riverside Housing. Make sure it meets our internal approval rules and anti-money laundering policies.';

const saferBody =
  'Draft an email to the roofing contractor outlining the payment schedule for Riverside Housing. Reference the approved PO number and confirm the amounts align with internal approval thresholds. Include AML checks and copy the commercial manager before sending.';

const analysisScenario: AnalysisResult = {
  severity: 'warning',
  headline: 'You might be making a mistake here.',
  explanation: [
    'This payment schedule does not match your internal approval thresholds for Riverside Housing.',
    'The amount exceeds the standard limit for a single payment.',
    'There is no recorded PO reference in your project files.',
  ],
  recommendedActions: [
    'Add the purchase order reference.',
    'Split the payment into two approved tranches.',
    'Copy the commercial manager before sending.',
  ],
  policySources: ['Payments Policy v3.2', 'Anti-Money Laundering Guidance 2024'],
};

const policies: Policy[] = [
  { id: 'p1', name: 'Payments Policy v3.2', status: 'in-scope' },
  { id: 'p2', name: 'Anti-Money Laundering Guidance 2024', status: 'in-scope' },
  { id: 'p3', name: 'Health and Safety on Site', status: 'not-relevant' },
];

const risks: RiskFlag[] = [
  { id: 'r1', label: 'High payment amount without PO' },
  { id: 'r2', label: 'Single recipient above normal threshold' },
];

const training: TrainingItem[] = [
  { id: 't1', title: 'Payment Approvals for Site Supervisors', durationMinutes: 15, type: 'complete' },
  { id: 't2', title: 'Anti-Money Laundering Scenarios in Construction', durationMinutes: 25, type: 'review' },
];

type PersistedState = {
  body: string;
  analysis?: AnalysisResult;
  context: ContextSelection;
  to: string;
  subject: string;
};

const CompliancePage = () => {
  const [context, setContext] = useState<ContextSelection>({
    project: 'Riverside Housing',
    role: 'Site Supervisor',
  });
  const [to, setTo] = useState('roofing.contractor@example.com');
  const [subject, setSubject] = useState('Payment schedule confirmation');
  const [body, setBody] = useState(defaultBody);
  const [analysis, setAnalysis] = useState<AnalysisResult | undefined>();
  const [loading, setLoading] = useState(false);
  const [hasRun, setHasRun] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed: PersistedState = JSON.parse(stored);
        setBody(parsed.body || defaultBody);
        setContext(parsed.context || { project: 'Riverside Housing', role: 'Site Supervisor' });
        setAnalysis(parsed.analysis);
        setTo(parsed.to || 'roofing.contractor@example.com');
        setSubject(parsed.subject || 'Payment schedule confirmation');
        setHasRun(Boolean(parsed.analysis));
      }
    } catch (error) {
      console.error('Failed to load saved state', error);
    }
  }, []);

  useEffect(() => {
    const payload: PersistedState = { body, analysis, context, to, subject };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
  }, [body, analysis, context, to, subject]);

  const handleRunCheck = () => {
    if (!body.trim()) return;
    setLoading(true);
    setTimeout(() => {
      setAnalysis(analysisScenario);
      setHasRun(true);
      setLoading(false);
    }, 700);
  };

  const highlightPhrases = useMemo(
    () => ['payment schedule', 'contractor', 'payment', 'PO reference'],
    []
  );

  return (
    <AppLayout
      header={<Header />}
      contextBar={
        <ContextBar
          project={context.project}
          role={context.role}
          onProjectChange={(project) => setContext((prev) => ({ ...prev, project }))}
          onRoleChange={(role) => setContext((prev) => ({ ...prev, role }))}
        />
      }
      sidebarNav={<SidebarNav />}
      mainContent={
        <div className="layout-grid">
          <PolicySidebar policies={policies} risks={risks} trainings={training} />
          <MessageEditor
            to={to}
            subject={subject}
            body={body}
            onToChange={setTo}
            onSubjectChange={setSubject}
            onBodyChange={setBody}
            onRunCheck={handleRunCheck}
            onApplySafer={() => setBody(saferBody)}
            disabled={!body.trim()}
            loading={loading}
            showHighlights={hasRun && Boolean(analysis)}
            highlightPhrases={highlightPhrases}
          />
          <CopilotPanel analysis={analysis} loading={loading} />
        </div>
      }
    />
  );
};

export default CompliancePage;
