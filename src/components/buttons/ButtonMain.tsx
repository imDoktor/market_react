import React, { FC } from "react"
import styled from "styled-components"

interface ButtonMainProps {
  margin?: string
  transparent?: boolean
  noActive?: boolean
  children?: string
  onClick?: () => void
}

const ButtonMainStyled = styled.button<ButtonMainProps>`
  margin: ${({ margin }) => margin || "0"};
  width: 300px;
  height: 50px;
  background-color: #5b987f;
  border-radius: 25px;
  border: none;
  outline: none;
  font-size: 14px;
  font-weight: 700;
  color: #fff;
  text-transform: uppercase;
  cursor: pointer;
  opacity: 1;
  transition: 0.4s;
  ${({ transparent }) =>
    transparent && {
      backgroundColor: "rgba(255, 255, 255, 0)",
      outline: "2px solid #fff",
    }};
  ${({ noActive }) =>
    noActive && {
      opacity: "0.5",
    }}

  @media (max-width: 1024px) {
    width: 300px;
  }
  @media (max-width: 320px) {
    width: 270px;
  }
`

const ButtonMain: FC<ButtonMainProps> = (props: ButtonMainProps) => {
  return (
    <ButtonMainStyled {...props} type="button">
      {props.children}
    </ButtonMainStyled>
  )
}

export default ButtonMain
