"use client"
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { HiMiniBars3, HiOutlineBell, HiOutlineHeart, HiOutlineXMark, HiOutlineBookmark, HiOutlineMap } from 'react-icons/hi2'
import Image from 'next/image'
import Link from 'next/link'
const user = {
  name: 'Paul Pessoa',
  email: 'email@email.com',
  imageUrl: '/images/paulpessoa.jpg',
}
const navigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'Map Store', href: '/map', current: false },
]
const userNavigation = [
  { name: 'Your Profile', href: '/profile' },
  { name: 'My items', href: '/my-items' },
  { name: 'Favorites', href: '/favorites' },
  { name: 'Settings', href: '/settings' },
  { name: 'Sign out', href: '#' },
]

export default function Header() {
  return (
    <header className="bg-white shadow">

      <Disclosure as="nav" className="bg-white">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex h-16 items-center justify-between">
                <div className="flex items-center">
                  <div className="flex items-center">
                    <Link href="/">
                      <Image
                        width={50}
                        height={50}
                        className="h-8 w-8"
                        src="/images/ecobagain-logo.png"
                        alt="Your Company"
                      />
                    </Link>
                    <Link href="/">
                      <h1 className="text-2xl font-bold ml-2 text-teal-700 ">EcoBagain</h1>
                    </Link>
                  </div>
                  {/* <input type='text' alt='seila' placeholder='oioioi'></input> */}
                </div>

                <div className="hidden md:block">
                  {/* MENU ICONS */}
                  <div className="flex items-center">

                    <Link href="/favorites" legacyBehavior>
                      <a title="My favorites">
                        <button
                          type="button"
                          title='My favotires'
                          className="relative rounded-full bg-teal-800 p-1 text-white hover:text-white hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                        >
                          <HiOutlineHeart className="h-6 w-6" aria-hidden="true" />
                        </button>
                      </a>
                    </Link>

                    <Link href="/map" legacyBehavior>
                      <a title="Map store">
                        <button
                          type="button"
                          title='Store map'
                          className="relative rounded-full bg-teal-800 ml-2 p-1 text-white hover:text-white hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                        >
                          <HiOutlineMap className="h-6 w-6" aria-hidden="true" />
                        </button>
                      </a>
                    </Link>

                    <Link href="/alerts" legacyBehavior>
                      <a title="Alerts">
                        <button
                          type="button"
                          title='View notifications'
                          className="relative rounded-full bg-teal-800 ml-2 p-1 text-white hover:text-white hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                        >
                          <HiOutlineBell className="h-6 w-6" aria-hidden="true" />
                        </button>
                      </a>
                    </Link>


                    {/* Profile dropdown */}
                    <Menu as="div" className="relative ml-3">
                      <div>
                        <Menu.Button className="relative flex max-w-xs items-center rounded-full bg-teal-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                          <span className="absolute -inset-1.5" />
                          <span className="sr-only">Open user menu</span>
                          <Image width={64} height={64} className="h-8 w-8 rounded-full" src={user.imageUrl} alt="user" />
                        </Menu.Button>
                      </div>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >

                        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                          {userNavigation.map((item) => (
                            <Menu.Item key={item.name}>
                              <a
                                href={item.href}
                                className="block rounded-md p-2 mx-1 text-sm font-medium text-gray-700 hover:bg-teal-700 hover:text-white">
                                {item.name}
                              </a>
                            </Menu.Item>
                          ))}
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </div>


                </div>
                <div className="-mr-2 flex md:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md bg-teal-800 p-2 text-white hover:bg-teal-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <HiOutlineXMark className="block h-5 w-5" aria-hidden="true" />
                    ) : (
                      <HiMiniBars3 className="block h-5 w-5" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="md:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}

                    className={'text-gray-700 hover:bg-teal-700 hover:text-white block rounded-md px-3 py-2 text-sm font-medium'}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
              <div className="border-t border-gray-700 pb-3 pt-4">
                <div className="flex items-center bg- px-5">
                  <div className="flex-shrink-0">
                    <Image width={64} height={64} className="h-10 w-10 rounded-full" src={user.imageUrl} alt="" />
                  </div>
                  <div className="ml-3">
                    <div className="text-sm font-medium leading-none text-gray-600">{user.name}</div>
                    <div className="text-sm font-medium leading-none text-gray-400">{user.email}</div>
                  </div>
                  <button
                    type="button"
                    className="relative ml-auto flex-shrink-0 rounded-full bg-teal-800 p-1 text-white hover:text-white hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  >
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">View notifications</span>
                    <HiOutlineBell className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <div className="mt-3 space-y-1 px-2">
                  {userNavigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className="block rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-teal-700 hover:text-white"
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </header>
  )
}
