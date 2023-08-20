'use client';

import { useState } from 'react';
import DestinationScreen from '@/features/destinations/components/DestinationScreen';
import CreateDMDialog from '@/features/destinations/dm/components/CreatDMDialog';
import ThreadScreen from '@/features/threads/components/ThreadScreen';
import MessageScreen from '@/features/messages/components/MessageScreen';
import useData from '@/features/hooks/UseData';
import CreateDMThreadDialog from "@/features/threads/components/CreateDMThreadDialog";

export default function App() {
  const [
    destinations,
    threads,
    messages,
    createDM,
    createDMThread,
    setSelectedDMId,
    setSelectedMessageId,
  ] = useData();
  const [openCreateDMDialog, setOpenCreateDMDialog] = useState(false);
  const [openCreateDMThreadDialog, setOpenCreateDMThreadDialog] = useState(false);

  return (
    <>
      <div className='grid h-screen grid-cols-5 bg-gray'>
        <DestinationScreen
          destinations={destinations}
          onClickAddButton={() => setOpenCreateDMDialog(true)}
          onClickDMTile={setSelectedDMId}
          className='col-span-1 border-r-2 border-r-gray'
        />

        <ThreadScreen
          threads={threads}
          onClickCreateThreadButton={() => setOpenCreateDMThreadDialog(true)}
          onClickTile={setSelectedMessageId}
          className='col-span-2 border-r-2 border-r-gray'
        />

        <MessageScreen
          messages={messages}
          onClickCreateReplyButton={() => {}}
          className='col-span-2'
        />
      </div>
      <CreateDMDialog
        isOpened={openCreateDMDialog}
        onClickCancel={() => setOpenCreateDMDialog(false)}
        onClickSend={(name, to) => {
          createDM(name, to);
          setOpenCreateDMDialog(false);
        }}
      />
      <CreateDMThreadDialog
        isOpened={openCreateDMThreadDialog}
        onClickCancel={() => setOpenCreateDMThreadDialog(false)}
        onClickSend={(subject, body) => {
          createDMThread(subject, body);
          setOpenCreateDMThreadDialog(false);
        }}
      />
    </>
  );
}
