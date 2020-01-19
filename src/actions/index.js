const { NODE_ENV } = process.env

export const apiBaseUrl = NODE_ENV !== 'production' ? 'http://localhost:8010/' : 'https://veiaco-api.herokuapp.com/'
