import React from "react";
import { LoginDiv, Div, FontDiv } from "../styles/LoginControl.style.jsx";

class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLogin: false };
    this.handleToggledClick = this.handleToggledClick.bind(this);
  }

  handleToggledClick() {
    this.setState((state) => ({
      isLogin: !state.isLogin,
    }));
  }
  render() {
    return (
      <Div>
        <LoginDiv onClick={this.handleToggledClick}>
          {this.state.isLogin ? "로그아웃" : "로그인"}
        </LoginDiv>
        <FontDiv>
          {this.state.isLogin ? "환영합니다" : "로그인 해주세요!"}
        </FontDiv>
      </Div>
    );
  }
}

export default LoginControl;
