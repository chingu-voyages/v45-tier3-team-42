"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Input from "./Inputs";

export default function EditItemForm({ id, name, description }:any) {

  const [UpdateItem, setUpdateItem] = useState({
    name: name,
    description: description
  })
  const router = useRouter();

  const handleSubmit = async (e:any) => {
    e.preventDefault();

    try {
      const res = await fetch(`/api/items/${id}`, {
        method: "PUT",
        cache: "no-store",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({...UpdateItem}),
      });

      if (!res.ok) {
        throw new Error("Failed to update item");
      }

      router.refresh();
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange =(event:any)=> {
    const { name, value } = event.target;
    setUpdateItem({
      ...UpdateItem,
      [name]: value,
    });
  }

  return (
    <form method="PUT" onSubmit={handleSubmit} className="flex flex-col gap-3">
      <label>Name</label>
      <Input
        value={UpdateItem.name}
        onChange={handleChange}
        type="text"
        name="name"
        placeholder={name}
      />
     <label>Description</label>
      <Input
        value={UpdateItem.description}
        onChange={handleChange}
        type="text"
        placeholder={description}
        name="description"
      />

      <button className="bg-green-600 font-bold text-white py-3 px-6 w-fit" type="submit">
        Update Post
      </button>
    </form>
  );
}
