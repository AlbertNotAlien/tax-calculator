import { useState, useRef } from "react";
import "./reset.css";
import styled from "@emotion/styled";

import Header from "./components/Header";
import IncomeInputField from "./components/IncomeInputField";
import SwitchTaxButton from "./components/SwitchTaxButton";
import SubmitButton from "./components/SubmitButton";

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

function App() {
  const [grossTax, setGrossTax] = useState(0);
  const [netTax, setNetTax] = useState(0);
  const [taxMode, setTaxMode] = useState("gross");

  return (
    <div className="App">
      <Background>
        <Container>
          <Header />
          <Main>
            <IncomeInputField
              id="gross"
              title="所得金額"
              subtitle="報價或預算金額"
              taxMode={taxMode}
              taxValue={grossTax}
              setTaxValue={setGrossTax}
            />
            <SwitchTaxButton taxMode={taxMode} setTaxMode={setTaxMode} />
            <IncomeInputField
              id="net"
              title="實得金額"
              subtitle="扣完可實拿金額"
              taxMode={taxMode}
              taxValue={netTax}
              setTaxValue={setNetTax}
            />
            <SubmitButton />
          </Main>
        </Container>
      </Background>
    </div>
  );
}

export default App;
