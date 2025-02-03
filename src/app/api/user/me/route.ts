import { getDataFromToken } from "@/helpers/GetDataFromToken";

import { NextRequest,NextResponse } from "next/server";
import User from "@/models/user.model.js";
import {connectDB} from "@/dbconfig/dnConfig";

connectDB()

export async function GET(request:NextRequest){
    try {
        const id =  await getDataFromToken(request);

        const user = await User.findOne({_id:id}).select("-password")

        return NextResponse.json({
            message:"User Found",
            data:user,
            success:true
        })
        

    } catch (error:unknown) {
        return NextResponse.json({
            error:(error as Error).message,
            status:400,
        })
    }
}


