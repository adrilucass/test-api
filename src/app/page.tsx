'use client'

import axios from "axios"
import { useEffect, useState } from "react"

interface arrayProps {
  userId: number,
  id: number,
  title: number,
  body: string
}

export default function Page() {
  const [data, setData] = useState([])

  useEffect(() => {
    async function GetData() {
      const api = await axios.get("https://jsonplaceholder.typicode.com/posts")
      setData(api.data)
    }

    GetData()
  }, [])



  return (
    <main>
      {
        data.map((props: arrayProps) => (
          <div key={props.id}>
            <h1>{props.userId}</h1>
            <h1>{props.title}</h1>
            <h1>{props.body}</h1>
          </div>
        ))
      }
    </main>
  )
}