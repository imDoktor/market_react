import React, { FC } from "react"
import styled from "styled-components"
import { inputProps } from "./types"

const TextAreaStyled = styled.textarea<inputProps>`
  margin: ${({ margin }) => margin || "0"};
  padding: 9px;
  width: 400px;
  height: 100px;
  resize: none;
  background-color: #e6e6e6;
  outline: none;
  border: none;
  font-size: 16px;
  font-weight: 300;
  border-radius: 4px;
  @media (max-width: 480px) {
    width: 100%;
  }
`

const TextArea: FC<inputProps> = (props: inputProps) => {
  return <TextAreaStyled {...props}></TextAreaStyled>
}

export default TextArea
