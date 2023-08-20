'use client';

import Tips from "@/features/components/Tips";
import CreatDMDialog from "@/features/destinations/components/CreatDMDialog";
import DestinationList from "@/features/destinations/components/DestinationList";
import getDestinationsRequest from "@/features/destinations/data/GetDestinationsRequest";
import postDestinationsRequest from "@/features/destinations/data/PostDestinationsRequest";
import { useEffect, useState } from "react";


export default function App() {
  const [dms, setDms]=useState([]);
  const [openCreatDMDialog,setOpenCreatDMDialog]=useState(false);

  useEffect(()=>{
    setInterval(async () => {
      const json = await getDestinationsRequest();
      setDms(json.dms);
    }, 5000);
  },[]);


  return (
    <div className="flex h-screen bg-gray">
      <div className="w-72 bg-white">
        <DestinationList destinations={dms} onClickAddButton={()=>{setOpenCreatDMDialog(true);}} />
        <CreatDMDialog
         isOpened={openCreatDMDialog}
          onClickCancel={()=>{setOpenCreatDMDialog(false);}}
          onClickSend={(name, to) => {
            postDestinationsRequest(name, to);
            setOpenCreatDMDialog(false);
          }} />
      </div>
      <div className="m-auto">
        <Tips />
      </div>
    </div>
  );
}
