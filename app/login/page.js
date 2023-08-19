"use client";

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
        <button onClick={()=>{
          fetch('https://3385-113-197-158-64.ngrok-free.app/login', {
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
            console.log(response);
            return response.json();
          })
          .then(function(data){
            console.log(data);
          })
         .catch(function(error) {
            console.error(error);
          });
        }} className = "bg-thin">送信</button>
      </div>
    </main>
  );
}
