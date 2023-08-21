const Container = (props) => {
  return (
    <section className="pt-[75px] pb-[75px] h-fit w-full lg:px-[150px]" id={props?.section}>
      {props.children}
    </section>
  );
};

export default Container;
