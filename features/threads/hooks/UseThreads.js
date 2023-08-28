import { useEffect, useState } from 'react';
import postDMThreadsRequest from '../data/PostDMThreadsRequest';
import getDMThreadsRequest from '../data/GetDMThreadsRequest';

export default function useThreads() {
  const [threads, setThreads] = useState([]);
  const [dmId, setDMId] = useState();
  const [isLoadingThreads, setIsLoadingThreads] = useState(false);
  const [isShowingTipsOnThreads, setIsShowingTipsOnThreads] = useState(true);

  useEffect(() => {
    (async () => {
      if (dmId) {
        setIsShowingTipsOnThreads(false);
        setThreads(await _fetchDMThreads(dmId));
      } else setThreads([]);
    })();
  }, [dmId]);

  const createDMThread = async (subject, body) => {
    await postDMThreadsRequest(dmId, subject, body);
    await _fetchDMThreads();
  };

  const setSelectedMessageId = (messageId) => {
    const newThreads = threads.map((thread) => {
      thread.selected = thread.id === messageId;
      return thread;
    });
    setThreads(newThreads);
  };

  const _fetchDMThreads = async (dmId) => {
    setIsLoadingThreads(true);
    let newThreads = getDMThreadsRequest(dmId);
    if (threads) {
      newThreads = (await newThreads).map((thread) => {
        const correspondThread = threads.find((t) => t.id === thread.id);
        correspondThread
          ? (thread.selected = correspondThread.selected)
          : (thread.selected = false);
        return thread;
      });
    }
    setIsLoadingThreads(false);
    return newThreads;
  };

  return [
    threads,
    createDMThread,
    setSelectedMessageId,
    setDMId,
    isLoadingThreads,
    isShowingTipsOnThreads,
  ];
}
