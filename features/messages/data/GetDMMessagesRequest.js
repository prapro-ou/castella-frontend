async function getDMMessagesRequest(dmId, messageId) {
  const cookieAsJson = JSON.parse(document.cookie);
  return fetch(
    `${
      process.env.NEXT_PUBLIC_URL
    }/destinations/dms/${dmId}/${encodeURIComponent(messageId)}`,
    {
      method: 'GET',
      mode: 'cors',
      headers: {
        Authorization: `Bearer ${cookieAsJson.token}`,
      },
    },
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      return data.messages;
    })
    .catch(function (error) {
      console.log(error);
    });
}

export default async function fakeGetDMMessagesRequest() {
  return [
    {
      "id": "message_id1",
      "from": "user@example.com",
      "body": "本文1",
      "is_recent": false,
      "created_at": "2010-06-01"
    },
    {
      "id": "message_id2",
      "from": "sample@example.com",
      "is_recent": false,
      "body": "本文2",
      "created_at": "2010-06-01"
    },
    {
      "id": "message_id3",
      "from": "sample@example.com",
      "body": "本文3",
      "is_recent": true,
      "created_at": "2010-06-01"
    }
  ];
}