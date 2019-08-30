/* eslint-env browser */
export default (url, body, token) => {
  const headers = {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/graphql'
  }

  return (
    fetch(url, {
      method: 'POST',
      headers: (headers || {}),
      body: JSON.stringify({ body })
    }).then((response) => response.json())
  )
}
