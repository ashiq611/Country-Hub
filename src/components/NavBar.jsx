import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav className="bg-purple-800 p-4 text-yellow-50">
        <div className="logo container mx-auto flex justify-between items-center">
          <div>
            <h2>Logo</h2>
          </div>
          <div className="navItems flex gap-4">
            <NavLink to="./">Home</NavLink>
            <NavLink to="/countries">Country</NavLink>
            <NavLink to="about">About</NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
