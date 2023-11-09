import React, { useState } from "react";
import {
  Form,
  Input,
  Wrapper,
  SubmitO,
  SubmitX,
  PX,
  PO,
  Div,
} from "../styles/Login.style.jsx";

export default function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [validEmail, setValidEmail] = useState(null);
  const [validPassword, setValidPassword] = useState(null);

  const handleEmailChange = (e) => {
    const email = e.target.value;
    setForm({ ...form, email });

    if (email.trim() === "") {
      setValidEmail(null); // 값이 없는 경우 null로 설정
    } else {
      const isValidEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(
        email
      );
      setValidEmail(isValidEmail);
    }
  };

  const handlePasswordChange = (e) => {
    const password = e.target.value;
    setForm({ ...form, password });

    if (password.trim() === "") {
      setValidPassword(null); // 값이 없는 경우 null로 설정
    } else {
      const isValidPassword =
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
          password
        );
      setValidPassword(isValidPassword);
    }
  };

  const handleSubmit = (event) => {
    alert(
      "아이디: " +
        form.email +
        ", 비밀번호: " +
        form.password +
        " 가 제출되었습니다!"
    );
    event.preventDefault();
  };

  return (
    <Div>
      <Wrapper>
        <h1>이메일과 비밀번호를 입력해주세요</h1>
        <Form onSubmit={handleSubmit}>
          <label htmlFor="email">이메일 주소:</label>
          <Input
            type="email"
            id="email"
            value={form.email}
            onChange={handleEmailChange}
          />
          {validEmail === false ? (
            <PO>올바른 이메일을 입력해주세요</PO>
          ) : (
            <PX>올바른 이메일을 입력해주세요</PX>
          )}

          <label htmlFor="pw">비밀번호:</label>
          <Input
            id="pw"
            type="password"
            value={form.password}
            onChange={handlePasswordChange}
            placeholder="영문, 숫자, 특수문자 포함 8자 이상"
          />
          {validPassword === false ? (
            <PO>올바른 비밀번호 형식을 입력해주세요</PO>
          ) : (
            <PX>올바른 비밀</PX>
          )}

          {validEmail && validPassword ? (
            <SubmitO type="submit" value="확인" />
          ) : (
            <SubmitX type="submit" value="확인" disabled />
          )}
        </Form>
      </Wrapper>
    </Div>
  );
}
