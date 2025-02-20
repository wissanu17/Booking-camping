const cloudinary = require('cloudinary').v2

// Configuration
cloudinary.config({
  cloud_name: process.env.CLOUNDINAY_CLOUD_NAME,
  api_key: process.env.CLOUNDINAY_API_NAME,
  api_secret: process.env.CLOUNDINAY_API_SECRET, // Click 'View API Keys' above to copy your API secret
});

exports.createImages = async(req, res, next) => {
  try {
    console.log(req.body.image)
    const { image } = req.body
    const result = await cloudinary.uploader.upload(image, {
      public_id: `${Date.now()}`,
      resource_type: "auto",
      folder: "Landmark"
    })
    res.json({ result: result})
  } catch (error) {
    necxt(error)
  }
}