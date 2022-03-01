import styled from "styled-components";
import React from "react";

const Item = styled.div`
  display: flex;
  flex-direction: column;

  .text{
      font-weight: bold;
  }
`;

export default ({ type, from, value }) => {
  return (
    <Item>
      <span className="text">{type}</span>
      <span>{from}</span>
      <span>{value}</span>
    </Item>
  );
};
