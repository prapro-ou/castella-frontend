import {useEffect, useState} from "react";
import getDMThreadsRequest from "@/features/threads/data/GetDMThreadsRequest";

export default function useThreads() {
  const [dmId, setDMId] = useState();
  const [threads, setThreads] = useState([]);
  const [intervalId, setIntervalId] = useState(-1);
  useEffect(()=> {
    if (intervalId) clearInterval(intervalId);
    if (!dmId) return;

    const id = setInterval(async () => {
      const json = await getDMThreadsRequest(dmId);
      setThreads(json);
    }, 1000);
    setIntervalId(id);
  }, [dmId]);

  return [threads, setDMId];
}
