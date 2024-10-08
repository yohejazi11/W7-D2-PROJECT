import axios from "axios";
import { useState } from "react";
import { FaXTwitter } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

function Signup() {
    const [userName,setUserName]=useState("")
    const [name,setName]=useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();

    function SignUpFn(){
        if(userName && name && email && password){
            axios
            .post('https://66f0eef8f2a8bce81be7056d.mockapi.io/user',{
                username:userName,
                fname:name,
                email,
                password,
            })
            .then(function(){
                navigate('/login')
            })
        }
        else{
            window.alert("Enter all info")
        }

    }
  return (
    <div className="flex">
    <div className="flex flex-col justify-center items-center w-[50vw] h-[100vh]">
        <FaXTwitter className="w-[50vw] h-[60vh]"></FaXTwitter>
        <div className="">
            <h1>Welcome to x.com!</h1>
            <p>We are letting you know that we are changing our URL, but your privacy and data protection settings remain the same.
                For more details, see our Privacy Policy: https://x.com/en/privacy</p>
        </div>
    </div>
    <div className="flex flex-col gap-y-[2rem] h-[100vh] w-[50vw] items-start px-[5rem] justify-center">
        <h1 className="text-[64px] font-bold">Happening now</h1>
        <p className="text-[2rem] font-bold">Join today.</p>
        <div className="flex flex-col gap-y-[2rem]">
        <input type="email" value={userName} onChange={(e) => { setUserName(e.target.value) }} className="h-[40px] w-[25vw] text-black rounded-[5px] bg-slate-200 text-right px-[20px]" placeholder="User Name"></input>
        <input type="email" value={name} onChange={(e) => { setName(e.target.value) }} className="h-[40px] w-[25vw] text-black rounded-[5px] bg-slate-200 text-right px-[20px]" placeholder="First Name"></input>
            <input type="email" value={email} onChange={(e) => { setEmail(e.target.value) }} className="h-[40px] w-[25vw] text-black rounded-[5px] bg-slate-200 text-right px-[20px]" placeholder="Email"></input>
            <input type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} className="h-[40px] w-[25vw] text-black rounded-[5px] bg-slate-200 text-right px-[20px]" placeholder="Password"></input>
            <button onClick={SignUpFn} className="w-[100%] h-[40px] text-[#1d9bf0] border-[2px] rounded-[50px] border-[#1d9bf0]">Create account</button>
            <button onClick={()=>{navigate("/login")}} className="w-[100%] h-[40px] bg-[#1d9bf0] border-[2px] rounded-[50px] border-[#1d9bf0]">Sign in</button>

        </div>
    </div>
</div>
  )
}

export default Signup
