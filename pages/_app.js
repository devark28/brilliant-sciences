// components
import Head from 'next/head'
import { Fragment } from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { useRouter } from "next/router"

// styles
import "../styles/library.css"
import "../styles/index.css"
import "../styles/header.css"
import "../styles/footer.css"

function MyApp({ Component, pageProps }) {
    const router  = useRouter();
    
    const non_header_routes = ["/", "/resetpassword", "/class", "/account"];
    const non_footer_routes = ["/account", "/class"];
    
    return (
        <Fragment>
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap" rel="stylesheet"/>
            </Head>
            {!non_header_routes.includes(router.pathname) ? (
                <Header/>
            ) : (
                <Fragment/>
            )}
            <Component {...pageProps }/>
            {!non_footer_routes.includes(router.pathname) ? (
                <Footer/>
            ) : (
                <Fragment/>
            )}
        </Fragment>
    )
}

export default MyApp