import React from "react";
import Icon from "@/features/components/Icon";
import UnreadMessageCount from "@/features/components/UnreadMessageCount";

export default function DestinationTile({ name, messageCount, selected }) {
    const src = selected ? './personIcon_white.svg' : './personIcon_black.svg';
    const alt = 'personIcon';
    return(
        <div className={`relative flex h-12 w-64 items-center rounded-full p-3 ${selected ? 'bg-primary' : ''}`}> {/* ` バッククォートと ' シングルクォートの違いに注意*/}
            <div>
                <Icon src={src} alt={alt} />
            </div>
            <div className={`relative left-2 ${selected ? 'text-white' : 'text-default'}`}>
                {name}
            </div>
            <div className={`absolute left-52`}>
                <UnreadMessageCount count={messageCount} reversed={selected} />
            </div>
        </div>

    );
}
