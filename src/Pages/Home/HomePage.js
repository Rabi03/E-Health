import React from 'react'
import Header from '../../Components/Header'
import Introduction from '../../Components/Introduction'
import Service from '../../Components/Service'
import About from '../../Components/About'
import Footer from '../../Components/Footer'
import MetaData from '../../Components/MetaData'

export default function HomePage() {
    return (
        <div>
        <MetaData title={"Home"} />
        <Header />
        <Introduction />
        <Service />
        <About />
        <Footer />
        </div>
    )
}
