import Link from "next/link";

const ReadMore = (props) => {
  return (
    <div className="flex cursor-pointer text-redText">
      <Link href={props?.link} target="_blank">
        Read More{">"}
      </Link>
    </div>
  );
};

export default ReadMore;
