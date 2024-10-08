import Rightside from './assets/component/Rightside'
import Leftside from './assets/component/Leftside'
import Profilesection from './assets/component/Profilesection'
function Profilepage() {

    return (
        <div className='flex w-[100vw]'>
            <Leftside></Leftside>
            <Profilesection></Profilesection>
            <Rightside></Rightside>
        </div>
    )
}

export default Profilepage
