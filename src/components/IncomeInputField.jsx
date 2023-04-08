import React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: end;
`;

const Title = styled.div`
  color: #87888a;
  padding-right: 10px;
  font-size: 1.6rem;
  font-weight: 500;
`;

const Subtitle = styled.div`
  color: #87888a;
  font-weight: 300;
`;

const NumberInput = styled.input`
  width: 100%;

  box-sizing: border-box;
  padding: 10px 0px;
  padding-right: 20px;
  font-size: 1.2rem;
  color: black;
  outline: none;
  border: ${(props) =>
    props.taxMode === props.id ? "1px solid #c6f277" : "1px solid #c3c3b9"};
  border-radius: 8px;
  transition: 0.1s;
  text-align: right;
`;

export default function IncomeInputField({
  id,
  title,
  subtitle,
  taxMode,
  taxValue,
  setTaxValue,
}) {
  return (
    <>
      <Container>
        <TitleWrapper>
          <Title>{title}</Title>
          <Subtitle>{subtitle}</Subtitle>
        </TitleWrapper>
        <NumberInput
          type="text"
          taxMode={taxMode}
          id={id}
          value={taxValue}
          onChange={(event) => {
            setTaxValue(event.target.value);
          }}
        />
      </Container>
    </>
  );
}
