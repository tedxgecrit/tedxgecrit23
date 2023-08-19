import SmallHeading from "./SmallHeading";

const Address = () => {
  return (
    <div className="flex flex-col gap-4 text-center md:flex-1 md:gap-6">
      <div>
        <SmallHeading>FIND US</SmallHeading>
        <p className="footer_text">
          Rajiv Gandhi Institute of Technology,
          <br />
          Nedumkuzhi, Pampady, Kottayam,
          <br />
          Kerala, India - 686501
        </p>
      </div>
      <div>
        <SmallHeading>GET IN TOUCH</SmallHeading>
        <div className="footer_text">+91 80751 91836</div>
        <div className="footer_text">tedxrit23@gmail.com</div>
      </div>
    </div>
  );
};

export default Address;
