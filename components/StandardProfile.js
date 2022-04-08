import {Fragment} from "react"
import {Stack, Button} from "@mui/material"
import MenuButton from "./MenuButton"
import Footer from "./Footer"
import ProfilePage from "./standardPages/ProfilePage"
import PerformancePage from "./standardPages/PerformancePage"
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
          <h3 style={{margin: ".5rem 0 1rem 0", textAlign: "center"}}>Settings</h3>
          <MenuButton id={1} helper="{{username}}" variant="">Profile</MenuButton>
          <MenuButton id={2} helper="{{days}} to expire" variant="">Subscription</MenuButton>
          <MenuButton id={3} helper="{{Good/Fair/Improve}}" variant="contained">Performance</MenuButton>
          <div style={{display: 'flex', flex: 1}}></div>
          <Button variant="outlined">Log Out</Button>
      </Stack>
      <Stack style={{
        // padding: "1rem",
        flex: 1,
        flexDirection: "column",
        overflow: "overlay",
        minHeight: "100vh",
        // background: "green"
        }}>
          {renderPage(3)}
        {/* <Footer style={{backgroundColor: "white", margin: "2rem 0"}}/> */}
      </Stack>
    </div>
  )
}

const renderPage = (state) => {
  switch (state) {
    case 1:
      return <ProfilePage/>
    case 2:
      return <Fragment/>
    case 3:
      return <PerformancePage/>
    default:
      return <Fragment/>
  }
}