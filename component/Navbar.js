import React from 'react'
import Link from 'next/link'
import styles from '../styles/Home.module.css'


const Navbar = () => {
  return (
    <>
         <nav className={styles.mainnav}>
           <ul>
             
            <Link href="/" passHref><a ><li>Home</li></a></Link>
            <Link href="/contact" passHref><a ><li>Contact</li></a></Link>
            <Link href="/blog" passHref><a ><li>Blog</li></a></Link>
            <Link href="/about" passHref><a ><li>About</li></a></Link>
          
           </ul>
         </nav>
         </>


  )
}

export default Navbar;