type UserType = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

type UsersType = UserType[];

type PostType = {
  id: number;
  title: string;
  body: string;
  userId: number;
};

type PostsType = PostType[];

type CommentType = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};

type CommentsType = CommentType[];

interface MainState {
  users: UsersType;
  posts: PostsType;
  post: PostType;
  comments: CommentsType;
}

interface CommentProps {
  body: string;
  email: string;
}

interface ButtonProps {
  name: string;
}

interface PostProps {
  text: string;
}

interface LegendProps {
  title: string;
}

interface DialogProps {
  action: "create" | "update";
  post?: PostType;
}

interface InputProps {
  type:
    | "submitUpdate"
    | "submitCreate"
    | "reset"
    | "userId"
    | "postId"
    | "title"
    | "body";
  defaultValue?: string | number;
}

interface AnchorProps {
  name: string;
  path: string;
}
