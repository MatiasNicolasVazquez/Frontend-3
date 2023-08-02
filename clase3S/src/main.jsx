import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Principal from './Principal'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <Principal/>
    <Footer/>
  </React.StrictMode>,
)
