import React, { FC } from "react"

import { Wrapper, Text, Photo, Description } from "./CardStyled"

export interface CardProps {
  data: {
    id: string
    date: string
    model: string
    photo: any
    price: string
    description: string
    color: string
  }
  width?: string
}

const Card: FC<CardProps> = ({ data, width }: CardProps) => {
  return (
    <Wrapper width={width}>
      <Text margin="20px 0 0 0">
        Дата: <span>{data.date}</span>
      </Text>
      <Text margin="20px 0 0 0">
        Модель: <span>{data.model}</span>
      </Text>
      <Photo>
        <img src={data.photo} alt="card_photo"></img>
      </Photo>
      <Text margin="20px 0 0 0">
        <span>{data.price} ₽</span>
      </Text>
      <Text margin="20px 0 0 0">описание:</Text>
      <Description>{data.description}</Description>
      <Text margin="20px 0 0 0">
        Цвет: <span>{data.color}</span>
      </Text>
    </Wrapper>
  )
}

export default Card
