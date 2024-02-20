'use client'
import { useEffect, useRef } from 'react'
import styles from './page.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/store/store'
import { MENU_ITEMS } from '../constants'

export default function Board() {
  const activeMenuItem = useSelector((state: RootState) => state.menu.activeMenuItem);
  const { color, size } = useSelector((state: RootState) => (activeMenuItem === MENU_ITEMS.PENCIL) ? state.tool.PENCIL : state.tool.ERASER)

  const canvasref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasref.current) return;
    const canvas = canvasref.current;
    if (canvas) {
      const context = canvas.getContext("2d");
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
  }, []);

  return (
    <canvas ref={canvasref}></canvas>
  )
}
