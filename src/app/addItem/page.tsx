'use client'
import {  useState } from 'react'
import { useRouter } from 'next/navigation'

import Input from '@/app/components/Inputs'




export default function Create() {
  const router = useRouter()

  const [item, setItem] = useState({
    name: '',
    description: ''
  })



const handleChange =(event:any)=> {
  const { name, value } = event.target;
  setItem({
    ...item,
    [name]: value,
  });
}

const handleSubmit= async()=> {
try{
  const res = await fetch(`/api/items/`, {
    method: "POST",
    cache: "no-store",
    body: JSON.stringify({...item}),
  }
  );

  if (!res.ok) {
    throw new Error("Failed to update item");
  }

  router.refresh();
  router.push("/");
 }
catch(error){
  console.log(error);
}
}
  return (
    <div>
      <h1>Add item</h1>
      <form  method='POST' onSubmit={handleSubmit} className='flex flex-wrap w-full md:w-96 items-center justify-center space-y-2'>
        <div className='w-full'>
          <label>Name:</label>
          <Input
            value={item.name}
            name='name'
            onChange={handleChange}
            placeholder='Name'
            type="text"
          />
             <label>Description:</label>
           <Input
            value={item.description}
            name='description'
            onChange={handleChange}
            placeholder='Description'
            type='text'
          />
         <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}

