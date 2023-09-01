import Heading from "../utility/Heading";

const SpecialPerformance = (props) => {
  return (
    <div className="h-fit w-full ">
      <Heading>Special Performance #{props.id}</Heading>
      <div className="space-y-4 px-6 md:px-0">
        <article className="leading-tight md:w-[90%]">{props.children}</article>
      </div>
    </div>
  );
};

export default SpecialPerformance;
