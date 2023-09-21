'use client'

import { StaticText } from "./Components/StaticText"
import { ScrollContent } from "./Components/ScrollContent"




export default function Home() {


  return (
    <div className="home-container" >
      <StaticText />
      <ScrollContent />
    </div>
  )
}
