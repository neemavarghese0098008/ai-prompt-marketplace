//mongodb connection
import {connectionDB} from '@/lib/db'
import Prompt from '@/models/prompt'

//data model
// import Prompt from '@/models/prompt'
import { NextRequest,NextResponse } from 'next/server'

// get all prompts
export async function GET(request:NextRequest) {
    try{
        //connect to mongodb
        await connectionDB()
        //GET all prompt from mongodb
        const allPrompts = await Prompt.find()
        return NextResponse.json({
        message:"sudessfully get all the prompt",allPrompts
    })
    }
    catch(err){
          return NextResponse.json({
        message:"error while getting all the prompt",err
    })  
    }

    
    
}
//POST - ADD A prompt
export async function POST(request:NextRequest) {
    try{
        //connect to mongodb
        await connectionDB()
        //define request body
        const body = await request.json()

        //ADD prompt 
        const addPrompts = await Prompt.create(body)

        return NextResponse.json({
        message:"sudessfully add new prompt",prompt:addPrompts
    },{status:201})
    }
    catch(err){
        return NextResponse.json({
        message:"error while adding a prompt"+err
    },{status:500})  
    }   
}
