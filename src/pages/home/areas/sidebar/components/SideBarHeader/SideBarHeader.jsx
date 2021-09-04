import React, { useEffect, useState } from 'react';
import NxIcon from './../../../../../../components/NxIcon';
import { db } from '../../../../../../firebase';
import halfmoon from 'halfmoon';

const SideBarHeader = () => {
  const [photoUrl, setPhotoUrl] = useState();
  const addRoom = () => {
    const name = prompt('Enter Room Name:', 'Dev Room');
    if (name) {
      db.collection('rooms').add({
        name: name,
        iconSeed: ~~(Math.random() * 500),
      });
    }
  };

  useEffect(() => {
    const user = JSON.parse(sessionStorage.getItem('user'));
    setPhotoUrl(user?.photoURL);
  }, []);

  return (
    <div
      style={{ height: '60px' }}
      className='sidebar__header d-flex align-items-center justify-content-between p-10'
    >
      <div>
        <img
          src={photoUrl}
          className='img-fluid rounded-circle'
          alt='rounded circle'
          width='40px'
        />
      </div>
      <div className='d-flex justify-content-between w-100'>
        <NxIcon iconName='donut_large' />
        <div style={{ cursor: 'pointer' }} onClick={addRoom}>
          <NxIcon iconName='add' />
        </div>
        <div onClick={() => halfmoon.toggleSidebar()}>
          <NxIcon iconName='more_vert' />
        </div>
      </div>
    </div>
  );
};

export default SideBarHeader;
