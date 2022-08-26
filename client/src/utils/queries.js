import { gql } from '@apollo/client';


export const QUERY_ANIMALS = gql`
query animals($username: String){
  animals(username: $username){
    _id
    name 
    gender
    posts
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
