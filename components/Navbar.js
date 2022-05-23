import React from 'react'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
 
const Navbar = () => {
    return (
<nav className={styles.nav}>
<Link href="/" >
<a className={styles.link1}>Home</a>
</Link>
<Link href="/about" >
<a className={styles.link2}>About</a>
</Link>
<Link href="/contact">
<a className={styles.link2}>Contact</a>
</Link>
</nav>
    )
}
 
export default Navbar