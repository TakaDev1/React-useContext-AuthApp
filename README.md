# React-useContext-LoginApp

Reactの `useContext` を使って、ログイン状態とユーザー名を管理する練習用アプリです。

## 📌 概要

`LoginContext` でログイン状態・ユーザー名・ログイン切り替え処理を管理し、`LoginProvider` を通して子コンポーネントへ共有します。

`LoginDisplay` ではログイン状態とユーザー名を表示し、`LoginToggleButton` ではログイン・ログアウトを切り替えます。

## 🛠 使用技術

* React
* TypeScript
* useContext
* useState
* Tailwind CSS
* Vite

## 📁 ディレクトリ構成

```text
src/
├── components/
│   ├── LoginDisplay.tsx
│   └── LoginToggleButton.tsx
├── contexts/
│   └── LoginContext.tsx
├── App.tsx
├── App.css
├── index.css
└── main.tsx
```

## 🔍 実装内容

### LoginContext

`createContext` を使用して、ログイン状態・ユーザー名・ログイン切り替え関数を共有します。

```tsx
const LoginContext = createContext<LoginContextInterface | undefined>(
  undefined,
);
```

### LoginProvider

`isLogin`、`name`、`toggleLogin` をContext経由で子コンポーネントに渡します。

```tsx
<LoginContext.Provider value={{ name, isLogin, toggleLogin }}>
  {children}
</LoginContext.Provider>
```

### useLogin

`useContext` を利用してContextの値を取得します。

```tsx
const { name, isLogin } = useLogin();
```

### ログイン状態の切り替え

`useState` の状態を反転させてログイン・ログアウトを切り替えます。

```tsx
const toggleLogin = () => {
  setIsLogin((prev) => !prev);
};
```

## 🎯 動作

* 初期状態：ログアウト
* 「ログイン」ボタンをクリック：ログイン状態になる
* ログイン時：ユーザー名を表示
* 「ログアウト」ボタンをクリック：ログアウト状態になる
* ログアウト時：ユーザー名を非表示

## ▶️ 起動方法

```bash
npm install
npm run dev
```
