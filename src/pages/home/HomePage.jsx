import React, { useEffect } from 'react';
import SideBarArea from './areas/sidebar/SideBarArea';
import ChatArea from './areas/chat/ChatArea';
import { BrowserRouter as Router, Redirect } from 'react-router-dom';
import halfmoon from 'halfmoon';

const HomePage = () => {
  useEffect(() => {
    setTimeout(() => {
      halfmoon.onDOMContentLoaded();
    }, 0);
  }, []);
  return (
    <div className='whats-app-wrapper'>
      <div
        style={{ borderRadius: '16px' }}
        className='whats-app-shadow-container'
      >
        <div className='content-wrapper'>
          <div
            style={{ borderRadius: '16px' }}
            className='page-wrapper with-sidebar'
            data-sidebar-type='full-height overlayed-sm-and-down'
          >
            {!sessionStorage.getItem('user') ? (
              <Redirect to='/login' />
            ) : (
              <Router>
                <SideBarArea />
                <ChatArea />
              </Router>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
