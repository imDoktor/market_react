import React, { useState, useEffect, FC } from "react"
import styled from "styled-components"
import { observer } from "mobx-react-lite"

import ErrorStore from "../../store/error"

interface WrapperProps {
  isVisible?: boolean
}

const Wrapper = styled.div<WrapperProps>`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 300px;
  height: 60px;
  border: 2px solid #e53030;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background-color: #fff;
  visibility: hidden;
  opacity: 0;
  transition: 0.4s;

  ${({ isVisible }) => isVisible && { visibility: "visible", opacity: "1" }}
`
const Text = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: #e53030;
`

const Popup: FC = observer(() => {
  return (
    <Wrapper isVisible={ErrorStore.errorVisible}>
      <Text>{ErrorStore.errorText}</Text>
    </Wrapper>
  )
})

export default Popup
