"use client"
import styles from './page.module.css'
import { useState } from 'react';
const index = () => {
  const[btnState,setBtnState] = useState(false);
  function handleClick(){
      setBtnState(btnState=>!btnState);
  }
  let toggleClassCheck = btnState ? 'active': '';
  return (
    <div className={`btn ${toggleClassCheck}`} onClick={handleClick}>
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
    <div className={`${styles.closeBtn} ${toggleClassCheck}`}>
      {btnState ? <img src="/downarrow.svg" alt="" className={styles.icon1} width={100}
            height={24} /> : <img src="/downarrow.svg" alt="" className={styles.icon} width={100}
            height={24} /> }
    </div>

    </div>
  )
}

export default index
