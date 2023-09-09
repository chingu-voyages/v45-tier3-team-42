import Newsletter from "components/newsletter";
import ListItem from "components/blogList";
import Image from "next/image";

export default function Home() {
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
    <main className="flex flex-col bg-gray-200  items-center justify-between p-20 w-full">
      <div className="flex justify-between w-3/5 mb-4">
        <div>
          <h1 className="text-black mb-4">
            Sustainable Savings, Healthy Choices.Kind to Wallets, Gentle to
            Earth.{" "}
          </h1>
          <button
            type="submit"
            className="p-2 w-40 bg-teal-700 border-none text-white text-base rounded-md cursor-pointer"
          >
            Add a new product
          </button>
        </div>

        <h2 className="text-lg text-red-700">Imagem aqui</h2>
      </div>
      <section className="flex justify-between w-3/5 mt-5">
        <h2 className="text-lg text-red-700"> Cards aqui</h2>
        <div className="flex flex-col">
          <Newsletter />
          <ListItem items={items} />
        </div>
      </section>

    </main>
  );
}
