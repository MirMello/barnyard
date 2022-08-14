const {Posts, Animals} = reqiure('../models');

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
    createPost({params, body}, res) {
        Posts.create(body)
            .then(({postId}) => {
                return Animals.findOneAndUpdate(
                    {animalId: params.animalId},
                    {$push: {animals: postId}},
                    {new: true}
                );
            })
            .then(dbAnimalData => {
                if(!dbAnimalData) {
                    return res.status(404).json({message: 'No animal with this id found!'});
                }
                res.json(dbAnimalData);
            })
            .catch(err => res.json(err));
    },
    // Update Post
    updatePost({params, body}, res) {
        Posts.findOneAndUpdate({postId: params.postId}, body, {new: true, runValidators: true})
            .then(dbPostData => {
                if(!dbPostData) {
                    return res.status(404).json({message: 'No post with this id found!'});
                }
                res.json(dbPostData);
            })
            .catch(err => res.json(err));
    },
    // Delete Post
    deletePost({params}, res) {
        Posts.findOneAndDelete({postId: params.postId})
            .then(dbPostData => res.json(dbPostData))
            .catch(err => res.json(err));
    }
};

module.exports = postsController;