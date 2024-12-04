// const createPost = async (req, res) => {
//     const { title, content, image } = req.body;
  
//     if (!title || !content) {
//       return res.status(400).json({ message: 'Title and content are required' });
//     }
  
//     try {
//       const post = new Post({
//         title,
//         content,
//         image,
//         user: req.user.id, 
//       });
//       await post.save();
//       res.status(201).json(post);
//     } catch (error) {
//       res.status(500).json({ message: 'Error creating post', error });
//     }
//   };
  