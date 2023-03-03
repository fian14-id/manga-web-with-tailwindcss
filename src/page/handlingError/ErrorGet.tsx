import React, { useState, useEffect } from "react";
import axios from "axios";

interface ApiDataProps {
  apiUrl: string;
  onError?: (error: any) => void;
  children: React.ReactNode;
}

const ErrorGet: React.FC<ApiDataProps> = ({ apiUrl, onError, children }) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios
      .get(apiUrl)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        setError(true);
        if (onError) {
          onError(err);
        }
      });
  }, [apiUrl, onError]);

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Terjadi kesalahan saat pengambilan data dari server.</p>
      </div>
    );
  } else {
    return <>{children}</>;
  }
};

export default ErrorGet;
