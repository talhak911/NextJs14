import { NextResponse } from "next/server";

export async function POST (req:any){
    console.log(req)
    const body= await req.json()
    return NextResponse.json({message:`your email is ${body.email}`})

}