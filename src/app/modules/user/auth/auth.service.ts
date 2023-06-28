import httpStatus from "http-status";
import ApiError from "../../../../errors/ApiError";
import { User } from "../user.model";
import { ILoginUser } from "./auth.interface"
import bcrypt from 'bcrypt';

const loginUser = async (payload: ILoginUser) => {
    const {id, password} = payload;
    // check user exist ..
    const isUserExist = await User.findOne({id},
        {id:1,password:1,needsPasswordChange:1}
        ).lean()
    if(!isUserExist){
        throw new ApiError(httpStatus.NOT_FOUND, 'User dose not exist')
    }
    // match password
    const isPassMatch = await bcrypt.compare(password,isUserExist?.password)
    if (!isPassMatch) {
        throw new ApiError(httpStatus.UNAUTHORIZED, 'PASSWORD DOSE NOT MATCH')
    }
    // CREATE JWT TOKEN
    
    return {
    }
  }
  

export const AuthService = {
    loginUser,
}