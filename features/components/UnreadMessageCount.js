'use Client';
import React from 'react';

/**
 * 未読数を表示するためのコンポーネント
 * @param {count} *number of unread message
 * @author Jaja-UMA
 */
export default function UnreadMessageCount({ count, reversed }) {
  const showCount = count > 9 ? '9+' : count;
  const bgColor = reversed ? 'bg-white':'bg-primary';
  const textColor = reversed ? 'text-primary':'text-white';

  return (
    <div className={`flex h-10 w-10 items-center justify-center rounded-full ${bgColor} ${textColor}`}>
      {showCount}
    </div>
  );
}
