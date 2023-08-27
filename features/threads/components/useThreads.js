import { useEffect, useState } from "react";
import postDMThreadsRequest from "../data/PostDMThreadsRequest";
import getDMThreadsRequest from "../data/GetDMThreadsRequest";


export default function useThreads(setIds){
    const [threads, setThreads] = useState([]);
    const [dmId, setDMId] = useState();
    const [messageId, setMessageId] = useState();

    useEffect(() => {
        (async () => {
            if (dmId) {
                const getThreads = getDMThreadsRequest(dmId);
            const newThreads = (await getThreads).map((thread) => {
                const correspondThread = threads.find((t) => t.id === thread.id);
                correspondThread ? thread.selected = correspondThread.selected : thread.selected = false;
                return thread;
                });
                setThreads(await newThreads);
            } else { setThreads([]); }
            setIds(dmId, messageId);
        })();},[dmId, messageId]);

    const createDMThread = async (subject, body) => {
        await postDMThreadsRequest(dmId, subject, body);
        const getThreads = getDMThreadsRequest(dmId);
        const newThreads = (await getThreads).map((thread) => {
          const correspondThread = threads.find((t) => t.id === thread.id);
          correspondThread ? thread.selected = correspondThread.selected : thread.selected = false;
          return thread;
        });
        setThreads(await newThreads);
      };

      const setSelectedMessageId = (messageId) => {
        const newThreads = threads.map((thread) => {
          thread.selected = thread.id === messageId;
          return thread;
        });
        setThreads(newThreads);
        setMessageId(messageId);
      };

      const setIdMessagesId = (dmId, messageId) => {
        setDMId(dmId);
        setMessageId(messageId);
      };

      return[threads, createDMThread, setSelectedMessageId, setIdMessagesId];
}