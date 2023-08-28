import { useEffect, useState } from 'react';
import getDMMessagesRequest from '../data/GetDMMessagesRequest';
import postDMMessagesRequest from '../data/PostDMMessagesRequest';

export default function useMessages() {
  const [messages, setMessages] = useState([]);
  const [dmId, setDMId] = useState();
  const [messageId, setMessageId] = useState(undefined);
  const [isLoadingMessages, setIsLoadingMessages] = useState(false);
  const [isShowingTipsOnMessages, setIsShowingTipsOnMessages] = useState(true);

  useEffect(() => {
    (async () => {
      if (!dmId || !messageId) {
        setMessages([]);
        setIsShowingTipsOnMessages(true);
      } else {
        setIsShowingTipsOnMessages(false);
        const getMessage = getDMMessagesRequest(dmId, messageId);
        setIsLoadingMessages(true);
        setMessages(await getMessage);
        setIsLoadingMessages(false);
      }
    })();
  }, [dmId, messageId]);

  const createDMMessage = async (body) => {
    await postDMMessagesRequest(dmId, messageId, body);
    const getMessage = getDMMessagesRequest(dmId, messageId);
    setMessages(await getMessage);
  };

  return [
    messages,
    createDMMessage,
    setDMId,
    setMessageId,
    isLoadingMessages,
    isShowingTipsOnMessages,
  ];
}
