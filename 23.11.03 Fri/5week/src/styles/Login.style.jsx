import styled from "styled-components";

export const Div = styled.div`
  display: flex;
  justify-content: center;
`;

export const Wrapper = styled.div`
  margin: 5% 6%;
`;

export const Form = styled.form`
  width: 600px;
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  width: 100%;
  height: 40px;
  margin-top: 1%;
  &::placeholder {
    color: #808080c3;
  }
`;

export const SubmitO = styled.input`
  background-color: #000000;
  color: white;
  height: 35px;
  border-radius: 20px;
`;

export const SubmitX = styled.input`
  background-color: #ffffff;
  height: 35px;
  border-radius: 20px;
`;

export const PX = styled.p`
  color: #ffffff;
  font-size: 10px;
`;

export const PO = styled.p`
  color: #ff0000;
  font-size: 10px;
`;
