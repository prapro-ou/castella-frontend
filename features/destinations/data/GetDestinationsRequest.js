// eslint-disable-next-line no-unused-vars
async function getDestinationsRequest() {
  const cookieAsJson = JSON.parse(document.cookie);
  return fetch(`${process.env.NEXT_PUBLIC_URL}/destinations`, {
    method: 'GET',
    mode: 'cors',
    headers: {
      Authorization: `Bearer ${cookieAsJson.token}`,
    },
  })
    .then(function (response) {
      return response.json();
    })
    .catch(function (error) {
      console.log(error);
    });
}

// eslint-disable-next-line no-undef
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export default async function fakeGetDestinationsRequest() {
  await sleep(2000);
  return {
    dms: [
      {
        id: 'dmId1',
        name: 'name1',
        new_message_count: 0,
      },
      {
        id: 'dmId2',
        name: 'name2',
        new_message_count: 1,
      },
      {
        id: 'dmId3',
        name: 'name3',
        new_message_count: 2,
      },
    ],
    groups: [
      {
        id: 'groupId1',
        name: 'name1',
        new_message_count: 0,
      },
      {
        id: 'groupId2',
        name: 'name2',
        new_message_count: 1,
      },
      {
        id: 'groupId3',
        name: 'name3',
        new_message_count: 2,
      },
    ],
  };
}
