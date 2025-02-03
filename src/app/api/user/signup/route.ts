import {connectDB} from "@/dbconfig/dnConfig";
import User from "@/models/user.model.js";
import { NextRequest, NextResponse } from "next/server";
import  bcrypt from "bcryptjs";



connectDB()

export async function POST(request:NextRequest){
    try {
         const reqBody = await request.json();
         console.log(reqBody);
         const {username , email , password } = reqBody;

         if(!email || !password || !username){
            return NextResponse.json({
                error:"All fields are required",
                status:400
            })
         }

         const user = await User.findOne({email});
         if(user){
            return NextResponse.json({
                error:"User Already Exists.",
                status:402,

            })
         }

         const hashPassword = async (password: string) => {
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);
            return hashedPassword;
          };
          

        

          const hashedpassword = await hashPassword(password);

          const newUser = new User({
            username,
            email,
            password:hashedpassword
           })

           const savedUser = await newUser.save();
           console.log(savedUser)
           return NextResponse.json({
            message:"Signup successfully",
            success:true,
            
       })

         

    
    } catch (error:unknown) {
        return NextResponse.json({
            success:false,
            message:"Login Unsuccessful",
            status:500,
            error:(error as Error).message
        })
    }
}
