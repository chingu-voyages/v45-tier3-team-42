import Link from "next/link";
import { HiPencilAlt } from "react-icons/hi";
import RemoveBtn from "./RemoveBtn";



const getItems = async () => {
  try {
    const res = await fetch(`${process.env.API_URL}/api/items/`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch items");
    }
    return res.json();
  } catch (error) {
    console.log("Error loading items: ", error);
  }
};

export default async function ItemsList() {
  const  items  = await getItems();

  return (
    <>
      {items.map((item:any) => (
        <div
          key={item._id}
          className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start"
        >
          <div>
            <h2 className="font-bold text-2xl">{item.name}</h2>
            <div>{item.description}</div>
          </div>

        <div className="flex gap-2">
            <RemoveBtn id={item._id} />
            <Link href={`/editItem/${item._id}`}>
              <HiPencilAlt size={24} />
            </Link>
          </div>
         </div>
      ))}
    </>
  );
}

