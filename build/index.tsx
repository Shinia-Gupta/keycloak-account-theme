// src/index.tsx
import React from "react";
import { kcContext } from "keycloakify";
import AccountPage from "../src/account/AccountPage";
import LoginPage from "../src/login/LoginPage";

export default function App() {
  const { pageId } = kcContext;

  switch (pageId) {
    case "account":
      return <AccountPage />;
    case "login":
      return <LoginPage />;
    default:
      return <div>Page Not Found</div>;
  }
}
