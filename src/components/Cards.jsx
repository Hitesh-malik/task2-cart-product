import React from 'react'
import img from '../assets/1.jpg'
import img1 from '../assets/2.jpg'
import img2 from '../assets/3.webp'
import img3 from '../assets/4.jpg'
import img4 from '../assets/5.webp'
import img5 from '../assets/6.webp'
import img6 from '../assets/7.jpeg'
import img7 from '../assets/8.webp'
import img8 from '../assets/9.webp'
import img9 from '../assets/10.jpg'
import Card from './Card'
import { useRef } from 'react'

const Cards = ({ setSelectedData , selectedData}) => {
    const information = [
        img,
        img1,
        img2,
        img3,
        img4,
        img5,
        img6,
        img7,
        img8,
        img9
    ]
    const totalQuantity = useRef(0);
    return (
        <div className='flex flex-col gap-y-4 '>
            <div className='grid grid-cols-4 gap-20'>
                {
                    information.map((info, index) => (
                        <div className='h-[200px] w-[200px]' key={index}>
                            <Card setSelectedData={setSelectedData} index={index} info={info} totalQuantity={totalQuantity} selectedData={selectedData}/>
                        </div>
                    ))
                }
            </div>
        </div>

    )
}

export default Cards
