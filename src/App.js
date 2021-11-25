import React from 'react'
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import HomePage from './Pages/Home/HomePage'
import Covid from './Pages/Covid Care/Covid'

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/Covid-care" element={<Covid />} />
            </Routes>
        </BrowserRouter>
    )
}
