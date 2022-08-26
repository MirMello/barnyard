import { gql } from '@apollo/client';

export const ADD_USER = gql`
mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      user {
        username
        email
        password
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

  export const LOGIN_USER = gql`
mutation login($email: String!, $password: String!) {
      login(email: $email, password: $password) {
        user {
        email
        password
      }   
      token
    }
  }`