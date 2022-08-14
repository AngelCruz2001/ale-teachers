import React, { useState } from 'react'

import styles from './SwitchCourses.module.scss'
import { useAppSelector, useAppDispatch } from '../../hooks/reduxHooks';
import { setActiveCourses, setHistorial } from 'store';

export const SwitchCourses = () => {

    const { isActiveCourses, isHistorial } = useAppSelector(state => state.ui);
    const dispatch = useAppDispatch();

    const onClickSwitch = (button: string) => {
        dispatch(setActiveCourses(button === 'activeCourses'));
        dispatch(setHistorial(button === 'historial'));
        console.log(button);
    }

    return (
        <div>
            <div className={styles.switchContainer}>
                <span
                    className={isActiveCourses ? styles.active : styles.inactive}
                    onClick={() => onClickSwitch('activeCourses')}
                >
                    Cursos activos
                </span>
                <span
                    className={isHistorial ? styles.active : styles.inactive}
                    onClick={() => onClickSwitch('historial')}
                >
                    Historial
                </span>
            </div>


            {isActiveCourses && <p className={styles.title}>Todos los cursos activos</p>}
            {isHistorial && <p className={styles.title}>Historial de cursos impartidos</p>}
        </div>
    )
}
