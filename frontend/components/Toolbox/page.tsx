'use client'
import styles from './page.module.css'
import { COLORS, MENU_ITEMS } from '../constants'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/store/store'
import { setColor, setSize } from '@/slice/ToolBarSlice'
import { ChangeEvent } from 'react'

const page = () => {
  const activeMenuItem = useSelector((state: RootState) => state.menu.activeMenuItem);
  const { color } = useSelector((state: RootState) => (activeMenuItem === MENU_ITEMS.PENCIL) ? state.tool.PENCIL : state.tool.ERASER)
  const dispatch = useDispatch();

  const showStrokeOption = activeMenuItem === MENU_ITEMS.PENCIL;
  const showBrushOption = activeMenuItem === MENU_ITEMS.PENCIL || activeMenuItem === MENU_ITEMS.ERASER;

  const UpdateBrushSize = (e:ChangeEvent<HTMLInputElement>) => {
    dispatch(setSize({item:activeMenuItem,size:parseInt(e.target.value)}))
  }

  const UpdateColor = (newColor:string) => {
    dispatch(setColor(newColor))
  }

  return (
    <div className={styles.toolboxContainer} >
      {
        showStrokeOption && (
          <div className={styles.toolItem} >
            <h4 className={styles.toolText} >Stroke Color</h4>
            <div className={styles.itemContainer} >
              <div className={`${styles.colorBox} ${(color === COLORS.BLACK) ? ' active:bg-[#FFD0EC] p-1' : ' p-1' }`} onClick={()=>UpdateColor(COLORS.BLACK)} style={{ backgroundColor: COLORS.BLACK }} />
              <div className={`${styles.colorBox} ${(color === COLORS.RED) ? ' active:bg-[#FFD0EC] p-1' : ' p-1' }`}  onClick={()=>UpdateColor(COLORS.RED)} style={{ backgroundColor: COLORS.RED }} />
              <div className={`${styles.colorBox} ${(color === COLORS.GREEN) ? 'active:bg-[#FFD0EC] p-1' : ' p-1' }`} onClick={()=>UpdateColor(COLORS.GREEN)} style={{ backgroundColor: COLORS.GREEN }} />
              <div className={`${styles.colorBox} ${(color == COLORS.BLUE) ? 'active:bg-[#FFD0EC] p-1' : ' p-1' }`} onClick={()=>UpdateColor(COLORS.BLUE)} style={{ backgroundColor: COLORS.BLUE }} />
              <div className={`${styles.colorBox} ${(color === COLORS.ORANGE) ? 'active:bg-[#FFD0EC] p-1' : ' p-1' }`} onClick={()=>UpdateColor(COLORS.ORANGE)} style={{ backgroundColor: COLORS.ORANGE }} />
              <div className={`${styles.colorBox} ${(color === COLORS.YELLOW) ? 'active:bg-[#FFD0EC] p-1' : ' p-1' }`} onClick={()=>UpdateColor(COLORS.YELLOW)} style={{ backgroundColor: COLORS.YELLOW }} />
              <input type="color" onChange={(e)=>{UpdateColor(e.target.value)}} className={styles.colorBox} />
            </div>
          </div>
        )
      }
      {
        showBrushOption && (
          <div className={styles.toolItem} >
            <h4 className={styles.toolText} >Brush Size</h4>
            <div className={styles.itemContainer} >
              <input type="range" min={1} max={10} step={1} onChange={(e) => { UpdateBrushSize(e) }} />
            </div>
          </div>
        )
      }
    </div>
  )
}

export default page
