import { useEffect, useState } from 'react';
import getDestinationsRequest from '@/features/destinations/data/GetDestinationsRequest';
import postDestinationsRequest from '@/features/destinations/data/PostDestinationsRequest';

export default function useDestinations() {
  const [destinations, setDestinations] = useState({ dms: [], groups: [] });
  const [isLoadingDestinations, setIsLoadingDestinations] = useState(false);

  useEffect(() => {
    (async () => {
      setDestinations(await _fetchDMs());
    })();
  }, []);

  const createDM = async (name, email) => {
    await postDestinationsRequest(name, email);
    await _fetchDMs();
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


  const _fetchDMs = async() => {
    setIsLoadingDestinations(true);
    const getDestination = getDestinationsRequest();
    const newDMs = (await getDestination).dms.map((dm) => {
      const correspondDMs = destinations.dms.find((d) => d.id === dm.id);
      correspondDMs
        ? (dm.selected = correspondDMs.selected)
        : (dm.selected = false);
      return dm;
    });
    setIsLoadingDestinations(false);
    return { dms: newDMs, groups: [] };
  };

  return [destinations, createDM, setSelectedDMId, isLoadingDestinations];}