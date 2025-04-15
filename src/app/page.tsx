'use client'

import axios from "axios"
import { Loader } from "lucide-react"
import { useEffect, useState } from "react"

interface dataProps {
  postId: number,
  id: number,
  name: string,
  email: string,
  body: string
}

export default function Home() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function getDataInAPi() {
      try {
        const get = await axios.get("https://jsonplaceholder.typicode.com/posts/1/comments")
        setData(get.data)
        setLoading(false)
      } catch (err) {
        console.error("nao deu bom")
      }
    }

    getDataInAPi()
  }, [])

  return (
    <div className="h-dvh flex justify-center items-center py-10">
      <div className="bg-zinc-950 w-150 flex flex-col gap-2 justify-center items-center rounded-xl p-2">
        {
          loading ? <Loader className="animate-spin" /> : (
            data.map((elements: dataProps) => (
              <div key={elements.id} className="p-2 bg-zinc-900 rounded-md">
                <h1 className="text-xl font-semibold">{elements.name}</h1>
                <p className="text-zinc-400/70">{elements.email}</p>
                <p className="text-zinc-400/70">{elements.body}</p>
              </div>
            ))
          )
        }
      </div>
    </div>
  )
}
