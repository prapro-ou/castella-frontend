import { useEffect, useState } from 'react';
import getDestinationsRequest from '@/features/destinations/dm/data/GetDestinationsRequest';
import postDestinationsRequest from '@/features/destinations/dm/data/PostDestinationsRequest';
import useThreads from '@/features/threads/components/useThreads';

export default function useDistinations(){
    const [destinations, setDestinations] = useState({ dms: [], groups: [] });
    const [dmId, setDMId] = useState();
    const [messageId, setMessageId] = useState();
    const [setIdMessagesId] = useThreads;
    
    useEffect(() => {
        (async () => {
          const getDestination = getDestinationsRequest();
          const newDMs = (await getDestination).dms.map((dm) => {
            const correspondDMs = destinations.dms.find((d) => d.id === dm.id);
            correspondDMs ? dm.selected = correspondDMs.selected : dm.selected = false;
            return dm;});
            setDestinations({ dms: newDMs, groups: []});
    });},[dmId]);

    const createDM = async (name, email) => {
        await postDestinationsRequest(name, email);
        const getDestination = getDestinationsRequest();
        const newDMs = (await getDestination).dms.map((dm) => {
          const correspondDMs = destinations.dms.find((d) => d.id === dm.id);
          correspondDMs ? dm.selected = correspondDMs.selected : dm.selected = false;
          return dm;
        });
        setDestinations({ dms: newDMs, groups: []});
      };
    
    
      const setSelectedDMId = (dmId) => {
        const newDMs = destinations.dms.map((dm) => {
          dm.selected = dm.id === dmId;
          return dm;
        });
        const newGroups = destinations.groups.map((group) => {
          group.selected = false;
          return group;
        });
        setDestinations({ dms: newDMs, groups: newGroups });
        setDMId(dmId);
        setMessageId(undefined);
      };

      setIdMessagesId(dmId, messageId);

      return[destinations, createDM, setSelectedDMId];
}