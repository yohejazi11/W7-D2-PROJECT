import { Link } from "react-router-dom"
import { GoHome } from "react-icons/go";
import { CiSearch } from "react-icons/ci";
import { IoNotificationsOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { GoPeople } from "react-icons/go";
import { FaXTwitter } from "react-icons/fa6";
import { IoPersonOutline } from "react-icons/io5";
import { CiCircleMore } from "react-icons/ci";
import { MdOutlineMoreHoriz } from "react-icons/md";

function Rightside() {
    const userName = sessionStorage.getItem('userName')
    const Fname = sessionStorage.getItem('Fname')
    return (
        <div className="w-[30vw] h-[100vh] flex flex-col items-start gap-y-[1.5rem] border-l-[1px] border-gray-700">
            <div className="h-[8vh] w-[60%] flex justify-end items-center">
                <FaXTwitter className="text-white text-[30px]"></FaXTwitter>
            </div>
            <ul className="w-[60%] flex flex-col items-end gap-y-[1.5rem] border-[1px] border-black">
                <li>
                    <Link to='/'>
                        <div className="flex items-center gap-x-[1rem]">
                            <p className="text-[20px]">الرئيسية</p>
                            <GoHome className="text-[28px] text-white"></GoHome>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link to='/'>
                        <div className="flex items-center gap-x-[1rem]">
                            <p className="text-[20px]">استكشف</p>
                            <CiSearch className="text-[28px] text-white"></CiSearch>
                        </div>

                    </Link>
                </li>
                <li>
                    <Link to='/'>
                        <div className="flex items-center gap-x-[1rem]">
                            <p className="text-[20px]">التنبيهات</p>
                            <IoNotificationsOutline className="text-[28px] text-white"></IoNotificationsOutline>
                        </div>

                    </Link>
                </li>
                <li>
                    <Link to='/'>
                        <div className="flex items-center gap-x-[1rem]">
                            <p className="text-[20px]">الرسائل</p>
                            <MdOutlineEmail className="text-[28px] text-white"></MdOutlineEmail>
                        </div>

                    </Link>
                </li>
                <li>
                    <Link to='/'>
                        <div className="flex items-center gap-x-[1rem]">
                            <p className="text-[20px]">Grok</p>
                            <MdCheckBoxOutlineBlank className="text-[28px] text-white"></MdCheckBoxOutlineBlank>
                        </div>

                    </Link>
                </li>
                <li>
                    <Link to='/'>
                        <div className="flex items-center gap-x-[1rem]">
                            <p className="text-[20px]">المجتمعات</p>
                            <GoPeople className="text-[28px] text-white"></GoPeople>
                        </div>

                    </Link>
                </li>
                <li>
                    <Link to='/'>
                        <div className="flex items-center gap-x-[1rem]">
                            <p className="text-[20px]">Premium</p>
                            <FaXTwitter className="text-[28px] text-white"></FaXTwitter>
                        </div>

                    </Link>
                </li>
                <li>
                    <Link to='/profile'>
                        <div className="flex items-center gap-x-[1rem]">
                            <p className="text-[20px]">الملف الشخصي</p>
                            <IoPersonOutline className="text-[28px] text-white"></IoPersonOutline>
                        </div>

                    </Link>
                </li>
                <li>
                    <Link to='/'>
                        <div className="flex items-center gap-x-[1rem]">
                            <p className="text-[20px]">المزيد</p>
                            <CiCircleMore className="text-[28px] text-white"></CiCircleMore>
                        </div>

                    </Link>
                </li>
                {userName?<li className="w-[90%]">
                    <button className="w-[100%] h-[55px] bg-[#1d9bf0] rounded-[50px] text-white font-bold">نشر</button>
                </li>:<p></p>}

            </ul>
            
                {userName? <div className="flex items-center justify-end gap-x-[1rem] w-[60%]">
                    <MdOutlineMoreHoriz></MdOutlineMoreHoriz>
                <div className="flex items-center justify-end gap-x-[5px]">
                    <p className="text-[16px] text-gray-500">{userName}</p>
                    <p className="text-[20px]">{Fname}</p>
                </div>
                <img className="h-[40px] w-[40px] rounded-[50%] bg-gray-700"></img>
                </div>:
                <div className="flex flex-col items-end  gap-y-[1rem] w-[60%]">
                    <Link className="w-[90%]" to="/login"><button className="w-[100%] h-[40px] text-[#1d9bf0] border-[2px] rounded-[50px] border-[#1d9bf0]">Sign in</button></Link>
                    <Link className="w-[90%]" to="/signup"><button className="w-[100%] h-[40px] bg-[#1d9bf0] border-[2px] rounded-[50px] border-[#1d9bf0]">Sign up</button></Link>

                </div>
                }
        </div>
    )
}

export default Rightside
