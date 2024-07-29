// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import React from "react";
import Header from "../src/components/Header";
import Index from "../src/pages/Index";
import IndexBody from "../src/pages/IndexBody";
import IndexFooter from "../src/pages/IndexFooter";

function App() {
  // const [count, setCount] = useState(0)
  return (
    <React.Fragment>
    <Header />
    <Index />
    <IndexBody />
    <IndexFooter />
  </React.Fragment>
  )
}

export default App
