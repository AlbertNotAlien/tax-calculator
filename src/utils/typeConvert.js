// result type is number
export function valueToNumber(inputValue) {
  const valueWithoutComma = inputValue.replace(/,/g, "");
  const integerValue = Math.floor(valueWithoutComma);
  const regex = /^[0-9]*$/;
  if (!regex.test(integerValue)) return;

  const result = Number(integerValue);

  return result;
}

// result type is string with commas
export function numberAddComma(value) {
  const result = value.toLocaleString("en-US");
  return result;
}
