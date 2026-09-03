import React from "react";
import { useLogin } from "../contexts/LoginContext";

const LoginToggleButton = () => {
  const { isLogin, toggleLogin } = useLogin();

  return (
    <div>
      <button onClick={toggleLogin}>{isLogin ? "ログアウト" : "ログイン"}</button>
    </div>
  );
};

export default LoginToggleButton;
