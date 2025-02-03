import { NextRequest,NextResponse } from "next/server";
import mailer from "@/helpers/mailer";

export async function POST(request:NextRequest){
    try {
        const reqBody = await request.json();
        console.log(reqBody);
        const {email,contactReason,message,name} = reqBody;
        await mailer({email,contactReason,message,name});
        return NextResponse.json({
            message:"Message Sent",
            success:true
        })
    } catch (error:unknown) {
        return NextResponse.json({
            error:(error as Error).message,
            status:400,
        })
    }
}