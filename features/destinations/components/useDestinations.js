import { useEffect, useState } from 'react';
import getDestinationsRequest from '@/features/destinations/dm/data/GetDestinationsRequest';
import postDestinationsRequest from '@/features/destinations/dm/data/PostDestinationsRequest';

export default function useDestinations() {
  const [destinations, setDestinations] = useState({ dms: [], groups: [] });
  const [isLoadingDestinations, setIsLoadingDestinations] = useState(false);

  useEffect(() => {
    (async () => {
      const getDestination = getDestinationsRequest();
      setIsLoadingDestinations(true);
      await resetDM(getDestination);
      setIsLoadingDestinations(false);
    })();
  }, []);

  const createDM = async (name, email) => {
    await postDestinationsRequest(name, email);
    const getDestination = getDestinationsRequest();
    resetDM(getDestination);
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
  };


  const resetDM = async(getDestination) => {
    const newDMs = (await getDestination).dms.map((dm) => {
      const correspondDMs = destinations.dms.find((d) => d.id === dm.id);
      correspondDMs
        ? (dm.selected = correspondDMs.selected)
        : (dm.selected = false);
      return dm;
    });
    setDestinations({ dms: newDMs, groups: [] });
  };

  return [destinations, createDM, setSelectedDMId, isLoadingDestinations];}