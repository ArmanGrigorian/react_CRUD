import { useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { Heading, List, NotFoundPage } from "..";
import {
  fetchAllUsers,
  selectAllUsers,
} from "../../redux/features/users/usersSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

const UserPages = () => {
  const dispatch = useAppDispatch();
  const users = useAppSelector(selectAllUsers);
  const { id } = useParams<string>();

  useEffect(() => {
    dispatch(fetchAllUsers());
  }, [dispatch]);

  const user = users.find((user) => user.id === Number(id));

  if (!user) return <NotFoundPage title={`User ${id}`} />;

  return (
    <article>
      <Heading title={user.name} />

      <List>
        <li className="text-slate-900 dark:text-slate-100">
          Email: {user.email}
        </li>
        <li className="text-slate-900 dark:text-slate-100">
          Phone: {user.phone}
        </li>
        <li className="text-slate-900 dark:text-slate-100">
          Website: {user.website}
        </li>
        <li className="text-slate-900 dark:text-slate-100">
          Address: {user.address.city}
        </li>
        <li className="text-slate-900 dark:text-slate-100">
          Company: {user.company.name}
        </li>
        <li>
          <NavLink
            className="block px-2 text-justify text-xl font-semibold text-slate-200 transition hover:text-yellow-400 max-lg:text-xl max-sm:text-base"
            to={`/`}
          >
            Back &lt;--
          </NavLink>
        </li>
      </List>
    </article>
  );
};

export default UserPages;
