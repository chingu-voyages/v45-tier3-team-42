import CardItem from 'components/CardItem'

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
    id: "sd54f5sdd4f6sd",
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
  {
    id: "d1f21d3g315d1gf5",
    title: "Blister Pokémon Arcanine Escarlate",
    image: "/items/fake3.png",
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
    id: "d2g15d1gf4dg154",
    title: "Super Product",
    image: "/items/fake6.png",
    coupon: "CUPOMCODE2",
    category: "Electronics",
    seller: "Best Buy",
    price: "45.67",
    comments: [
      { id: "ds321fsdf", content: "Great product!" },
      { id: "3a2sd1s2d", content: "I love it!" }
    ],
    created_date: "15 Feb 2023",
    location: ["34N12.3456", "-78.987654"],
    likes: 123,
    description: "An amazing product with great features.",
    link: "https://bestbuy.com/super-product"
  },
  {
    id: "ghd5s1gdf55151",
    title: "Fashionable Wearable",
    image: "/items/fake5.png",
    coupon: "FASHIONCODE",
    category: "Fashion",
    seller: "Fashionista Boutique",
    price: "99.99",
    comments: [
      { id: "ds321fsdf", content: "Looks fabulous!" },
      { id: "3a2sd1s2d", content: "Perfect for any occasion." }
    ],
    created_date: "10 Mar 2023",
    location: ["40N90.1234", "-60.987654"],
    likes: 89,
    description: "Stay stylish with this trendy wearable accessory.",
    link: "https://fashionistaboutique.com/fashionable-wearable"
  }
]

export default function FakeList() {
  return (<>
    {items.map((item) => (
      <CardItem key={item.id} item={item} />
    ))}
  </>
  )
}
