export default function ThreadTile({
  subject,
  body,
  message_count,
  is_new,
  onClickMessageCount,
  selected,
}) {
  const bgColor = selected === true ? 'bg-primary' : 'bg-backcolor';
  return (
    <div className={'relative rounded-lg w-64 h-24 ' + bgColor}>
      {writetext(subject, body, is_new, selected)}
      <div className='absolute bottom-1 right-3'>
        {NumberOfReplies(message_count, onClickMessageCount, selected)}
      </div>
    </div>
  );
}

function writetext(subject, body, is_new, selected) {
  const subjectNum = subject.length;
  const bodyNum = body.length;
  const displaySubject = subjectNum > 9 ? subject.slice(0, 9) + '...' : subject;
  const displayBody = bodyNum > 9 ? body.slice(0, 9) + '...' : body;
  var color = 'text-thin';
  var borderColor = 'border-thin';
  if (selected == true) {
    color = 'text-white';
    borderColor = 'border-white';
  } else if (is_new == true) {
    color = 'text-black';
  }
  return (
    <div className={color}>
      <p className='relative top-2 left-4 text-xl '>{displaySubject}</p>
      <div className='relative top-2 flex justify-center'>
        <div className={'border w-60 ' + borderColor}></div>
      </div>
      <p className='relative top-4 left-4 text-base'>{displayBody}</p>
    </div>
  );
}

function NumberOfReplies(message_count, onClickMessageCount, selected) {
  const numColor = selected == true ? 'text-white' : 'text-url';

  return (
    <button className='' onclick={onClickMessageCount}>
      <div className={'text-xs ' + numColor}>{message_count}件の返信</div>
    </button>
  );
}
