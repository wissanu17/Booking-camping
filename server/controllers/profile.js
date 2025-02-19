const renderERror = require("../utils/renderError");
const prisma = require('../config/prisma');


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

exports.createProfile = async (req, res, next) => {
  try {
    // code body คำถาม คือ req มาจากไหน
    const { firstname, lastname } = req.body;
    const { id } = req.user;
    const email = req.user.emailAddresses[0].emailAddress;

    // const profile = await prisma.profile.create({
    //   data:{
    //     firstname: firstname,
    //     lastname: lastname,
    //     clerkId: id,
    //     email
    //   }
    // })


    const profile = await prisma.profile.upsert({
      where: { clerkId: id },
      create: {
        firstname,
        lastname,
        email,
        clerkId: id
      },
      update: {
        firstname,
        lastname,
        email
      }
    })

    res.json({ result: profile, message: "Hello createProfile at controller" });
  } catch (error) {
    console.log(error.message);
    next(error);
  }
}