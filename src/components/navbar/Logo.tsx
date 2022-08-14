import React from 'react'
import Image from 'next/image';

import styles from "./Navbar.module.scss";
import logoAleNoText from "../../../public/images/logoAleNoText.png";
export const Logo = () => {
  return (
    <div className={styles.logo}>
      <div className={styles.imageContainer}>
        <Image
          src={logoAleNoText}
          className='image'
        />
      </div>

      <p>Instituto de Educación <br /> y Cultura Alejandría</p>
    </div>
  )
}
