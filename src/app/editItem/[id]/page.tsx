import EditItemForm from "@/app/components/EditItemForm";


async function getItemById(id:string){

  try {
    const res = await fetch(`${process.env.API_URL}/api/items/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch item");
    }

    return res.json();

  } catch (error) {
    console.log(error);
  }
};

export default async function EditItem({ params }:any) {
  const { id } = params;


  const  { item } = await getItemById(id);


  return <EditItemForm id={id} {...item} />
}
