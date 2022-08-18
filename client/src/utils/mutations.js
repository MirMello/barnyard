import { gql } from '@apollo/client';

// export const LOGIN_USER = gql`
// mutation LoginUser($username: String!, $email: String!, $password: String!) {
//     addUser(username: $username, email: $email, password: $password) {
//       user {
//         username
//         email
//       }   
//       token
//     }
//   }`

export const ADD_USER = gql`
mutation AddUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      user {
        username
        email
      }   
      token
    }
  }`

export const ADD_ANIMAL = gql`
mutation addAnimal($gender: String!, $name: String!) {
    addAnimal(gender: $gender, name: $name) {
      user {
        name
        gender
      }   
      token
    }
  }`
