const { NODE_ENV } = process.env

export const apiBaseUrl = NODE_ENV !== 'production' ? 'http://localhost:1000' : 'https://veiaco-app.herokuapp.com'
