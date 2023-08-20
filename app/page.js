'use client';

import FloatActionButton from "@/features/components/FloatActionButton";
import ThreadDialog from "@/features/threads/components/ThreadDialog";
import addWhite from '@/public/icon/add/add_white.svg';
import { useState } from "react";

export default function Home() {

  const [openDialog,setOpenDialog]=useState(false);

  function onClickAdd(){
    console.log("Add Clicked");
    setOpenDialog(true);
    console.log(openDialog);
  }
  function onClickCancel(){
    console.log("Cancel Clicked");
  }
  function onClickSend(sub,mes){
    console.log("Send Clicked");
    console.log(sub,mes);
  }

  return (
    <main>
      <h1>LAページ</h1>
      <FloatActionButton src={addWhite} alt="add" onClickButton={onClickAdd} />
      <ThreadDialog isOpened={openDialog} onClickCancel={onClickCancel} onClickSend={onClickSend} />
    </main>
  );
}
