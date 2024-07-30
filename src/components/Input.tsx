
const Input = ({ type, defaultValue }: InputProps) => {
  switch (type) {
    case "submitUpdate":
      return (
        <input
          className="rounded border border-slate-900 bg-slate-100 py-0.5 font-medium text-slate-900 shadow transition hover:bg-slate-800 hover:text-yellow-400 active:scale-95"
          type="submit"
          value="Update Post"
        />
      );
    case "submitCreate":
      return (
        <input
          className="rounded border border-slate-900 bg-slate-100 py-0.5 font-medium text-slate-900 shadow transition hover:bg-slate-800 hover:text-yellow-400 active:scale-95"
          type="submit"
          value="Create Post"
        />
      );
    case "reset":
      return (
        <input
          className="rounded border border-slate-900 bg-slate-100 py-0.5 font-medium text-slate-900 shadow transition hover:bg-slate-800 hover:text-yellow-400 active:scale-95"
          type="reset"
          value="Reset"
        />
      );

    case "userId":
      return (
        <input
          type="number"
          name="userId"
          id="userId"
          defaultValue={defaultValue}
          placeholder="User ID"
          min={1}
          required
        />
      );
    case "title":
      return (
        <input
          type="text"
          name="title"
          id="title"
          defaultValue={defaultValue}
          placeholder="Title"
          minLength={1}
          maxLength={16}
          required
        />
      );
    case "body":
      return (
        <textarea
          className="h-40 resize-none overflow-y-auto px-2 py-1 placeholder:italic"
          name="body"
          id="body"
          minLength={1}
          defaultValue={defaultValue}
          placeholder="Body..."
          maxLength={240}
          required
        ></textarea>
      );
    default:
      break;
  }
};

export default Input;
