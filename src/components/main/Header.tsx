import React, { ReactNode, FC } from "react"
import styled from "styled-components"

interface HeaderProps {
  children?: ReactNode
}

const HeaderStyled: FC = styled.header`
  padding: 0 20px;
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Header = (props: HeaderProps) => {
  return <HeaderStyled>{props.children}</HeaderStyled>
}

export default Header
