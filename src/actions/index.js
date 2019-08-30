const { NODE_ENV } = process.env

export const apiBaseUrl = NODE_ENV !== 'production' ? 'https://veiaco-api.herokuapp.com/' : 'https://veiaco-app.herokuapp.com'
