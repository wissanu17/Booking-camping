
// GET
exports.listCamping = (req, res) => {
  try {
    // body
    console.log("Hello Controller Potae")
    //console.log(roitai)
    res.send("Hello Controller Potae")
  } catch (error) {
    console.log(error.massage)
    res.status(500).json({ message: "Server Error" })
  }
}

// GET
exports.readCamping = (req, res) => {
  try {
    // code
    res.send("Hello Read Potae")
  } catch (error) {
    console.log(error.massage)
    res.status(500).json({ message: "Server Error" })
  }
}

// POST
exports.createCamping = (req, res) => {
  try {
    // code
    // const { title, price } = req.body
    // console.log(title)
    // console.log(price)
    res.send("Hello Create Potae")
  } catch (error) {
    console.log(error.massage)
    res.status(500).json({ message: "Server Error" })
  }
}

// PUT
exports.updateCamping = (req, res) => {
  try {
    // code
    // console.log(req.params.id)
    res.send("Hello PUT Update Potae")
  } catch (error) {
    console.log(error.massage)
    res.status(500).json({ message: "Server Error" })
  }
}

// DELETE
exports.deleteCamping = (req, res) => {
  try {
    // code
    res.send("Hello DELETE Potae")
  } catch (error) {
    console.log(error.massage)
    res.status(500).json({ message: "Server Error" })
  }
}