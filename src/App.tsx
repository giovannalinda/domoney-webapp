import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { GlobalStyle } from './ui'

import { Login } from './pages'
import { LOGIN } from './routes'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={LOGIN} element={<Login />} />
      </Routes>
      <GlobalStyle />
    </BrowserRouter>
  )
}

export default App
