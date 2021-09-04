import React, { useEffect, useState } from 'react';
import halfmoon from 'halfmoon';
import { useParams } from 'react-router-dom';
import { db } from '../../../../../../firebase';
import NxIcon from '../../../../../../components/NxIcon';

const ChatHeader = (props) => {
  const [roomName, setRoomName] = useState('');
  const { roomId } = useParams();
  const [iconseed, setIconSeed] = useState('');

  useEffect(() => {
    if (roomId) {
      db.collection('rooms')
        .doc(roomId)
        .onSnapshot((snapshot) => {
          setRoomName(snapshot.data()?.name);
          setIconSeed(snapshot.data()?.iconSeed);
        });
    }
  }, [roomId]);

  return (
    <div
      style={{ height: '60px' }}
      className='main__header d-flex align-items-center justify-content-between p-10'
    >
      <div className='d-flex'>
        <img
          src={`https://avatars.dicebear.com/api/bottts/${iconseed}.svg`}
          className='img-fluid rounded-circle'
          alt='rounded circle'
          width='40px'
          style={{ height: '40px' }}
        />
        <div className='p-10'>
          <span style={{ textTransform: 'capitalize' }}>
            <strong>{roomName}</strong>
          </span>
        </div>
      </div>
      <div className='d-flex justify-content-around w-150'>
        <NxIcon iconName='search' />
        <div onClick={() => halfmoon.toggleDarkMode()}>
          <NxIcon iconName='nights_stay' />
        </div>
        <NxIcon iconName='attach_file' />
        <div onClick={() => halfmoon.toggleSidebar()}>
          <NxIcon iconName='more_horiz' />
        </div>
      </div>
    </div>
  );
};

export default ChatHeader;
