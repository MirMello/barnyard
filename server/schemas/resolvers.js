const { AuthenticationError } = require('apollo-server-express');
const { User, Posts, Barn, Animal } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select('-__v -password')
            .populate('username')

        return userData;
      }

      throw new AuthenticationError('Not logged in');
    },
    users: async () => {
      return User.find()
        .select('-__v -password')
    },
    user: async (parent, { username }) => {
      return User.findOne({ username })
        .select('-__v -password')
    },
    barns: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Barn.find(params).sort({ createdAt: -1 });
    },
    barn: async (parent, { _id }) => {
      return Barn.findOne({ _id });
    },
    posts: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Posts.find(params).sort({ createdAt: -1 });
    },
    post: async (parent, { _id }) => {
      return Posts.findOne({ _id });
    }
  },

  Mutation: {
    addUser: async (parent, args) => {
      try {
      console.log('Hello World')
      const user = await User.create(args);
      const token = signToken(user);
      // const barn = await Barn.create({name: user.username + "'s Barn", userId: user._id});
      console.log(user);
      return { token, user };
      } catch(error){
        console.log(error);
      }
    },
    deleteUser: async (parents, { email }) => {
      try { const user = await User.findOne({ email })
      if (!user) {
        throw error
      }
        await User.findByIdAndDelete(
          { _id: user._id },
          { new: true }
        )
      } catch(error) {
        console.log(error)
      }
    },
    login: async (parent, { email, password }) => {
      console.log('Hello World')
     try { const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      if (password !== user.password) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);
      console.log(token);
      return { token, user };
    } catch(error){
      console.log(error);
    }
    },
    addBarn: async (parent, args, context) => {
     // if (!context.user) {
        console.log(context.user);
        const barn = await Barn.create({...args})//context.user.username});
        console.log(barn);
        // await User.findByIdAndUpdate(
        //   { _id: context.user._id },
        //   { $push: { barns: barn._id} },
        //   { new: true }
        // );


        return barn;
     // }
    },
    addPost: async (parent, args, context) => {
      // if (context.user) {
        let user = {
          
        }
        const post = await Posts.create({ ...args });//, username: context.user.username });

        // await User.findByIdAndUpdate(
        //   { _id: context.user._id },
        //   { $push: { posts: post._id } },
        //   { new: true }
        // );

        return post;
      // }

      throw new AuthenticationError('You need to be logged in!');
    },
    addComment: async (parent, { postId, commentBody }, context) => {
      if (context.user) {
        const updatedpost = await Posts.findOneAndUpdate(
          { _id: postId },
          { $push: { comments: { commentBody, username: context.user.username } } },
          { new: true, runValidators: true }
        );

        return updatedpost;
      }

      throw new AuthenticationError('You need to be logged in!');
    },
    addAnimal: async (parent, args , context) => {
      console.log('created animal')
      if (context.user) {
        const newAnimal = await Animal.create(args)
        console.log('new animal', newAnimal)
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { barns: newAnimal._id } },
          { new: true }
        ).populate('animals');

        return updatedUser;
      }

      throw new AuthenticationError('You need to be logged in!');
    }
  }
};

module.exports = resolvers;