'use client';

import MessageDialog from "@/features/MessageDialog";
import FloatActionButton from "@/features/components/FloatActionButton";
import addBlack from '@/public/addBlack.svg';
import { useState } from "react";

export default function Home() {
  
  const [openDialog,setOpenDialog]=useState(true);

  function onClickAdd(){
    console.log("Add Clicked");
    setOpenDialog(true);
  }
  function onClickCancel(){
    console.log("Cancel Clicked");
  }
  function onClickSend(text){
    console.log("Send Clicked");
    console.log(text);
  }

  return (
    <main>
      <p>
        <a>
          Loginページ
        </a>
      </p>
      <FloatActionButton src={addBlack} alt="add" onClickButton={()=>{onClickAdd();}} />
      <MessageDialog isOpened={openDialog} onClickCancel={onClickCancel} onClickSend={onClickSend} />
    </main>
  );
}
