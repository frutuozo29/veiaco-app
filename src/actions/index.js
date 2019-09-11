const { NODE_ENV } = process.env

export const apiBaseUrl = NODE_ENV !== 'production' ? 'http://localhost:9001/' : 'https://veiaco-api.herokuapp.com/'
