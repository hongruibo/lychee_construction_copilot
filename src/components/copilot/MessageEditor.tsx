import { useMemo } from 'react';

type MessageEditorProps = {
  to: string;
  subject: string;
  body: string;
  onToChange: (value: string) => void;
  onSubjectChange: (value: string) => void;
  onBodyChange: (value: string) => void;
  onRunCheck: () => void;
  onApplySafer: () => void;
  disabled: boolean;
  loading: boolean;
  showHighlights: boolean;
  highlightPhrases: string[];
};

const escapeRegex = (str: string) => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

const MessageEditor = ({
  to,
  subject,
  body,
  onToChange,
  onSubjectChange,
  onBodyChange,
  onRunCheck,
  onApplySafer,
  disabled,
  loading,
  showHighlights,
  highlightPhrases,
}: MessageEditorProps) => {
  const highlightedBody = useMemo(() => {
    if (!showHighlights || highlightPhrases.length === 0) return body;
    const pattern = new RegExp(`(${highlightPhrases.map(escapeRegex).join('|')})`, 'gi');
    return body.split(pattern).map((segment, idx) =>
      highlightPhrases.some((phrase) => phrase.toLowerCase() === segment.toLowerCase()) ? (
        <mark key={`${segment}-${idx}`} className="highlight-mark">
          {segment}
        </mark>
      ) : (
        <span key={`${segment}-${idx}`}>{segment}</span>
      )
    );
  }, [body, showHighlights, highlightPhrases]);

  return (
    <section className="card message-editor">
      <div className="section-header">
        <h3>Message Composer</h3>
        <div className="muted">Checks emails for compliance risks before you send.</div>
      </div>
      <div className="field">
        <label htmlFor="to">To</label>
        <input id="to" value={to} onChange={(e) => onToChange(e.target.value)} placeholder="Recipient" />
      </div>
      <div className="field">
        <label htmlFor="subject">Subject</label>
        <input
          id="subject"
          value={subject}
          onChange={(e) => onSubjectChange(e.target.value)}
          placeholder="Subject line"
        />
      </div>
      <div className="field">
        <label htmlFor="body">Body</label>
        <textarea
          id="body"
          value={body}
          onChange={(e) => onBodyChange(e.target.value)}
          placeholder="Draft your message..."
          rows={10}
        />
      </div>

      {showHighlights && (
        <div className="highlight-preview">
          <div className="preview-label">Risk highlights</div>
          <p>{highlightedBody}</p>
        </div>
      )}

      <div className="editor-actions">
        <button className="btn btn-primary" onClick={onRunCheck} disabled={disabled || loading}>
          {loading ? 'Analyzing message…' : 'Run compliance check'}
        </button>
        <button className="btn btn-ghost" type="button" onClick={onApplySafer}>
          Apply safer wording
        </button>
      </div>
    </section>
  );
};

export default MessageEditor;
