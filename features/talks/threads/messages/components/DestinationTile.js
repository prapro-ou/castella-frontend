import React from "react";
import Icon from "@/features/components/Icon";
import UnreadMessageCount from "@/features/components/UnreadMessageCount";

export default function DestinationTile({ name, messageCount, selected }) {
    const src = selected ? './personIcon_white.svg' : './personIcon_black.svg';
    const alt = 'personIcon';
    const bgColor = selected ? 'bg-primary':'';
    const textColor = selected ? 'text-white':'text-default';
    return(
        <div className={`relative flex h-12 w-64 items-center rounded-full p-3 ${bgColor}`}> {/* ` バッククォートと ' シングルクォートの違いに注意*/}
            <div>
                <Icon src={src} alt={alt} />
            </div>
            <div className={`relative left-2 ${textColor}`}>
                {name}
            </div>
            <div className={`absolute left-52`}>
                <UnreadMessageCount count={messageCount} reversed={selected} />
            </div>
        </div>

    );
}
