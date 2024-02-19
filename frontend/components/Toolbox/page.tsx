'use client'
import styles from './page.module.css'
import { COLORS, MENU_ITEMS } from '../constants'
import { useSelector } from 'react-redux'
import { RootState } from '@/store/store'

const page = () => {
  const activeMenuItem = useSelector((state: RootState) => state.menu.activeMenuItem)

  const showStrokeOption = activeMenuItem === MENU_ITEMS.PENCIL;
  const showBrushOption = activeMenuItem === MENU_ITEMS.PENCIL || activeMenuItem === MENU_ITEMS.ERASER;


  const UpdateBrushSize = () => {

  }


  return (
    <div className={styles.toolboxContainer} >
      {
        showStrokeOption && (
          <div className={styles.toolItem} >
            <h4 className={styles.toolText} >Stroke Color</h4>
            <div className={styles.itemContainer} >
              <div className={styles.colorBox} style={{ backgroundColor: COLORS.BLACK }} />
              <div className={styles.colorBox} style={{ backgroundColor: COLORS.RED }} />
              <div className={styles.colorBox} style={{ backgroundColor: COLORS.GREEN }} />
              <div className={styles.colorBox} style={{ backgroundColor: COLORS.BLUE }} />
              <div className={styles.colorBox} style={{ backgroundColor: COLORS.ORANGE }} />
              <div className={styles.colorBox} style={{ backgroundColor: COLORS.YELLOW }} />
              <input type="color" className={styles.colorBox} />
            </div>
          </div>
        )
      }
      {
        showBrushOption && (
          <div className={styles.toolItem} >
            <h4 className={styles.toolText} >Brush Size</h4>
            <div className={styles.itemContainer} >
              <input type="range" min={1} max={10} step={1} onChange={() => { UpdateBrushSize() }} />
            </div>
          </div>
        )
      }
    </div>
  )
}

export default page
