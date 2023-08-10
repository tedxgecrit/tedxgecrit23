const Container = (props) => {
  return (
    <section className="my-8 h-fit w-screen lg:px-[100px]">
      {props.children}
    </section>
  );
};

export default Container;
