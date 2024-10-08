import Rightside from './assets/component/Rightside'
import Leftside from './assets/component/Leftside'
import Profilesection from './assets/component/Profilesection'
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';

function Profilepage() {
    const navigate = useNavigate();

    const userID = sessionStorage.getItem("userID");
    const userName = sessionStorage.getItem("userName")

    useEffect(() => {
        if (!userID) {
            navigate('/login');
        }
    }, [userID, navigate]);
    return (


        <div className='flex w-[100vw]'>

            <Leftside></Leftside>
            <Profilesection></Profilesection>
            <Rightside></Rightside>
        </div>
    )
}

export default Profilepage
