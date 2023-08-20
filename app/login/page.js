"use client";

import { cookies } from "next/dist/client/components/headers";
import { useState } from "react";
import 'whatwg-fetch';

export default function Login() {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  return (
    <main>
      <div> 
        <div>
          <label>メールアドレス</label>
          <input className="ring-2" type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
        </div>
        <div>
          <label>パスワード</label>
          <input className="ring-2" type="password" value={password} onChange={(event) => setPassword(event.target.value)}/>
        </div>
        <button onClick={()=>onClickLoginPageSendButton({email,password})} className = "bg-thin">送信</button>
      </div>
    </main>
  );
}

function onClickLoginPageSendButton({email,password}){
  fetch(process.env.NEXT_PUBLIC_URL+'/login', {
    method: 'POST',
    mode:"cors",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: email,
      password: password,
    })
  }).then(function(response) {
    return response.json();
  })
  .then(function(data){
    if (!navigator.cookieEnabled) {
      alert('cookieを有効にしてください');
      return;
    };

    // cookieに情報がない場合
    if(!document.cookie) {
      document.cookie = JSON.stringify({'token': data.token});
    }
    // cookieに情報がある場合
    else {
      const cookieAsJson = JSON.parse(document.cookie);
      cookieAsJson.token = data.token;
      document.cookie = JSON.stringify(cookieAsJson);
    }
  })
 .catch(function(error) {
    console.error(error);
 });
}
