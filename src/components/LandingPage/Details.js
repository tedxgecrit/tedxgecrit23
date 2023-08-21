import Link from "next/link";
import RedText from "../utility/RedText";

export default function Details() {
  return (
    <article className="mb-24 flex w-full -translate-y-[50px] flex-col items-center justify-center gap-24 text-center md:translate-y-0 lg:mb-32 lg:mt-[75px] lg:flex-row lg:gap-0 ">
      <div className="flex-1 text-[60px] font-extralight leading-[90%] lg:text-left">
        <div>TEDx</div>
        <div>GECRIT</div>
      </div>
      <div className="text-shape flex-1 text-center font-extralight leading-none select-none">
        <div className="text-[80px]">09</div>
        <div className="text-[30px]">SEP '23</div>
      </div>
      <div className="flex-1 text-[30px] font-extralight leading-none lg:text-right">
        <div>Grab</div>
        <div>your</div>
        <div>tickets</div>
        <div>
          <RedText>
            <Link href="#tickets">NOW</Link>
          </RedText>
        </div>
      </div>
    </article>
  );
}
