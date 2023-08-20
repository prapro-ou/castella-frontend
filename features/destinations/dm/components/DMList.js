import React from 'react';
import Image from 'next/image';
import addBlack from '@/public/icon/add/add_black.svg';
import DestinationTile from '@/features/destinations/components/DestinationTile';

export default function DMList({ dms, onClickTile, onClickAddButton }) {
  return (
    <div className='w-full'>
      <div className='flex items-center'>
        <div className='text-xl font-bold text-default'>DM</div>
        <button className='ml-auto' onClick={onClickAddButton}>
          <Image width={36} height={36} src={addBlack} alt='add' />
        </button>
      </div>
      <div className='my-4 flex flex-col gap-2'>
        {dms.map((item) => (
          <div key={item.id}>
            <DestinationTile
              name={item.name}
              messageCount={item.messageCount}
              selected={item.selected}
              onClick={() => onClickTile(item.id)}
            />
          </div>
        ))}
      </div>
      <div className='border-t border-thin' />
    </div>
  );
}
