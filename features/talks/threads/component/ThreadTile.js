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

  return (
    <div className={`rounded-2xl w-72 h-28 ${bgColor}`}>
      <WriteText
        subject={subject}
        body={body}
        isNew={isNew}
        selected={selected}
      />
      <div className='ml-auto mr-2 w-1/4 mt-2'>
        <button className='' onClick={onClickMessageCount}>
          <div className={`text-xs ${numColor}`}>{messageCount}件の返信</div>
        </button>
      </div>
    </div>
  );
}

function WriteText({ subject, body, isNew, selected }) {
  const displaySubject =
    subject.length > 9 ? subject.slice(0, 9) + '...' : subject;
  const displayBody = body.length > 9 ? body.slice(0, 9) + '...' : body;
  const textColor = selected
    ? 'text-white'
    : isNew
    ? 'text-black'
    : 'text-thin';
  const borderColor = selected ? 'border-white' : 'border-thin';
  return (
    <div className={textColor}>
      <p className={`text-xl pt-3 ml-3 pl-2 border-b w-64 + ${borderColor}`}>
        {displaySubject}
      </p>
      <p className='text-base ml-5 mt-2'>{displayBody}</p>
    </div>
  );
}
