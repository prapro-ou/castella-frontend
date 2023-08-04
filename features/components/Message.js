
import React, { useState } from 'react';

export default function Message({ value })  {
    const [isExpanded,setIsExpanded] = useState(false);
    const messageNum = value.length;
    let displayText = value;
    if(isExpanded==false && messageNum > 100){
      displayText=value.substr(0,100)+"...";
    }
  return (
    <button onClick={()=> setIsExpanded(!isExpanded)} className="mx-auto mt-4 w-96 overflow-hidden whitespace-pre-line rounded-lg bg-primary p-4 text-left text-white shadow-md">
      {displayText}
  </button>

  );
};
