
const mongoose = require('mongoose');
 
 const PostMessage = require('../models/postMessage');

 const getPost = async (req, res) => { 
  /// console.log('i am from get',res)

   try {
       const postMessages = await PostMessage.find();
       // console.log('i am from get1',postMessages)

       res.status(200).json(postMessages);

   } catch (error) {
       res.status(404).json({ message: error.message });
   }
  // return next(error);
}

const createPost = async (req, res) => {
   //console.log('i am from post',req,res)

   const post = req.body;
   //   console.log('i am from post1',post)

   const newPost = new PostMessage(post)
    try{
      console.log('req.body',newPost)

      await newPost.save();//this is also asyncrous task 
    
     // res.status(201).json(newPost);
     res.status(200).json({ message: 'created place.' });
   }catch (error){

      res.status(409).json({ message : error.message })
    
   }
  // return next(error);
   
   };

   const updatePost = async (req,res)=> {
      console.log('par',req.params)
      const { id } = req.params;
const post =  req.body;
      //const { title, message, creator, selectedFile, tags } = req.body;
      if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

     // const updatedPost = { creator, title, message, tags, selectedFile, _id: id };

      await PostMessage.findByIdAndUpdate(id, {...post,id}, { new: true });
//console.log('updated post id',_id)

res.status(200).json({ message: 'updated place.' });
   }

   const deletePost = async (req, res) => {
      const { id } = req.params;
  
      if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
  
      await PostMessage.findByIdAndRemove(id);
     console.log('deleted1')
     res.status(200).json({ message: 'Deleted place.' });
  }

//  const likePost = async (req, res) => {
//    const { id } = req.params;

//    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
   
//    const post = await PostMessage.findById(id);

//    const updatedPost = await PostMessage.findByIdAndUpdate(id, { likeCount: post.likeCount + 1 }, { new: true });
   
//    res.json(updatedPost);
// }

module.exports  = deletePost;

module.exports = createPost;

module.exports  = updatePost;
module.exports = getPost; 

    //module.exports  = likePost;

