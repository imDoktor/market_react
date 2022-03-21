import React, { useEffect, FC } from "react"
import { useNavigate } from "react-router-dom"
import { observer } from "mobx-react-lite"
import UserStore from "../../store/user"
import ProductsStore from "../../store/product"

import { Wrapper, Title, Container, Bar } from "./HomePageStyled"
import { ButtonText } from "../../components/buttons/ButtonText"
import Card from "../../components/cards/Card/Card"
import Header from "../../components/main/Header"
import UserName from "../../components/main/UserName"

import AuthController from "../../controllers/AuthController"
import ProductController from "../../controllers/ProductController"

const HomePage: FC = observer(() => {
  const navigate = useNavigate()

  useEffect(() => {
    if (localStorage.getItem("id")) {
      const getData = async () => {
        await AuthController.getUser(localStorage.getItem("id"))
        await ProductController.getProducts()
      }
      getData()
    } else {
      navigate("/auth")
    }
  }, [navigate])

  function onSignOut() {
    AuthController.signOut()
    navigate("/auth")
  }

  return (
    <Wrapper>
      <Header>
        <UserName>{UserStore.userData.name}</UserName>
        <Bar>
          <ButtonText onClick={() => navigate("/admin")}>
            Редактировать
          </ButtonText>
          <ButtonText onClick={onSignOut}>Выйти</ButtonText>
        </Bar>
      </Header>
      <Title>Товары</Title>
      <Container>
        {ProductsStore.products.map((product, i) => {
          return <Card data={product} key={i}></Card>
        })}
      </Container>
    </Wrapper>
  )
})

export default HomePage
