import React, { FC } from "react"
import styled from "styled-components"
import { inputProps } from "./types"

const InputDateStyled = styled.input<inputProps>`
  margin: ${({ margin }) => margin || "0"};
  padding: 0 9px;
  width: 400px;
  height: 50px;
  background-color: #e6e6e6;
  outline: none;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 300;
  @media (max-width: 480px) {
    width: 100%;
  }
`

const InputDate: FC<inputProps> = (props: inputProps) => {
  return <InputDateStyled type="date" {...props}></InputDateStyled>
}

export default InputDate
