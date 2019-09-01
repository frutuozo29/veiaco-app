const { NODE_ENV } = process.env

export const apiBaseUrl = NODE_ENV !== 'production' ? 'http://localhost:9000/' : 'https://veiaco-api.herokuapp.com/'
