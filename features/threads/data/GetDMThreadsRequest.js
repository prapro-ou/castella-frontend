async function getDMThreadsRequest(dmId) {
  const cookieAsJson = JSON.parse(document.cookie);
  return fetch(`${process.env.NEXT_PUBLIC_URL}/destinations/dms/${dmId}`, {
    method: 'GET',
    mode: 'cors',
    headers: {
      Authorization: `Bearer ${cookieAsJson.token}`,
    },
  })
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

// eslint-disable-next-line no-undef
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export default async function fakeGetDMThreadsRequest() {
  await sleep(2000);
  return [
    {
      id: 'message_id1',
      subject: '件名1',
      body: '本文1',
      created_at: '2010-06-01T22:19:44.475Z',
      new_message_count: '0',
      reply_count: 0,
    },
    {
      id: 'message_id2',
      subject: '件名2',
      body: '本文2',
      created_at: '2010-06-01T22:19:44.475Z',
      new_message_count: '1',
      reply_count: 1,
    },
    {
      id: 'message_id3',
      subject: '件名3',
      body: '本文3',
      created_at: '2010-06-01T22:19:44.475Z',
      new_message_count: '2',
      reply_count: 2,
    },
  ];
}
