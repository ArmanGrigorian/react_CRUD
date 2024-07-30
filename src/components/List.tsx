const List = ({ children }: { children: React.ReactNode }) => {
  return <ul className={`flex flex-col items-center gap-4 p-4`}>{children}</ul>;
};

export default List;
