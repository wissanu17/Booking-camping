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
    // code body คำถาม คือ req มาจากไหน
    const { firstname, lastname } = req.body;

    // console.log(req.headers.authorization)
    // console.log(firstname, lastname, clerkid)

    console.log(req.user)
    //console.log(req.body)
    
    console.log("Hello createProfile at controller");
    res.json({ message: "Hello createProfile at controller" });  
  } catch (error) {
    console.log(error.message);
    next(error);
  }
}