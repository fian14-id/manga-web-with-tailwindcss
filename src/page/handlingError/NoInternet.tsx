import React, { useState, useEffect } from "react";

interface NoInternetChildren {
  children: React.ReactNode;
}

const NoInternet: React.FC<NoInternetChildren> = (props) => {
  const [isOnline, setOnline] = useState<boolean>(navigator.onLine);

  useEffect(() => {
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  const handleOnline = () => {
    setOnline(true);
  };

  const handleOffline = () => {
    setOnline(false);
  };

  if (isOnline) {
    return <>{props.children}</>;
  } else {
    return <h1>- Kamu Offline</h1>;
  }
};

export default NoInternet;
