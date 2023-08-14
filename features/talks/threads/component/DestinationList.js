import Icon from '@/features/components/Icon';
import DestinationTile from '../messages/components/DestinationTile';

export default function DestinationList({ destinations, onClickAddButton }) {
  // Destinationsの頭文字を小文字のdにするとmap関数でエラー
  const add_src = './add_black.svg';

  return (
    <div className='w-64'>
      <div className='flex items-center'>
        <div className='text-3xl text-default'>DM</div>
        <div className='ml-auto'>
          <button onClick={onClickAddButton}>
            <Icon src={add_src} alt='add icon' />
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
