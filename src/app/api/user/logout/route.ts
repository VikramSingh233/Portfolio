import { NextResponse } from "next/server";

export async function GET() {
    try {
        const response = NextResponse.json({ message: "Logout successful" ,success:true});
       
        response.cookies.set("token", "", { httpOnly: true, expires: new Date(0) });
        return response;
    } catch (error:unknown) {
        console.error("Logout failed", error);
        return NextResponse.json({ error: "Logout failed" }, { status: 500 });
    }
}