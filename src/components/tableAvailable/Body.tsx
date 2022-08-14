import { useSetTeachersData } from 'hooks/useSetTeachersData'
import { GivenCourses } from 'interfaces'
import React from 'react'
import { Row } from './Row'

import styles from './TableAvailable.module.scss'
export const Body = () => {

    const { dataRows, handleClick } = useSetTeachersData()

    return (
        <div className={styles.table__body}>
            {
                dataRows.map((course: GivenCourses) => (
                    <Row move={() => handleClick(course)} key={`${course.id_course}${course.id_group}`} course={course} />
                ))
            }
            {/* TODO: Add svg for the empty data */}
        </div>
    )
}
