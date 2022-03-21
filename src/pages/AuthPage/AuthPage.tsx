import React, { useState, useEffect, FC } from "react"
import { useNavigate } from "react-router-dom"
import { observer } from "mobx-react"

import UserStore from "../../store/user"

import { Wrapper, Section, Title, SubTitle, Container } from "./AuthPageStyled"
import { ButtonText } from "../../components/buttons/ButtonText"
import InputValidated from "../../components/inputs/InputValidated"
import ButtonMain from "../../components/buttons/ButtonMain"

import { inputOptions } from "../../data/inputOptions"

import AuthController from "../../controllers/AuthController"

interface InputData {
  name: string
  value: string | false
}

const AuthPage: FC = observer(() => {
  const [condition, setCondition] = useState(false)
  const [loginIsValid, setLoginIsValid] = useState(false)
  const [signUpIsValid, setSignUpIsValid] = useState(false)

  const [loginData, setLoginData] = useState({
    email: false,
    password: false,
  })

  const [signUpData, setSignUpData] = useState({
    name: false,
    email: false,
    password: false,
  })

  const navigate = useNavigate()
  const userData = UserStore.userData

  useEffect(() => {
    if (userData.email) {
      navigate("/")
    }
    return
  }, [userData, navigate])

  useEffect(() => {
    for (let value of Object.values(loginData)) {
      if (!value) {
        setLoginIsValid(false)
        break
      } else {
        setLoginIsValid(true)
      }
    }
  }, [loginData])

  useEffect(() => {
    for (let value of Object.values(signUpData)) {
      if (!value) {
        setSignUpIsValid(false)
        break
      } else {
        setSignUpIsValid(true)
      }
    }
  }, [signUpData])

  function changeConditionHandler() {
    setCondition(!condition)
  }

  function changeLoginHandler(inputData: InputData) {
    setLoginData({ ...loginData, [inputData.name]: inputData.value })
  }

  function changeSignUpHandler(inputData: InputData) {
    setSignUpData({ ...signUpData, [inputData.name]: inputData.value })
  }

  function onLoginSubmit() {
    if (loginIsValid) {
      AuthController.login(loginData)
    } else {
      return
    }
  }

  function onSignUpSubmit() {
    if (signUpIsValid) {
      AuthController.signUp(signUpData)
    } else {
      return
    }
  }

  return (
    <Wrapper>
      <Section condition={condition}>
        <Container view={condition}>
          <Title margin="70px 0 0 0">ВОЙТИ</Title>
          <SubTitle margin="40px 0 0 0">ВВЕДИТЕ ДАННЫЕ</SubTitle>
          <InputValidated
            margin="70px 0 0 0"
            placeholder="Email"
            name="email"
            type="email"
            validation={inputOptions.email}
            onChange={changeLoginHandler}
          ></InputValidated>
          <InputValidated
            margin="20px 0 0 0"
            placeholder="Пароль"
            name="password"
            type="password"
            validation={inputOptions.password}
            onChange={changeLoginHandler}
          ></InputValidated>
          <ButtonMain
            margin="60px 0 0 0"
            noActive={!loginIsValid}
            onClick={onLoginSubmit}
          >
            Войти
          </ButtonMain>
          <ButtonText
            margin="30px 0 0 0"
            mobileOnly={true}
            onClick={changeConditionHandler}
          >
            Зарегистрироваться ?
          </ButtonText>
        </Container>
        <Container view={!condition} mobileNon={true}>
          <Title margin="170px 0 0 0" color="#fff">
            ЕСТЕ АККАУНТ?
          </Title>
          <SubTitle margin="40px 0 0 0" color="#fff">
            Скорее заходи!
          </SubTitle>
          <ButtonMain
            transparent={true}
            margin="60px 0 0 0"
            onClick={changeConditionHandler}
          >
            Войти
          </ButtonMain>
        </Container>
        <Container view={condition} mobileNon={true}>
          <Title margin="170px 0 0 0" color="#fff">
            ПРИВЕТ, ДРУГ!
          </Title>
          <SubTitle margin="40px 0 0 0" color="#fff">
            Ещё нет аккаунта?
          </SubTitle>
          <ButtonMain
            transparent={true}
            margin="60px 0 0 0"
            onClick={changeConditionHandler}
          >
            Зарегистрироваться
          </ButtonMain>
        </Container>
        <Container view={!condition}>
          <Title margin="70px 0 0 0">РЕГИСТРАЦИЯ</Title>
          <SubTitle margin="40px 0 0 0">ВВЕДИТЕ ДАННЫЕ</SubTitle>
          <InputValidated
            margin="70px 0 0 0"
            placeholder="Имя"
            name="name"
            validation={inputOptions.name}
            onChange={changeSignUpHandler}
          ></InputValidated>
          <InputValidated
            margin="20px 0 0 0"
            placeholder="email"
            name="email"
            type="email"
            validation={inputOptions.email}
            onChange={changeSignUpHandler}
          ></InputValidated>
          <InputValidated
            margin="20px 0 0 0"
            placeholder="Пароль"
            name="password"
            type="password"
            validation={inputOptions.password}
            onChange={changeSignUpHandler}
          ></InputValidated>
          <ButtonMain
            margin="60px 0 0 0"
            noActive={!signUpIsValid}
            onClick={onSignUpSubmit}
          >
            Зарегистрироваться
          </ButtonMain>
          <ButtonText
            margin="30px 0 0 0"
            mobileOnly={true}
            onClick={changeConditionHandler}
          >
            Войти ?
          </ButtonText>
        </Container>
      </Section>
    </Wrapper>
  )
})

export default AuthPage
