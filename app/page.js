'use client';

import MessageDialog from "@/features/MessageDialog";
import FloatActionButton from "@/features/components/FloatActionButton";
import addBlack from '@/public/addBlack.svg';
import { useState } from "react";

export default function Home() {
  const[open,setOpen]=useState(false);

  function onClickSend(text){
    console.log(text);
  }
  return (
    <main>
      <p>
        LAページ
        <a href='/login' className='text-primary'>
          Loginページ
        </a>
      </p>
      <FloatActionButton src={addBlack} alt="add" onClickButton={()=>setOpen(true)} />
      <MessageDialog open={open} setOpen={setOpen} onClickSend={onClickSend} />
    </main>
  );
}
