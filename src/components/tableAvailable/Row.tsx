import { GivenCourses } from 'interfaces';
import styles from './TableAvailable.module.scss'

type RowProps = {
    move: () => void,
    course: GivenCourses;
}

export const Row = ({ move, course }: RowProps) => {
    return (
        <div className={styles.table__body__row} onClick={move}>
            <div className={styles.table__body__cell}>
                <span>{course.type}</span>
            </div>
            <div className={styles.table__body__cell}>
                <span>{course.course_name}</span>
            </div>
            <div className={styles.table__body__cell}>
                <span>{course.group_name}</span>
            </div>
            <div className={styles.table__body__cell}>
                <span>{course.start_date} / {course.end_date}</span>
                {/* <span>01 - feb - 2021 / 01 - may - 2021</span> */}
            </div>
        </div>
    )
}
