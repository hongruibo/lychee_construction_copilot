import React from 'react';

type AppLayoutProps = {
  header: React.ReactNode;
  contextBar: React.ReactNode;
  sidebarNav: React.ReactNode;
  mainContent: React.ReactNode;
};

const AppLayout: React.FC<AppLayoutProps> = ({ header, contextBar, sidebarNav, mainContent }) => {
  return (
    <div className="app-shell">
      {header}
      {contextBar}
      {sidebarNav}
      <main>{mainContent}</main>
    </div>
  );
};

export default AppLayout;
