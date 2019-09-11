export const mutationLogin = (username, password) => (`
  mutation {
    login(username: "${username}", password: "${password}") {
      user {
        name
        email
        username
      },
      token
    }
  }  
`)

export const mutationCheckToken = (token) => (`
  mutation {
    checkToken(token: "${token}") {
      user {
        name
        email
        username
      }
      token
    }
  }
`)
