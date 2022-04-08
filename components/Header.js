import {Fragment} from "react"
import {classList} from "../utils"
import {useRouter} from "next/router"
import {Button} from "@mui/material"

export default ({ className }) => {
  const router = useRouter();
  return (
    <nav className={classList(
        "Header",
        "flex",
        "flex-row",
        "full-width",
        "justify-space-between")}>
        <div className={classList(
            "logo",
            "flex",
            "flex-1",
            "justify-center",
            // "align-center",
            "flex-column"
        )}>
            <img src="/brilliant sciences.svg" style={{height: "3.7rem"}}/>
            {/* <span>
                <b>B</b>rilliant
            </span>
            <span>
                <b>S</b>ciences
            </span> */}
        </div>
        <ul className={classList("flex","flex-1","justify-space-between")} style={{
            maxWidth: "60%"
        }}>
            {router.pathname != "/" && <li><a href="/">home</a></li>}
            {router.pathname != "/class" && <li><a href="/class">class</a></li>}
            {router.pathname != "/about" && <li><a href="/about">about</a></li>}
            {router.pathname != "/search" && <li><a href="/search">search</a></li>}
            {(
                router.pathname != "/account/login" &&
                router.pathname != "/account/signup" &&
                router.pathname != "/account" &&
                router.pathname != "/class" &&
                router.pathname != "/class/[id]" &&
                !false // is_logged_in
            ) ? <Button variant="outlined" href="/account/login" style={{color: "hsl(283, 39%, 70%, 80%)", borderColor: "hsl(283, 39%, 70%, 80%)"}}>Log In</Button> : <Fragment/>}
        </ul>
    </nav>
  )
}