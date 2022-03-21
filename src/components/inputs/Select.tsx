import React, { FC } from "react"
import styled from "styled-components"
import { inputProps } from "./types"

const SelectStyled = styled.select<inputProps>`
  margin: ${({ margin }) => margin || "0"};
  padding: 9px;
  width: 400px;
  height: 50px;
  resize: none;
  background-color: #e6e6e6;
  outline: none;
  border: none;
  font-size: 16px;
  font-weight: 300;
  border-radius: 4px;
  cursor: pointer;

  @media (max-width: 1024px) {
    width: 300px;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`
const Select: FC<inputProps> = (props: inputProps) => {
  return (
    <SelectStyled name={props.name} onChange={props.onChange} {...props}>
      {props.selectOtions ? (
        props.selectOtions.map((option, i) => <option key={i}>{option}</option>)
      ) : (
        <>
          <option>Черный</option>
          <option>Белый</option>
          <option>Серебристый</option>
        </>
      )}
    </SelectStyled>
  )
}

export default Select
