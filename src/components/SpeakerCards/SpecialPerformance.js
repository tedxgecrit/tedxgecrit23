import Heading from "../utility/Heading";

const SpecialPerformance = (props) => {
  return (
    <div className="h-fit w-full ">
      <Heading>Special Performance #{props.id}</Heading>
      <div className="space-y-4 px-6 md:px-0">
        <p className="leading-tight md:w-[90%]">{props.children}</p>
      </div>
    </div>
  );
};

export default SpecialPerformance;
