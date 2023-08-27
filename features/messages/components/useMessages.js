import { useEffect, useState } from "react";
import getDMMessagesRequest from "../data/GetDMMessagesRequest";
import postDMMessagesRequest from "../data/PostDMMessagesRequest";

export default function useMessages(){
    const [dmId, setDMId] = useState();
    const [messages, setMessages] = useState([]);
    const [messageId, setMessageId] = useState();

    useEffect(() => {
        (async () => {
            if (messageId) {
                const getMessage = getDMMessagesRequest(dmId, messageId);
                setMessages(await getMessage);
              } else { setMessages([]); }
            })();},[messageId]);

    const createDMMessage = async (body) => {
        await postDMMessagesRequest(dmId, messageId, body);
        const getMessage = getDMMessagesRequest(dmId, messageId);
        setMessages(await getMessage);
      };
      
      const setIds = (dmId, messageId) => {
        setDMId(dmId);
        setMessageId(messageId);
    };

    return[messages, createDMMessage, setIds];
}