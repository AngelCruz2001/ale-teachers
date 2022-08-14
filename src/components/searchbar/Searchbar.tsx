
import styles from "./Searchbar.module.scss";
export const Searchbar = () => {
    return (
        <div className={styles.searchbarContainer}>
            <i className="fa-solid fa-magnifying-glass" />
            <input className={styles.searchbar} type="text" />
        </div>
    )
}
