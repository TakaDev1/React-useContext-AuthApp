import React from "react";
import { useLogin } from "../contexts/LoginContext";

const LoginDisplay = () => {
  const { name, isLogin } = useLogin();
  return (
    <div className="p-10 border rounded-2xl w-1/2 mx-auto my-5 text-white text-2xl">
      <p className="pb-5">ユーザー名: {isLogin ? name : ""}</p>
      <p>
        ログイン:{" "}
        {isLogin ? (
          <span className="text-green-500 font-bold">ログイン</span>
        ) : (
          <span className="text-red-500 font-bold">ログアウト</span>
        )}{" "}
      </p>
    </div>
  );
};

export default LoginDisplay;
