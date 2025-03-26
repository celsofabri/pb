import React from "react";
import { StyledHeader } from "./styled";

const Header = ({ children }) => {
  return <StyledHeader>{children}</StyledHeader>;
};

export default Header;
