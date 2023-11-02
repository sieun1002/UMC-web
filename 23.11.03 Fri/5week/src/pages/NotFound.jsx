import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Setence1,
  Setence2,
  Setence3,
  Div1,
} from "../styles/NotFound.style.jsx";

export default function NotFound() {
  const navigate = useNavigate();
  const clicked = () => {
    navigate(`/`);
  };

  return (
    <Div1>
      <Setence1>해당 페이지를 찾지 못했습니다.</Setence1>
      <Setence2>
        주소가 잘못되었거나 더 이상 제공되지 않는 페이지입니다.
      </Setence2>
      <Setence3 onClick={clicked}>메인 페이지로 이동</Setence3>
    </Div1>
  );
}
