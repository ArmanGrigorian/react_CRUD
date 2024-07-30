const Fieldset = ({ children }: { children: React.ReactNode }) => {
  return (
    <fieldset className="flex flex-col gap-4 rounded-lg border border-yellow-400 p-5 pt-3">
      {children}
    </fieldset>
  );
};

export default Fieldset;
