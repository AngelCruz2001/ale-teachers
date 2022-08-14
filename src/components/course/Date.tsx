import styles from './Course.module.scss'
interface DateProps {
    startDate: string | undefined;
    endDate: string | undefined;
}

export const Date = ({ startDate, endDate }: DateProps) => {
    return (
        <section className={styles.date}>
            <span>{startDate} / {endDate}</span>
        </section>
    )
}
