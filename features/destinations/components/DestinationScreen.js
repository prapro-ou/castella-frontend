import DMList from '@/features/destinations/dm/components/DMList';

export default function DestinationScreen({
  destinations,
  onClickDMTile,
  onClickAddButton,
  className,
}) {
  return (
    <div className={`flex h-screen justify-center overflow-auto  bg-white p-8 ${className}`}>
      <DMList
        dms={destinations.dms}
        onClickTile={onClickDMTile}
        onClickAddButton={onClickAddButton}
      />
    </div>
  );
}
