import Image from 'next/image'
import React from 'react'

import tigreBlanco from "../../../public/images/tigreBlancoNoText.png";
import styles from "./Navbar.module.scss";

export const CloseSession = () => {
    return (
        <div className={styles.tigreContainer}>
            <Image
                className='tigre'
                src={tigreBlanco}
            />
        </div>
    )
}
