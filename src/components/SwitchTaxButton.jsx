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
  cursor: pointer;
`;

export default function SwitchTaxButton({
  IncomeInputList,
  taxMode,
  setTaxMode,
}) {
  const switchButtonHandler = () => {
    const unselectedInput = IncomeInputList.find((item) => item.id !== taxMode);
    setTaxMode(unselectedInput.id);
  };

  return (
    <>
      <Container>
        <Button onClick={switchButtonHandler}>
          {taxMode === "gross" ? "上" : "下"}
        </Button>
      </Container>
    </>
  );
}
