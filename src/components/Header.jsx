import React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  width: 100%;
  height: 80px;
  background-color: #f9faf7;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  display: flex;
  font-size: 2rem;
  font-weight: 600;
`;

export default function Header() {
  return (
    <>
      <Container>
        <Title>勞報幫你算</Title>
      </Container>
    </>
  );
}
