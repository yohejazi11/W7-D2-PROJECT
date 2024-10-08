import Sugistion from "./Sugistion"
import Trend from "./Trend"
import { CiSearch } from "react-icons/ci";

function Leftside() {
    return (
        <div className="w-[30vw] h-[100vh] flex flex-col items-end gap-y-[1.5rem] border-r-[1px] border-gray-700 pr-[40px]">
            <ul className="w-[22vw] flex flex-col gap-y-[1.5rem]">
                <li className="flex h-[8vh] items-center">
                        <input className="w-[20vw] h-[7vh] bg-neutral-800 rounded-l-[50px] text-right focus:outline-none" placeholder="بحث" type="search"></input>
                        <button className=" flex justify-center items-center h-[7vh] w-[2vw] bg-neutral-800 rounded-r-[50px] "><CiSearch></CiSearch></button>
                </li>
                <li>
                    <Sugistion></Sugistion>
                </li>
                <li>
                    <Trend></Trend>
                </li>
            </ul>
        </div>
    )
}

export default Leftside
