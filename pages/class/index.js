import {Fragment} from "react"
import {Stack, Button} from "@mui/material"
import MenuButton from "../../components/MenuButton"
import Footer from "../../components/Footer"
import VideoPage from "../../components/standardPages/VideoPage"
import DescriptionPage from "../../components/standardPages/DescriptionPage"
import AssesmentPage from "../../components/standardPages/AssesmentPage"
export default () => {
  return (
    <div style={{
      display: "flex",
      minHeight: "100vh",
      maxHeight: "100vh",
      minWidth: "100%"
    }}>
      <Stack style={{
        padding: "1rem",
        minWidth: "25%",
        // background: "red"
        }}>
          <h3 style={{margin: ".5rem 0 1rem 0", textAlign: "center"}}>Class</h3>
          <MenuButton id={1} helper="{{watching: lesson 1}}" variant="contained">Video</MenuButton>
          <MenuButton id={2} variant="">Description</MenuButton>
          <MenuButton id={3} variant="">Reviews</MenuButton>
          <MenuButton id={4} variant="">Assesment</MenuButton>
          <div style={{display: 'flex', flex: 1}}></div>
          <Button variant="outlined">Exit Class</Button>
      </Stack>
      <Stack style={{
        // padding: "1rem",
        flex: 1,
        flexDirection: "column",
        overflow: "overlay",
        minHeight: "100vh",
        // background: "green"
        }}>
          {renderPage(1)}
        <Footer style={{backgroundColor: "white", margin: "2rem 0"}}/>
      </Stack>
    </div>
  )
}

const renderPage = (state) => {
  switch (state) {
    case 1:
      return <VideoPage/>
    case 2:
      return <DescriptionPage/>
    case 4:
      return <AssesmentPage/>
    default:
      return <Fragment/>
  }
}