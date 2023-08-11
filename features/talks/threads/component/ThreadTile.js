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
    ? 'text-white' : isNew
      ? 'text-black' : 'text-thin';
  const borderColor = selected ? 'border-white' : 'border-thin';

  return (
    <div className={`rounded-3xl w-fit p-4 ${bgColor}`}>
      <div className={textColor}>
        <p className={`text-3xl px-4 pb-4 border-b ${borderColor}`}>
          {textOverflow(subject)}
        </p>
        <div className='flex'>
          <p className='text-2xl px-4 py-4'>{textOverflow(body)}</p>
          <div className='ml-auto mt-auto w-fit'>
            <button onClick={onClickMessageCount}>
              <div className={`text-base ${numColor}`}>{messageCount}件の返信</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function textOverflow(value) {
  return value.length > 20 ? value.slice(0, 20) + '...' : value;
}
