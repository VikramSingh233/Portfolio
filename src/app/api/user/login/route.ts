import User from "@/models/user.model";
import { NextRequest,NextResponse } from "next/server";
import {compare} from 'bcryptjs';
import { connectDB } from "@/dbconfig/dnConfig";
import jwt from 'jsonwebtoken';

connectDB()

export async function POST(request:NextRequest){
    try {
        const reqBody = await request.json();
        console.log(reqBody)
        const {email,password} = reqBody;

        if(!email || !password){
            return NextResponse.json({
                error:"All fields are required",
                status:400,
                success:false,
            })

        }

        const user = await User.findOne({email}).select("+password")
        console.log(user);
        if(!user){
            return NextResponse.json({
                
                error:"User does not exist",
                status:400
            })
           }

           const isPasswordCorrect = await compare(password,user.password);

           if(!isPasswordCorrect){
            return NextResponse.json({
                
                error:"Invalid credentials",
                status:400
            })
           }

           const tokenData = {
            id:user._id,
            username:user.username,
            email:user.email
        }
    
        const token = await jwt.sign(tokenData,process.env.TOKEN_SECRET!,{expiresIn:"1d"})

        const response = NextResponse.json({
            message:"Login successful",
            status:200,
            success:true,
        })
    
        response.cookies.set("token",token,{httpOnly:true,secure: process.env.NODE_ENV === "production",})

        return response;
    } catch (error:unknown) {
        return NextResponse.json({error:(error as Error).message,status:500});
    }
}


