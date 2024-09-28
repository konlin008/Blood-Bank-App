const userModel = require("../models/userModel")
const registerControler = async (req,res) => {
    try {
        const res = await userModel
    } catch (error) {
        console.log(error);
        res.status(500).send({
            sucsess: false,
            message:'Error in register API',
            error
        })
        
    }
};

module.exports = { registerControler };
