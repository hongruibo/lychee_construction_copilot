type HeaderProps = {
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
};

const Header = ({ theme, onToggleTheme }: HeaderProps) => {
  return (
    <header className="header card">
      <div className="brand">
        <div className="brand-mark" aria-hidden>
          <svg width="28" height="28" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="32" cy="34" r="24" fill="currentColor" />
            <path
              d="M35 11c1.5-2.5 3.7-4.2 7.4-4.6 1-.1 1.7 1 .9 1.8-1.5 1.4-3 2.8-4.7 3.8-1.1.6-2.4-.4-2.3-1.7l.7-.6Z"
              fill="currentColor"
            />
            <path
              d="M20 36.5c0-2 2.4-3 3.9-1.7l6.7 5.8 9.5-10.3c1.4-1.6 4-1 4.6 1 .3 1-.1 2.1-.8 2.9l-11 12a3 3 0 0 1-4.2.2L21 38.9c-.6-.5-1-.8-1-2.4Z"
              fill="#f6f7fb"
            />
          </svg>
        </div>
        <div>
          <div className="brand-name">Lychee Copilot for Construction</div>
          <div className="brand-tag muted">Policy-aware messaging copilot</div>
        </div>
      </div>
      <div className="header-title">
        <div className="page-title">Compliance & Project Copilot</div>
        <div className="page-subtitle">Flags compliance risks in real time as you work.</div>
      </div>
      <div className="header-actions">
        <button className="btn btn-ghost" type="button" onClick={onToggleTheme}>
          {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
        </button>
        <span className="pill">Live monitoring enabled</span>
      </div>
    </header>
  );
};

export default Header;
