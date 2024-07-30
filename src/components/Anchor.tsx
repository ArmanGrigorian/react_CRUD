import { NavLink } from "react-router-dom";



const Anchor = ({ name, path }: AnchorProps) => {
  return (
    <NavLink
      className="block px-2 text-justify text-xl font-semibold text-inherit max-lg:text-xl max-sm:text-base"
      to={path}
    >
      {name}
    </NavLink>
  );
};

export default Anchor;
