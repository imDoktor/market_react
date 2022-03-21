import styled from "styled-components"

export const Wrapper = styled.div``

export const Title = styled.h2`
  margin: 20px 0 0 0;
  font-size: 25px;
  font-weight: 400;
  text-align: center;
  text-transform: uppercase;
`

export const Container = styled.div`
  margin: 40px 0 0 0;
  padding: 0 40px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 480px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
`

export const Bar = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`
