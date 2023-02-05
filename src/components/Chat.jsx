import io from "socket.io-client";
import { useState, useEffect } from "react";

const socket = { current: io("http://localhost:3001/") };

export const Chat = () => {
  const [onlineUsers, setOnlineUsers] = useState(0);

  useEffect(() => {
    socket.current.on("changeOnline", (usersNumber) => {
      setOnlineUsers(usersNumber);
    });
  }, []);

  return (
    <>
      <h1>Hello in the best chat ever!</h1>
      <p>Users online: {onlineUsers}</p>
    </>
  );
};
