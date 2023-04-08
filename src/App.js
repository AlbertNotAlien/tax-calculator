import { useState } from "react";
import styled from "@emotion/styled";

import "./reset.css";
import Header from "./components/Header";
import IncomeInputField from "./components/IncomeInputField";
import SwitchTaxButton from "./components/SwitchTaxButton";
import SubmitButton from "./components/SubmitButton";
import DeductInput from "./components/DeductInput";
import { valueToNumber, numberAddComma } from "./utils/typeConvert";

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #c3c3b9;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Container = styled.div`
  width: 720px;
  height: 600px;
  background-color: #f9faf7;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Main = styled.div`
  width: 100%;
  padding: 0px 50px;
`;

// The values that do not need to be updated.
const DEDUCT_LIST = ["-代扣所得稅", "-補充健保費"];
const GROSS_TO_NET_COEFFICIENT = 0.9;
const NET_TO_GROSS_COEFFICIENT = 1 / GROSS_TO_NET_COEFFICIENT;

function App() {
  const [grossTax, setGrossTax] = useState("0");
  const [netTax, setNetTax] = useState("0");
  const [taxMode, setTaxMode] = useState("gross");

  const IncomeInputList = [
    {
      id: "gross",
      title: "所得金額",
      subtitle: "報價或預算金額",
      taxValue: grossTax,
      setTaxValue: setGrossTax,
      coefficient: GROSS_TO_NET_COEFFICIENT,
    },
    {
      id: "net",
      title: "實得金額",
      subtitle: "扣完可實拿金額",
      taxValue: netTax,
      setTaxValue: setNetTax,
      coefficient: NET_TO_GROSS_COEFFICIENT,
    },
  ];

  const calculateTax = (taxValue, coefficient) => {
    const taxValueNumber = valueToNumber(taxValue);
    const calculatedValue = Math.floor(taxValueNumber * coefficient);
    return numberAddComma(calculatedValue);
  };

  // Update the opponent's state with the values and coefficients of self's object.
  const renderTaxValue = () => {
    const selectedInput = IncomeInputList.find((input) => input.id === taxMode);
    const unselectedInput = IncomeInputList.find(
      (input) => input.id !== taxMode
    );
    const calculatedValue = calculateTax(
      selectedInput.taxValue,
      selectedInput.coefficient
    );
    unselectedInput.setTaxValue(calculatedValue);
  };

  return (
    <Background>
      <Container>
        <Header />
        <Main>
          {IncomeInputList.map((item, index) => (
            <div key={item.id}>
              <IncomeInputField
                id={item.id}
                title={item.title}
                subtitle={item.subtitle}
                taxValue={item.taxValue}
                setTaxValue={item.setTaxValue}
                taxMode={taxMode}
              />

              {/* only render below for one time */}
              {index === 0 && (
                <>
                  <SwitchTaxButton taxMode={taxMode} setTaxMode={setTaxMode} />
                  {DEDUCT_LIST.map((item, index) => (
                    <DeductInput key={index} title={item} />
                  ))}
                </>
              )}
            </div>
          ))}
          <SubmitButton renderTaxValue={renderTaxValue} />
        </Main>
      </Container>
    </Background>
  );
}

export default App;
