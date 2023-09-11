"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { HiOutlineShare, HiMiniMap, HiMiniChatBubbleLeftRight, HiOutlineArrowTopRightOnSquare, HiMiniCheckBadge, HiHandThumbUp, HiHandThumbDown, HiOutlineClock } from "react-icons/hi2";
import { useRouter, usePathname } from 'next/navigation'

type Item = {
    item: {
        id: string,
        title: string,
        image: string,
        coupon: string,
        category: string,
        seller: string,
        price: string,
        comments: Array<any>,
        created_date: string,
        location: Array<any>,
        likes: number,
        description: string,
        link: string
    }
}

export default function CardItem({ item }: Item) {

    const [likes, setLikes] = useState(item.likes);
    const router = useRouter()
    const pathname = usePathname();
    const baseURL = "https://mychingu.com"
    
    const handleLocation = () => {
        alert('Location' + item.location[1]);
    };
    const handleLikeDown = () => {
       likes > 0 && setLikes(likes - 1)
    };
    const handleLikeUp = () => {
        setLikes(likes + 1);
    };
    const handleComments = () => {
        alert('comments');
    };
    const handleDetails = () => {
        router.push(`/blablalba/${item.id}`)
    };
    const handleShare = () => {
        alert(`${baseURL}/${pathname}/${item.id}`)
    };
    return (
        <div key={item.id} className="flex justify-between bg-white rounded-lg gap-x-6 m-4 p-5">
            <div className="flex min-w-0 gap-x-4">
                <Image width={146} height={146} className="rounded-md" src={item.image} alt="user" />
                <div className="flex flex-col justify-between">
                    <p className="text-lg font-semibold text-gray-900">{item.title}</p>
                    <div className="inline-flex items-center ">
                        <span className="text-sm font-semibold text-gray-900">$ {item.price} - {item.seller}</span><HiMiniCheckBadge />
                    </div>
                    <div className="flex">
                        <button onClick={handleLocation} type="button" className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-teal-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                            location
                            <HiMiniMap />
                        </button>
                        <div className="flex">
                            <button onClick={handleLikeDown} title='share' type="button" className="focus:outline-none px-2" >
                                <HiHandThumbDown size={22} className='text-teal-700' />
                            </button>
                            {likes}
                            <button onClick={handleLikeUp} title='share' type="button" className="focus:outline-none px-2" >
                                <HiHandThumbUp size={22} className='text-teal-700' />
                            </button>
                        </div>

                        <button onClick={handleComments} type="button" className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
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
                    <button onClick={handleShare} title='share' type="button" className="focus:outline-none pl-4" >
                        <HiOutlineShare size={22} className='text-teal-700' />
                    </button>
                </div>
                <button
                    type="button" onClick={handleDetails}
                    className="inline-flex items-center justify-center rounded-md bg-teal-700 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-teal-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                    Details
                    <HiOutlineArrowTopRightOnSquare size={18} className='ml-2' />
                </button>
            </div>
        </div>
    );
};

