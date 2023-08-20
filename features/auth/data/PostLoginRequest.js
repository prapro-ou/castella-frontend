export default async function postLoginRequest(email, password) {
  return fetch(`${process.env.NEXT_PUBLIC_URL}/login`, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      if (!navigator.cookieEnabled) {
        alert('cookieを有効にしてください');
        return false;
      }

      // cookieに情報がない場合
      if (!document.cookie) {
        document.cookie = JSON.stringify({ token: data.token });
      }
      // cookieに情報がある場合
      else {
        const cookieAsJson = JSON.parse(document.cookie);
        cookieAsJson.token = data.token;
        document.cookie = JSON.stringify(cookieAsJson);
      }
      return true;
    })
    .catch(function (error) {
      console.error(error);
    });
}
