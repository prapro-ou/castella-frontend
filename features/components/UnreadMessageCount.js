"use client";
import React from 'react';

//This component shows number of unread message
//count:number of unread message
export default function UnreadMessageCount({ count })  {
  //Nothing shown count is zero
  if(count == 0){
    return null;
  }
  //Show '9+'
  //I don't know its helpful
  if(count > 9){
    count = "9+";
  }
  //rentering
  return (
    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white">
        <span>{count}</span>
    </div>
  );
};
