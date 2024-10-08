import axios from "axios"
import { useState, useEffect } from "react"

function Sugistion() {
    const [account, setAccount] = useState([])
    useEffect(() => {
        axios
            .get('https://66f0eef8f2a8bce81be7056d.mockapi.io/user')
            .then(function (response) {
                setAccount(response.data)
            })
    }, [])
    return (
        <div className='w-[22vw] h-[25vh] flex flex-col items-end p-[10px] rounded-[15px] border-[1px] border-gray-700'>
            <p className="text-[20px] font-bold">قد يعجبك</p>
            {account.map(item => (
                <div key={item.id} className="w-[100%] flex flex-row-reverse justify-between py-[10px] gap-x-[1rem]">
                    <div className="flex">
                        <div className="flex gap-x-[5px] px-[5px]">
                            <p className="text-gray-600">{item.fname}</p>
                            <p className="">{item.username}</p>
                        </div>
                        <img src={item.image} className="w-[40px] h-[40px] rounded-[50%] bg-slate-600"></img>
                    </div>
                    <button className="h-[30px] px-[15px] font-medium bg-slate-200 text-black rounded-[50px]">متابعة</button>
                </div>
            ))}
        </div>
    )
}

export default Sugistion
