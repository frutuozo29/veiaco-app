export const login = (username, password) => (`
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
