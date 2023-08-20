'use client';

import {useState} from "react";
import DestinationScreen from "@/features/destinations/components/DestinationScreen";
import CreatDMDialog from "@/features/destinations/dm/components/CreatDMDialog";
import ThreadScreen from "@/features/threads/components/ThreadScreen"
import MessageScreen from "@/features/messages/components/MessageScreen";
import useData from "@/features/hooks/UseData";


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
