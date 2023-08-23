"use client";

import React from "react";
import postLoginRequest from "@/features/auth/data/PostLoginRequest";
import PostRegisterRequest from "@/features/auth/data/PostRegisterRequest";
import { Button, TextField, ThemeProvider, createTheme } from "@mui/material";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Register() {
  const router = useRouter();
  let [email, setEmail] = useState("");
  let [loginPassword, setLoginPassword] = useState("");
  let [emailPassword, setEmailPassword] = useState("");

  const theme = createTheme({
    palette: {
      castella: {
        main: "#99A866", //tailwindのprimaryと同じ
        contrastText: "#ffffff",
      },
    },
  });

  return (
    <main>
      <ThemeProvider theme={theme}>
        <div className="flex">
          <div className="h-screen w-2/3 items-center rounded-r-3xl bg-primary"></div>
          <div className="grid h-screen w-full items-center justify-center">
            <div className="grid h-fit w-fit space-y-3">
              <TextField
                label="メールアドレス"
                id="address"
                type="email"
                color="castella"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                variant="outlined"
              />
              <TextField
                label="ログインパスワード"
                id="loginPassword"
                type="password"
                color="castella"
                value={loginPassword}
                onChange={(event) => setLoginPassword(event.target.value)}
                variant="outlined"
              />
              <TextField
                label="メールパスワード"
                id="mailPassword"
                type="password"
                color="castella"
                value={emailPassword}
                onChange={(event) => setEmailPassword(event.target.value)}
                variant="outlined"
              />
              <Button
                variant="contained"
                className="bg-primary"
                color="castella"
                onClick={async () => {
                  const isSuccessToRegister = await PostRegisterRequest(
                    email,
                    loginPassword,
                    emailPassword
                  );
                  if (!isSuccessToRegister) return;
                  const isSuccessToLogin = postLoginRequest(
                    email,
                    loginPassword
                  );
                  if (!isSuccessToLogin) return;
                  router.push(`/destinations`);
                }}
              >
                送信
              </Button>
            </div>
            {/* <div></div> */}
          </div>
        </div>
      </ThemeProvider>
    </main>
  );
}
