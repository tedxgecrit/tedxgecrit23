const Heading = (props) => {
  return (
    <h1 className="select-none text-5xl font-[200] uppercase max-sm:py-5 ml-[25px] md:ml-[50px] md:pb-10 lg:ml-0 lg:pb-10 lg:text-[60px]">
      {props?.children}
    </h1>
  );
};

export default Heading;
