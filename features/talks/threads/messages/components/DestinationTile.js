import React from "react";
import Icon from "@/features/components/Icon";
import UnreadMessageCount from "@/features/components/UnreadMessageCount";

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
            <UnreadMessageCount count={messageCount}/>
            </div>
        </div>

    );
}