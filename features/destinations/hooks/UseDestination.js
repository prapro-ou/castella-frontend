import {useEffect, useState} from "react";
import getDestinationsRequest from "@/features/destinations/dm/data/GetDestinationsRequest";
import postDestinationsRequest from "@/features/destinations/dm/data/PostDestinationsRequest";

export default function useDestination() {
  const [destinations, setDestinations] = useState({ dms: [], groups: [] });
  useEffect(()=>{
    setInterval(async () => {
      const json = await getDestinationsRequest();
      setDestinations(json);
    }, 1000);
  }, []);

  const createDM = async (name, email) => postDestinationsRequest(name, email);

  const selectDM = (dmId) => {
    const newDMs = destinations.dms.map((dm) => {
      dm.selected = dm.id === dmId;
      return dm;
    });
    const newGroups = destinations.groups.map((group) => {
      group.selected = false;
      return group;
    });
    setDestinations({ dms: newDMs, groups: newGroups});
  };
  return [destinations, createDM, selectDM];
}
