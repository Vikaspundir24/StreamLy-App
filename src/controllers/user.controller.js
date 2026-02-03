import { User } from "../models/user.model.js";
import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";

import {uploadOnCloudinary} from "../utils/cloudinary.js"

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
    console.log("email:", email);

    if(fullName === ""){
        throw new ApiError(400,"fullname is required")
    }
    else if(email === ""){
        throw new ApiError(400,"email is required")
    }
     else if(username === ""){
        throw new ApiError(400,"username is required")
    }
     else if(password === ""){
        throw new ApiError(400,"password is required")
    }


    const existedUser = User.findOne({
        $or: [{ username },{ email }]
    })

    if(existedUser){
        throw new ApiError(409, "User already exist");
    }

    const avatarLocalPath = req.files?.avatar[0]?.path;
    const converImageLocalPath = req.files?.coverImage[0]?.path;

    if(!avatarLocalPath) {
        throw newApiError(400,"Avatar files is required")
    }

})

export {registerUser}
