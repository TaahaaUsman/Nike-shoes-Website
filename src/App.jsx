import React from "react"
import {Navbar, Footer} from './components/index'
import { Outlet } from "react-router-dom"

function App() {

  return (
    <>
    <Navbar />
    <Outlet />
    <Footer />
    </>
  )
}

export default App
