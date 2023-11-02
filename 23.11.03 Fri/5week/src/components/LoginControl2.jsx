import React, { useState } from "react";
import { LoginDiv, Div, FontDiv } from "../styles/LoginControl.style.jsx";

export default function LoginControl2() {
  const [Login, setLogin] = useState(false);

  const LoginButton = () => {
    setLogin(true);
  };

  const LogoutButton = () => {
    setLogin(false);
  };

  const LoginFunc = Login ? LogoutButton : LoginButton;

  return (
    <Div>
      <LoginDiv onClick={LoginFunc}>{Login ? "로그아웃" : "로그인"}</LoginDiv>
      <FontDiv>{Login ? "환영합니다" : "로그인 해주세요!"}</FontDiv>
    </Div>
  );
}
