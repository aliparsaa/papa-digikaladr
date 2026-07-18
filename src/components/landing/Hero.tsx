"use client"
import { useEffect, useState, useRef } from "react"
import { Canvas } from "@react-three/fiber"
import * as THREE from "three"

export default function Hero() {
  // به جای usehooks-ts از State معمولی استفاده می‌کنیم
  const [show3D, setShow3D] = useState(false)

  useEffect(() => {
    // چک کردن سایز صفحه و ترجیحات کاربر برای انیمیشن
    const mediaQuery = window.matchMedia("(min-width: 769px)")
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    
    const checkStatus = () => {
      setShow3D(mediaQuery.matches && !motionQuery.matches)
    }

    checkStatus()
    mediaQuery.addEventListener("change", checkStatus)
    return () => mediaQuery.removeEventListener("change", checkStatus)
  }, [])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white"
    >
      {show3D && (
        <Canvas className="absolute inset-0 z-10" style={{ width: "100%", height: "100%" }}>
           {/* محتوای SceneContent اینجا قرار می‌گیرد */}
           <ambientLight intensity={0.5} />
        </Canvas>
      )}

      {/* بقیه کد (فال‌بک موبایل و متن‌ها) همان قبلی باشد */}
      <div className={`hero-fallback absolute inset-0 items-center justify-center ${show3D ? "hidden" : "flex"}`}>
        {/* ... */}
        <div className="text-center">
            <h2 className="text-4xl font-black text-med">نخ‌های لیفت استایژن</h2>
        </div>
      </div>
    </section>
  )
}
