
import NavBar from "./components/NavBar"
import "./index.css"
import MainContent from "./components/MainContent"
import Changable from "./components/Changable"

function App () {
  return (
    <div>
      <NavBar />
      <MainContent />
      <div className="compo-flow">
          <Changable />
          <Changable />
          <Changable />
          <Changable />
          <Changable />
          <Changable />
          <Changable />
      </div>
      
      
    </div>
  )
}

export default App
