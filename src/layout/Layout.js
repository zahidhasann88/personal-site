import Head from 'next/head'
import React from 'react'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import { Container } from './LayoutStyles'

export const Layout = ({children}) => {
  return (
    <Container>
     <Header/>
     <Head>
       <title>Zahid Hasan | Software Engineer</title>
     </Head>
     <main>{children}</main> 
     <Footer/>
    </Container>
  )
}
