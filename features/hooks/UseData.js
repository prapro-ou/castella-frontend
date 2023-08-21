import { useEffect, useState } from 'react';
import getDestinationsRequest from '@/features/destinations/dm/data/GetDestinationsRequest';
import getDMThreadsRequest from '@/features/threads/data/GetDMThreadsRequest';
import getDMMessagesRequest from '@/features/messages/data/GetDMMessagesRequest';
import postDestinationsRequest from '@/features/destinations/dm/data/PostDestinationsRequest';
import postDMThreadsRequest from "@/features/threads/data/PostDMThreadsRequest";
import postDMMessagesRequest from "@/features/messages/data/PostDMMessagesRequest";

export default function useData() {
  const [destinations, setDestinations] = useState({ dms: [], groups: [] });
  const [threads, setThreads] = useState([]);
  const [messages, setMessages] = useState([]);

  const [dmId, setDMId] = useState();
  const [messageId, setMessageId] = useState();

  useEffect(() => {
    (async () => {
      const getDestination = await getDestinationsRequest();
      const newDMs = getDestination.dms.map((dm) => {
        const correspondDMs = destinations.dms.find((d) => d.id === dm.id);
        correspondDMs ? dm.selected = correspondDMs.selected : dm.selected = false;
        return dm;
      });

      setDestinations({ dms: newDMs, groups: []});
      if (!dmId) return;
      const th = await getDMThreadsRequest(dmId);
      setThreads(th);
      if (!messageId) return;
      const me = await getDMMessagesRequest(dmId, messageId);
      setMessages(me);
    })();
  }, [dmId, messageId]);

  const createDM = async (name, email) => postDestinationsRequest(name, email);

  const createDMThread = async (subject, body) => postDMThreadsRequest(dmId, subject, body);

  const createDMMessage = async (body) => postDMMessagesRequest(dmId, messageId, body);

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
  };

  const setSelectedMessageId = (messageId) => {
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
  ];
}
