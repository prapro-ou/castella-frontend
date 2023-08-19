'use client';

import MessageDialogNotUsingFAB from "@/features/MessageDialogNotUsingFAB";
import FloatActionButton from "@/features/components/FloatActionButton";
import addBlack from '@/public/addBlack.svg';
import { createContext, useState } from "react";

export const OpenState = createContext();

export default function Home() {

  const [openDialog,setOpenDialog]=useState(false);
  const value={openDialog,setOpenDialog,};

  function onClickAdd(){
    console.log("Add Clicked");
    console.log(openDialog);
    setOpenDialog(true);
    console.log(openDialog);
  }
  function onClickCancel(){
    console.log("Cancel Clicked");
    setOpenDialog(false);
  }
  function onClickSend(text){
    console.log("Send Clicked");
    console.log(text);
    setOpenDialog(false);
  }

  return (
    <main>
      <p>
        <a>
          Loginページ
        </a>
      </p>
      <OpenState.Provider value={value}>
        <FloatActionButton src={addBlack} alt="add" onClickButton={onClickAdd} />
        <MessageDialogNotUsingFAB onClickCancel={onClickCancel} onClickSend={onClickSend} />
      </OpenState.Provider>
    </main>
  );
}
