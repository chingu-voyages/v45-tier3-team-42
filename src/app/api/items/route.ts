import { connectToDataBase } from '@/lib/mongodb'
import { IItem, Item } from '@/app/models/Item'
import { NextResponse } from 'next/server'


 connectToDataBase()

export async function GET() {

  try {
    const posts = await Item.find()
    return NextResponse.json(posts.reverse())
  } catch {
    return NextResponse.json('error', {
      status: 500
    })
  }
}

export async function POST(req: Request) {

  try {
    const body: IItem = await req.json()
    const newPost = new Item(body)
    const saved = await newPost.save()
    return NextResponse.json(saved)
  } catch {
    return NextResponse.json('error', {
      status: 500
    })
  }
}

export async function DELETE(req: Request) {
  const query = new URL(req.url).searchParams
  const id = query.get('id')
  try {
    const deletedPost = await Item.findByIdAndDelete(id)

    return NextResponse.json(deletedPost)
  } catch {
    return NextResponse.json(
      {
        error: 'Failed to remove post'
      },
      {
        status: 500
      }
    )
  }
}
