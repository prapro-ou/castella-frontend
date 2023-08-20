import DMList from "@/features/destinations/dm/components/DMList";

export default function DestinationScreen({ destinations, onClickTile, onClickAddButton }) {
  return (
    <div className="w-72 bg-white">
      <DMList dms={destinations.dms} onClickTile={onClickTile} onClickAddButton={onClickAddButton}/>
    </div>
  );
}
