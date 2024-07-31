const ListItem = ({ children }: { children: React.ReactNode }) => {
  return (
    <li className="rounded-md bg-slate-900 p-4 text-slate-100 shadow-xl transition hover:-translate-y-0.5 hover:text-yellow-400">
      {children}
    </li>
  );
};

export default ListItem;
