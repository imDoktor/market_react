import styled from "styled-components"

export const Wrapper = styled.div`
  margin: 0 0 25px 0;
  padding: 0 10px;
  width: 95%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  box-shadow: 0px 0px 4px 0px rgba(50, 50, 50, 0.75);
  border-radius: 8px;
  transition: 0.4s;

  &:hover {
    box-shadow: 0px 0px 9px 0px rgba(50, 50, 50, 0.75);
  }
`

export const Info = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`

interface ContainerProps {
  opened?: boolean
}

export const Container = styled.div<ContainerProps>`
  margin: 0;
  padding: 0 30px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  visibility: hidden;
  height: 0;
  opacity: 0;
  ${({ opened }) =>
    opened && {
      visibility: "visible",
      height: "auto",
      opacity: "1",
      margin: "20px 0 0 0",
    }}

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
`

export const ControlPanel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const Bar = styled.div`
  margin: 40px 0 30px 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`
