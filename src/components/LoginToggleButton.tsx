import React from "react";
import { useLogin } from "../contexts/LoginContext";

const LoginToggleButton = () => {
  const { isLogin, toggleLogin } = useLogin();

  return (
    <div>
      <button
        onClick={toggleLogin}
        className="cursor-pointer px-10 py-5 bg-gray-500 transition-all duration-300 border rounded-xl hover:opacity-80"
      >
        {isLogin ? (
          <span className="text-red-500 font-bold">ログアウト</span>
        ) : (
          <span className="text-green-500 font-bold">ログイン</span>
        )}
      </button>
    </div>
  );
};

export default LoginToggleButton;
