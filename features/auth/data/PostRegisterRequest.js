export default async function PostRegisterRequest(
  email,
  loginPassword,
  emailPassword,
) {
  return fetch(`${process.env.NEXT_PUBLIC_URL}/register`, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: email,
      login_password: loginPassword,
      mail_password: emailPassword,
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
