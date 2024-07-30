import axios from "axios";

const instance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export const mainAPI = {
  getAllUsers: () => {
    return instance.get("/users");
  },

  getUserById: (id: string) => {
    return instance.get(`/users/${id}`);
  },

  getAllPosts: () => {
    return instance.get("/posts");
  },

  getPostByUserId: (id: string) => {
    return instance.get(`/posts/${id}`);
  },

  createPost: (newPost: PostType) => {
    return instance.post("/posts", newPost);
  },

  // partially update post
  updatePostById: (updatedPost: {
    id: number;
    title: string;
    body: string;
  }) => {
    return instance.patch(`/posts/${updatedPost.id}`, updatedPost);
  },

  // full update post
  // updatePostById: (id: string, updatedPost: PostType) => {
  //   return instance.put(`/posts/${id}`, updatedPost);
  // },

  deletePostById: (id: string) => {
    return instance.delete(`/posts/${id}`);
  },

  // JSONPlaceholder doesn't support this yet
  deleteAllPosts: () => {
    return instance.put("/posts", []);
  },

  getAllComments: () => {
    return instance.get("/comments");
  },

  getCommentsByPostId: (id: string) => {
    return instance.get(`/comments?postId=${id}`);
  },
};
