const { Comment, Posts } = require('../models');

const commentController = {
    // Get comments
    getComments({params}, res) {
        Comment.find({animalId: params.animalId})
            .then(dbCommentData => {
                if (!dbCommentData) {
                    res.status(404).json({message: 'No comments on this post yet!'});
                }
                res.json(dbCommentData);
            })
    },
    // Add comment to post
    addComment({params, body}, res) {
        Comment.create(body)
            .then(({commentId}) => {
                return Posts.findOneAndUpdate(
                    {postId: params.postId},
                    {$push: {comments: commentId}},
                    {new: true}
                );
            })
            .then(dbCommentData => {
                if (!dbCommentData) {
                    res.status(404).json({message: 'Unable to post comment.'})
                }
                res.json(dbCommentData);
            })
            .catch(err => res.json(err));
    },
    // Remove comment
    removeComment({params}, res) {
        Comment.findOneAndDelete({commentId: params.commentId})
            .then(deletedComment => {
                if(!deletedComment) {
                    return res.status(404).json({message: 'No comment with this id!'});
                }
                return Posts.findOneandUpdate(
                    {postId: params.postId},
                    {$pull: {comments: params.commentId}},
                    {new: true}
                );
            })
            .then(dbPostData => {
                if(!dbPostData) {
                    res.status(404).json({message: 'No comments for this post found'});
                    return;
                }
                res.json(dbPostData);
            })
            .catch(err => res.json(err));
    }
};

module.exports = commentController;