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
                {/*<UnreadMessageCountForDT count={messageCount} size='6' isSelected={selected} />*/}
                <UnreadMessageCount count={messageCount} reversed={selected} />
            </div>
        </div>

    );
}

function UnreadMessageCountForDT({ count,size,isSelected }) { 
    {/*UnreadMessageCountForDestinationTile 元の関数内のマジックナンバーを書き換えて良いか判断しかねたので代替案として実装 */ }
    const showCount = count > 9 ? '9+' : count;
    const H_SIZE = "h-" + size;
    const W_SIZE = "w-" + size;
    return (
        <div className={`flex ${H_SIZE} ${W_SIZE} items-center justify-center ${isSelected ? 'bg-white' : 'bg-primary'} ${isSelected ? 'text-primary':'text-white'} rounded-full`}>
            {showCount}
        </div>
    );
    }