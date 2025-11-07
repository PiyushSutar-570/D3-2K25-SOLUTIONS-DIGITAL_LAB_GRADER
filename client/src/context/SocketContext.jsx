import React, { createContext, useContext, useEffect, useState } from "react";
import { io } from "socket.io-client";

// ✅ Export the context so other files can import it
export const SocketContext = createContext();

// ✅ Custom hook for easy access
export const useSocket = () => useContext(SocketContext);

// ✅ Socket Provider Component
export const SocketProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    const newSocket = io("http://localhost:5000", {
      transports: ["websocket"],
      reconnection: true,
    });

    setSocket(newSocket);

    newSocket.on("connect", () => {
      console.log("✅ Connected to Socket Server");
      setIsConnected(true);
    });

    newSocket.on("disconnect", () => {
      console.warn("❌ Disconnected from Socket Server");
      setIsConnected(false);
    });

    return () => newSocket.close();
  }, []);

  const sendCodeUpdate = (code) => {
    if (socket) socket.emit("code_update", code);
  };

  const sendSubmission = (result) => {
    if (socket) socket.emit("submission_result", result);
  };

  return (
    <SocketContext.Provider
      value={{ socket, isConnected, sendCodeUpdate, sendSubmission }}
    >
      {children}
    </SocketContext.Provider>
  );
};