import React, { useState, useEffect, FC, ChangeEvent } from "react"
import Card, { CardProps } from "../Card/Card"
import { Text } from "../Card/CardStyled"

import {
  Wrapper,
  Info,
  Container,
  ControlPanel,
  Bar,
} from "./EditableCardStyled"

import ProductController from "../../../controllers/ProductController"

import InputText from "../../inputs/InputText"
import InputDate from "../../inputs/InputDate"
import TextArea from "../../inputs/TextArea"
import Select from "../../inputs/Select"
import InputFile from "../../inputs/InputFile"

import ButtonMain from "../../buttons/ButtonMain"

const EditableCard: FC<CardProps> = ({ data }: CardProps) => {
  const [opened, setOpened] = useState(false)
  const [cardData, setCardData] = useState({
    id: "",
    date: "",
    model: "",
    photo: "",
    price: "",
    description: "",
    color: "",
  })

  useEffect(() => {
    setCardData({ ...data })
  }, [data])

  function onChange(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.type === "date") {
      const reverseValue = e.target.value.split("-").reverse().join(".")
      setCardData({ ...cardData, [e.target.name]: reverseValue })
    } else {
      setCardData({ ...cardData, [e.target.name]: e.target.value })
    }
  }

  function onFileChange(e: any) {
    const reader = new FileReader()
    reader.onload = () => {
      setCardData({ ...cardData, [e.target.name]: reader.result })
    }
    reader.readAsDataURL(e.target.files[0])
  }

  function onSubmit() {
    ProductController.changeProduct(cardData)
    setOpened(false)
  }

  function btnCancelHandler() {
    setCardData({ ...data })
    setOpened(false)
  }

  return (
    <Wrapper>
      <Info
        onClick={() => {
          setOpened(!opened)
        }}
      >
        <Text>
          <span>{data.model}</span>
        </Text>
        <Text>
          <span>{data.date}</span>
        </Text>
      </Info>
      <Container opened={opened}>
        <Card data={cardData} width="400px"></Card>
        <ControlPanel>
          <InputDate name="date" onChange={onChange}></InputDate>
          <InputText
            margin="20px 0 0 0"
            placeholder="Модель"
            name="model"
            onChange={onChange}
          ></InputText>
          <InputText
            margin="20px 0 0 0"
            placeholder="Цена"
            name="price"
            onChange={onChange}
          ></InputText>
          <TextArea
            margin="20px 0 0 0"
            placeholder="Описание"
            name="description"
            onChange={onChange}
          ></TextArea>
          <Text margin="20px auto 0 0">Цвет</Text>
          <Select margin="10px 0 0 0" name="color" onChange={onChange}></Select>
          <InputFile
            margin="20px 0 0 0"
            name="photo"
            accept=".png,.jpeg"
            onChange={onFileChange}
          >
            Выберите фото
          </InputFile>
          <Bar>
            <ButtonMain onClick={onSubmit}>Сохранить</ButtonMain>
            <ButtonMain margin="20px 0 0 0" onClick={btnCancelHandler}>
              Отмена
            </ButtonMain>
          </Bar>
        </ControlPanel>
      </Container>
    </Wrapper>
  )
}

export default EditableCard
