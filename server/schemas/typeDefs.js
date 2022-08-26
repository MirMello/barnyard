const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    barns: [Barn]
  }

  type Barn {
    _id: ID
    username: String
    name: String
    animals: [Animal]
    posts: [Post]
  }

  type Animal {
    _id: ID
    name: String
    gender: String
    username: String
    posts: [Post]
  }

  type Post {
    _id: ID
    postText: String
    createdAt: String
    username: String
    comments: [Comment]
  }

  type Comment {
    _id: ID
    commentBody: String
    createdAt: String
    username: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    users: [User]
    animal(username: String): Animal
    animals: [Animal]
    barns(username: String): [Barn]
    barn(_id: ID!): Barn
    user(username: String!): User
    posts(username: String): [Post]
    post(_id: ID!): Post
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    deleteUser(email: String!): User
    addBarn(username: String!, name: String!): Barn
    addPost(username: String!, postText: String!): Post
    addComment(CommentId: ID!, commentBody: String!): Post
    addAnimal(animalId: ID!): User
  }
`;

module.exports = typeDefs;