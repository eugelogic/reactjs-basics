import React from 'react'
import Header from '../header'
import '../../styles/global.css'
import './layout.css'

const Layout = ({ children }) => {
    return(
        <>
            <Header />
            <main className="main-content">
                {children}
            </main>
        </>
    )
}

export default Layout