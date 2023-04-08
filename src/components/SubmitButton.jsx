import React from "react";
import styled from "@emotion/styled";

const Container = styled.div``;
const Button = styled.button`
  width: 100%;
  height: 50px;
  margin: 60px 0px;
  background-color: #c6f277;
  border: none;
  color: black;
  border-radius: 8px;
  font-size: 1.5rem;
  text-align: center;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.05s;

  &:hover {
    transform: scale(1.02);
  }
`;

export default function SubmitButton({ renderTaxValue }) {
  return (
    <>
      <Container>
        <Button onClick={renderTaxValue}>結算</Button>
      </Container>
    </>
  );
}
