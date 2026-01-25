import { asyncHandler } from "../utils/asyncHandler.js";


const registerUser = asyncHandler(async (req,res) => {
    // things required
    // get user details from frontend
    // validation - not empty
    // check if user already requests : username, email
    // check for images, check for avatar
    // upload them to cloudinary, avatar
    // create user Object - create entry in DB using .create
    // remove password and refresh token field from response 
    // check for user creation
    // return res

    const {fullName, email, username, password} = req.body
    console.log("email:", email)

})

export {registerUser}
