import React, { useState, useEffect, FC, ChangeEvent } from "react"
import Card, { CardProps, Text } from "./Card"
import styled from "styled-components"

import ProductController from "../../controllers/ProductController"

import InputText from "../inputs/InputText"
import InputDate from "../inputs/InputDate"
import TextArea from "../inputs/TextArea"
import Select from "../inputs/Select"
import InputFile from "../inputs/InputFile"

import ButtonMain from "../buttons/ButtonMain"

const Wrapper = styled.div`
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

const Info = styled.div`
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

const Container = styled.div<ContainerProps>`
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

  @media (max-width: 480px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
`

const ControlPanel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  @media (max-width: 480px) {
    width: 100%;
  }
`

const Bar = styled.div`
  margin: 40px 0 30px 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`

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
