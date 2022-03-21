import React from "react"
import styled from "styled-components"

interface UserProps {
  children: string | null | undefined
}

const UserSteled = styled.p<UserProps>`
  font-size: 21px;
  font-weight: 300;
`

const UserName = (props: UserProps) => {
  return <UserSteled>{props.children}</UserSteled>
}

export default UserName
