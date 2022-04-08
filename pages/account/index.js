import {Fragment} from "react"
import StandardProfile from "../../components/StandardProfile"
import AdminProfile from "../../components/AdminProfile"

export default () => {
  return (
    <Fragment>
      {
        true
        ? <AdminProfile/>
        : <StandardProfile/>
      }
    </Fragment>
  )
}