import styled from "styled-components"

interface ButtonTextProps {
  margin?: string
  mobileOnly?: boolean
}

export const ButtonText = styled.div<ButtonTextProps>`
  margin: ${({ margin }) => margin || "0 10px"};
  cursor: pointer;
  transition: 0.4s;

  &:hover {
    color: #6fb596;
  }
  @media (min-width: 479px) {
    ${({ mobileOnly }) => mobileOnly && { display: "none" }}
  }
`
