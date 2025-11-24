import jwt from "jsonwebtoken";

export const generateToken = (userId,res)=>{
    const token = jwt.sign({userId},process.env.JWT_SECRET,
       { expiresIn: "7d",} 
    );
    res.cookie("jwt",token,{
        maxAge:7*24*60*60*1000, //miliseconds
        httpOnly:true, //prevent XSS attacks cross-side scrpting
        sameSite:"strict", //prevents CSRF attacks
        secure: process.env.NODE_ENV === "development" ? false : true,

    });

    return token;
}

//if we are in development the URL is http:// and when in production URL will be https:// therefore we have to write secure field as if condition