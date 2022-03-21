import styled from "styled-components"

export const Wrapper = styled.div`
  padding: 40px 50px;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  @media (max-width: 1024px) {
    padding: 0;
  }
`

interface SectionProps {
  condition: boolean
}

export const Section = styled.div<SectionProps>`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  box-shadow: 7px 7px 12px 0px rgba(50, 50, 50, 0.3),
    -7px 7px 12px 0px rgba(50, 50, 50, 0.3);
  &:before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 50%;
    height: 100%;
    background: linear-gradient(
      95deg,
      rgba(31, 64, 55, 1) 0%,
      rgba(153, 242, 200, 1) 100%
    );
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    z-index: 1;
    transition: 0.4s;
    ${({ condition }) =>
      condition && {
        right: "50%",
        borderTopRightRadius: "0",
        borderBottomRightRadius: "0",
        borderTopLeftRadius: "8px",
        borderBottomLeftRadius: "8px",
      }}
  }

  @media (max-width: 480px) {
    width: 200%;

    &:before {
      display: none;
    }

    ${({ condition }) => condition && { transform: "translateX(-50%)" }}
  }
`

interface TitleProps {
  margin?: string
  color?: string
}

export const Title = styled.h2<TitleProps>`
  margin: ${({ margin }) => margin || "0"};
  color: ${({ color }) => color || "#000"};
  font-size: 34px;
  font-weight: 700;
  text-transform: uppercase;

  @media (max-width: 1024px) {
    font-size: 24px;
  }

  @media (max-width: 480px) {
    font-size: 20px;
  }
`
export const SubTitle = styled.p<TitleProps>`
  margin: ${({ margin }) => margin || "0"};
  color: ${({ color }) => color || "#000"};
  font-size: 14px;
  font-weight: 400;
  text-transform: uppercase;
`
interface ContainerProps {
  view?: boolean
  mobileNon?: boolean
}

export const Container = styled.div<ContainerProps>`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 8px;
  z-index: 2;
  visibility: visible;
  transition: 0.2s cubic-bezier(0.4, 1.07, 0.64, 0.9);

  ${({ view }) => view && { opacity: "0", width: "0", visibility: "hidden" }}

  @media(max-width: 480px) {
    ${({ mobileNon }) => mobileNon && { display: "none" }}
  }
`
