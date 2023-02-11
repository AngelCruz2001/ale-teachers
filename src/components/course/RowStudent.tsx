import { AssistanceItem } from 'components/assistanceItem'
import styles from "./Course.module.scss"
import { Student } from '../../interfaces/Courses';
import { useAppDispatch } from 'hooks/reduxHooks';
import { startSetGrade } from 'store/courses/thunks';
import { useState } from 'react';

interface RowInterfaceProps {
    student: Student;
    assistanceDays: string[];
    initialGrade: string;
}


export const RowStudent = ({ student, assistanceDays, initialGrade }: RowInterfaceProps) => {

    const [grade, setGrade] = useState<string>(initialGrade);
    const [controllers, setControllers] = useState<boolean>(false);
    const dispatch = useAppDispatch();
    const handleChangeGrade = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setControllers(true);
        setGrade(value);
        console.log(value);
    }

    const handleCancel = () => {
        setGrade(initialGrade);
        setControllers(false);
    }

    const handleSaveGrade = () => {
        console.log(grade);
        dispatch(startSetGrade(student.id_grade, grade));
        setControllers(false);
    }
    return (
        <div className={styles.table__body__row}>
            <div className={styles.table__body__cell} >
                <span>{student.matricula}</span>
            </div>
            <div className={styles.table__body__cell} >
                <span>{student.student_name}</span>
            </div>
            {
                student.assistences.map(assit => (
                    <div className={styles.table__body__cell} key={assit.id_assistance}>
                        <AssistanceItem id_assistance={assit.id_assistance} initialValue={assit.attended} />
                    </div>
                ))
            }
            <div className={`${styles.table__body__cell} ${styles.grade}`} >
                {controllers && <i className="fa-solid fa-xmark red" onClick={handleCancel}></i>}

             
                <input type="text" onChange={handleChangeGrade} onFocusCapture={(e) => {setGrade('');}} value={grade} />
                {controllers && <i className="fa-solid fa-check green" onClick={handleSaveGrade}></i>}
            </div>
        </div>
    )
}
