const TitleHeader = ({ title}) => {
  return (
    <div className="flex flex-col gap-5">
      <div>
        <h1 className="text-left md:text-4xl text-2xl font-bold">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default TitleHeader;