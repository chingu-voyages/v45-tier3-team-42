'use client'
import Newsletter from "components/newsletter";
import Bloglist from "components/blogList";
import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter()

  const items = [
    {
      title: "Restaurant Booking App",
      subtitle: "Table made easy",
      icon: "restaurant.png",
      minutes: 30,
    },
    {
      title: "Restaurant Booking",
      subtitle: "Table reservations",
      icon: "restaurant.png",
      minutes: 30,
    },
    {
      title: "Booking App",
      subtitle: "Table reservations",
      icon: "restaurant.png",
      minutes: 30,
    },
  ];

  return (
    <main className="flex flex-col bg-gray-100  items-center justify-between p-20 w-full">
      <div className="flex justify-between w-4/5 mb-4 h-56">
        <div>
          <h1 className="text-gray-700 text-lg mb-4">
            Sustainable Savings, Healthy Choices.
            <br />Kind to Wallets, Gentle to
            Earth.{" "}
          </h1>
          <button
            type="submit"
            className="p-2 mt-4 w-40 bg-teal-700 border-none text-white text-base rounded-md cursor-pointer"
            onClick={() => router.push("/addItem")}
          >
            Add a new product
          </button>
        </div>

        <h2 className="text-lg text-red-700 w-80">Images here</h2>
      </div>
      <section className="flex justify-between w-4/5 mt-5">
        <h2 className="text-lg text-red-700 w-96"> Cards here</h2>
        <div className="flex flex-col">
          <Newsletter />
          <Bloglist items={items} />
        </div>
      </section>
    </main >
  );
}
