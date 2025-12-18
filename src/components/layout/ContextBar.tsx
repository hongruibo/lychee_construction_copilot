type ContextBarProps = {
  project: string;
  role: string;
  onProjectChange: (value: string) => void;
  onRoleChange: (value: string) => void;
};

const ContextBar = ({ project, role, onProjectChange, onRoleChange }: ContextBarProps) => {
  return (
    <section className="context-bar card">
      <div className="context-item">
        <label>Project:</label>
        <select value={project} onChange={(e) => onProjectChange(e.target.value)}>
          <option>Riverside Housing</option>
          <option>Harborview Tower</option>
          <option>Eastline Logistics Hub</option>
        </select>
      </div>
      <div className="context-item">
        <label>Role:</label>
        <select value={role} onChange={(e) => onRoleChange(e.target.value)}>
          <option>Site Supervisor</option>
          <option>Project Manager</option>
          <option>Commercial Manager</option>
        </select>
      </div>
      <div className="context-status">
        <span className="pill">Status: Live monitoring enabled</span>
      </div>
    </section>
  );
};

export default ContextBar;
