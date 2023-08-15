const Heading = (props) => {
  return (
    <h1 className="text-5xl font-[200] uppercase max-sm:p-5 md:pb-10 lg:pb-5 lg:text-[60px]">
      {props?.children}
    </h1>
  );
};

export default Heading;
