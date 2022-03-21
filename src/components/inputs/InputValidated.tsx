import React, { useState, FC, ChangeEvent } from "react"
import styled from "styled-components"
import { inputProps } from "./types"

interface InputValidatedProps extends inputProps {
  validation: {
    re: RegExp
    errorText: string
  }
  value?: string
}

const Label = styled.label`
  position: relative;
`

const InputStyled = styled.input<InputValidatedProps>`
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
    width: 300px;
  }
`

interface ErrorTextProps {
  show: boolean
}

const ErrorText = styled.p<ErrorTextProps>`
  position: absolute;
  padding: 0 5px;
  top: 100%;
  left: 0;
  font-size: 12px;
  color: red;
  opacity: 0;
  visibility: hidden;
  ${({ show }) => show && { opacity: "1", visibility: "visible" }}
`

const InputValidated: FC<InputValidatedProps> = (
  props: InputValidatedProps
) => {
  const [isValid, setIsValid] = useState(true)

  function changeHandler(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.value.match(props.validation.re)) {
      props.onChange({ name: e.target.name, value: e.target.value })
      setIsValid(true)
      return
    }
    props.onChange({ name: e.target.name, value: false })
    return
  }

  function onBlur(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.value.match(props.validation.re)) {
      setIsValid(true)
    } else {
      setIsValid(false)
    }
  }

  return (
    <Label>
      <InputStyled
        {...props}
        onChange={changeHandler}
        onBlur={onBlur}
      ></InputStyled>
      <ErrorText show={!isValid}>{props.validation.errorText}</ErrorText>
    </Label>
  )
}

export default InputValidated
