import { useEffect, useState } from 'react';
import postDMThreadsRequest from '../data/PostDMThreadsRequest';
import getDMThreadsRequest from '../data/GetDMThreadsRequest';
import useMessages from '@/features/messages/components/useMessages';

export default function useThreads() {
  const [threads, setThreads] = useState([]);
  const [dmId, setDMId] = useState();
  const [messageId, setMessageId] = useState();
  const [, , setIds] = useMessages();
  const [isLoadingThreads, setIsLoadingThreads] = useState(false);

  useEffect(() => {
    (async () => {
      if (dmId) {
        const getThreads = getDMThreadsRequest(dmId);
        setIsLoadingThreads(true);
        const newThreads = (await getThreads).map((thread) => {
          const correspondThread = threads.find((t) => t.id === thread.id);
          correspondThread
            ? (thread.selected = correspondThread.selected)
            : (thread.selected = false);
          return thread;
        });
        setThreads(await newThreads);
      } else {
        setThreads([]);
      }
      setIsLoadingThreads(false);
      setIds(dmId, messageId);
    })();
  }, [dmId, messageId]);

  const createDMThread = async (subject, body) => {
    await postDMThreadsRequest(dmId, subject, body);
    const getThreads = getDMThreadsRequest(dmId);
    const newThreads = (await getThreads).map((thread) => {
      const correspondThread = threads.find((t) => t.id === thread.id);
      correspondThread
        ? (thread.selected = correspondThread.selected)
        : (thread.selected = false);
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

  return [
    threads,
    createDMThread,
    setSelectedMessageId,
    setIdMessagesId,
    isLoadingThreads,
  ];
}
