import { prisma } from "@/prisma/client"
import { NextRequest, NextResponse } from "next/server"



export async function GET(request: NextRequest, {params}: {  params: Promise<{ id: string }>}){
     
    //get single replay
    const {id} = await params;
    const idNum = parseInt(id)
    const singleReplay = await prisma.replay.findUnique({
        where:{id: idNum}
    })

    return NextResponse.json(singleReplay)
}

export async function DELETE(request: NextRequest, {params}: {  params: Promise<{ id: string }>}){
     
    const {id} = await params;
    const idNum = parseInt(id)
    const deleteReplay = await prisma.replay.delete({
        where:{id: idNum}
    })

    return Response.json("successfully deleted")
}

export async function PATCH(request: NextRequest, {params}: {  params: Promise<{ id: string }>}){
     
    const {id} = await params;
    const idNum = parseInt(id)
    const body = await request.json();
    const newReplay = await prisma.replay.update({
        where:{
            id: idNum
        },
        data:{
        url   : body.url,
        thumbnail : body.thumbnail,
        title  : body.title,
        host   : body.host,
        date   : body.date,
        duration : body.duration,
        description : body.description
    }})

    return NextResponse.json(newReplay, {status:201})
}

