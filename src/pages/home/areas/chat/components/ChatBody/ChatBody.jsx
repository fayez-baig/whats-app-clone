import React, { useEffect, useState, useRef } from 'react';
import './ChatBody.css';
import { db } from '../../../../../../firebase';
import { useParams } from 'react-router-dom';
import NxMsg from './../../../../../../components/NxMsg/NxMsg';

const ChatBody = () => {
  const { roomId } = useParams();
  const [msg, setMsg] = useState();
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [msg]);

  useEffect(() => {
    const subscription = db
      .collection('rooms')
      .doc(roomId)
      .collection('messages')
      .orderBy('timestamp', 'asc')
      .onSnapshot((snapshot) => {
        const arr = [];
        snapshot.forEach((doc) => {
          arr.push({
            msgId: doc.id,
            name: doc.data().name,
            message: doc.data().message,
            timestamp: doc.data().timestamp,
          });
        });

        setMsg(arr);

        // return () => {
        //   subscription.unsubscribe();
        // };
      });
  }, [roomId]);

  return (
    <div
      style={{
        overflow: 'auto',
        position: 'absolute',
        top: '60px',
        bottom: '60px',
        padding: '10px',
      }}
      className='main__body w-full'
    >
      {msg?.map(({ msgId, ...msgProps }) => (
        <div key={msgId}>
          <NxMsg {...msgProps} />
        </div>
      ))}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default ChatBody;
