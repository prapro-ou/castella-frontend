import { useEffect, useState } from "react";
import getDMMessagesRequest from "../data/GetDMMessagesRequest";
import postDMMessagesRequest from "../data/PostDMMessagesRequest";

export default function useMessages(){
    const [dmId, setDMId] = useState();
    const [messages, setMessages] = useState([]);
    const [messageId, setMessageId] = useState();

    const setIds = (dmId, threadId) => {
        setDMId(dmId);
        setMessageId(threadId);
    };

    useEffect(() => {
        (async () => {
            if (messageId) {
                const getMessage = getDMMessagesRequest(dmId, messageId);
                setMessages(await getMessage);
              } else { setMessages([]); }
            });},[messageId]);

    const createDMMessage = async (body) => {
        await postDMMessagesRequest(dmId, messageId, body);
        const getMessage = getDMMessagesRequest(dmId, messageId);
        setMessages(await getMessage);
      };
              
    return[messages, createDMMessage, setIds];
}