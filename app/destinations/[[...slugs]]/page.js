'use client';

import { useState } from "react";
import DestinationScreen from "@/features/destinations/components/DestinationScreen";
import CreatDMDialog from "@/features/destinations/dm/components/CreatDMDialog";
import useDestination from "@/features/destinations/hooks/UseDestination";
import ThreadScreen from "@/features/threads/components/ThreadScreen";
import useThreads from "@/features/threads/hooks/UseThreads";


export default function App() {
  const [destinations, createDM, selectDM] = useDestination();
  const [openCreatDMDialog, setOpenCreatDMDialog] = useState(false);

  const [threads, setDMId] = useThreads();

  return (
    <div className="flex h-screen bg-gray">
      <DestinationScreen
        destinations={destinations}
        onClickAddButton={()=>{setOpenCreatDMDialog(true);}}
        onClickDMTile={(dmId) => {
          selectDM(dmId);
          setDMId(dmId);
        }}
      />

      <ThreadScreen
        threads={threads}
        onClickCreateThreadButton={() => {}} />

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
