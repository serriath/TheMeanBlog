const express = require('express');
const Post = require('../models/post');
const router = new express.Router();

router.get('/posts', async (req, resp) => {
    try {
        const posts = await Post.find({});
        resp.status(200).send(posts);
    }
    catch (ex) {
        resp.status(500).send(ex);
    }
});

router.post('/posts', async (req, resp) => {
    const post = new Post(req.body);

    try {
        await post.save();
        resp.status(201).send(post);
    } catch (ex) {
        resp.status(500).send(ex);
    }
});

module.exports = router;