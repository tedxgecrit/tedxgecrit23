const AboutHeading = (props) => {
  let width = 60;
  if (props?.id === "1") width += 10;
  if (props?.id === "2") width += 20;
  if (props?.id === "3") width += 130;
  return (
    <h1
      className="highlight relative text-[28px] font-medium"
      style={{ width: `${width}px` }}
    >
      {props.children}
    </h1>
  );
};

export default AboutHeading;
