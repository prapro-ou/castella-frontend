import React from 'react';
import Icon from '@/features/components/Icon';
import UnreadMessageCount from '@/features/destinations/components/UnreadMessageCount';
import personWhite from '@/public/icon/person/person_white.svg';
import personBlack from '@/public/icon/person/person_black.svg';

export default function DestinationTile({
  name,
  messageCount,
  selected,
  onClick,
}) {
  const src = selected ? personWhite : personBlack;
  const alt = 'personIcon';
  const bgColor = selected ? 'bg-primary' : '';
  const textColor = selected ? 'text-white' : 'text-default';
  return (
    <div
      className={`flex items-center rounded-full p-3 ${bgColor}`}
      onClick={onClick}
    >
      <div>
        <Icon src={src} alt={alt} />
      </div>
      <div className={`ml-4 font-medium ${textColor}`}>{name}</div>
      {messageCount > 0 ? ( //未読件数が1以上の時のみアイコンを表示
        <div className={`ml-auto mr-1`}>
          <UnreadMessageCount count={messageCount} reversed={selected} />
        </div>
      ) : (
        ''
      )}
    </div>
  );
}
