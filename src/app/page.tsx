'use client'

import axios from "axios";
import { useState } from "react";

export default function Home() {
  const[textWithoutDDD, setDDD] = useState("Without DDD to display")

  async function puxaddd() {
    const Puxarddd = await axios.get("https://brasilapi.com.br/api/ddd/v1/42")
    setDDD("The state of this DDD is " + Puxarddd.data.state)
  }

  return (
    <main>
      <div className="h-dvh flex flex-col justify-center items-center gap-10">
        <h1 className="text-2xl">{textWithoutDDD}</h1>

        <button onClick={puxaddd} className="p-2 bg-purple-800 rounded-md">Get state of this DDD</button>
      </div>
    </main>
  );
}
