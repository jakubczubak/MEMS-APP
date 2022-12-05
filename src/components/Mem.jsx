import styles from '../components/Mem.module.css'

export function Mem(props) {

    return <div className={styles.mem_wrapper}>
    <div className={styles.mem}>
        <h3 className={styles.mem_title}>Title</h3>
        <img src="" alt="" />
    </div>
    <div className={styles.mem_btn_wrapper}>
        <button className={styles.mem_btn}>👍</button>
        <button className={styles.mem_btn}>👎</button>
    </div>
  </div>
}