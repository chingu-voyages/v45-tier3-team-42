import Newsletter from 'components/newsletter'
import Bloglist from 'components/blogList'

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
    <main className="flex bg-gray-200 h-max flex-col items-center justify-between p-24">
      <Newsletter />
      <Bloglist items={items} />
    </main>
  )

}
