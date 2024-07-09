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
    <div className="card">
      <div className="card-content">
        <span className="card-title">Notifications</span>
        <ul className="collection">
          {notifications.map((notification) => (
            <li key={notification._id} className="collection-item">
              {notification.token} - {notification.amount}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Notifications;
