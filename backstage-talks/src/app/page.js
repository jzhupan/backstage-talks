'use client'

import { BodyText } from "./Components/BodyText"
import { Header } from "./Components/Header"
import { Footer } from "./Components/Footer"
import { SidebarNav } from "./Components/SidebarNav"
import { ScrollContent } from "./Components/ScrollContent"

export default function Home() {
  return (
    <div className="home-container">
      <Header />
      <ScrollContent />
      <SidebarNav />
      <BodyText /> 
      <Footer />
    </div>
  )
}
