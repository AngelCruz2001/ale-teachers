
import { useAppDispatch } from 'hooks/reduxHooks';
import { useState } from 'react';
import { startSetAssistance } from 'store/courses/thunks';
import styles from './AssistanceItem.module.scss';

interface AssistanceItemProps {
    id_assistance: number;
    initialValue: number;
}
export const AssistanceItem = ({ id_assistance, initialValue }: AssistanceItemProps) => {

    const dispatch = useAppDispatch();
    const [assistance, setAssistance] = useState<number>(initialValue);
    const [colorStyle, setColorStyle] = useState<string>();



    const handleChangeAssistance = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = parseInt(e.target.value);
        setAssistance(value);
        setColorStyle(styles.default);
        colorText(value);

        dispatch(startSetAssistance(id_assistance, value));

        console.log(value);
    }

    const colorText = (value: number) => {
        console.log(value)
        if (value === 0) {
            setColorStyle(styles.absence);
        } else if (value === 1) {
            setColorStyle(styles.precence);
        } else if (value === 2) {
            setColorStyle(styles.justified);
        }
        return {};
    }


    return (
        <div className={`${styles.container} ${colorStyle}`}>
            <select
                name="assitance"
                id="assitance"
                className={styles.select}
                onChange={e => handleChangeAssistance(e)}
                value={assistance}
            >
                <option value={0} >Falta</option>
                <option value={1} >Asistencia</option>
                <option value={2} >Justificado</option>
            </select>
        </div>
    )
}
