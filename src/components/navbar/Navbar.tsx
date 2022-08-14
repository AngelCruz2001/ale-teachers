import { CloseSession } from "./CloseSession"
import { Logo } from "./Logo"

import styles from "./Navbar.module.scss"
export const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <Logo />
            <CloseSession />
        </nav>
    )
}
