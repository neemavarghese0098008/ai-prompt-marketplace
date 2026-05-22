//mongodb connection
import {connectionDB} from '@/lib/db'
import Prompt from '@/models/prompt'

//data model
// import Prompt from '@/models/prompt'
import { NextRequest,NextResponse } from 'next/server'

// get all prompts
export async function GET(request:NextRequest,{params}:{params:Promise<{id:string}>}) {
    try{
        //connect to mongodb
        await connectionDB()
        //GET an id from url
        const {id} = await params
        console.log(id);
        
        //GET a prompt from mongodb
        const getAPrompts = await Prompt.findById(id)
        console.log(getAPrompts);
        
        return NextResponse.json({
        message:"sudessfully get a prompt",getAPrompts
    })
    }
    catch(err){
          return NextResponse.json({
        message:"error while getting a prompt",err
    })  
    }

    
    
}

// Update a prompts
export async function PUT(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectionDB();

    const { id } = await params;

    const body = await req.json();

    const updatedPrompt = await Prompt.findByIdAndUpdate(
      id,
      body,
      { new: true }
    );

    return Response.json({
      success: true,
      updatedPrompt,
    });

  } catch (error) {
    console.log(error);

    return Response.json({
      success: false,
    });
  }
}

// delete a prompts
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {

    await connectionDB();

    const { id } = await params;

    console.log("DELETE ID:", id);

    const deletedPrompt = await Prompt.findByIdAndDelete(id);

    if (!deletedPrompt) {
      return NextResponse.json(
        {
          success: false,
          message: "Prompt not found",
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Successfully deleted prompt",
      deletedPrompt,
    });

  } catch (err) {

    console.log(err);

    return NextResponse.json(
      {
        success: false,
        message: "Error while deleting prompt",
        err,
      },
      { status: 500 }
    );
  }
}