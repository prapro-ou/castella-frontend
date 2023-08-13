import Icon from "@/features/components/Icon";


export default function DestinationList(){
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
      </div>
    );
}