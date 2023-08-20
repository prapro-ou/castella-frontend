export default function ThreadTile({
  subject,
  body,
  messageCount,
  isNew,
  onClickMessageCount,
  selected,
}) {
  const bgColor = selected === true ? 'bg-primary' : 'bg-card';
  const numColor = selected === true ? 'text-white' : 'text-url';
  const textColor = selected
    ? 'text-white'
    : isNew
    ? 'text-black'
    : 'text-thin';
  const borderColor = selected ? 'border-white' : 'border-thin';

  return (
    <div className={`w-fit rounded-3xl p-4 ${bgColor}`}>
      <div className={textColor}>
        <p className={`border-b px-4 pb-4 text-3xl ${borderColor}`}>
          {textOverflow(subject)}
        </p>
        <div className='flex'>
          <p className='p-4 text-2xl'>{textOverflow(body)}</p>
          <div className='ml-auto mt-auto'>
            <button onClick={onClickMessageCount}>
              <div className={`text-base ${numColor}`}>
                {messageCount}件の返信
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function textOverflow(value) {
  return value.length > 30 ? value.slice(0, 20) + '...' : value;
}
