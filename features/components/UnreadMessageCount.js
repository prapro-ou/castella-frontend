'use Client';
import React from 'react';

<<<<<<< HEAD

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
=======
//This component shows number of unread message
//count:number of unread message
export default function UnreadMessageCount({ count }) {
  /*Nothing shown count is zero
  if(count == 0){
    return null;
  }
  */
  //Show '9+'
  //I don't know its helpful
  if (count > 9) {
    count = '9+';
  }
  //rentering
  return (
    <div className='flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white'>
      <span>{count}</span>
>>>>>>> 43baa0b28432c2a4813d00cfefe779a314ea59c9
    </div>
  );
};
