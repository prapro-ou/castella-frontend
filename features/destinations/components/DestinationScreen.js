import DMList from '@/features/destinations/dm/components/DMList';

export default function DestinationScreen({
  destinations,
  onClickDMTile,
  onClickAddButton,
  className,
}) {
  return (
    <div className={`flex justify-center bg-white px-8 py-8 ${className}`}>
      <DMList
        dms={destinations.dms}
        onClickTile={onClickDMTile}
        onClickAddButton={onClickAddButton}
      />
    </div>
  );
}
