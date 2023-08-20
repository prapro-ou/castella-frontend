import DMList from "@/features/destinations/dm/components/DMList";

export default function DestinationScreen({ destinations, onClickDMTile, onClickAddButton }) {
  return (
    <div className="w-72 bg-white">
      <DMList dms={destinations.dms} onClickTile={onClickDMTile} onClickAddButton={onClickAddButton}/>
    </div>
  );
}
