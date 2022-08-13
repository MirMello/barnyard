const {Posts, Animals, Barn} = reqiure('../models');

const postsController = {
    // Get All Posts
    getAllPosts(req, res) {
        Animals.find({})
            .populate({
                path: 'posts',
                select: '-__v'
            })
            .select('-__v')
            .sort({postId: -1})
            .then(dbPostData => res.json(dbPostData))
            .catch(err => res.json(err));
    },
    // Get Post by Animal
    getAnimalPosts({params}, res) {
        Animals.findOne({animalId: params.animalId})
            .populate({
                path: 'posts',
                select: '-__v'
            })
            .select('-__v')
            .then(dbAnimalData => res.json(dbAnimalData))
            .catch(err => res.json(err));
    },
    // Create Post
    createPost({body}, res) {
        Barn.create(body)
            .populate({
                path: 'animals',
                select: '-__v'
            })
            .select('-__v')
            .then(dbBarnData => res.json(dbBarnData))
            .catch(err => res.json(err));
    }
}