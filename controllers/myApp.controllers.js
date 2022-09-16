/* eslint-disable no-unused-labels */
/* eslint-disable no-unused-vars */
const myAppController = {};

myAppController.external = async (req, res) => {
    //you can do your functionality here
   console.log("entered function"); 
   res.send({
    status:200,
    message:"worked",
   })
}

module.exports = myAppController;
