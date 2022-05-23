import Navbar from '../components/Navbar'
import Head from 'next/head'
import Footer from '../components/footer'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <>
 <Navbar/>
  <Component {...pageProps}     />
    <Footer/>
  </>
}

export default MyApp






