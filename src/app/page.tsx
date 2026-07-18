"use client"
import { Player } from "@remotion/player"
import { HeroRemotion} from "../components/HeroRemotion" // کامپوننت Remotion شما
import Navbar from "@/components/landing/Navbar"
import Hero from "@/components/landing/Hero"
import Products from "@/components/landing/Products"
import Education from "@/components/landing/Education"
import SpecsTable from "@/components/landing/SpecsTable"
import Footer from "@/components/landing/Footer"
import { ToastProvider } from "@/components/landing/Toast"

export default function Home() {
  return (
    <ToastProvider>
      <main className="relative">
        {/* هیروی ریموشن (مثلاً یک ویدئو/انیمیشن) */}
        <section className="h-screen flex items-center justify-center bg-white">
          <Player
            component={HeroRemotion}
            durationInFrames={120}
            compositionWidth={1920}
            compositionHeight={1080}
            fps={30}
            controls
            style={{ width: "100%", maxWidth: "1200px" }}
          />
        </section>

        {/* لندینگ پیج اصلی */}
        <Navbar />
        <Hero />
        <div className="h-px bg-linear-to-r from-transparent via-champagne to-transparent" />
        <Products />
        <Education />
        <SpecsTable />
        <Footer />
      </main>
    </ToastProvider>
  )
}