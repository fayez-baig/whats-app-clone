import React, { useState } from 'react';
import NxIcon from './../../../../../../components/NxIcon';
import { db } from '../../../../../../firebase';
import { useParams } from 'react-router-dom';

const ChatFoooter = () => {
  const [input, setInput] = useState('');
  const { roomId } = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = JSON.parse(sessionStorage.getItem('user'));
    const subscription = db
      .collection('rooms')
      .doc(roomId)
      .collection('messages')
      .add({
        message: input,
        name: user?.displayName,
        timestamp: new Date().getTime(),
      });
    setInput('');

    // return () => {
    //   subscription.unsubscribe();
    // };
  };

  return (
    <div
      style={{ position: 'absolute', bottom: 0 }}
      className='main__input w-full '
    >
      <div
        style={{ height: '64px' }}
        className='chat__footer d-flex align-items-center p-10 '
      >
        <span>
          <NxIcon iconName='mood' />
        </span>
        <form className='d-flex align-items-center w-full'>
          <span className=' w-full ml-10 mr-10'>
            <input
              type='text'
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className='form-control'
              style={{ borderRadius: '18px' }}
            />
          </span>
          {input ? (
            <button
              type='submit'
              style={{ border: 'none', backgroundColor: 'transparent' }}
              onClick={handleSubmit}
            >
              <NxIcon iconName='send' />
            </button>
          ) : (
            <NxIcon iconName='mic' />
          )}
        </form>
      </div>
    </div>
  );
};

export default ChatFoooter;
