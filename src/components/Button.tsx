const Button = ({ name }: ButtonProps) => {
  return (
    <button
      className="rounded border capitalize border-slate-900 px-3 py-1 font-medium text-slate-900 transition hover:bg-slate-900 dark:text-slate-100 dark:border-slate-100 hover:text-slate-100 active:scale-95"
      name={name}
    >
      {name}
    </button>
  );
};

export default Button;
