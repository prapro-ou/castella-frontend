'use client';

import {useEffect, useState} from "react";
import DestinationScreen from "@/features/destinations/components/DestinationScreen";
import CreatDMDialog from "@/features/destinations/dm/components/CreatDMDialog";
import ThreadScreen from "@/features/threads/components/ThreadScreen";
import getDestinationsRequest from "@/features/destinations/dm/data/GetDestinationsRequest";
import postDestinationsRequest from "@/features/destinations/dm/data/PostDestinationsRequest";
import getDMThreadsRequest from "@/features/threads/data/GetDMThreadsRequest";
import getDMMessagesRequest from "@/features/messages/data/GetDMMessagesRequest";
import MessageScreen from "@/features/messages/components/MessageScreen";


export default function App() {
  const [destinations, threads, messages, createDM, setSelectedDMId, setSelectedMessageId] = useData();
  const [openCreatDMDialog, setOpenCreatDMDialog] = useState(false);

  return (
    <div className="flex h-screen bg-gray">
      <DestinationScreen
        destinations={destinations}
        onClickAddButton={()=>{setOpenCreatDMDialog(true);}}
        onClickDMTile={setSelectedDMId}
      />

      <ThreadScreen
        threads={threads}
        onClickCreateThreadButton={() => {}}
        onClickTile={setSelectedMessageId}
      />

      <MessageScreen
        messages={messages}
        onClickCreateReplyButton={() => {}}
      />

      <CreatDMDialog
        isOpened={openCreatDMDialog}
        onClickCancel={()=>{setOpenCreatDMDialog(false);}}
        onClickSend={(name, to) => {
          createDM(name, to);
          setOpenCreatDMDialog(false);
        }} />
    </div>
  );
}

function useData() {
  const [destinations, setDestinations] = useState({ dms: [], groups: [] });
  const [threads, setThreads] = useState([]);
  const [messages, setMessages] = useState([]);

  const [dmId, setDMId] = useState();
  const [messageId, setMessageId] = useState();

  useEffect(()=>{
    (async () => {
      const des = await getDestinationsRequest();
      setDestinations(des);
      console.log(des);
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
