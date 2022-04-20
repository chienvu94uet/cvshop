import React, { useEffect, useState } from "react";

const WebWorker = () => {
  const [worker] = useState(new window.Worker("/worker/get-post.js"));

  useEffect(() => {
    worker.postMessage("get post");
    worker.onmessage = (data) =>
      console.log("list post from worker", data.data);
    return () => {
      worker.terminate();
    };
  }, []);

  return <div>WebWorker</div>;
};

export default WebWorker;
