import { MouseEvent, useRef } from "react";
import { Dialog, Heading, Posts } from "..";
import { deleteAllPosts } from "../../redux/features/posts/postsSlice";
import { useAppDispatch } from "../../redux/hooks";

const PostsPage = () => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const dispatch = useAppDispatch();

  function handleClick(e: MouseEvent<HTMLButtonElement>) {
    const target = e.target as HTMLButtonElement;

    switch (target.name) {
      case "createNew":
        dialogRef.current?.showModal();
        break;
      case "clearAll":
        dispatch(deleteAllPosts());
        break;
      default:
        break;
    }
  }

  return (
    <div>
      <header>
        <Heading title="Posts" />
      </header>

      <menu
        onClick={handleClick}
        className="mt-4 flex items-center justify-center gap-4"
      >
        <li>
          <button
            type="button"
            className="rounded border bg-slate-300 px-3 py-2 font-medium text-slate-900 shadow transition hover:bg-slate-900 hover:text-yellow-400 active:scale-95"
            name="createNew"
          >
            Create New Post
          </button>
        </li>
        <li>
          <button
            type="button"
            className="rounded border bg-slate-300 px-3 py-2 font-medium text-slate-900 shadow transition hover:bg-slate-900 hover:text-yellow-400 active:scale-95"
            name="clearAll"
          >
            Clear All
          </button>
        </li>
      </menu>
      <Dialog action={"create"} ref={dialogRef} />
      <Posts />
    </div>
  );
};

export default PostsPage;
