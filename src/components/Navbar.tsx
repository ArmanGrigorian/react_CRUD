import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul className="flex items-center justify-center gap-4 bg-slate-300 px-4 py-2">
        <li>
          <a
            className="block text-lg font-semibold text-slate-900 transition hover:text-yellow-400 hover:[text-shadow:_1px_1px_0px_rgb(0,0,0)] max-sm:text-base"
            href="https://jsonplaceholder.typicode.com/"
          >
            JSON Placeholder
          </a>
        </li>
        <li>
          <NavLink
            className="block text-lg font-semibold text-slate-900 transition hover:text-yellow-400 hover:[text-shadow:_1px_1px_0px_rgb(0,0,0)] max-sm:text-base"
            to="/"
          >
            Posts
          </NavLink>
        </li>
        <li>
          <NavLink
            className="block text-lg font-semibold text-slate-900 transition hover:text-yellow-400 hover:[text-shadow:_1px_1px_0px_rgb(0,0,0)] max-sm:text-base"
            to="/users"
          >
            Users
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
