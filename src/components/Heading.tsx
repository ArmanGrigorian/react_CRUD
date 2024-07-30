const Heading = ({ title }: { title: string }) => {
  return (
    <h1 className="flex items-center justify-evenly gap-2 bg-slate-900 p-4 text-center text-5xl font-bold text-yellow-400 max-xl:text-4xl max-sm:text-2xl">
      {title}
    </h1>
  );
};

export default Heading;
