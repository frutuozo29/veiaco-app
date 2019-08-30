/* eslint-env browser */
export default (url, query, token) => {
  const headers = {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json'
  }

  return (
    fetch(url, {
      method: 'POST',
      headers: (headers || {}),
      body: JSON.stringify({ query })
    }).then((response) => {
      console.log(response)
      return response.json()
      
      })
  )
}
