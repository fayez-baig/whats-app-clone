import React from 'react';
import halfmoon from 'halfmoon';
import SideBarSearch from './components/SideBarSearch/SideBarSearch';
import SideBarBody from './components/SiderBarBody/SideBarBody';
import SideBarHeader from './components/SideBarHeader/SideBarHeader';

const SideBarArea = () => (
  <>
    <div className='sidebar-overlay' onClick={() => halfmoon.toggleSidebar()} />
    <div className='sidebar'>
      <SideBarHeader />
      <hr />
      <SideBarSearch />
      <SideBarBody />
    </div>
  </>
);

export default SideBarArea;
