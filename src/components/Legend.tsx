const Legend = ({ title }: LegendProps) => {
  return (
    <legend className="px-1 text-center text-lg font-semibold text-yellow-400">{`${title} Post`}</legend>
  );
};

export default Legend;
