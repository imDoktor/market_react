import React, { FC } from "react"
import styled from "styled-components"
import { inputProps } from "./types"

const InputTextStyled = styled.input<inputProps>`
  margin: ${({ margin }) => margin || "0"};
  padding: 0 9px;
  width: 400px;
  height: 50px;
  background-color: #e6e6e6;
  outline: none;
  border: none;
  border-radius: 4px;
  transition: 0.4s;
  font-size: 16px;
  font-weight: 300;
  &:focus {
    background-color: #fff;
    box-shadow: 0px 0px 9px 0px rgba(50, 50, 50, 0.45);
  }
  @media (max-width: 480px) {
    width: 100%;
  }
`

const InputText: FC<inputProps> = (props: inputProps) => {
  return <InputTextStyled type="text" {...props}></InputTextStyled>
}

export default InputText
