import styles from "./index.module.scss"
import React from "react"
import { HamburgerHeader1 } from "@sitestitch/jic-site-components"

type Props = {
className?:string
    
}

const Header = ({className,}: Props) => {

    const navItems:any = [{name:"home",href:"/",
},{name:"about",href:"/about"},{name:"services",href:"/services"},{
  name:"contact",href:"/contact"
}]

const fullClassName = styles.header+" " + className||""

    return<HamburgerHeader1
    navItems={navItems}
    src='/images/logo.png'
    alt='abstract logo'
    className={fullClassName}
    >
        <div className={styles.name}>

      <h3 className={styles.top}>Glamour</h3>
      <h3 className={styles.bottom}>Grove</h3>
        </div>
    </HamburgerHeader1>
}

export default Header