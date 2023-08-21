const Container = (props) => {
  return (
    <section
      className="h-fit w-full pb-[75px] pt-[75px] lg:px-[150px]"
      id={props?.section}
    >
      {props.children}
    </section>
  );
};

export default Container;
