import Icon from "@/features/components/Icon";
import DestinationTile from "../messages/components/DestinationTile";


export default function DestinationList(Destinations){
    const add_src='./add_black.svg';

    return(
      <div className="w-64">
        <div className="flex items-center">
          <div className="text-3xl">
            DM
          </div>
          <div className="ml-auto">
            <Icon src={add_src} alt="add icon" />
          </div>
        </div>
        <div>
          {Destinations.map((destination)=>{
          return(
            <div key={destination.name}>
            <DestinationTile name={destination.name} messageCount={destination.messageCount} selected={destination.selected} />
            </div>
          );
        })}
        </div>
      </div>
    );
}