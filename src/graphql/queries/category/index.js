import { gql } from 'apollo-boost'

export const GET_ALL_CATEGORIES = gql`
  query Get_All_Categories {
    categories {
      _id
      description
      subCategories {
        description
        typeValue
      }
    }
  }
`
