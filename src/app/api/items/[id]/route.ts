
import {  Item } from "@/app/models/Item";
import { connectToDataBase } from "@/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";

connectToDataBase()

export async function PUT(req:NextRequest, { params }:any) {

  const {  name,  description } = await req.json();

  await Item.findByIdAndUpdate(params.id, { name , description });
  return NextResponse.json({ message: "Item updated" }, { status: 200 });
}

export async function GET(req:Request, { params }:any) {

  const { id } = params;
  const item = await Item.findOne({ _id: id });
  console.log(item)
  return NextResponse.json({ item }, { status: 200 });
}
