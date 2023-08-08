export default function ThreadTile({
  subject,
  body,
  messageCount,
  isNew,
  onClickMessageCount,
  selected,
}) {
  const bgColor = selected === true ? 'bg-primary' : 'bg-card';
  return (
    <div className={`relative rounded-lg w-64 h-24 ${bgColor}`}>
      {writetext(subject, body, isNew, selected)}
      <div className='absolute bottom-1 right-3'>
        {NumberOfReplies(messageCount, onClickMessageCount, selected)}
      </div>
    </div>
  );
}

function writetext(subject, body, isNew, selected) {
  const subjectNum = subject.length;
  const bodyNum = body.length;
  const displaySubject = subjectNum > 9 ? subject.slice(0, 9) + '...' : subject;
  const displayBody = bodyNum > 9 ? body.slice(0, 9) + '...' : body;
  var color = 'text-thin';
  var borderColor = 'border-thin';
  if (selected == true) {
    color = 'text-white';
    borderColor = 'border-white';
  } else if (isNew == true) {
    color = 'text-black';
  }
  return (
    <div className={color}>
      <p className='relative top-2 left-4 text-xl '>{displaySubject}</p>
      <div className='relative top-2 flex justify-center'>
        <div className={`border w-60  + ${borderColor}`}></div>
      </div>
      <p className='relative top-4 left-4 text-base'>{displayBody}</p>
    </div>
  );
}

function NumberOfReplies(messageCount, onClickMessageCount, selected) {
  const numColor = selected == true ? 'text-white' : 'text-url';

  return (
    <button className='' onclick={onClickMessageCount}>
      <div className={`text-xs ${numColor}`}>{messageCount}件の返信</div>
    </button>
  );
}
