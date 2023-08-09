'use Client';
import React from 'react';

/**
 * 未読数を表示するためのコンポーネント
 * @param {int} count 未読数
 */
export default function UnreadMessageCount({ count }) {
  const showCount = count > 9 ? '9+' : count;
  return (
    <div className='flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white'>
      {showCount}
    </div>
  );
}
