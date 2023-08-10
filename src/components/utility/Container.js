const Container = (props) => {
  return (
    <section className="my-8 h-fit w-full lg:px-[150px]">
      {props.children}
    </section>
  );
};

export default Container;
