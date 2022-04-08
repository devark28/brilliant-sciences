import {classList} from "../utils"

export default ({style}) => {
  return (
    <footer className={classList(
        "Footer",
        "flex",
        "flex-row",
        "justify-space-between")} style={{flexWrap: "wrap", ...style}}>
        <ul id='socials' className={classList("flex","flex-column","flex-1","flex-start")}>
            <li>Our Socials</li>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
        </ul>
        <ul className={classList("flex","flex-column","flex-1","flex-start")}>
            <li>Our Coverage</li>
            <li>Mathematics</li>
            <li>Physics</li>
            <li>Chemistry</li>
            <li>Biology</li>
        </ul>
        <ul className={classList("flex","flex-column","flex-1","flex-start")}>
            <li>Quick Links</li>
            <li><a href="/">home</a></li>
            <li><a href="/about">about</a></li>
            <li><a href="/search">search</a></li>
            <li><a href="/class">class</a></li>
            <li><a href="/account/login">log in</a></li>
            <li><a href="/account/signup">sign up</a></li>
            <li><a href="/account">account</a></li>
            <li><a href="/plans">pricing plans</a></li>
        </ul>
    </footer>
  )
}
