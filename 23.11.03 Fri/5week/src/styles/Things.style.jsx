import styled from "styled-components";

export const ThingsWrapper = styled.div``;
export const ThingsCard = styled.div`
  width: 220px;
  margin: 10px;
  max-height: 390px;
  background-color: #373b69;
  color: white;
  font-size: 10px;
  position: relative;
  overflow: hidden;

  &:hover .description {
    display: block;
    background-color: #10121f;
  }
`;

export const Overlay = styled.div`
  position: relative;
  width: 100%;
`;

export const ThingsImage = styled.img`
  max-width: 100%;
  height: auto;
`;

export const Description = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  text-align: center;
  height: 100%;
  width: 100%;
  color: #fff;
  display: none;
`;

export const ThingsDetailImage = styled.img`
  width: 200px;
  height: auto;
`;

export const Div = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
