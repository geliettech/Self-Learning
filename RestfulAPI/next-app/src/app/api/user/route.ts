import { NextResponse } from "next/server"

// POST method
export async function POST(req: Request){
    const data = await req.json();

        console.log("My data on server");
        console.log(data);
       return NextResponse.json({
        "message": "Hello world POSTMAN!",
        "data": data
    })
}

// GET Method
export async function GET(req: Request){
    return NextResponse.json({ "message": "Hello world from GET method!",})
}