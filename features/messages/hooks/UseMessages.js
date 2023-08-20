import {useEffect, useState} from "react";
import getDMThreadsRequest from "@/features/threads/data/GetDMThreadsRequest";
import getDMMessagesRequest from "@/features/messages/data/GetDMMessagesRequest";

export default function useMessages() {
  const [messageId, setMessageId] = useState();
  const [messages, setMessages] = useState();
  const [intervalId, setIntervalId] = useState(-1);
  useEffect(()=> {
    if (intervalId) clearInterval(intervalId);
    if (!messageId) return;

    const id = setInterval(async () => {
      const json = await getDMMessagesRequest();
      setMessages(json);
    }, 1000);
    setIntervalId(id);
  }, [messageId]);
}
