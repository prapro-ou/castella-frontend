"use client";

import postLoginRequest from "@/features/auth/data/PostLoginRequest";
import { useState } from "react";
import 'whatwg-fetch';
import { useRouter } from 'next/navigation';

export default function Login() {
  const router = useRouter();
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
        <button onClick={async ()=> {
          const isSuccess = await postLoginRequest(email, password);
          if (isSuccess) {
            router.push(`${process.env.NEXT_PUBLIC_URL}/destinations`);
          }
          }} className = "bg-thin">送信</button>
      </div>
    </main>
  );
}

