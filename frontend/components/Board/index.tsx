'use client'
import { useEffect, useRef } from 'react'
import styles from './page.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/store/store'
import { MENU_ITEMS } from '../constants'
import { actionItemClick, menuItemClick } from '@/slice/MenuSlice';

export default function Board() {
  const dispatch = useDispatch();
  const {activeMenuItem,actionMenuItem} = useSelector((state: RootState) => state.menu);
  const { color, size } = useSelector((state: RootState) => (activeMenuItem === MENU_ITEMS.PENCIL) ? state.tool.PENCIL : state.tool.ERASER)

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const contextRef = useRef<CanvasRenderingContext2D | null>(null);
  const shouldDraw = useRef(false);
  const drawHistory = useRef<ImageData []>([])
  const historyPointer = useRef<number>(0);

  useEffect(()=>{
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const context = contextRef.current;
    if(actionMenuItem === MENU_ITEMS.DOWNLOAD){
      const URL = canvas.toDataURL();
      const anchor = document.createElement('a');
      anchor.href = URL;
      anchor.download = 'sketch.jpg';
      anchor.click();
    } else if(actionMenuItem === MENU_ITEMS.UNDO || actionMenuItem === MENU_ITEMS.REDO){
      if(historyPointer.current > 0 && actionMenuItem === MENU_ITEMS.UNDO){
        historyPointer.current -= 1;
      }else if(actionMenuItem === MENU_ITEMS.REDO && historyPointer.current < drawHistory.current.length - 1){
        historyPointer.current += 1;
      }
      const imageData = drawHistory.current[historyPointer.current]
      context?.putImageData(imageData,0,0);
    }
    dispatch(actionItemClick(null!))
  },[actionMenuItem,,dispatch])

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const context = canvas.getContext("2d");
      contextRef.current = context;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
  }, []);

  useEffect(() => {
    if (!contextRef.current) return;

    const changeConfig = () => {
      contextRef.current!.strokeStyle = color;
      contextRef.current!.lineWidth = size;
    }

    changeConfig();
  }, [color, size]);

  useEffect(() => {
    if (!canvasRef.current || !contextRef.current) return;

    const canvas = canvasRef.current;
    const context = contextRef.current;

    const beginPath = (x: number,y: number)=>{
      context.beginPath();
      context.moveTo(x,y);
    }

    const drawline =(x: number,y: number) =>{
      context.lineTo(x,y);
      context.stroke();
    }

    const handleMouseDown = (e: MouseEvent) => {
      shouldDraw.current = true; 
      beginPath(e.clientX, e.clientY);
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (!shouldDraw.current) return;
      drawline(e.clientX,e.clientY);
    }

    const handleMouseUp = (e: MouseEvent) => {
      shouldDraw.current = false;
      const imageData = context.getImageData(0,0,canvas.width,canvas.height) //It is capturing data from 0,0 to max (height,width)
      if(drawHistory.current){
        drawHistory.current.push(imageData);
        historyPointer.current = drawHistory.current.length - 1;
      }
    }

    canvas.addEventListener('mousedown',handleMouseDown);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseup',  handleMouseUp);

    return () => {
      canvas.removeEventListener('mousedown',handleMouseDown);
      canvas.removeEventListener('mousemove',  handleMouseMove);
      canvas.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <canvas ref={canvasRef}></canvas>
  )
}