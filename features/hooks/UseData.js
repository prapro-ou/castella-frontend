import {useEffect, useState} from "react";
import getDestinationsRequest from "@/features/destinations/dm/data/GetDestinationsRequest";
import getDMThreadsRequest from "@/features/threads/data/GetDMThreadsRequest";
import getDMMessagesRequest from "@/features/messages/data/GetDMMessagesRequest";
import postDestinationsRequest from "@/features/destinations/dm/data/PostDestinationsRequest";

export default function useData() {
  const [destinations, setDestinations] = useState({ dms: [], groups: [] });
  const [threads, setThreads] = useState([]);
  const [messages, setMessages] = useState([]);

  const [dmId, setDMId] = useState();
  const [messageId, setMessageId] = useState();

  useEffect(()=>{
    (async () => {
      const des = await getDestinationsRequest();
      setDestinations(des);
      if (!dmId) return;
      const th = await getDMThreadsRequest(dmId);
      setThreads(th);
      if (!messageId) return;
      const me = await getDMMessagesRequest(dmId, messageId);
      setMessages(me);
    })();
  }, [dmId, messageId]);

  const createDM = async (name, email) => postDestinationsRequest(name, email);

  const setSelectedDMId = (dmId) => {
    const newDMs = destinations.dms.map((dm) => {
      dm.selected = dm.id === dmId;
      return dm;
    });
    const newGroups = destinations.groups.map((group) => {
      group.selected = false;
      return group;
    });
    setDestinations({ dms: newDMs, groups: newGroups});
    setDMId(dmId);
  };

  const setSelectedMessageId = (messageId) => {
    setMessageId(messageId);
  };

  return [destinations, threads, messages, createDM, setSelectedDMId, setSelectedMessageId];
}
