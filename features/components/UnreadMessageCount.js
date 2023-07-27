import React from 'react';

export default function UnreadMessageCount({ count })  {
  return (
    <button className="rounded-full bg-default text-white">
        {count}
    </button>
  );
};
