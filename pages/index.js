import { Fragment } from "react"
import Head from 'next/head'
import {classList} from "../utils"
import Header from "../components/Header"
import Card from "../components/CoverageCard"
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import {Stack} from "@mui/material"

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Brilliant Scinces | Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={classList("flex","flex-column","Index")}>
        <section className={classList("flex","flex-column","align-center")}>
          <Stack className={classList("flex-1","justify-center","align-center")}>
            <Stack className={classList("position-relative","full-width")}>
              <img className={classList("position-absolute","flex-1","full-width")} style={{height: "100vh"}}  src="/BS hero-01.svg"/>
            </Stack>
            <Header/>
            <Stack direction="row" flex={1} className={classList("full-width")} justifyContent="center" alignItems="center" sx={{padding: "0 7%"}}>
              <div className={classList("flex","flex-1","flex-column","justify-center","align-start","full-width","Hero-section")}>
                <div>
                  Understand All About Sciences
                </div>
                <br/>
                <div>
                  Our topic specific content help you to have a better insight about 
                  sciences if you are a student or conduct a research if you are an instructor.
                </div>
                <br/>
                <Stack component="span" direction="row" spacing={2}>
                  {
                    false // is_logged_in
                    ? <Fragment/>
                    : <Button href="/search" variant="contained" style={{whiteSpace: "pre"}}>Get an Insight</Button>
                  }
                  <Button href="/class" variant={false /* is_logged_in */ ? "contained" : "outlined"}>Continue where you left</Button>
                </Stack>
              </div>
              <Stack flex={1}></Stack>
            </Stack>
          </Stack>
        </section>
        <section className={classList("flex","flex-column","justify-center","align-center","flex-wrap")}>
          <h3 style={{fontWeight: "bold", fontSize: "2rem"}}>Our Coverage</h3>
          <div className={classList("flex","flex-1","flex-row","justify-space-evenly","align-center","flex-wrap")}>
            <Card text="Mathematics" image="/math-operations.jpg"/>
            <Card text="Physics" image="/telescope-dish.jpg"/>
            <Card text="Chemistry" image="apparatus.jpg"/>
            <Card text="Biology" image="oil.jpg"/>
          </div>
        </section>
        {/* TODO: remodel testimonials section */}
        <section className={classList("flex","flex-column","justify-space-evenly","align-center","flex-wrap")}>
          <h3 style={{fontWeight: "bold", fontSize: "2rem"}}>Testimonials</h3>
          <div className={classList("image")}></div>
          <div className={classList("text")}>The platform to excel... <a id="more" href='#more'>More</a></div>
          <div className={classList("list","flex")}>
            <div className={classList("thumbnail","image")}></div>
            <div className={classList("thumbnail","image")}></div>
            <div className={classList("thumbnail","image")}></div>
            <div className={classList("thumbnail","image")}></div>
            <div className={classList("thumbnail","image")}></div>
          </div>
        </section>
        <section style={{borderWidth: "0", borderBottomStyle: "solid", borderBottomWidth: "1px", borderStyle: "solid"}} className={classList("flex","flex-column","justify-space-evenly","align-center","flex-wrap")}>
          <h3 style={{fontWeight: "bold", fontSize: "2rem"}}>Let Us Know</h3>
          <div className={classList("flex","flex-1","flex-row")}>
            <div className={classList("flex","flex-column","justify-start","align-start")} style={{padding: '3rem'}}>
              <span>
                <b>Email</b>
                <br/>example@domain.com<br/>
              </span>
              <span>
                <b>Contact</b>
                <br/>+250700000000<br/>
              </span>
              <span>
                <a href="#socials"><b>Our Socials</b></a>
              </span>
            </div>
            <div className={classList("flex","flex-column","justify-start","align-center","full-width")} style={{padding: '3rem'}}>
              <TextField sx={{boxShadow: "0px 6px 22px 0px #1976d2", borderRadius: "4px", overflow: "hidden"}} label="email" variant="filled"/>
              <TextField sx={{boxShadow: "0px 6px 22px 0px #1976d2", borderRadius: "4px", overflow: "hidden"}} label="Your words..." variant="filled"/>
              <Button fullWidth variant="contained">Send</Button>
            </div>
          </div>
        </section>
      </main>
    </Fragment>
  )
}