import Heading from "../Heading";

const NotFoundPage = ({ title }: { title: string }) => {
  return (
    <div>
      <Heading title={`${title} Not Found`} />
    </div>
  );
};

export default NotFoundPage;
