import { Link, NavLink } from "react-router-dom";
import CustomLink from "./CustomLink";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
  const {handleLogout, user} = useContext(AuthContext)
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost normal-case text-md md:text-xl ">Elite Events</Link>
      </div>

      <NavLink
        to={`/`}
        className={({ isActive, isPending }) =>
          isActive ? "active border-b-4 border-red-500 " : isPending ? "pending" : "p-4"
        }
      >
        Home
      </NavLink>
      <NavLink
        to={`/about`}
        className={({ isActive, isPending }) =>
          isActive ? "active border-b-4 border-red-500 " : isPending ? "pending" : "p-4"
        }
      >
        About
      </NavLink>
      <NavLink
        to={`/event`}
        className={({ isActive, isPending }) =>
          isActive ? "active border-b-4 border-red-500 " : isPending ? "pending" : "p-4"
        }
      >
       Contact Us 
      </NavLink>
      <div className="flex-none">
        {
          user ? <>
          <button onClick={handleLogout}>LogOut</button>
          <img className="w-12 rounded-full mx-3" src={user.photoURL} alt="" />
          <p className="text-xs md:text-xl">{user?.displayName}</p>
          </>
          :<CustomLink to="login">Login</CustomLink>
        }
        
      
      
       
      </div>
    </div>
  );
};

export default Navbar;
