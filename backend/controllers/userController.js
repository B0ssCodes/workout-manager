const User = require('../models/userModel');
const jwt = require('jsonwebtoken');

const createToken = (_id) => {
    return jwt.sign({_id}, process.env.SECRET, {expiresIn: '3d'})
}

//login user
const loginUser = async (req, res) => {
    const {email, password} = req.body

    try{
        const user = await User.login(email, password);

        // create token
        const token = createToken(user._id)

        res.status(200).json({
            firstName: user.firstName,
            lastName: user.lastName,
            email: email,
            token
          })
    }
    catch (error){
        res.status(400).json({error: error.message})
    }
}

//signup user
const signupUser = async (req, res) => {
    const {firstName, lastName, email, password, recaptchaToken} = req.body

    try{
        const user = await User.signup(firstName, lastName, email, password, recaptchaToken);

        // create token
        const token = createToken(user._id)

        res.status(200).json({firstName, lastName, email, token})
    }
    catch (error){
        res.status(400).json({error: error.message})
    }
}

module.exports = {
    signupUser,
    loginUser
}