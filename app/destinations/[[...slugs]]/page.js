'use client';

import { useState } from 'react';
import DestinationScreen from '@/features/destinations/components/DestinationScreen';
import CreateDMDialog from '@/features/destinations/dm/components/CreatDMDialog';
import ThreadScreen from '@/features/threads/components/ThreadScreen';
import MessageScreen from '@/features/messages/components/MessageScreen';
import CreateDMThreadDialog from "@/features/threads/components/CreateDMThreadDialog";
import CreateDMMessageDialog from "@/features/messages/components/CreateDMMessageDialog";
import useThreads from '@/features/threads/components/useThreads';
import useMessages from '@/features/messages/components/useMessages';
import useDistinations from '@/features/destinations/components/useDistinations';
import Header from '@/features/components/Header';

export default function App() {
  const [messages,createDMMessage,setIds] = useMessages();
  const [threads,createDMThread, setSelectedMessageId, setIdMessagesId] = useThreads(setIds);
  const [destinations, createDM, setSelectedDMId]=useDistinations(setIdMessagesId);
  const [openCreateDMDialog, setOpenCreateDMDialog] = useState(false);
  const [openCreateDMThreadDialog, setOpenCreateDMThreadDialog] =
    useState(false);
  const [openCreateDMMessageDialog, setOpenCreateDMMessageDialog] =
    useState(false);

  return (
    <>
      <Header />
      <div className='grid h-screen grid-cols-8 bg-gray'>
        <DestinationScreen
          destinations={destinations}
          onClickAddButton={() => setOpenCreateDMDialog(true)}
          onClickDMTile={setSelectedDMId}
          className='col-span-2 border-r-2 border-r-gray'
        />

        <ThreadScreen
          threads={threads}
          onClickCreateThreadButton={() => setOpenCreateDMThreadDialog(true)}
          onClickTile={setSelectedMessageId}
          className='col-span-3 border-r-2 border-r-gray'
        />

        <MessageScreen
          messages={messages}
          onClickCreateReplyButton={() => setOpenCreateDMMessageDialog(true)}
          className='col-span-3'
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
      <CreateDMMessageDialog
        isOpened={openCreateDMMessageDialog}
        onClickCancel={() => setOpenCreateDMMessageDialog(false)}
        onClickSend={(body) => {
          createDMMessage(body);
          setOpenCreateDMMessageDialog(false);
        }}
      />
    </>
  );
}
