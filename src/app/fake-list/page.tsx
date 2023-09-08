import ItemsList from 'components/ItemsList'
{/* <ItemsList/> */ }
import Image from 'next/image';
import { HiOutlineShare,HiMiniChatBubbleLeftRight,HiOutlineArrowTopRightOnSquare,HiMiniCheckBadge,HiHandThumbUp, HiHandThumbDown,HiOutlineClock } from "react-icons/hi2";

const items = [
  {
    id: "d1f21d3g15d1gf5",
    title: "title item blablab lab lab lab",
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
    created_date: "01/25/2023",
    location: ["45N54.2356", "-45.98739874"],
    likes: 435,
    description: "description asndlasndkans kdaskld askld askd aslkd alks description asd asdl askd asldk",
    link: "https://google.com"
  },
  {
    id: "sd54f5sd4f6sd",
    title: "title 2 blablab lab lab lab",
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
    created_date: "04/16/2022",
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
        <li key={item.id} className="flex justify-between gap-x-6 py-5">
          <div className="flex min-w-0 gap-x-4">
              <Image width={146} height={146} className="rounded-md" src={item.image} alt="user" />
            <div className="min-w-0 flex-auto">
              <p className="text-sm font-semibold leading-6 text-gray-900">{item.title}</p>
              <p className="mt-1 truncate text-xs leading-5 text-gray-500">{item.description}</p>
            </div>
          </div>
          <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
            <p className="text-sm leading-6 text-gray-900">{item.category}</p>
              <p className="mt-1 text-xs leading-5 text-gray-500">
                Last seen <time dateTime={item.created_date}>{item.created_date}</time>
              </p>
          </div>
        </li>
      ))}
    </ul>
  )
}
