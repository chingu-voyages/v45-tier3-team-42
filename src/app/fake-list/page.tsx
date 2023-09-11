import ItemsList from 'components/ItemsList'
{/* <ItemsList/> */ }
import Image from 'next/image';
import { HiOutlineShare, HiMiniMap, HiMiniChatBubbleLeftRight, HiOutlineArrowTopRightOnSquare, HiMiniCheckBadge, HiHandThumbUp, HiHandThumbDown, HiOutlineClock } from "react-icons/hi2";

const items = [
  {
    id: "d1f21d3g15d1gf5",
    title: "Blister Pokémon Arcanine Escarlate",
    image: "/items/fake1.png",
    coupon: "CUPOMCODE",
    category: "categorie",
    seller: "Amazon",
    price: "12.34",
    comments: [
      { id: "ds321fsdf", content: "las dakjsdakj dajks djk" },
      { id: "3a2sd1s2d", content: "sakjdn ajks djaks dkjsa" },
      { id: "as3d1sd6w", content: "klsjflkndsf sdfkn sldfk" }
    ],
    created_date: "01 jan 2022",
    location: ["45N54.2356", "-45.98739874"],
    likes: 435,
    description: "description asndlasndkans kdaskld askld askd aslkd alks description asd asdl askd asldk",
    link: "https://google.com"
  },
  {
    id: "sd54f5sd4f6sd",
    title: "Blister Pokémon Arcanine Escarlate",
    image: "/items/fake2.png",
    coupon: "CUPOMCODE2",
    category: "categorie2",
    seller: "Primark",
    price: "34.21",
    comments: [
      { id: "ds321fsdf", content: "las dakjsdakj dajks djk" },
      { id: "3a2sd1s2d", content: "sakjdn ajks djaks dkjsa" },
      { id: "as3d1sd6w", content: "klsjflkndsf sdfkn sldfk" }
    ],
    created_date: "04 dec 2023",
    location: ["45N54.2356", "-45.98739874"],
    likes: 247,
    description: "description 2 description 2 kdaskld askld askd aslkd alks description asd asdl askd asldk",
    link: "https://yahoo.com"
  },
]

export default function FakeList() {
  return (
    <ul role="list" className="divide-y divide-gray-100">
      {items.map((item) => (
        <div key={item.id} className="flex justify-between bg-white rounded-lg gap-x-6 m-4 p-5">
          <div className="flex min-w-0 gap-x-4">
            <Image width={146} height={146} className="rounded-md" src={item.image} alt="user" />
            <div className="flex flex-col justify-between">
              <p className="text-lg font-semibold text-gray-900">{item.title}</p>
              <div className="inline-flex items-center ">
                <span className="text-sm font-semibold text-gray-900">$ {item.price} - {item.seller}</span><HiMiniCheckBadge />
              </div>

              <div className="flex">
                <button type="button" className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-teal-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                  location
                  <HiMiniMap />
                </button>
                <button type="button" className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                  <HiHandThumbDown /> 123 <HiHandThumbUp />
                </button>
                <button type="button" className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                  <HiMiniChatBubbleLeftRight />
                  2
                </button>
              </div>

            </div>
          </div>


          <div className="flex justify-between flex-col">
            <div className="inline-flex items-end">
              <div className='flex'>
                <HiOutlineClock size={18} />
                <span className="text-sm text-gray-900 pl-2">{item.created_date}</span>
              </div>
              <button title='share' type="button" className="focus:outline-none pl-4">
                <HiOutlineShare size={22} className='text-teal-700'/>
              </button>

            </div>
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md bg-teal-700 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-teal-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              Details
              <HiOutlineArrowTopRightOnSquare size={18} className='ml-2'/>
            </button>
          </div>
        </div>
      ))}
    </ul>
  )
}
