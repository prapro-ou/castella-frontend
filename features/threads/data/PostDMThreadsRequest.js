export default async function postDMThreadsRequest(dmId, subject, body) {
  const cookieAsJson = JSON.parse(document.cookie);
  return fetch(`${process.env.NEXT_PUBLIC_URL}/destinations/dms/${dmId}`, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${cookieAsJson.token}`,
    },
    body: JSON.stringify({
      subject: subject,
      body: body,
    }),
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      return data.is_success;
    })
    .catch(function (error) {
      console.error(error);
    });
}
