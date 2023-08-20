import { organizer } from "@/data/TeamData";
import Image from "next/image";
import Icon from "./Profile";

export default function Organizer() {
  const lead = organizer[0];
  return (
    <section className="mt-8 md:mt-16">
      <h2 className="select-none text-center text-2xl/[70%] font-light capitalize tracking-tighter opacity-50 md:text-start md:text-3xl/[70%]">
        our organizer
      </h2>
      <div className="mt-3 flex justify-center  border-t-2 border-white border-opacity-50  py-3 md:justify-start">
        <div className="group relative  aspect-square h-[180px]  overflow-hidden rounded-full">
          <Image
            src={lead.imageLink}
            alt={`${lead.name}'s image`}
            className="aspect-square w-full object-cover transition-all duration-300 group-hover:scale-110"
            width={200}
            height={200}
          />
          <Icon lead={lead} />
        </div>
      </div>
    </section>
  );
}
