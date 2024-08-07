
import {FaUserCircle } from 'react-icons/fa';
import logo0 from "../assets/logo0.svg"

function Navbars() {
  return (
    <nav className="bg-primary text-primary-foreground flex items-center justify-between p-4 shadow bg-purple-800">
      <div className="flex items-center">
        <img alt="TableSprint logo" src={logo0} className="mr-2" />
        <span className="text-lg font-semibold text-white">TableSprint</span>
      </div>
      <div className="flex items-center">
        <button className="bg-secondary text-secondary-foreground hover:bg-secondary/80 p-2 rounded-full">
        <a href=""><FaUserCircle color="white" size="2em" /></a>
        </button>
      </div>
    </nav>
  )
}

export default Navbars