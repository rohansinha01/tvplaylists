// import Player from "./components/Player"

import Display from "./components/Display"
import DisplayHome from "./components/DisplayHome"
import Sidebar from "./components/Sidebar"

const App = () => {
  return (
    <div className="h-screen bg-black">
      <div className="h-[90%] flex">
        <Sidebar />
        <Display />
        <DisplayHome />
      </div> 
      {/* <Player /> */}
      
    </div>
  )
}

export default App