import React, { useEffect, useState } from 'react';
import { db } from '../../../../../../firebase';
import NxRoomItem from '../../../../../../components/NxRoomItem';

const SideBarBody = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const subscription = db.collection('rooms').onSnapshot((snapshot) => {
      const arr = [];
      snapshot.forEach((doc) => {
        arr.push({
          roomId: doc.id,
          roomName: doc.data().name,
          iconSeed: doc.data().iconSeed,
        });
      });
      setRooms(arr);

      // return () => {
      //   subscription.unsubscribe();
      // };
    });
  }, []);

  return (
    <>
      {rooms.map(({ roomId, roomName, iconSeed }) => (
        <NxRoomItem
          key={roomId}
          roomId={roomId}
          roomName={roomName}
          iconSeed={iconSeed}
          randomNum={~~(Math.random() * 1000000 * 1000000 * 1000000)}
        />
      ))}
    </>
  );
};

export default SideBarBody;
