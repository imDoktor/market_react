import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom"
import styled, { createGlobalStyle } from "styled-components"

import App from "./App"

const Global = createGlobalStyle`
  * {
    src: url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;700&display=swap');
    font-family: 'Montserrat', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Global />
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
)
