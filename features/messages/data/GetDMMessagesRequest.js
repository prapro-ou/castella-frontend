export default async function getDMMessagesRequest(dmId, messageId) {
  const cookieAsJson = JSON.parse(document.cookie);
  return fetch(`${process.env.NEXT_PUBLIC_URL}/destinations/dms/${dmId}/${encodeURIComponent(messageId)}`,{
    method:'GET',
    mode:'cors',
    headers:{
      'Authorization': `Bearer ${cookieAsJson.token}`,
    },})
    .then(function (response){
      return response.json();
    })
    .then(function (data) {
      return data.messages;
    })
    .catch(function (error){
      console.log(error);
    });
}
