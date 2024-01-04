import React from "react";
import { Wrapper, Content } from "./MenuItem.styles";
import { Link } from "react-router-dom";

const MenuItem = (props) => {
  const linkTo = props.link || "/";
  return (
    <Wrapper>
      <Content to={linkTo}>{props.children}</Content>
    </Wrapper>
  );
};

export default MenuItem;
