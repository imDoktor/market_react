import React, { FC, useState } from "react"
import styled from "styled-components"
import { inputProps } from "./types"

const InputFileStyled = styled.div<inputProps>`
  position: relative;
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
  display: flex;
  justify-content: center;
  align-items: center;

  & input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer;
  }

  @media (max-width: 1024px) {
    width: 300px;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`

const InputFile: FC<inputProps> = (props: inputProps) => {
  const [title, setTitle] = useState(props.children)

  function onChange(e: any) {
    setTitle(e.target.files[0].name)
  }

  return (
    <InputFileStyled {...props}>
      {title}
      <input
        type="file"
        name={props.name}
        accept={props.accept}
        onChange={onChange}
      ></input>
    </InputFileStyled>
  )
}

export default InputFile
