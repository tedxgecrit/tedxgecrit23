export default function Hamburger(props) {
  return (
    <div
      className="flex h-[30px] w-[30px] cursor-pointer flex-col justify-around"
    >
      <span
        className={
          "h-[0.25rem] w-[2rem] rounded-sm bg-white duration-200  ease-in-out" +
          (props?.close ? " close1" : " open")
        }
      ></span>
      {!props?.close && (
        <span className="h-[0.25rem] w-[2rem] rounded-sm bg-white"></span>
      )}
      <span
        className={
          "h-[0.25rem] w-[2rem] rounded-sm bg-white duration-200 ease-in-out" +
          (props?.close ? " close2" : " open")
        }
      ></span>
    </div>
  );
}
