import { gql } from 'apollo-boost'

export const CREATE_CATEGORY = gql`
    mutation createCategory(
    $name: String!,
    $subCategories: [SubCategoriesInput]
  ) {
    createCategory(
      input: {
        name: $name
        subCategories: $subCategories
      }
    ) {
      _id
      name
      subCategories {
        _id
        description
        typeValue
      }
    }
  }
`
