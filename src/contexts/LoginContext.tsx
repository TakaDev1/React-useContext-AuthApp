import React, { createContext, useContext, useState, type ReactNode } from "react";

interface LoginContextInterface {
  name: string;
  isLogin: boolean;
  toggleLogin: () => void;
}

// コンテキストの作成
const LoginContext = createContext<LoginContextInterface | undefined>(undefined);

// Providerの設定
const LoginProvider = ({ children }: { children: ReactNode }) => {
  const name = "Alice";
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const toggleLogin = () => {
    setIsLogin((prev) => !prev);
  };
  return (
    <LoginContext.Provider value={{ name, isLogin, toggleLogin }}>{children}</LoginContext.Provider>
  );
};

// コンテキストが存在するか確認
const useLogin = () => {
  const context = useContext(LoginContext);

  if (!context) {
    throw new Error("LoginContextの");
  }

  return context;
};

export { LoginProvider, useLogin };
