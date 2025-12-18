import { AnalysisResult } from '../../types';

type CopilotPanelProps = {
  analysis?: AnalysisResult;
  loading: boolean;
};

const severityStyles: Record<
  AnalysisResult['severity'],
  { background: string; color: string; label: string }
> = {
  none: { background: '#e5f4ff', color: '#0f172a', label: 'No issues' },
  info: { background: '#e5f4ff', color: '#0ea5e9', label: 'Info' },
  warning: { background: '#f59e0b', color: '#ffffff', label: 'Warning' },
  critical: { background: '#f97316', color: '#ffffff', label: 'Critical' },
};

const CopilotPanel = ({ analysis, loading }: CopilotPanelProps) => {
  const bannerStyle = severityStyles[analysis?.severity || 'none'];

  return (
    <aside className="card copilot-panel">
      <div className="section-header">
        <h3>Copilot Analysis</h3>
        <div className="muted">Flags risks, cites policies, and suggests fixes.</div>
      </div>

      {loading && <div className="loading">Analyzing message…</div>}

      {!loading && analysis && (
        <>
          <div className="banner" style={{ background: bannerStyle.background, color: bannerStyle.color }}>
            <span className="banner-label">{bannerStyle.label}</span>
            <div className="banner-headline">{analysis.headline}</div>
          </div>

          <div className="analysis-block">
            <div className="block-title">What we found</div>
            <ul>
              {analysis.explanation.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="analysis-block">
            <div className="block-title">Recommended actions</div>
            <ol>
              {analysis.recommendedActions.map((action, idx) => (
                <li key={idx}>{action}</li>
              ))}
            </ol>
          </div>

          <div className="analysis-block">
            <div className="block-title">Policy references</div>
            <ul>
              {analysis.policySources.map((policy) => (
                <li key={policy}>{policy}</li>
              ))}
            </ul>
          </div>

          <div className="analysis-source">
            Source: {analysis.policySources.join(' · ')}
          </div>
        </>
      )}

      {!loading && !analysis && (
        <div className="muted">Run a compliance check to see flagged risks and fixes.</div>
      )}
    </aside>
  );
};

export default CopilotPanel;
