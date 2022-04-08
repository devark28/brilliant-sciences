import {Fragment} from "react"
import {Stack, Button} from "@mui/material"
import MenuButton from "./MenuButton"
import Footer from "./Footer"
import ProfilePage from "./adminPages/ProfilePage"
import RequestsPage from "./adminPages/RequestsPage"
import CoursesPage from "./adminPages/CoursesPage"
import PricingPage from "./adminPages/PricingPage"
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
          <MenuButton id={1} variant="">Profile</MenuButton>
          <MenuButton id={2} variant="">Reviews</MenuButton>
          <MenuButton id={3} helper="{{number}} requests" variant="">Requests</MenuButton>
          <MenuButton id={4} helper="{{upload progress}}%" variant="contained">Courses</MenuButton>
          <MenuButton id={5} variant="">Pricing</MenuButton>
          <div style={{display: 'flex', flex: 1}}></div>
          <Stack spacing={1} direction="row">
            <Button className="no-text-wrap" variant="outlined" fullWidth>Home</Button>
            <Button className="no-text-wrap" variant="outlined" fullWidth>Log Out</Button>
          </Stack>
      </Stack>
      <Stack style={{
        // padding: "1rem",
        flex: 1,
        flexDirection: "column",
        overflow: "overlay",
        minHeight: "100vh",
        // background: "green"
        }}>
          {renderPage(4)}
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
      return <RequestsPage/>
    case 4:
      return <CoursesPage/>
    case 5:
      return <PricingPage/>
    default:
      return <Fragment/>
  }
}