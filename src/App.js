import React from 'react'
import About from './Components/About'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Introduction from './Components/Introduction'
import Service from './Components/Service'
import './App.css'

export default function App() {
    return (
        <div>
        <Header />
        <Introduction />
        <Service />
        <About />
        <Footer />
        </div>
    )
}
