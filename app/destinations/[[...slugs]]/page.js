'use client';

import { useState } from 'react';
import DestinationScreen from '@/features/destinations/components/DestinationScreen';
import CreatDMDialog from '@/features/destinations/dm/components/CreatDMDialog';
import ThreadScreen from '@/features/threads/components/ThreadScreen';
import MessageScreen from '@/features/messages/components/MessageScreen';
import useData from '@/features/hooks/UseData';

export default function App() {
  const [
    destinations,
    threads,
    messages,
    createDM,
    setSelectedDMId,
    setSelectedMessageId,
  ] = useData();
  const [openCreatDMDialog, setOpenCreatDMDialog] = useState(false);

  return (
    <>
      <div className='grid h-screen grid-cols-5 bg-gray'>
        <DestinationScreen
          destinations={destinations}
          onClickAddButton={() => {
            setOpenCreatDMDialog(true);
          }}
          onClickDMTile={setSelectedDMId}
          className='col-span-1 border-r-2 border-r-gray'
        />

        <ThreadScreen
          threads={threads}
          onClickCreateThreadButton={() => {}}
          onClickTile={setSelectedMessageId}
          className='col-span-2 border-r-2 border-r-gray'
        />

        <MessageScreen
          messages={messages}
          onClickCreateReplyButton={() => {}}
          className='col-span-2'
        />
      </div>
      <CreatDMDialog
        isOpened={openCreatDMDialog}
        onClickCancel={() => {
          setOpenCreatDMDialog(false);
        }}
        onClickSend={(name, to) => {
          createDM(name, to);
          setOpenCreatDMDialog(false);
        }}
      />
    </>
  );
}
