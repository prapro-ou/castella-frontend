'use Client';
import React from 'react';

/**
 * This component shows number of unread message
 * @param {count} *number of unread message
 * @author Jaja-UMA
*/
export default function UnreadMessageCount({ count })  {
  /**
   * Show '9+'or count
   * @type {showCount} 未読数として表示する値
   */
  const showCount = (count > 9)? '9+' : count;
  return (
    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white">
        <span>{showCount}</span>
    </div>
  );
};
