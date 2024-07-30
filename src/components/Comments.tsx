import { useEffect } from "react";
import { List, ListItem, NotFoundPage } from "./index.ts";
import { useAppDispatch, useAppSelector } from "../redux/hooks.ts";
import { fetchCommentsByPostId, selectCertainComments} from "../redux/features/comments/commentsSlice.ts";

const Comments = ({ id }: { id: string }) => {
  const dispatch = useAppDispatch();
  const comments = useAppSelector(selectCertainComments)

  useEffect(() => {
    dispatch(fetchCommentsByPostId(id));
  }, [dispatch, id]);



  if(comments.length === 0) return <NotFoundPage title="Comments"/>

  return (
    <List>
      {
        comments.map((comment: CommentType) => {
          const { id, body, email } = comment;
          return (
            <ListItem key={id}>
              <blockquote className="text-slate-100">{body}</blockquote>
              <p className="text-end text-slate-100">{email}</p>
            </ListItem>
          );
        })
      }
      
    </List>
  );
};

export default Comments;

