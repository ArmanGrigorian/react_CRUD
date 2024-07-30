import { FormEvent, forwardRef, RefObject } from "react";
import { useNavigate } from "react-router-dom";
import {
  createPost,
  selectAllPosts,
  updatePostById,
} from "../redux/features/posts/postsSlice.ts";
import { useAppDispatch, useAppSelector } from "../redux/hooks.ts";
import { getNewPostId } from "../utils/getNewId.ts";
import Fieldset from "./Fieldset";
import { Input, Legend } from "./index.ts";

const Dialog = forwardRef<HTMLDialogElement, DialogProps>(
  function Dialog(props, ref) {
    const { action, post } = props;
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const posts = useAppSelector(selectAllPosts);

    function handleClick() {
      (ref as RefObject<HTMLDialogElement>)?.current?.close();
    }

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
      e.preventDefault();

      const formData = new FormData(e.target as HTMLFormElement);
      const data = Object.fromEntries(formData);

      if (action === "create") {
        const userId = Number(data.userId);
        const newPost = {
          id: getNewPostId(posts, userId),
          ...data,
        };

        dispatch(createPost(newPost as PostType));
        navigate("/");
      } else if (action === "update" && post) {
        const updatedPost = { id: post.id, ...data };

        dispatch(
          updatePostById(
            updatedPost as { id: number; title: string; body: string },
          ),
        );
        navigate("/");
      }

      (ref as RefObject<HTMLDialogElement>)?.current?.close();
    }

    return (
      <dialog ref={ref} className="backdrop:bg-yellow-400 backdrop:opacity-30">
        <form
          className="fixed inset-0 m-auto h-fit w-[min(96%,400px)] rounded-xl bg-slate-900 p-5 pt-2 shadow-xl"
          onSubmit={handleSubmit}
        >
          <button
            onClick={handleClick}
            className="absolute right-2 top-2 aspect-square w-8 animate-pulse rounded-full bg-yellow-400 text-xl font-black text-slate-800 transition hover:animate-none hover:bg-slate-700 hover:text-yellow-400 active:scale-95"
            type="button"
          >
            X
          </button>
          {action === "create" ? (
            <Fieldset>
              <Legend title="Create" />
              <Input type="userId" defaultValue={post?.userId} />
              <Input type="title" defaultValue={post?.title} />
              <Input type="body" defaultValue={post?.body} />
              <Input type="reset" />
              <Input type="submitCreate" />
            </Fieldset>
          ) : (
            <Fieldset>
              <Legend title="Update" />
              <Input type="title" defaultValue={post?.title} />
              <Input type="body" defaultValue={post?.body} />
              <Input type="reset" />
              <Input type="submitUpdate" />
            </Fieldset>
          )}
        </form>
      </dialog>
    );
  },
);

export default Dialog;
