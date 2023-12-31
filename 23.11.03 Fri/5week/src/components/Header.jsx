import React from "react";
import {
  HeaderDiv,
  HeaderImage,
  HeaderListDiv,
  HeaderList,
  StyledLink,
  Styled2Link,
} from "./Header.style.jsx";
import { Link } from "react-router-dom";

// import LoginControl from "./LoginControl.jsx";
// import LoginControl2 from "./LoginControl2.jsx";
import LoginControl3 from "./LoginControl3.jsx";

export default function Header() {
  return (
    <HeaderDiv>
      <HeaderImage
        style={{ width: "154px", height: "20px" }}
        src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
        alt="로고"
      />
      <HeaderListDiv>
        <HeaderList>
          <StyledLink to="/Movies">영화</StyledLink>
        </HeaderList>
        <HeaderList>
          <StyledLink to="/TV">TV 프로그램</StyledLink>
        </HeaderList>
        <HeaderList>
          <StyledLink to="/Celebirity">인물</StyledLink>
        </HeaderList>
        <HeaderList>
          <Styled2Link to="/Login">
            <LoginControl3 />
          </Styled2Link>
        </HeaderList>
      </HeaderListDiv>

      {/* <Outlet /> */}
    </HeaderDiv>
  );
}
