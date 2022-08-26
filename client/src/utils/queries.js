import { gql } from '@apollo/client';


export const QUERY_ANIMALS = gql`
query animals {
  animals {
    _id
    name
    gender
    username
    posts {
      _id
      postText
      createdAt
      username
    }
  }
}
`

export const QUERY_POSTS = gql`
  query posts($username: String) {
    posts(username: $username) {
      _id
      postText
      createdAt
      username
      comments {
        _id
        createdAt
        username
        commentBody
      }
    }
  }
`;
