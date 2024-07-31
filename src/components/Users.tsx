import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
  fetchAllUsers,
  selectAllUsers,
} from "../redux/features/users/usersSlice.ts";
import { useAppDispatch, useAppSelector } from "../redux/hooks.ts";
import { Anchor, List, ListItem, NotFoundPage } from "./index.ts";

const Users = () => {
  const dispatch = useAppDispatch();
  const users = useAppSelector(selectAllUsers);

  useEffect(() => {
    dispatch(fetchAllUsers());
  }, [dispatch]);

  if (users.length === 0) return <NotFoundPage title="Users" />;

  return (
    <List>
      {users.map((user: UserType) => {
        const { id, name } = user;
        return (
          <ListItem key={id}>
            <Anchor name={name} path={`/users/${id}`} />
          </ListItem>
        );
      })}
      <li>
        <NavLink
          className="block px-2 text-justify text-xl font-semibold text-slate-200 transition hover:text-yellow-400 max-lg:text-xl max-sm:text-base"
          to={`/`}
        >
          Back &lt;--
        </NavLink>
      </li>
    </List>
  );
};

export default Users;
