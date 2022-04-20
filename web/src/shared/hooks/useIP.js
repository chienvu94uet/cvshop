import { useEffect, useState } from "react";
import axios from "axios";
import { API_GET_IP } from "constants";

const useIP = () => {
  const [ip, setIP] = useState("");

  useEffect(() => {
    const getUserIP = async () => {
      const res = await axios.get(API_GET_IP);
      setIP(res.data.IPv4);
    };

    getUserIP();
  }, []);

  return ip;
};

export default useIP;
