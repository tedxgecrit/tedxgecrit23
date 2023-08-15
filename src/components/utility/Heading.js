const Heading = (props) => {
  return (
    <h1 className="text-5xl font-[200] uppercase max-sm:p-5 sm:ml-[25px] md:ml-[50px] md:pb-10 lg:ml-0 lg:pb-5 lg:text-[60px]">
      {props?.children}
    </h1>
  );
};

export default Heading;
