import { StandardFooter } from "@sitestitch/jic-site-components"
import styles from "./index.module.scss"
import LogoText from "../LogoText"

type Props = {
    
}

const socials = {
    Facebook:"www.facebook.com",
    Instagram:"http://instagram.com",
    Twitter:"http://www.twitter.com"
}

const Footer = ({}: Props) => {
    return <StandardFooter
    className={styles.footer}
    src="/images/logo.png"
    alt="abstract logo"
    socials={socials}
    logoText={<LogoText/>}
    ></StandardFooter>
}

export default Footer