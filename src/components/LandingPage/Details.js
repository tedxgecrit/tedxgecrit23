import Link from "next/link";
import RedText from "../utility/RedText";

export default function Details() {
  return (
    <article className="mb-24 flex w-full -translate-y-[50px] flex-col items-center justify-center gap-24 text-center md:translate-y-0 lg:mb-32 lg:mt-[75px] lg:flex-row lg:gap-0 ">
      <div className="flex-1 text-[60px] font-extralight leading-[90%] lg:text-left">
        <div>TEDx</div>
        <div>GECRIT</div>
      </div>
      <div className="text-shape flex-1 select-none text-center font-extralight leading-none">
        <div className="text-[80px]">09</div>
        <div className="text-[30px]">SEP '23</div>
      </div>
      <div className="flex-1 text-[30px] font-extralight leading-none lg:text-right">
        <div>See</div>
        <div>the</div>
        <div>talks</div>
        <div>
          <RedText>
            <Link href="/talks" className="underline">
              HERE
            </Link>
          </RedText>
        </div>
      </div>
    </article>
  );
}
