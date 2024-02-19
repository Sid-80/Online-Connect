"use client"
import Image from 'next/image';
import styles from './page.module.css'
import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MENU_ITEMS } from '../constants';
import { actionItemClick, menuItemClick } from '@/slice/MenuSlice';
import { RootState } from '@/store/store';

const index = () => {
  const menuref = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();
  const activeMenuItem = useSelector((state: RootState) => state.menu.activeMenuItem)
  const [btnState, setBtnState] = useState(false);


  function handleClick() {
    setBtnState(btnState => !btnState);
    if (menuref.current) {
      if (btnState) {
        menuref.current.className = 'btn';
      } else {
        menuref.current.className = 'btn active';
      }
    }
  }

  const handleMenuClick = (item: string) => {
    if (item === MENU_ITEMS.PENCIL || item === MENU_ITEMS.ERASER) {
      dispatch(menuItemClick(item))
    } else {
      dispatch(actionItemClick(item))
    }
  }

  return (
    <div className={`btn`} ref={menuref} onClick={handleClick}>
      <div className={styles.menuContainer} >
        <button 
          onClick={() => handleMenuClick(MENU_ITEMS.PENCIL)} 
          className={`${styles.iconWrapper} ${(activeMenuItem === MENU_ITEMS.PENCIL) ? ' bg-[#FFD0EC]' : ''}`}
        >
          <Image
            src="/pencil.svg"
            alt=""
            className={styles.icon}
            width={60}
            height={24}
          />
        </button>
        <button className={`${styles.iconWrapper} ${(activeMenuItem === MENU_ITEMS.ERASER) ? ' bg-[#FFD0EC]' : ''}`} onClick={() => handleMenuClick(MENU_ITEMS.ERASER)} >
          <Image
            src="/eraser.svg"
            alt="" className={styles.icon} width={60}
            height={24}
          />
        </button>
        <button onClick={() => handleMenuClick(MENU_ITEMS.UNDO)} className={styles.iconWrapper} >
          <Image
            src="/leftrotate.svg"
            alt="" className={styles.icon} width={60}
            height={24}
          />
        </button>
        <button onClick={() => handleMenuClick(MENU_ITEMS.REDO)} className={styles.iconWrapper} >
          <Image
            src="/rightrotate.svg"
            alt="" className={styles.icon} width={60}
            height={24}
          />
        </button>
        <button onClick={() => handleMenuClick(MENU_ITEMS.DOWNLOAD)} className={styles.iconWrapper} >
          <Image
            src="/save.svg"
            alt="" className={styles.icon} width={60}
            height={24}
          />
        </button>
      </div>
      <div className={`${styles.closeBtn}`}>
        {btnState ? <Image src="/downarrow.svg" alt="" className={styles.icon1} width={60}
          height={24} /> : <Image src="/downarrow.svg" alt="" className={styles.icon} width={60}
            height={24} />}
      </div>

    </div>
  )
}

export default index
