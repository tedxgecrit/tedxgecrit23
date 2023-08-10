import RedText from "../utility/RedText";

export default function Details() {
  return (
    <article className="mb-24 mt-6 flex w-full flex-col items-center justify-center gap-24 text-center lg:my-32 lg:flex-row lg:gap-0 ">
      <div className="flex-1 text-[60px] font-extralight leading-[90%] lg:text-left">
        <div>TEDx</div>
        <div>GECRIT</div>
      </div>
      <div className="text-shape flex-1 text-center font-extralight leading-none">
        <div className="text-[80px]">09</div>
        <div className="text-[30px]">SEP '23</div>
      </div>
      <div className="flex-1 text-[30px] font-extralight leading-none lg:text-right">
        <div>Grab</div>
        <div>your</div>
        <div>tickets</div>
        <div>
          <RedText>NOW</RedText>
        </div>
      </div>
    </article>
  );
}
