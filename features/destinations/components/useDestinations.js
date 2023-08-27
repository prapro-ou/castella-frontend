import { useEffect, useState } from 'react';
import getDestinationsRequest from '@/features/destinations/dm/data/GetDestinationsRequest';
import postDestinationsRequest from '@/features/destinations/dm/data/PostDestinationsRequest';

export default function useDestinations(setIdMessagesId) {
  const [destinations, setDestinations] = useState({ dms: [], groups: [] });
  const [dmId, setDMId] = useState();
  const [messageId, setMessageId] = useState();
  const [isLoadingDestinations, setIsLoadingDestinations] = useState(false);

  useEffect(() => {
    (async () => {
      const getDestination = getDestinationsRequest();
      setIsLoadingDestinations(true);
      const newDMs = (await getDestination).dms.map((dm) => {
        const correspondDMs = destinations.dms.find((d) => d.id === dm.id);
        correspondDMs
          ? (dm.selected = correspondDMs.selected)
          : (dm.selected = false);
        return dm;
      });
      setDestinations({ dms: newDMs, groups: [] });
      setIsLoadingDestinations(false);
      setIdMessagesId(dmId, messageId);
    })();
  }, [dmId]);

  const createDM = async (name, email) => {
    await postDestinationsRequest(name, email);
    const getDestination = getDestinationsRequest();
    const newDMs = (await getDestination).dms.map((dm) => {
      const correspondDMs = destinations.dms.find((d) => d.id === dm.id);
      correspondDMs
        ? (dm.selected = correspondDMs.selected)
        : (dm.selected = false);
      return dm;
    });
    setDestinations({ dms: newDMs, groups: [] });
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

  return [destinations, createDM, setSelectedDMId, isLoadingDestinations];
}
