import { useState, useEffect } from "react"
import api from "../API"

function useFetch(url) {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(false)

  async function fetchData(target_url) {
    const res = await api.get(target_url)

    if (res.status >= 200 && res.status < 300) {
      setData(res.data)
    } else {
      setError(true)
    }
    setIsLoading(false)
  }

  useEffect(() => fetchData(url), [url])

  return { data, setData, isLoading, error }
}

export default useFetch
