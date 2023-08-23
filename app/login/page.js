"use client";

import postLoginRequest from "@/features/auth/data/PostLoginRequest";
import { useState } from "react";
import "whatwg-fetch";
import { useRouter } from "next/navigation";
import Image from "next/image";
import icon from "@/public/icon/castella/icon.png";

export default function Login() {
  const router = useRouter();
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  return (
    <main>
      <div className="flex bg-gray">
        <div className="grid h-screen w-2/3  items-center justify-center rounded-r-3xl bg-primary">
          <div>
            <Image
              src={icon}
              alt="icon"
              width={170}
              height={170}
              className="m-auto"
            />
            <div className="mt-10 font-zenkaku text-5xl font-bold tracking-widest text-white">
              かすていら
            </div>
          </div>
        </div>
        <div className="grid h-screen w-full items-center justify-center">
          <div className="grid h-fit w-fit rounded-xl bg-white px-10 pb-14 pt-10 shadow-2xl">
            <label>メールアドレス</label>
            <input
              className="ring-2"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <label>パスワード</label>
            <input
              className="ring-2"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <button
              className="bg-thin"
              onClick={async () => {
                const isSuccess = await postLoginRequest(email, password);
                if (isSuccess) {
                  router.push(`/destinations`);
                }
              }}
            >
              送信
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
