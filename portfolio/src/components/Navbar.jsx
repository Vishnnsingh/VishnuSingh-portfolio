import { NavLink } from "react-router-dom"
const Navbar = () => {
  return (
    <header className="header  ">
     <NavLink to="/" className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md ">
       <p className="blue-gradient_text">VS</p>
     </NavLink>

     <nav className="flex text-lg gap-7 font-medium">

     {/* <NavLink to="/cv" className={({ isActive }) => isActive ? 'bg-blue-600 text-white w-36 h-10 rounded-lg items-center justify-center flex font-bold shadow-md' : 'text-blue-600 bg-white w-36 h-10 rounded-lg items-center justify-center flex font-bold shadow-md'}>
      Download CV
      </NavLink> */}

      <NavLink to="/about" className={({ isActive }) => isActive ? 'bg-blue-600  text-white w-20 h-10 rounded-lg items-center justify-center flex font-bold shadow-md' : 'text-blue-600 bg-white   w-20 h-10 rounded-lg items-center justify-center flex font-bold shadow-md'}>
      About
      </NavLink>

      <NavLink to="/projects" className={({ isActive }) => isActive ? 'bg-blue-600 text-white w-24 h-10 rounded-lg items-center justify-center flex font-bold shadow-md' : 'text-blue-600 bg-white w-24 h-10 rounded-lg items-center justify-center flex font-bold shadow-md'}>
      Projects
      </NavLink>

      {/* <NavLink to="/certificate" className={({ isActive }) => isActive ? 'bg-blue-600 text-white w-28 h-10 rounded-lg items-center justify-center flex font-bold shadow-md' : 'text-blue-600 bg-white w-28 h-10 rounded-lg items-center justify-center flex font-bold shadow-md'}>
      Certificate
      </NavLink> */}

      {/* <NavLink to="/games" className={({ isActive }) => isActive ? 'bg-blue-600 text-white w-20 h-10 rounded-lg items-center justify-center flex font-bold shadow-md' : 'text-blue-600 bg-white w-20 h-10 rounded-lg items-center justify-center flex font-bold shadow-md'}>
      Games
      </NavLink> */}

      

     </nav>

     {/* <NavLink to="/contact" className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black'}>
      Projects
      </NavLink> */}

    </header>
  )
}

export default Navbar
