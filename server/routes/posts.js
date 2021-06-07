const express = require('express');

const getPost = require('../controllers/posts');
const createPost = require('../controllers/posts');
const updatePost = require('../controllers/posts');
const deletePost = require('../controllers/posts');
const router = express.Router();


router.get('/', getPost);
router.post('/create', createPost);
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);
//router.patch('/:id/likePost', likePost);

//export default router;
module.exports = router;