import { NextRequest, NextResponse } from "next/server";
import {prisma} from "@/prisma/client";

export async function POST(request: NextRequest) {
    
    const body = await request.json();
   
    const newReplay = await prisma.replay.create({data:{
        url   : body.url,
        thumbnail : body.thumbnail,
        title  : body.title,
        host   : body.host,
        date   : body.date,
        duration : body.duration,
        description : body.description
    }});

    return NextResponse.json(newReplay, {status:201})
}

export async function GET(request: NextRequest){

    //get all the things and save them in a constant
    const replays = await prisma.replay.findMany()

    return NextResponse.json(replays)
}
