import React from "react";
import { useLogin } from "../contexts/LoginContext";

const LoginDisplay = () => {
  const { name, isLogin } = useLogin();
  return (
    <div>
      <p>ユーザー名: {isLogin ? name : ""}</p>
      <p>ログイン: {isLogin ? "ログイン" : "ログアウト"} </p>
    </div>
  );
};

export default LoginDisplay;
