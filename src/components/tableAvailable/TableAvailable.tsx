import React, { useEffect, useMemo } from 'react'

import styles from "./TableAvailable.module.scss";
import { Row } from './Row';
import { Header } from './Header';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { startGetCoursesGivenByATeacher } from 'store/teachers/thunk';
import { GivenCourses } from 'interfaces';
import { Body } from './Body';


export const TableAvailable = () => {
    return (
        <div className={styles.table}>
            <Header />
            <Body />
        </div>

    )
}
