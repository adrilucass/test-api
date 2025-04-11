'use client'

import { useState } from "react"
import { StaffText } from "./staffText"



export default function Page() {

  const[isStaff, setStaff] = useState(false)

  function clickButtonStaff() {
    setStaff(true)
  }

  return(
    <div className="h-dvh flex flex-col justify-center items-center gap-5">
      <h1 className="text-2xl font-bold">O numero atual é </h1>

      <button onClick={clickButtonStaff} className="p-3 bg-purple-800 rounded-md">Clique aqui para adicionar mais um</button>

      {isStaff ? <StaffText /> : ""}
    </div>
  )
}