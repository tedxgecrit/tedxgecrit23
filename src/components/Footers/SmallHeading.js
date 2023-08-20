const SmallHeading = (props) => {
  return (
    <h2 className="select-none text-[20px] uppercase opacity-[0.6]">
      {props.children}
    </h2>
  );
};

export default SmallHeading;
