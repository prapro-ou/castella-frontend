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
          <div className='ml-auto mt-auto w-fit'>
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

<<<<<<<<< Temporary merge branch 1
function textOverflow(value) {
  return value.length > 20 ? value.slice(0, 20) + '...' : value;
=========
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

function NumberOfReplies({ messageCount, onClickMessageCount, selected }) {
  const numColor = selected == true ? 'text-white' : 'text-url';

  return (
    <button className='' onclick={onClickMessageCount}>
      <div className={`text-xs ${numColor}`}>{messageCount}件の返信</div>
    </button>
  );
>>>>>>>>> Temporary merge branch 2
}
