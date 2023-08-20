import React from 'react';
import Image from 'next/image';
import addBlack from '@/public/icon/add/add_black.svg';
import DestinationTile from '@/features/destinations/components/DestinationTile';

export default function DMList({ dms, onClickTile, onClickAddButton }) {
  return (
    <div className='w-64'>
      <div className='mt-5 flex items-center'>
        <div className='ml-4 text-lg font-medium text-default'>DM</div>
        <button className='ml-auto mr-5' onClick={onClickAddButton}>
            <Image width={24} height={24} src={addBlack} alt='add' />
        </button>
      </div>
      <div>
        {dms.map((item) => (
          <div key={item.id}>
            <DestinationTile
              name={item.name}
              messageCount={item.messageCount}
              selected={item.selected}
              onClick={ () => onClickTile(item.id) }
            />
          </div>
        ))}
      </div>
      <div className='ml-2 border-t border-thin' />
    </div>
  );
}
