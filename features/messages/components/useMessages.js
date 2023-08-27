import { useEffect, useState } from 'react';
import getDMMessagesRequest from '../data/GetDMMessagesRequest';
import postDMMessagesRequest from '../data/PostDMMessagesRequest';

export default function useMessages() {
  const [dmId, setDMId] = useState();
  const [messages, setMessages] = useState([]);
  const [messageId, setMessageId] = useState(undefined);
  const [isLoadingMessages, setIsLoadingMessages] = useState(false);

  useEffect(() => {
    (async () => {
      if (messageId) {
        const getMessage = getDMMessagesRequest(dmId, messageId);
        setIsLoadingMessages(true);
        setMessages(await getMessage);
        setIsLoadingMessages(false);
      } else {
        setMessages([]);
      }
    })();
  }, [messageId]);

  const createDMMessage = async (body) => {
    await postDMMessagesRequest(dmId, messageId, body);
    const getMessage = getDMMessagesRequest(dmId, messageId);
    setMessages(await getMessage);
  };

  const setDMIds = (dmId) => {
    setDMId(dmId);
  };
  const setMessageIds = (messageId) => {
    setMessageId(messageId);
  };

  return [messages, createDMMessage, setDMIds, setMessageIds, isLoadingMessages];
}
