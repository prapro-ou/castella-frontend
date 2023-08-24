import { useEffect, useState } from 'react';
import getDestinationsRequest from '@/features/destinations/dm/data/GetDestinationsRequest';
import getDMThreadsRequest from '@/features/threads/data/GetDMThreadsRequest';
import getDMMessagesRequest from '@/features/messages/data/GetDMMessagesRequest';
import postDestinationsRequest from '@/features/destinations/dm/data/PostDestinationsRequest';
import postDMThreadsRequest from '@/features/threads/data/PostDMThreadsRequest';
import postDMMessagesRequest from '@/features/messages/data/PostDMMessagesRequest';

export default function useData() {
  const [destinations, setDestinations] = useState({ dms: [], groups: [] });
  const [threads, setThreads] = useState([]);
  const [messages, setMessages] = useState([]);

  const [dmId, setDMId] = useState();
  const [messageId, setMessageId] = useState();

  const [isLoadingDestinations,setIsLoadingDestinations] =useState(false);
  const [isLoadingThreads,setIsLoadingThreads] =useState(false);
  const [isLoadingMessages,setIsLoadingMessages] =useState(false);


  useEffect(() => {
    (async () => {
      const getDestination = getDestinationsRequest();
      setIsLoadingDestinations(true);
      if (dmId) {
        const getThreads = getDMThreadsRequest(dmId);
        setIsLoadingThreads(true);
        if (messageId) {
          const getMessage = getDMMessagesRequest(dmId, messageId);
          setIsLoadingMessages(true);
          setMessages(await getMessage);
          setIsLoadingMessages(false);
        } else {
          setMessages([]);
        }
        const newThreads = (await getThreads).map((thread) => {
          const correspondThread = threads.find((t) => t.id === thread.id);
          correspondThread
            ? (thread.selected = correspondThread.selected)
            : (thread.selected = false);
          return thread;
        });
        setThreads(await newThreads);
        setIsLoadingThreads(false);
      } else {
        setThreads([]);
      }
      const newDMs = (await getDestination).dms.map((dm) => {
        const correspondDMs = destinations.dms.find((d) => d.id === dm.id);
        correspondDMs
          ? (dm.selected = correspondDMs.selected)
          : (dm.selected = false);
        return dm;
      });

      setDestinations({ dms: newDMs, groups: [] });
      setIsLoadingDestinations(false);
    })();
  }, [dmId, messageId]);

  const createDM = async (name, email) => {
    await postDestinationsRequest(name, email);
    const getDestination = getDestinationsRequest();
    const newDMs = (await getDestination).dms.map((dm) => {
      const correspondDMs = destinations.dms.find((d) => d.id === dm.id);
      correspondDMs
        ? (dm.selected = correspondDMs.selected)
        : (dm.selected = false);
      return dm;
    });

    setDestinations({ dms: newDMs, groups: [] });
  };

  const createDMThread = async (subject, body) => {
    await postDMThreadsRequest(dmId, subject, body);
    const getThreads = getDMThreadsRequest(dmId);
    if (messageId) {
      const getMessage = getDMMessagesRequest(dmId, messageId);
      setMessages(await getMessage);
    }
    const newThreads = (await getThreads).map((thread) => {
      const correspondThread = threads.find((t) => t.id === thread.id);
      correspondThread
        ? (thread.selected = correspondThread.selected)
        : (thread.selected = false);
      return thread;
    });
    setThreads(await newThreads);
  };

  const createDMMessage = async (body) => {
    await postDMMessagesRequest(dmId, messageId, body);
    const getMessage = getDMMessagesRequest(dmId, messageId);
    setMessages(await getMessage);
  };

  const setSelectedDMId = (dmId) => {
    const newDMs = destinations.dms.map((dm) => {
      dm.selected = dm.id === dmId;
      return dm;
    });
    const newGroups = destinations.groups.map((group) => {
      group.selected = false;
      return group;
    });
    setDestinations({ dms: newDMs, groups: newGroups });
    setDMId(dmId);
    setMessageId(undefined);
  };

  const setSelectedMessageId = (messageId) => {
    const newThreads = threads.map((thread) => {
      thread.selected = thread.id === messageId;
      return thread;
    });
    setThreads(newThreads);
    setMessageId(messageId);
  };

  return [
    destinations,
    threads,
    messages,
    createDM,
    createDMThread,
    createDMMessage,
    setSelectedDMId,
    setSelectedMessageId,
    isLoadingDestinations,
    isLoadingThreads,
    isLoadingMessages,
  ];
}
