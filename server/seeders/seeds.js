// const faker = require('faker');
const barnSeeds = require('./barnSeed.json');
const postSeeds = require('./barnPostSeed.json');
const stallSeeds = require('./stallSeed.json');
const stallPostSeeds = require('./stallPostSeed.json');
const db = require('../config/connection');
const { BarnPost, Barn, StallPosts, Stall } = require('../models');

db.once('open', async () => {
  try {
    await BarnPost.deleteMany({});
    await Barn.deleteMany({});

    await Barn.create(barnSeeds);

    for (let i = 0; i < postSeeds.length; i++) {
      const { _id, postAuthor } = await Post.create(BarnPostSeeds[i]);
      const barn = await Barn.findOneAndUpdate(
        { barnname: postAuthor },
        {
          $addToSet: {
            posts: _id,
          },
        }
      );
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});