import { MouseEvent, useEffect, useRef } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { Button, Comments, Dialog, Heading, NotFoundPage, Post } from "..";
import {
  deletePostById,
  fetchAllPosts,
  selectAllPosts,
} from "../../redux/features/posts/postsSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

enum Commands {
  UPDATE = "update",
  DELETE = "delete",
}

const PostPage = () => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const posts = useAppSelector(selectAllPosts);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    dispatch(fetchAllPosts());
  }, [dispatch]);

  const post = posts.find((post) => post.id === Number(id));

  function handleClick(e: MouseEvent<HTMLButtonElement>) {
    const target = e.target as HTMLButtonElement;

    switch (target.name) {
      case Commands.UPDATE:
        dialogRef.current?.showModal();
        break;
      case Commands.DELETE:
        dispatch(deletePostById(id as string));
        navigate("/");
        break;
      default:
        break;
    }
  }

  if (!post) return <NotFoundPage title={`Post ${id}`} />;

  return (
    <div className="relative">
      <Dialog ref={dialogRef} action={"update"} post={post} />

      <header>
        <Heading title={post.title} />

        <menu
          className="mt-4 flex items-center justify-center gap-4"
          onClick={handleClick}
        >
          <li>
            <Button name={Commands.UPDATE} />
          </li>
          <li>
            <Button name={Commands.DELETE} />
          </li>
        </menu>
      </header>

      <div>
        <Post text={post.body} />
        <Comments id={id as string} />

        <NavLink
          className="m-auto block w-fit px-2 text-justify text-xl font-semibold text-slate-300 transition hover:text-yellow-400 max-lg:text-xl max-sm:text-base"
          to={`/`}
        >
          Back &lt;--
        </NavLink>
      </div>
    </div>
  );
};

export default PostPage;
