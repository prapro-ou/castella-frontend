'use client';

import { useState } from 'react';
import DestinationScreen from '@/features/destinations/components/DestinationScreen';
import CreateDMDialog from '@/features/destinations/dm/components/CreatDMDialog';
import ThreadScreen from '@/features/threads/components/ThreadScreen';
import MessageScreen from '@/features/messages/components/MessageScreen';
import CreateDMThreadDialog from '@/features/threads/components/CreateDMThreadDialog';
import CreateDMMessageDialog from '@/features/messages/components/CreateDMMessageDialog';
import useThreads from '@/features/threads/components/useThreads';
import useMessages from '@/features/messages/components/useMessages';
import Distinations from '@/features/destinations/components/useDistinations';
import Header from '@/features/components/Header';
import LoadingScreen from '@/features/components/LoadingScreen';

export default function App() {
  const [messages, createDMMessage, , isLoadingMessages] = useMessages();
  const [threads, createDMThread, setSelectedMessageId, setIdMessageId, isLoadingThreads] =
    useThreads();
  const [destinations, createDM, setSelectedDMId, isLoadingDestinations] =
    Distinations(setIdMessageId);
  const [openCreateDMDialog, setOpenCreateDMDialog] = useState(false);
  const [openCreateDMThreadDialog, setOpenCreateDMThreadDialog] =
    useState(false);
  const [openCreateDMMessageDialog, setOpenCreateDMMessageDialog] =
    useState(false);

  return (
    <>
      <Header />
      <div className='grid h-screen grid-cols-8 bg-gray'>
        <div className='relative col-span-2 border-r-2 border-r-gray'>
          <LoadingScreen
            className={'absolute'}
            isLoading={isLoadingDestinations}
          />
          <DestinationScreen
            destinations={destinations}
            onClickAddButton={() => setOpenCreateDMDialog(true)}
            onClickDMTile={setSelectedDMId}
          />
        </div>

        <div className='relative col-span-3 grid border-r-2 border-r-gray'>
          <LoadingScreen className={'absolute'} isLoading={isLoadingThreads} />
          <ThreadScreen
            threads={threads}
            onClickCreateThreadButton={() => setOpenCreateDMThreadDialog(true)}
            onClickTile={setSelectedMessageId}
          />
        </div>

        <div className='relative col-span-3 grid'>
          <LoadingScreen className={'absolute'} isLoading={isLoadingMessages} />
          <MessageScreen
            messages={messages}
            onClickCreateReplyButton={() => setOpenCreateDMMessageDialog(true)}
          />
        </div>
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
