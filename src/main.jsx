import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from "react-router-dom"
import ProdukProvider from "./store/ProdukProvider"

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ProdukProvider>
      <App />
    </ProdukProvider>
  </BrowserRouter>
)
