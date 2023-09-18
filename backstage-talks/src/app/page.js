'use client'

import { BodyLayout } from "./Components/BodyLayout"
import { Header } from "./Components/Header"
import { Footer } from "./Components/Footer"

export default function Home() {
  return (
    <div>
      <Header />
      <BodyLayout />
      <Footer />
    </div>
  )
}
