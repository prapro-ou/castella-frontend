
import React, { useState } from 'react';

export default function Message({ value })  {
    const [isExpanded,setIsExpanded] = useState(false);
    const messageNum = value.length;
    let displayText = value;
    if(isExpanded==false && messageNum > 100){
      displayText=value.substr(0,100)+"...";
    }
  //rentering
  return (
    /*
    <div className="mx-auto mt-4 max-w-sm overflow-hidden rounded-lg bg-thin shadow-md  ">
        <div className="p-4">
                <p  className=" whitespace-pre-line">{value}</p>
        </div>
    </div>
    */
    <button onClick={()=> setIsExpanded(!isExpanded)} className="mx-auto mt-4 w-96 overflow-hidden whitespace-pre-line rounded-lg bg-primary p-4 text-white text-left shadow-md">
      {displayText}
  </button>

  );
};
