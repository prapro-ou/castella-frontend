'use client';

import { useState } from "react";
import DestinationScreen from "@/features/destinations/components/DestinationScreen";
import CreatDMDialog from "@/features/destinations/dm/components/CreatDMDialog";
import useDestination from "@/features/destinations/hooks/UseDestination";


export default function App() {
  const [destinations, createDM, selectDM] = useDestination();
  const [openCreatDMDialog, setOpenCreatDMDialog] = useState(false);


  return (
    <div className="flex h-screen bg-gray">
      <DestinationScreen
        destinations={destinations}
        onClickAddButton={()=>{setOpenCreatDMDialog(true);}}
        onClickTile={selectDM}
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
