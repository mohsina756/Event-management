import { NavLink } from "react-router-dom";


const CustomLink = ({to, children}) => {
    return (
        <NavLink
        to={to}
        className={({ isActive, isPending }) =>
          isActive ? "active border-b-4 border-red-500 " : isPending ? "pending" : "p-4"
        }
      >
        {children}
      </NavLink>
    );
};

export default CustomLink;