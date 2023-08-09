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
    <div className={`rounded-lg w-72 h-24 ${bgColor}`}>
      <WriteText
        subject={subject}
        body={body}
        isNew={isNew}
        selected={selected}
      />
      <div className='ml-auto mr-0 w-1/4'>
        <NumberOfReplies
          messageCount={messageCount}
          onClickMessageCount={onClickMessageCount}
          selected={selected}
        />
      </div>
    </div>
  );
}

function WriteText({ subject, body, isNew, selected }) {
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
    <div className={`${color}`}>
      <p className='text-xl ml-5 pt-2'>{displaySubject}</p>
      <div className={`border w-64 ml-3 + ${borderColor}`}></div>
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
}
