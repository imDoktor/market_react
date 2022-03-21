import styled from "styled-components"

interface WrapperProps {
  width?: string
}

export const Wrapper = styled.div<WrapperProps>`
  margin: 0 0 30px 0;
  padding: 20px;
  width: ${({ width }) => width || "45%"};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  box-shadow: 4px 4px 10px 0px rgba(50, 50, 50, 0.35);
  border-radius: 8px;

  @media (max-width: 768px) {
    width: 100%;
  }
`

interface TextProps {
  margin?: string
}

export const Text = styled.p<TextProps>`
  margin: ${({ margin }) => margin || "0"};
  font-size: 12px;
  font-weight: 300;
  text-transform: uppercase;
  & span {
    font-weight: 700;
    max-width: 100%;
  }
`

export const Photo = styled.div`
  position: relative;
  margin: 30px 0 0 0;
  padding: 5px 0;
  width: 100%;
  display: flex;
  justify-content: flex-end;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 80%;
    height: 100%;
    background: linear-gradient(
      42deg,
      rgba(31, 64, 55, 1) 0%,
      rgba(153, 242, 200, 1) 100%
    );
    border-radius: 8px;
  }

  & img {
    height: 220px;
    z-index: 2;
  }

  @media (max-width: 1024px) {
    & img {
      height: 180px;
    }
  }

  @media (max-width: 320px) {
    & img {
      height: 120px;
    }
  }
`
export const Description = styled.p`
  margin: 20px 0 0 0;
  height: 150px;
  font-size: 12px;
  font-weight: 400;
  line-clamp: 3;

  @media (max-width: 1024px) {
    height: auto;
  }
`
