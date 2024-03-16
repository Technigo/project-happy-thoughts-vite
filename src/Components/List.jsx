import { useState, useEffect } from 'react'

export const List = () => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [list, setList] = useState([])
  const thoughtsAPI = 'https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts'

  useEffect(() => {
    fetch(thoughtsAPI)
      .then((response) => response.json())
      .then((list) => {
        const sortedList = list.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        )
        setList(sortedList)
        setLoading(false)
      })
      .catch((error) => {
        setError(error)
        setLoading(false)
      })
  }, [])

  const formatDate = (dateString) => {
    const options = {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }
    const date = new Date(dateString)
    return date.toLocaleString('en-US', options)
  }
  if (loading) {
    return <div>Loading....</div>
  }
  if (error) {
    return (
      <div>
        Error: we couldn<>&apos;</>t retrieve some data for you, try realoding
        the page.
      </div>
    )
  }

  return (
    <div className="listWrapper">
      {list.map((thought) => (
        <>
          <h2 key={thought._id}>{thought.message}</h2>
          <button>❤️</button>
          <span>x{thought.hearts}</span>
          <p>Created on {formatDate(thought.createdAt)}</p>
        </>
      ))}
    </div>
  )
}
