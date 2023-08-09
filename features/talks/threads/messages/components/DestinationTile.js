import React from "react";
import Icon from "@/features/components/Icon";
import UnreadMessageCount from "@/features/components/UnreadMessageCount";

export default function DestinationTile({ src, alt, name, messageCount, selected }) {
    return(
        <div className={`relative flex h-8 w-36 items-center rounded-lg ${selected ? 'bg-primary' : ''}`}> {/* ` バッククォートと ' シングルクォートの違いに注意*/}
            <div>
                <Icon src={src} alt={alt} />{/*選択時の色変更は未実装 */}
            </div>
            <div className={`absolute left-6 ${selected ? 'text-white' : 'text-default'}`}>
                {name}
            </div>
            <div className={`absolute left-28`}>
                <UnreadMessageCount count={messageCount} reversed={selected} />
            </div>
        </div>

    );
}
