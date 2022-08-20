const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    barns: [Barn]
  }

  type Barn {
    _id: ID
    name: String
    animals: [Animal]
    posts: [Post]
  }

  type Animal {
    _id: ID
    name: String
    gender: String
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
    user(username: String!): User
    posts(username: String): [Post]
    post(_id: ID!): Post
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addPost(postText: String!): Post
    addComment(CommentId: ID!, commentBody: String!): Post
    addAnimal(animalId: ID!): User
  }
`;

module.exports = typeDefs;