import { useState, useEffect } from "react"
import api from "../API"

function useFetch(url) {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(false)

  async function fetchData(target_url) {
    await api
      .get(target_url)
      .then(res => {
        setData(res.data)
      })
      .catch(error => {
        setError(error.message || true)
      })

    setIsLoading(false)
  }

  useEffect(() => fetchData(url), [url])

  return { data, setData, isLoading, error }
}

export default useFetch
