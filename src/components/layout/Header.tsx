type HeaderProps = {
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
};

const Header = ({ theme, onToggleTheme }: HeaderProps) => {
  return (
    <header className="header card">
      <div className="brand">
        <div className="brand-mark" aria-hidden>
          <img src="/lychee-logo.svg" alt="" />
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
