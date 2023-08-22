export default async function getDestinationsRequest() {
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
