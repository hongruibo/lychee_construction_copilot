const navItems = ['Home', 'Projects', 'Compliance Watch', 'Training & Upskilling', 'Conversations', 'Reports'];

const SidebarNav = () => {
  return (
    <nav className="sidebar-nav card">
      <ul>
        {navItems.map((item) => (
          <li key={item}>
            <button type="button">{item}</button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SidebarNav;
