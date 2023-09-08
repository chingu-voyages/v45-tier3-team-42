import Image from 'next/image'
import Newsletter from '@/components/newsletter'
import ListItem from '@/components/blogList'

export default function Home() {

  const items = [
    {
      title: 'Restaurant Booking App',
      subtitle: 'Table made easy',
      icon: 'restaurant.png',
      minutes: 30,
    },
    {
      title: 'Restaurant Booking',
      subtitle: 'Table reservations',
      icon: 'restaurant.png',
      minutes: 30,
    },
    {
      title: 'Booking App',
      subtitle: 'Table reservations',
      icon: 'restaurant.png',
      minutes: 30,
    },
  ];
  return (
    <>
      home

      <div className='flex flex-col items-center'>
        <Newsletter />
        <ListItem items={items} />
      </div>


    </>
  )
}
