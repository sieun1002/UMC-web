import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 50px;
  background-color: #08062afd;
`;

export const HeaderImage = styled.img`
  padding: 10px;
`;

export const HeaderListDiv = styled.div`
  display: flex;
`;

export const HeaderList = styled.li`
  list-style: none;
  padding: 10px;
`;

export const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
`;
