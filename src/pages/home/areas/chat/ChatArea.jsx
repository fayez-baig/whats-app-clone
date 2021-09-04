import React from 'react';
import ChatHeader from './components/ChatHeader/ChatHeader';
import ChatBody from './components/ChatBody/ChatBody';
import ChatFoooter from './components/ChatFooter/ChatFooter';
import { Switch, Route, Redirect } from 'react-router-dom';
import NxIcon from '../../../../components/NxIcon';
import halfmoon from 'halfmoon/js/halfmoon';

const ChatArea = () => (
  <div className='content-wrapper'>
    <Switch>
      <Route
        path='/rooms/:roomId'
        render={() => (
          <>
            <ChatHeader />
            <hr />
            <ChatBody />
            <hr />
            <ChatFoooter />
          </>
        )}
      />

      <Route
        exact
        path='/rooms'
        render={() => (
          <div style={{ position: 'relative', height: '100%' }}>
            <div
              className='no-img'
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
                overflow: 'hidden',
                // backgroundColor: '#F8F9FA',
              }}
            />
            <div
              onClick={() => halfmoon.toggleSidebar()}
              style={{ position: 'absolute', right: '16px', top: '16px' }}
            >
              <NxIcon iconName='menu_open' />
            </div>
          </div>
        )}
      />
      <Redirect to='/rooms' />
    </Switch>
  </div>
);

export default ChatArea;
