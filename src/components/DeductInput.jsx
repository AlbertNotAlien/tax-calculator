import React from "react";
import styled from "@emotion/styled";

const Input = styled.input``;

export default function DeductInput({ title }) {
  return (
    <>
      <div>
        {title}
        <Input />
      </div>
    </>
  );
}
