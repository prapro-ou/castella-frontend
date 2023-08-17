import React from 'react';
import Image from 'next/image';
import addBlack from '@/public/icon/add/add_black.svg';
import DestinationTile from "@/features/destinations/components/DestinationTile";

export default function DestinationList({ destinations, onClickAddButton }) {
  return (
    <div className='w-64'>
      <div className='flex items-center'>
        <div className='ml-2.5 text-lg font-medium text-default'>DM</div>
        <div className='ml-auto mr-5'>
          <button onClick={onClickAddButton}>
            <Image width={24} height={24} src={addBlack} alt='add' />
          </button>
        </div>
      </div>
      <div>
        {destinations.map((item) => (
          <div key={item.name}>
            <DestinationTile
              name={item.name}
              messageCount={item.messageCount}
              selected={item.selected}
            />
          </div>
        ))}
      </div>
      <div className='ml-2 border-t border-thin' />
    </div>
  );
}
