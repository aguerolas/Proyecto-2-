const postControllers = require('./posts.controllers');

const getAllP= (req, res) => {
    const data = postControllers.getAllPosts()
    res.status(200).json({
        items: data.length,
        post: data
    })
}

const registerPost = (req ,res) => {
    const data = req.body  //duda
    const userId = req.user.id //duda
    if(
        !data.title || 
        !data.content 
    ){
        return res.status(400).json({
            message: 'All fields must be completed',
            fields: {
                title: 'string', content: 'string'
            }
        })
    } else {
        const response = postControllers.createUser(data, userId)
        return res.status(201).json({
            message: `User created succesfully with id: ${response.id}`,
            user: response
        })
    }
}








const getByIdP = (req, res) => {
    const id= req.params.id
    const data = userControllers.getUserById(id)
    if (data) {
        res.status(200).json(data)
    }
    else {
        res.status(404).json({message:`El usuario con el id: ${id} no esta en la existencia de este humilde DB, chab0n`})
    }
}









//const getMyPosts = (req, res) => {}


const myRemove = (req, res) => {
    const id= req.params.id  //duda
    const data = postControllers.deletePost(id)
    if (data) {
        return res.status(204).json({message:'user successfully removed', fields:{id: id}})
    }
    else {
        return res.status(400).json({message: 'user not found' })
    }
}
const myEdit = (req, res) => {
    const id= req.user.id
    const data = req.body //duda
    if (!Object.keys(data).length) {
        res.status(400).json({message: 'missing data, dude'})
    }
    else if ( 
        !data.title || 
        !data.content ||
        !data.header_image 
        ) {
    return res.status(400).json({
        id: "",
	    title: "string",
	    content:"string",
	    header_image: "url_to_img",
      }
    );
  } else {
    const response = postControllers.editPost(id, data)
    return res.status(200).json({
      message: 'User edited succesfully',
      user: response
    })
  }
};
module.exports = {
    getAllP,
    getByIdP, 
    registerPost, 
    myRemove, 
    myEdit
  };    