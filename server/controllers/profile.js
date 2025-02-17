const renderERror = require("../utils/renderError");



// exports.createProfile = (req, res, next) => {
//   try {
//     // code body
//     console.log('hello create profile')
    
//     res.json({message: 'hello create profile'})
//     res.json({ message: "Hello createProfile" });  
//   } catch (error) {
//     console.log(error.message);
//     res.status(500).json({message:"server error"})
//     // next(error);
//   }
// }



exports.createProfile = (req, res, next) => {
  try {
    // code body
    const { firstname, lastname, clerkid } = req.body;

    console.log(req.header)
    console.log(firstname, lastname, clerkid)
    
    console.log("Hello createProfile");
    res.json({ message: "Hello createProfile" });  
  } catch (error) {
    console.log(error.message);
    next(error);
  }
}