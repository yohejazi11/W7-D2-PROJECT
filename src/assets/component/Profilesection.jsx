import { CiImageOn } from "react-icons/ci";
import { MdOutlineGifBox } from "react-icons/md";
import { RiListRadio } from "react-icons/ri";
import { BsEmojiSmile } from "react-icons/bs";
import { RiCalendarScheduleLine } from "react-icons/ri";
import { SlLocationPin } from "react-icons/sl";
import { FaRetweet } from "react-icons/fa6";
import { FaRegComment } from "react-icons/fa";
import { GrFavorite } from "react-icons/gr";
import { VscGraph } from "react-icons/vsc";
import { FaRegBookmark } from "react-icons/fa6";
import { FiUpload } from "react-icons/fi";


import axios from "axios";
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";

function Profilesection() {

    const userID = sessionStorage.getItem("userID");
    const userName = sessionStorage.getItem("userName")
    const [post, setPost] = useState("");
    const [allPosts, setAllPosts] = useState([])
    const [postImage, setPostImage] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        getPost()
    }, [])

    function getPost() {
        axios
            .get("https://66f0eef8f2a8bce81be7056d.mockapi.io/posts")
            .then(function (response) {
                setAllPosts(response.data)
            })
    }
    function addPost() {
        if (userID) {
            axios
                .post("https://66f0eef8f2a8bce81be7056d.mockapi.io/posts", {
                    userID,
                    userName,
                    post,
                })
                .then(function () {
                    setPost("")
                    getPost()
                })
        } else {
            navigate("/login")
        }
    }

    
    function deletePost(id){
        axios
        .delete(`https://66f0eef8f2a8bce81be7056d.mockapi.io/posts/${id}`)
        .then(function(response){
            console.log(response)
            getPost()
        })

    }
    return (
        <div className="w-[40vw] h-[100vh] flex flex-col items-center gap-y-[1.5rem] border-[1px] border-black">
            <ul className="w-[100%]">
                <li className="w-[100%] h-[8vh] flex border-b-[1px] border-gray-700">
                    <button className="flex-1">متابعون</button>
                    <button className="flex-1">لك</button>
                </li>
                <li className="w-[100%] h-[20vh] flex flex-col justify-evenly border-b-[1px] border-gray-700">
                    <div className="flex items-center gap-x-[1rem]">
                        <textarea className="w-[80%] h-[10vh] bg-transparent text-right p-[20px] focus:outline-none" placeholder="ماذا يحدث؟" value={post} onChange={(e) => { setPost(e.target.value) }}></textarea>
                        <img className="h-[40px] w-[40px] rounded-[50%] bg-gray-700" src={""}></img>
                    </div>
                    <div className="flex justify-between items-center px-[40px]">
                        <button className="w-[5vw] h-[35px] bg-[#1d9bf0] rounded-[50px] text-white font-bold" onClick={() => { addPost() }}>نشر</button>
                        <ul className="flex gap-x-[1rem]">
                            <li><SlLocationPin className="text-[#1d9bf0] text-[18px]"></SlLocationPin></li>
                            <li><RiCalendarScheduleLine className="text-[#1d9bf0] text-[18px]"></RiCalendarScheduleLine></li>
                            <li><BsEmojiSmile className="text-[#1d9bf0] text-[18px]"></BsEmojiSmile></li>
                            <li><RiListRadio className="text-[#1d9bf0] text-[18px]"></RiListRadio></li>
                            <li><MdOutlineGifBox className="text-[#1d9bf0] text-[18px]"></MdOutlineGifBox></li>
                            <li><CiImageOn className="text-[#1d9bf0] text-[18px]"></CiImageOn></li>
                        </ul>
                    </div>
                </li>
                <li className="h-[72vh] flex flex-col-reverse overflow-y-scroll overflow-x-hidden">
                    {allPosts.map(item => (
                        item.userID === userID ? (
                        <div key={item.id} className="border-b-[1px] border-gray-700 py-[0.5rem]">
                            <div className="flex h-[fit-content] w-[100%] justify-end gap-x-[0.5rem] items-center px-[10px]">
                            {userID == item.userID?<button className="text-red-700 border-red-700 border-[2px] px-[10px] rounded-[5px] justify-self-start self-start" onClick={()=>{deletePost(item.id)}}>delete</button>:null }
                                <p className="text-gray-500 text-[1rem] font-medium">{item.userName}</p>
                                <p className="text-[1.2rem] font-bold">{item.name}</p>
                                <img className="bg-slate-500 h-[40px] w-[40px] rounded-[50%]" src={item.avatarUser}></img>
                            </div>
                            <div>
                                {item.image ? (
                                    <div className="p-[10px] flex flex-col items-end w-[90%]">
                                        <p>{item.post}</p>
                                        <img className="w-[50%] rounded-[15px]" src={item.image} alt="post image" />
                                    </div>
                                ) : (
                                    <div className="p-[10px] flex justify-end w-[90%]">
                                        <p>{item.post}</p>
                                    </div>
                                )}
                            </div>

                            <div className="w-[100%] flex justify-between">
                                <ul className="flex w-[20%] justify-evenly">
                                    <li className="flex justify-center items-center rounded-[50%] h-[40px] w-[40px] hover:bg-[#1d9cf034]"><FaRegBookmark className="text-[1.2rem] text-gray-600 hover:text-[#1d9bf0]"></FaRegBookmark></li>
                                    <li className="flex justify-center items-center rounded-[50%] h-[40px] w-[40px] hover:bg-[#1d9cf034]"><FiUpload className="text-[1.2rem] text-gray-600 hover:text-[#1d9bf0]"></FiUpload></li>
                                </ul>
                                <ul className="flex w-[80%] justify-evenly">
                                    <li className="flex justify-center items-center rounded-[50%] h-[40px] w-[40px] hover:bg-[#1d9cf034]"><VscGraph className="text-[1.2rem]  text-gray-600 hover:text-[#1d9bf0]"></VscGraph></li>
                                    <li className="flex justify-center items-center rounded-[50%] h-[40px] w-[40px] hover:bg-[#1d9cf034]"><GrFavorite className="text-[1.2rem] text-gray-600 hover:text-[#1d9bf0]"></GrFavorite></li>
                                    <li className="flex justify-center items-center rounded-[50%] h-[40px] w-[40px] hover:bg-[#1d9cf034]"><FaRetweet className="text-[1.2rem] text-gray-600 hover:text-[#1d9bf0]"></FaRetweet></li>
                                    <li className="flex justify-center items-center rounded-[50%] h-[40px] w-[40px] hover:bg-[#1d9cf034]"><FaRegComment className="text-[1.2rem] text-gray-600 hover:text-[#1d9bf0]"></FaRegComment></li>
                                </ul>
                            </div>

                        </div>
                        ):null
                    ))}
                </li>
            </ul>
        </div>
    )
}

export default Profilesection
