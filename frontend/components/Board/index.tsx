'use client'
import { useEffect, useRef } from 'react'
import styles from './page.module.css'

export default function Board() {
    const canvasref = useRef<HTMLCanvasElement>(null);

    useEffect(()=>{
        if(!canvasref.current) return;
        const canvas = canvasref.current;
        if(canvas){
            const context = canvas.getContext("2d");
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
    },[])

  return (
    <canvas ref={canvasref}></canvas>
  )
}
