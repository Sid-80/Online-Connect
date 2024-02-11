import styles from './page.module.css'
const index = () => {
  return (
    <div className={styles.menuContainer} >
      <div className={styles.iconWrapper} >
        <img src="/pencil.svg" alt="" className={styles.icon} width={100}
              height={24} />
      </div>
      <div className={styles.iconWrapper} >
        <img src="/eraser.svg" alt="" className={styles.icon} width={100}
              height={24} />
      </div>
      <div className={styles.iconWrapper} >
        <img src="/leftrotate.svg" alt="" className={styles.icon} width={100}
              height={24} />
      </div>
      <div className={styles.iconWrapper} >
        <img src="/rightrotate.svg" alt="" className={styles.icon} width={100}
              height={24} />
      </div>
      <div className={styles.iconWrapper} >
        <img src="/save.svg" alt="" className={styles.icon} width={100}
              height={24} />
      </div>
    </div>
  )
}

export default index
