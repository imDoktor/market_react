import React, { useEffect, FC } from "react"
import { useNavigate } from "react-router-dom"

import UserStore from "../../store/user"
import ProductsStore from "../../store/product"

import AuthController from "../../controllers/AuthController"
import ProductController from "../../controllers/ProductController"

import { Wrapper, Bar } from "./AdminPageStyled"

import Header from "../../components/main/Header"
import UserName from "../../components/main/UserName"
import EditableCard from "../../components/cards/EditableCard/EditableCard"
import ButtonIcon from "../../components/buttons/ButtonIcon"
import { observer } from "mobx-react-lite"

const AdminPage: FC = observer(() => {
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

  return (
    <Wrapper>
      <Header>
        <UserName>{UserStore.userData.name}</UserName>
        <Bar>
          <ButtonIcon
            icon="arrowLeft"
            onClick={() => navigate("/")}
          ></ButtonIcon>
        </Bar>
      </Header>
      {ProductsStore.products.map((product, i) => {
        return <EditableCard data={product} key={i}></EditableCard>
      })}
    </Wrapper>
  )
})

export default AdminPage
