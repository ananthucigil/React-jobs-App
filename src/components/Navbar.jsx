import react from "../assets/react.svg";
import {Link} from "react-router-dom";
import {NavLink} from "react-router-dom";
function Navbar(){
  const linkclassName = ({isActive})=>isActive?"text-white inline-block hover:bg-black px-4 py-2 rounded":"text-white inline-block hover:bg-gray-800 px-4 py-2 rounded" 
  return (
      
        <> 
        <nav className="bg-indigo-700 py-4 max-w-full">
          <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center mx-5">
            <img className="mr-2 h-8" src={react} />
            <span className="text-white text-lg font-semibold">React Jobs</span>
          </div>
          <div className="space-x-4">
            <NavLink className={linkclassName} to="/" >Home </NavLink>
            <NavLink className={linkclassName} to="/jobs" > Jobs</NavLink>
            <NavLink className={linkclassName} to="/add-job" > Add Job</NavLink>
          </div>
          </div>
          
        </nav>
        <hr className="border-indigo-500" />
        </>
    )
}
export default Navbar;