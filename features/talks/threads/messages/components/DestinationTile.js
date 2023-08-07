import Icon from "@/features/components/Icon";
import UnreadMessageCount from "@/features/components/UnreadMessageCount";

export default function DestinationTile({ src, alt, name, messageCount, selected }) {
    return(
        <div className='flex h-6 w-24 rounded-lg bg-primary shadow-lg'>
            <Icon src={src} alt={alt} />
            {name}
            <UnreadMessageCount count={messageCount}/>
        </div>

    );
}