import React from 'react';
import './SideMenu.scss';

const SideMenu: React.FC = () => (
  <div className="SideMenu border-right h-100" data-testid="SideMenu">
    <span className="title border-bottom">
      Videos
    </span>
    <div>
      video list
    </div>
  </div>
);

export default SideMenu;
