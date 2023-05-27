import React, { useState } from 'react'
import { toast } from 'react-toastify';

const Card = ({ info, index, setSelectedData, totalQuantity, selectedData }) => {
    const [checkAdd, setCheckAdd] = useState(false);
    const [quantity, setQuantity] = useState(0)
    return (
        <div>
            {/* card */}
            <div className="max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-500">
                <img className="object-cover w-full h-48 mt-2" src={info} />
                <div className="flex items-center justify-between px-4 py-2">
                    <h1 className="text-lg font-bold text-white">60Rs</h1>
                    {
                        checkAdd ?
                            (
                                <div className='flex justify-center items-center bg-slate-700 gap-4 rounded-xl px-4 text-xl text-white'>

                                    <button onClick={() => {
                                        if (quantity === 1) {
                                            setQuantity(0);
                                            setCheckAdd(false);
                                        }
                                        else {
                                            setQuantity((prev) => prev - 1);
                                        }
                                        totalQuantity.current -= 1;
                                    }}>-</button>

                                    <div>{quantity}</div>

                                    <button
                                        onClick={() => {
                                            if (totalQuantity.current < 8) {
                                                setQuantity((prev) => prev + 1);
                                                totalQuantity.current += 1;
                                                setSelectedData({
                                                    ...selectedData,
                                                    [index]: quantity
                                                })
                                            }else{
                                                toast.warn("Sorry cant add more than 8 ")
                                            }
                                        }}>+</button>

                                </div>
                            ) :
                            (
                                <button onClick={() => {
                                    if (totalQuantity.current < 8) {
                                        console.log("hi")
                                        setCheckAdd(true)
                                        setQuantity((prev) => prev + 1)
                                        totalQuantity.current += 1;
                                        setSelectedData({
                                            ...selectedData,
                                            [index]: 1
                                        })
                                    }
                                }} className="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">ADD</button>
                            )
                    }

                </div>
            </div>

        </div>

    )
}

export default Card
