import React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  width: 200px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  width: 40px;
  height: 40px;
`;

export default function SwitchTaxButton({ taxMode, setTaxMode }) {
  const taxButtonHandler = (mode) => {
    if (mode === "gross") {
      setTaxMode("net");
    } else if (mode === "net") {
      setTaxMode("gross");
    }
  };

  return (
    <>
      <Container>
        <Button
          onClick={() => {
            taxButtonHandler(taxMode);
          }}
        >
          {taxMode === "gross" ? "上" : "下"}
        </Button>
      </Container>
    </>
  );
}
