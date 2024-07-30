const Post = ({ text }: PostProps) => {
  return (
    <p className="p-4 text-justify text-2xl font-semibold italic max-lg:text-xl max-sm:text-base dark:text-slate-100">
      <q>{text}</q>
    </p>
  );
};

export default Post;
