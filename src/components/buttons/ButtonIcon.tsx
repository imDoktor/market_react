import React, { FC } from "react"
import styled from "styled-components"

import iconPlus from "../../images/icons/plus.svg"
import iconArrowLeft from "../../images/icons/arrow_left.svg"

interface ButtonIconProps {
  icon?: string
  onClick?: () => void
}

const ButtonIconStyled = styled.button<ButtonIconProps>`
  margin: 0 10px;
  width: 30px;
  height: 30px;
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  outline: none;
  border: none;
  background-color: rgba(0, 0, 0, 0);
  cursor: pointer;
  ${({ icon }) => icon === "plus" && { backgroundImage: `url(${iconPlus})` }}
  ${({ icon }) =>
    icon === "arrowLeft" && { backgroundImage: `url(${iconArrowLeft})` }};
  transition: 0.4s;

  &:hover {
    filter: blur(0.5px);
  }
`

const ButtonIcon: FC<ButtonIconProps> = (props: ButtonIconProps) => {
  return <ButtonIconStyled type="button" {...props}></ButtonIconStyled>
}

export default ButtonIcon
