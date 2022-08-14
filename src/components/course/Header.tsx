import { useRouter } from 'next/router'
import React from 'react'
import styles from "./Course.module.scss"


interface HeaderProps {
    courseName: string | undefined;
    groupName: string | undefined;
}

export const Header = ({ courseName, groupName }: HeaderProps) => {
    const router = useRouter()

    const handleBack = () => {
        router.push('/home')
    }
    return (
        <section className={styles.container}>

            <div className={styles.backButtonContainer} onClick={handleBack}>
                <i className="fa-solid fa-arrow-left"></i>
            </div>

            <div className={styles.title}>
                <span>{courseName} - {groupName}</span>
            </div>
        </section>
    )
}
