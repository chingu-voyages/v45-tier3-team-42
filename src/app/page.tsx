import Image from 'next/image'
import ItemsList from './components/ItemsList'


export default async function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <ItemsList/>
    </main>
  )

}

