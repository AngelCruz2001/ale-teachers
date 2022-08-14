import React from 'react'
import styles from './TableAvailable.module.scss'
export const Header = () => {
    return (
        <div className={styles.table__header}>
            <div className={styles.table__header__cell}>
                <span>Tipo</span>
            </div>
            <div className={styles.table__header__cell}>
                <span>Nombre del curso</span>
            </div>
            <div className={styles.table__header__cell}>
                <span>Grupo</span>
            </div>
            <div className={styles.table__header__cell}>
                <span>Periodo</span>
            </div>
        </div>
    )
}
