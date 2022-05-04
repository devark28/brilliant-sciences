import {Fragment} from "react"
import StandardProfile from "../../components/StandardProfile"
import AdminProfile from "../../components/AdminProfile"

export default () => {
  const is_admin = false
  return (
    <Fragment>
      {
        is_admin
        ? <AdminProfile/>
        : <StandardProfile/>
      }
    </Fragment>
  )
}
