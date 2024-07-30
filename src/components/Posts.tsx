import { useEffect } from "react";
import {
  fetchAllPosts,
  selectAllPosts,
} from "../redux/features/posts/postsSlice.ts";
import { useAppDispatch, useAppSelector } from "../redux/hooks.ts";
import { Anchor, List, ListItem, NotFoundPage } from "./index.ts";

const Posts = () => {
  const dispatch = useAppDispatch();
  const posts = useAppSelector(selectAllPosts);

  useEffect(() => {
    dispatch(fetchAllPosts());
  }, [dispatch]);

  if (posts.length === 0) return <NotFoundPage title="Posts" />;

  return (
    <List>
      {posts.map((post: PostType) => (
        <ListItem key={post.id}>
          <Anchor name={post.title} path={`/${post.id}`} />
        </ListItem>
      ))}
    </List>
  );
};

export default Posts;
