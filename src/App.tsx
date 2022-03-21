import React, { useEffect, FC } from "react"
import { Routes, Route, useNavigate } from "react-router-dom"

import HomePage from "./pages/HomePage/HomePage"
import AuthPage from "./pages/AuthPage/AuthPage"
import AdminPage from "./pages/AdminPage/AdminPage"
import Popup from "./components/main/PopupError"

const App: FC = () => {
  return (
    <div>
      <Popup></Popup>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </div>
  )
}

export default App
