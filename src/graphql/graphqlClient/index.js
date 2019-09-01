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
    })
      .then((response) => response.json())
      .then(({ data, errors }) => {
        if (!!errors) { // eslint-disable-line
          throw errors
        }
        return data
      })
  )
}
