// components/Notifications.js
import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:5000', {
  transports: ['websocket', 'polling', 'flashsocket']
});

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    socket.on('transactionNotification', (notification) => {
      setNotifications((prev) => [notification, ...prev]);
    });

    return () => {
      socket.off('transactionNotification');
    };
  }, []);

  return (
    <div>
      <ul>
        {notifications.map((notification) => (
          <li key={notification._id}>
            {notification.token} - {notification.amount}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notifications;
