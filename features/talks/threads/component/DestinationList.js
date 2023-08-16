import React from 'react';
import Image from 'next/image';
// import Icon from '@/features/components/Icon';
import DestinationTile from '../messages/components/DestinationTile';

export default function DestinationList({ destinations, onClickAddButton }) {
  // const addSrc = './addBlack.svg';

  return (
    <div className='w-64'>
      <div className='flex items-center'>
        <div className='text-3xl text-default'>DM</div>
        <div className='ml-auto'>
          <button onClick={onClickAddButton}>
            <Image width={48} height={48} src={'./addBlack.svg'} alt='add' />
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