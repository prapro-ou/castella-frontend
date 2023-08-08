import React from "react";
import Icon from "@/features/components/Icon";
//import UnreadMessageCount from "@/features/components/UnreadMessageCount";

export default function DestinationTile({ src, alt, name, messageCount, selected }) {
    return(
        <div className={`relative flex h-6 w-36 rounded-lg ${selected ? 'bg-primary' : ''}`}>
            <div>
            <Icon src={src} alt={alt} />
            </div>
            <div className={`absolute left-6 ${selected ? 'text-white' : 'text-default'}`}>
                {name}
            </div>
            <div className={`absolute left-24`}>
                <UnrMsgeCntForDT count={messageCount} size={6} isSelected={selected} />
                {//<UnreadMessageCount count={messageCount}>
                }
            </div>
        </div>

    );
}

function UnrMsgeCntForDT({ count,size,isSelected }) {
    const showCount = count > 9 ? '9+' : count;
    const H_SIZE = "h-" + size;
    const W_SIZE = "w-" + size;
    return (
      <div className={`flex ${H_SIZE} ${W_SIZE} items-center justify-center ${isSelected ? 'bg-white' : 'bg-primary'} ${isSelected ? 'text-primary':'text-white'} rounded-full`}>
        {showCount}
      </div>
    );
  }