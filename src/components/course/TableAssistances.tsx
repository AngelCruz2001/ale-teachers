import { AssistanceItem } from 'components/assistanceItem'
import { useAppDispatch, useAppSelector } from 'hooks/reduxHooks';
import React, { useEffect } from 'react'

import styles from "./Course.module.scss"
import { RowStudent } from './RowStudent';
import { Course } from '../../interfaces/Courses';

interface TableAssistancesProps {
    activeCourse: Course | null;
}
export const TableAssistances = ({ activeCourse }: TableAssistancesProps) => {

    const dispatch = useAppDispatch();

    return (
        <section className={styles.tableContainer}>
            <div className={styles.table}>
                <div className={styles.table__header}>
                    <div className={styles.table__header__cell}>
                        <span>Matrícula</span>
                    </div>
                    <div className={styles.table__header__cell}>
                        <span>Nombre del alumno</span>
                    </div>
                    {
                        activeCourse?.assistence_days_dates.map(day => (
                            <div className={styles.table__header__cell} key={day}>
                                <span>{day.substring(8, 10)}</span>
                            </div>
                        ))
                    }
                    <div className={styles.table__header__cell}>
                        <span>Calificación</span>
                    </div>
                </div>

                <div className={styles.table__body}>

                    {
                        activeCourse?.students.map(student => (
                            <RowStudent
                                key={student.id_student}
                                student={student}
                                assistanceDays={activeCourse?.assistence_days_dates}
                                initialGrade={student.grade}
                            />
                        ))

                    }

                </div>

            </div>

        </section>
    )
}
