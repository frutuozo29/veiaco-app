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
        console.log('inicio', errors)
        if (!!errors) { // eslint-disable-line
          console.log('passou aqui thow', errors)
          throw errors
        }
        console.log('erro e passou aqui', data)
        return data
      })
  )
}
