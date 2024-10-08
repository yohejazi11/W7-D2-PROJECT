import Rightside from './assets/component/Rightside'
import Leftside from './assets/component/Leftside'
import Mainsection from './assets/component/Mainsection'

import './App.css'

function App() {

  return (

    <div className='flex w-[100vw]'>
      <Leftside></Leftside>
      <Mainsection></Mainsection>
      <Rightside></Rightside>
    </div>
  )
}

export default App
