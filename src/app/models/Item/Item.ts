import mongoose, { Document, model, Model, Schema } from 'mongoose'

export interface IItem extends Document {
  name: string
  description: string
  title: string
  image:string
  coupon: string
  category: string
  seller:string
  price: number
  comments: []
  created_date: string
  location: string
  likes: number
  link: string
}

const ItemSchema: Schema = new Schema({
  name: {
    type: String
  },
  description: {
    type: String
  },
  title: {
    type: String
  },
  image : {
    type: String
  },
  coupon: {
    types: String
  },
  category: {
    type: String
  },
  seller: {
    type: String
  },
  price: {
    type: String
  },
  comment: {
    type:[]
  },
  created_date:
 { type: Date, default: Date.now },
  location: {
    type: String
  },
  likes: {
    type: String
  },
  link: {
    type: String
  }
})

export const Item = (mongoose.models.Item ||
  model('Item', ItemSchema)) as Model<IItem>
